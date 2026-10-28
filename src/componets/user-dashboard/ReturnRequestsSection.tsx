import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
} from 'react';
import axios from 'axios';
import {
  CalendarDays,
  CheckCircle,
  ClipboardList,
  Clock,
  Loader,
  Plus,
  Printer,
  RefreshCw,
  RotateCcw,
  Send,
  Trash2,
  XCircle,
} from 'lucide-react';
import type {
  ReturnRequest as DashboardReturnRequest,
} from '../../types';
import ReturnRequestPrint from './ReturnRequestPrint';


const API_URL =
  import.meta.env.VITE_API_URL ||
  'http://localhost:5000/api';


type ReturnRequestStatus =
  | 'registered'
  | 'reviewing'
  | 'approved'
  | 'rejected'
  | 'received'
  | 'pending';


type ReturnRequest = DashboardReturnRequest & {
  id: string;
  representativeName?: string;
  representativeCity?: string;
  representativePhone?: string;
  items?: Array<{
    productId?: string;
    productName?: string;
    title?: string;
    brand?: string;
    category?: string;
    unitPrice?: number | string;
    price?: number | string;
    quantity?: number | string;
    totalPrice?: number | string;
  }>;
  returnDate?: string;
  status: ReturnRequestStatus;
  adminNote?: string;
  createdAt?: string;
  totalQuantity?: number | string;
  totalPrice?: number | string;
};


type ReturnRequestsSectionProps = {
  requests: DashboardReturnRequest[];
  loading: boolean;
  errorMessage: string;
  onRefresh: () => void;
  onRequestCreated: (
    newRequest: DashboardReturnRequest,
  ) => void;
};


type WarehouseItem = {
  id?: string;
  productId?: string;
  productName?: string;
  name?: string;
  title?: string;
  brand?: string;
  category?: string;
  unitPrice?: number | string;
  price?: number | string;
  quantity?: number | string;
};


type AdminProduct = {
  id: string | number;
  name?: string;
  title?: string;
  price?: number | string;
  category?: string;
};


type ReturnForm = {
  productId: string;
  title: string;
  brand: string;
  category: string;
  price: string;
  quantity: string;
  confirmedReturn: boolean;
};


type ReturnItem = {
  id: string;
  productId: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  quantity: string;
  maxQuantity: number;
};


const initialForm: ReturnForm = {
  productId: '',
  title: '',
  brand: '',
  category: '',
  price: '',
  quantity: '1',
  confirmedReturn: false,
};


const toEnglishDigits = (value: unknown): string => {
  return String(value ?? '')
    .replace(/[۰-۹]/g, (digit) =>
      String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)),
    )
    .replace(/[٠-٩]/g, (digit) =>
      String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)),
    );
};


const toNumber = (value: unknown): number => {
  const number = Number(
    toEnglishDigits(value).replace(/[^\d.-]/g, ''),
  );


  return Number.isFinite(number) ? number : 0;
};


const toPersianNumber = (value: unknown): string => {
  return new Intl.NumberFormat('fa-IR').format(
    toNumber(value),
  );
};


const cleanText = (value: unknown): string => {
  return String(value ?? '').trim();
};


const normalizeValue = (value: unknown): string => {
  return toEnglishDigits(value)
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
};


const sameValue = (
  firstValue: unknown,
  secondValue: unknown,
): boolean => {
  const first = normalizeValue(firstValue);
  const second = normalizeValue(secondValue);


  return Boolean(
    first && second && first === second,
  );
};


const getTodayJalaliDate = (): string => {
  return new Intl.DateTimeFormat(
    'fa-IR-u-ca-persian',
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
  )
    .format(new Date())
    .replace(/[\u200e\u200f]/g, '')
    .replace(/-/g, '/');
};


const formatDateTime = (value?: string): string => {
  if (!value) {
    return '—';
  }


  const date = new Date(value);


  if (Number.isNaN(date.getTime())) {
    return value;
  }


  return new Intl.DateTimeFormat(
    'fa-IR-u-ca-persian',
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    },
  ).format(date);
};


const getReturnTitle = (
  request: ReturnRequest,
): string => {
  return (
    cleanText(request.items?.[0]?.productName) ||
    cleanText(request.items?.[0]?.title) ||
    cleanText(request.representativeName) ||
    'کالای بدون نام'
  );
};


const getReturnQuantity = (
  request: ReturnRequest,
): number => {
  const storedQuantity = toNumber(
    request.totalQuantity,
  );


  if (storedQuantity > 0) {
    return storedQuantity;
  }


  return (request.items || []).reduce(
    (sum, item) => {
      return sum + toNumber(item.quantity);
    },
    0,
  );
};


const getReturnTotalPrice = (
  request: ReturnRequest,
): number => {
  const storedPrice = toNumber(
    request.totalPrice,
  );


  if (storedPrice > 0) {
    return storedPrice;
  }


  return (request.items || []).reduce(
    (sum, item) => {
      const totalPrice = toNumber(
        item.totalPrice,
      );


      if (totalPrice > 0) {
        return sum + totalPrice;
      }


      return (
        sum +
        toNumber(item.quantity) *
          toNumber(
            item.unitPrice ?? item.price,
          )
      );
    },
    0,
  );
};


const getReturnStatusInfo = (
  status: ReturnRequestStatus,
) => {
  if (
    status === 'approved' ||
    status === 'received'
  ) {
    return {
      label:
        status === 'received'
          ? 'دریافت شده'
          : 'تأیید شده',
      type: 'approved',
    };
  }


  if (status === 'rejected') {
    return {
      label: 'رد شده',
      type: 'rejected',
    };
  }


  if (status === 'reviewing') {
    return {
      label: 'در حال بررسی',
      type: 'reviewing',
    };
  }


  return {
    label: 'در انتظار بررسی',
    type: 'pending',
  };
};


const ReturnRequestsSection = ({
  requests: externalRequests,
  loading: externalLoading,
  errorMessage: externalErrorMessage,
  onRefresh,
  onRequestCreated,
}: ReturnRequestsSectionProps) => {
  const [form, setForm] =
    useState<ReturnForm>(initialForm);


  const [returnItems, setReturnItems] =
    useState<ReturnItem[]>([]);


  const [warehouseItems, setWarehouseItems] =
    useState<WarehouseItem[]>([]);


  const [adminProducts, setAdminProducts] =
    useState<AdminProduct[]>([]);


  const [submitting, setSubmitting] =
    useState(false);


  const [localLoading, setLocalLoading] =
    useState(true);


  const [localErrorMessage, setLocalErrorMessage] =
    useState('');


  const [successMessage, setSuccessMessage] =
    useState('');


  const [isPrintOpen, setIsPrintOpen] =
    useState(false);


  const [dashboardPhone, setDashboardPhone] =
    useState('');


  const requests =
    externalRequests as ReturnRequest[];


  const loading =
    externalLoading || localLoading;


  const errorMessage =
    externalErrorMessage ||
    localErrorMessage;


  const getAuthHeaders = () => {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token') ||
      localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken') ||
      localStorage.getItem('authToken') || sessionStorage.getItem('authToken') ||
      '';


    return {
      Authorization: `Bearer ${token}`,
    };
  };


  const getWarehouseProductName = (
    item: WarehouseItem,
  ) => {
    return (
      item.productName ||
      item.name ||
      item.title ||
      'کالای بدون نام'
    );
  };


  const getWarehouseProductPrice = (
    item: WarehouseItem,
  ) => {
    return toNumber(
      item.unitPrice ?? item.price,
    );
  };


  const getAdminProductName = (
    product?: AdminProduct,
  ) => {
    return product?.name || product?.title || '';
  };


  const findAdminProduct = (
    warehouseItem: WarehouseItem,
  ) => {
    const warehouseId = normalizeValue(
      warehouseItem.productId ||
        warehouseItem.id,
    );


    const warehouseName = normalizeValue(
      getWarehouseProductName(warehouseItem),
    );


    return (
      adminProducts.find((product) =>
        sameValue(product.id, warehouseId),
      ) ||
      adminProducts.find((product) => {
        return (
          normalizeValue(
            getAdminProductName(product),
          ) === warehouseName
        );
      })
    );
  };


  const getWarehouseSelectId = (
    item: WarehouseItem,
    index: number,
  ) => {
    return String(
      item.productId || item.id || index,
    );
  };


  const returnableWarehouseItems = useMemo(
    () => {
      return warehouseItems.filter((item) => {
        return toNumber(item.quantity) > 0;
      });
    },
    [warehouseItems],
  );


  const getSelectedWarehouseItem = () => {
    return returnableWarehouseItems.find(
      (item, index) => {
        const warehouseId =
          getWarehouseSelectId(item, index);


        const adminProduct =
          findAdminProduct(item);


        const finalId = String(
          adminProduct?.id ||
            item.productId ||
            item.id ||
            '',
        );


        return (
          warehouseId === form.productId ||
          finalId === form.productId
        );
      },
    );
  };


  const getSelectedWarehouseValue = () => {
    const selectedItem =
      getSelectedWarehouseItem();


    if (!selectedItem) {
      return '';
    }


    const selectedIndex =
      returnableWarehouseItems.indexOf(
        selectedItem,
      );


    return getWarehouseSelectId(
      selectedItem,
      selectedIndex,
    );
  };


  const loadData = async () => {
    setLocalLoading(true);
    setLocalErrorMessage('');


    try {
      const [
        dashboardResponse,
        productsResponse,
      ] = await Promise.all([
        axios.get<{
          success: boolean;
          data?: {
            warehouse?: {
              items?: WarehouseItem[];
            };
            representative?: {
              phone?: string;
              phoneNumber?: string;
            };
            user?: {
              phone?: string;
              phoneNumber?: string;
            };
            phone?: string;
            phoneNumber?: string;
          };
        }>(
          `${API_URL}/representative/dashboard`,
          {
            headers: getAuthHeaders(),
          },
        ),


        axios.get<{
          success: boolean;
          data: AdminProduct[];
        }>(`${API_URL}/products`, {
          headers: getAuthHeaders(),
        }),
      ]);


      setWarehouseItems(
        Array.isArray(
          dashboardResponse.data.data
            ?.warehouse?.items,
        )
          ? dashboardResponse.data.data
              ?.warehouse?.items || []
          : [],
      );


      const dashboardData =
        dashboardResponse.data.data;


      setDashboardPhone(
        cleanText(
          dashboardData?.representative?.phone,
        ) ||
        cleanText(
          dashboardData?.representative
            ?.phoneNumber,
        ) ||
        cleanText(
          dashboardData?.user?.phone,
        ) ||
        cleanText(
          dashboardData?.user?.phoneNumber,
        ) ||
        cleanText(
          dashboardData?.phone,
        ) ||
        cleanText(
          dashboardData?.phoneNumber,
        ),
      );


      setAdminProducts(
        Array.isArray(productsResponse.data.data)
          ? productsResponse.data.data
          : [],
      );
    } catch (error: any) {
      setLocalErrorMessage(
        error.response?.data?.error ||
          error.response?.data?.message ||
          'خطا در دریافت اطلاعات.',
      );
    } finally {
      setLocalLoading(false);
    }
  };


  useEffect(() => {
    void loadData();
  }, []);


  useEffect(() => {
    if (!form.productId) {
      setForm(initialForm);
      return;
    }


    const selectedItem =
      getSelectedWarehouseItem();


    if (!selectedItem) {
      setForm(initialForm);
    }
  }, [
    form.productId,
    returnableWarehouseItems,
    adminProducts,
  ]);


  const pendingCount = useMemo(() => {
    return requests.filter((request) => {
      return (
        String(request.status) === 'pending' ||
        String(request.status) === 'registered' ||
        String(request.status) === 'reviewing'
      );
    }).length;
  }, [requests]);


  const approvedCount = useMemo(() => {
    return requests.filter((request) => {
      return (
        request.status === 'approved' ||
        request.status === 'received'
      );
    }).length;
  }, [requests]);


  const rejectedCount = useMemo(() => {
    return requests.filter((request) => {
      return request.status === 'rejected';
    }).length;
  }, [requests]);


  const representativeName = useMemo(() => {
    return (
      requests.find((request) => {
        return Boolean(
          cleanText(
            request.representativeName,
          ),
        );
      })?.representativeName || ''
    );
  }, [requests]);


  const representativeCity = useMemo(() => {
    return (
      requests.find((request) => {
        return Boolean(
          cleanText(
            request.representativeCity,
          ),
        );
      })?.representativeCity || ''
    );
  }, [requests]);


  const representativePhone = useMemo(() => {
    const requestPhone =
      requests.find((request) => {
        return Boolean(
          cleanText(
            request.representativePhone,
          ),
        );
      })?.representativePhone || '';


    return (
      cleanText(requestPhone) ||
      dashboardPhone
    );
  }, [requests, dashboardPhone]);


  const totalRequestsValue = useMemo(() => {
    return requests.reduce(
      (total, request) => {
        return (
          total + getReturnTotalPrice(request)
        );
      },
      0,
    );
  }, [requests]);


  const handleProductChange = (
    value: string,
  ) => {
    const selectedItem =
      returnableWarehouseItems.find(
        (item, index) => {
          return (
            getWarehouseSelectId(item, index) ===
            value
          );
        },
      );


    if (!selectedItem) {
      setForm(initialForm);
      return;
    }


    const adminProduct =
      findAdminProduct(selectedItem);


    const warehouseTitle =
      getWarehouseProductName(selectedItem);


    const adminPrice = toNumber(
      adminProduct?.price,
    );


    const warehousePrice =
      getWarehouseProductPrice(selectedItem);


    const finalPrice =
      adminPrice > 0
        ? adminPrice
        : warehousePrice;


    const productId = String(
      adminProduct?.id ||
        selectedItem.productId ||
        selectedItem.id ||
        '',
    );


    setForm((current) => ({
      ...current,
      productId,
      title: warehouseTitle,
      brand: cleanText(selectedItem.brand),
      category:
        cleanText(selectedItem.category) ||
        cleanText(adminProduct?.category),
      price: String(finalPrice),
      quantity: '1',
    }));


    setLocalErrorMessage('');
    setSuccessMessage('');
  };


  const addItemToReturnList = () => {
    // فقط یک کالا می‌توان در هر درخواست مرجوعی ثبت کرد
    if (returnItems.length >= 1) {
      setLocalErrorMessage(
        'در هر درخواست فقط یک کالا می‌توانید ثبت کنید. برای کالای دیگر، درخواست جدیدی ثبت کنید.',
      );
      return;
    }

    const selectedItem =
      getSelectedWarehouseItem();


    if (!selectedItem) {
      setLocalErrorMessage(
        'ابتدا یک کالا از انبار انتخاب کنید.',
      );
      return;
    }


    const title = cleanText(form.title);
    const price = toNumber(form.price);
    const quantity = toNumber(form.quantity);


    if (!form.productId) {
      setLocalErrorMessage(
        'کالای انتخاب‌شده معتبر نیست.',
      );
      return;
    }


    const maxQuantity = toNumber(
      selectedItem.quantity,
    );


    if (maxQuantity <= 0) {
      setLocalErrorMessage(
        'کالای انتخاب‌شده موجودی ندارد.',
      );
      return;
    }


    if (
      !Number.isSafeInteger(quantity) ||
      quantity <= 0
    ) {
      setLocalErrorMessage(
        'تعداد مرجوعی باید عدد صحیح و بیشتر از صفر باشد.',
      );
      return;
    }


    if (quantity > maxQuantity) {
      setLocalErrorMessage(
        `تعداد مرجوعی نمی‌تواند بیشتر از موجودی انبار باشد. موجودی فعلی: ${toPersianNumber(
          maxQuantity,
        )} قلم`,
      );
      return;
    }


    if (price <= 0) {
      setLocalErrorMessage(
        'برای این کالا قیمت معتبری ثبت نشده است.',
      );
      return;
    }


    if (
      returnItems.some((item) => {
        return sameValue(
          item.productId,
          form.productId,
        );
      })
    ) {
      setLocalErrorMessage(
        'این کالا قبلاً به لیست مرجوعی اضافه شده است.',
      );
      return;
    }


    setReturnItems((current) => [
      ...current,
      {
        id: `${form.productId}-${Date.now()}`,
        productId: form.productId,
        title,
        brand: cleanText(form.brand),
        category: cleanText(form.category),
        price,
        quantity: String(quantity),
        maxQuantity,
      },
    ]);


    setForm((current) => ({
      ...initialForm,
      confirmedReturn: current.confirmedReturn,
    }));


    setLocalErrorMessage('');
    setSuccessMessage('');
  };


  const removeReturnItem = (id: string) => {
    setReturnItems((current) => {
      return current.filter((item) => {
        return item.id !== id;
      });
    });


    setLocalErrorMessage('');
    setSuccessMessage('');
  };


  const changeReturnItemQuantity = (
    id: string,
    value: string,
  ) => {
    const quantity = toEnglishDigits(value);


    setReturnItems((current) => {
      return current.map((item) => {
        return item.id === id
          ? {
              ...item,
              quantity,
            }
          : item;
      });
    });


    setLocalErrorMessage('');
    setSuccessMessage('');
  };


  const returnItemsSummary = useMemo(() => {
    const totalQuantity = returnItems.reduce(
      (sum, item) => {
        return (
          sum +
          Math.max(0, toNumber(item.quantity))
        );
      },
      0,
    );


    const totalPrice = returnItems.reduce(
      (sum, item) => {
        return (
          sum +
          Math.max(
            0,
            toNumber(item.quantity),
          ) *
            item.price
        );
      },
      0,
    );


    return {
      itemsCount: returnItems.length,
      totalQty: totalQuantity,
      totalPrice,
    };
  }, [returnItems]);


  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();


    const returnDate = getTodayJalaliDate();


    if (returnableWarehouseItems.length === 0) {
      setLocalErrorMessage(
        'کالای قابل مرجوعی در انبار شما وجود ندارد.',
      );
      return;
    }


    if (returnItems.length === 0) {
      setLocalErrorMessage(
        'حداقل یک کالا را به لیست مرجوعی اضافه کنید.',
      );
      return;
    }


    const invalidItem = returnItems.find(
      (item) => {
        const quantity = toNumber(
          item.quantity,
        );


        return (
          !Number.isSafeInteger(quantity) ||
          quantity <= 0 ||
          quantity > item.maxQuantity ||
          item.price <= 0 ||
          !item.productId ||
          !item.title
        );
      },
    );


    if (invalidItem) {
      const quantity = toNumber(
        invalidItem.quantity,
      );


      if (
        quantity > invalidItem.maxQuantity
      ) {
        setLocalErrorMessage(
          `تعداد مرجوعی کالای «${invalidItem.title}» بیشتر از موجودی انبار است.`,
        );
        return;
      }


      setLocalErrorMessage(
        `اطلاعات کالای «${
          invalidItem.title || 'نامشخص'
        }» معتبر نیست.`,
      );
      return;
    }


    if (!form.confirmedReturn) {
      setLocalErrorMessage(
        'برای ثبت درخواست باید تیک تأیید مرجوعی را فعال کنید.',
      );
      return;
    }


    const items = returnItems.map((item) => {
      const quantity = toNumber(item.quantity);


      return {
        productId: item.productId,
        productName: item.title,
        brand: item.brand,
        category: item.category,
        quantity,
        unitPrice: item.price,
        totalPrice: quantity * item.price,
      };
    });


    setSubmitting(true);
    setLocalErrorMessage('');
    setSuccessMessage('');


    try {
      const response = await axios.post<{
        success: boolean;
        data?: DashboardReturnRequest;
      }>(
        `${API_URL}/return-requests/my`,
        {
          items,
          returnDate,
          reason:
            'مرجوعی ثبت‌شده و تأییدشده توسط نماینده',
          confirmedReturn: true,
        },
        {
          headers: getAuthHeaders(),
        },
      );


      const createdRequest =
        response.data.data;


      if (createdRequest) {
        onRequestCreated(createdRequest);
      } else {
        onRefresh();
      }


      await loadData();


      setReturnItems([]);
      setForm(initialForm);


      setSuccessMessage(
        `درخواست مرجوعی شامل ${toPersianNumber(
          items.length,
        )} کالا با موفقیت در تاریخ ${returnDate} ثبت شد.`,
      );
    } catch (error: any) {
      setLocalErrorMessage(
        error.response?.data?.error ||
          error.response?.data?.message ||
          error.message ||
          'خطا در ثبت درخواست مرجوعی.',
      );
    } finally {
      setSubmitting(false);
    }
  };


  const handlePrint = () => {
    if (
      loading ||
      requests.length === 0
    ) {
      return;
    }


    setIsPrintOpen(true);
  };


  // ===== چاپ تک‌درخواست مرجوعی (با window.open) =====
  const handlePrintSingleReturn = useCallback(
    (request: any) => {
      const printWindow = window.open(
        '',
        '_blank',
        'width=900,height=700',
      );
      if (!printWindow) {
        alert('لطفاً popup blocker را غیرفعال کنید');
        return;
      }

      const today = new Intl.DateTimeFormat(
        'fa-IR-u-ca-persian',
        {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        },
      ).format(new Date());

      const numberToFa = (value: unknown): string => {
        const num = Number(
          String(value ?? '')
            .replace(/[۰-۹]/g, (d) =>
              String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)),
            )
            .replace(/[٠-٩]/g, (d) =>
              String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)),
            )
            .replace(/[,٬،\s]/g, '')
            .replace(/[^\d.-]/g, ''),
        );
        return Number.isFinite(num)
          ? num.toLocaleString('fa-IR')
          : '۰';
      };

      const title = getReturnTitle(request);
      const totalPrice = getReturnTotalPrice(request);
      const quantity = getReturnQuantity(request);
      const statusInfo = getReturnStatusInfo(request.status);
      const items = Array.isArray(request.items) ? request.items : [];

      const itemsHtml = items.length > 0
        ? items.map((item: any, i: number) => `
      <tr>
        <td style="text-align:center;">${i + 1}</td>
        <td>${item.title || item.productName || '—'}</td>
        <td style="text-align:center;">${item.brand || '—'}</td>
        <td style="text-align:center;">${numberToFa(item.quantity)}</td>
        <td style="text-align:center;">${numberToFa(item.price)} تومان</td>
        <td style="text-align:center;">${numberToFa(Number(item.quantity || 0) * Number(item.price || 0))} تومان</td>
      </tr>
    `).join('')
        : `<tr><td colspan="6" style="text-align:center;color:#9ca3af;padding:20px;">اطلاعات کالا موجود نیست</td></tr>`;

      printWindow.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ درخواست مرجوعی - ${title}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
body { font-family: 'Vazirmatn', Tahoma, Arial, sans-serif; direction: rtl; padding: 20px; background: #fff; color: #111; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 3px solid #0f766e; padding-bottom: 15px; }
.logo { display: flex; align-items: center; gap: 15px; }
.logo img { max-height: 60px; max-width: 200px; }
.company-info h1 { font-size: 18px; margin: 0; color: #0f766e; }
.company-info p { font-size: 12px; color: #555; margin: 2px 0; }
.report-title { text-align: center; margin: 18px 0 12px; }
.report-title h2 { font-size: 22px; margin: 0; color: #0f766e; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
.info-card { border: 1px solid #ddd; border-radius: 8px; padding: 10px 15px; }
.info-card .label { font-size: 11px; color: #6b7280; margin-bottom: 3px; }
.info-card .value { font-size: 14px; font-weight: bold; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #ddd; padding: 6px 8px; font-size: 11px; text-align: right; }
th { background: #0f766e !important; color: #fff; font-weight: bold; text-align: center; }
tr:nth-child(even) td { background: #f9fafb; }
.summary { display: flex; gap: 20px; margin-top: 20px; justify-content: space-around; }
.summary-card { border: 1px solid #ddd; border-radius: 8px; padding: 12px 20px; text-align: center; min-width: 130px; background: #f9fafb; }
.summary-card .label { font-size: 11px; color: #6b7280; }
.summary-card .value { font-size: 18px; font-weight: bold; margin-top: 5px; color: #0f766e; }
.status-badge { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: bold; }
.status-pending { background: #fef3c7; color: #92400e; }
.status-approved { background: #d1fae5; color: #065f46; }
.status-rejected { background: #fee2e2; color: #991b1b; }
.footer { margin-top: 40px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px; }
@media print { @page { size: A4 portrait; margin: 10mm; } body { padding: 0; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo">
    <img src="https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>هلدینگ مهر</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: ۰۲۱-۹۳۱۱۱۰۲۱</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${today}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش درخواست مرجوعی</h2>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نام کالا</div>
    <div class="value">${title}</div>
  </div>
  <div class="info-card">
    <div class="label">وضعیت</div>
    <div class="value">
      <span class="status-badge status-${statusInfo.type}">${statusInfo.label}</span>
    </div>
  </div>
  <div class="info-card">
    <div class="label">تاریخ ثبت</div>
    <div class="value">${request.returnDate || formatDateTime(request.createdAt)}</div>
  </div>
  <div class="info-card">
    <div class="label">شماره درخواست</div>
    <div class="value">${request.id || '—'}</div>
  </div>
</div>

${items.length > 0 ? `
<table>
  <thead>
    <tr>
      <th style="width: 5%;">ردیف</th>
      <th style="width: 40%;">عنوان</th>
      <th style="width: 15%;">برند</th>
      <th style="width: 10%;">تعداد</th>
      <th style="width: 15%;">قیمت</th>
      <th style="width: 15%;">مجموع</th>
    </tr>
  </thead>
  <tbody>
    ${itemsHtml}
  </tbody>
</table>
` : ''}

<div class="summary">
  <div class="summary-card">
    <div class="label">تعداد</div>
    <div class="value">${numberToFa(quantity)} قلم</div>
  </div>
  <div class="summary-card">
    <div class="label">مبلغ کل</div>
    <div class="value">${numberToFa(totalPrice)}<br><span style="font-size:12px;">تومان</span></div>
  </div>
</div>

${statusInfo.type === 'rejected' && request.adminNote ? `
<div style="margin-top: 20px; border: 1px solid #fca5a5; border-radius: 8px; padding: 12px; background: #fef2f2;">
  <p style="font-size: 12px; font-weight: bold; color: #991b1b;">دلیل رد:</p>
  <p style="font-size: 12px; color: #7f1d1d; margin-top: 5px;">${request.adminNote}</p>
</div>
` : ''}

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>هلدینگ مهر</p>
</div>

</body>
</html>`);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 800);
    },
    [],
  );


  return (
    <>
      <div
        dir="rtl"
        className="return-requests-page space-y-6"
      >
        <section className="return-screen-only overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="border-b border-gray-100 bg-gradient-to-l from-rose-50 via-white to-amber-50 p-5 dark:border-gray-700 dark:from-rose-950/20 dark:via-gray-900 dark:to-amber-950/20">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/25">
                <RotateCcw className="h-6 w-6" />
              </div>


              <div>
                <h2 className="font-black text-gray-800 dark:text-white">
                  ثبت درخواست مرجوعی
                </h2>


                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  کالا را از لیست انتخاب کن، به لیست مرجوعی اضافه کن و در نهایت ثبت کن.
                </p>
              </div>
            </div>
          </div>


          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2"
          >
            <label className="block md:col-span-2">
              <span className="text-sm font-black text-gray-700 dark:text-gray-200">
                انتخاب کالا از انبار
              </span>


              <select
                value={getSelectedWarehouseValue()}
                onChange={(event) => {
                  handleProductChange(
                    event.target.value,
                  );
                }}
                disabled={
                  loading ||
                  returnableWarehouseItems.length ===
                    0
                }
                className="mt-2 w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 outline-none transition-all focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                <option value="">
                  {loading
                    ? 'در حال دریافت کالاهای انبار...'
                    : returnableWarehouseItems.length ===
                      0
                    ? 'کالای قابل مرجوعی در انبار شما وجود ندارد'
                    : 'یک کالا را انتخاب کنید'}
                </option>


                {returnableWarehouseItems.map(
                  (item, index) => {
                    const warehouseId =
                      getWarehouseSelectId(
                        item,
                        index,
                      );


                    const adminProduct =
                      findAdminProduct(item);


                    const productName =
                      getAdminProductName(
                        adminProduct,
                      ) ||
                      getWarehouseProductName(item);


                    const adminPrice = toNumber(
                      adminProduct?.price,
                    );


                    const productPrice =
                      adminPrice > 0
                        ? adminPrice
                        : getWarehouseProductPrice(
                            item,
                          );


                    const quantity = toNumber(
                      item.quantity,
                    );


                    return (
                      <option
                        key={`${warehouseId}-${index}`}
                        value={warehouseId}
                      >
                        {productName} — موجودی:{' '}
                        {toPersianNumber(quantity)} — قیمت:{' '}
                        {toPersianNumber(productPrice)} تومان
                      </option>
                    );
                  },
                )}
              </select>


              <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                فقط کالاهایی با موجودی بیشتر از صفر نمایش داده می‌شوند.
              </p>
            </label>


            <label className="block">
              <span className="text-sm font-black text-gray-700 dark:text-gray-200">
                قیمت کالا
              </span>


              <input
                type="text"
                value={
                  form.price
                    ? `${toPersianNumber(
                        form.price,
                      )} تومان`
                    : ''
                }
                readOnly
                placeholder="پس از انتخاب کالا نمایش داده می‌شود"
                className="mt-2 w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold text-emerald-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-emerald-300"
              />
            </label>


            <label className="block">
              <span className="text-sm font-black text-gray-700 dark:text-gray-200">
                تعداد مرجوعی
              </span>


              <input
                type="number"
                min="1"
                max={
                  getSelectedWarehouseItem()
                    ? toNumber(
                        getSelectedWarehouseItem()
                          ?.quantity,
                      )
                    : undefined
                }
                value={form.quantity}
                onChange={(event) => {
                  setForm((current) => ({
                    ...current,
                    quantity: toEnglishDigits(
                      event.target.value,
                    ),
                  }));
                }}
                disabled={!form.productId || loading}
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </label>


            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-900/40 dark:bg-rose-950/20">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300">
                  <CalendarDays className="h-5 w-5" />
                </div>


                <div>
                  <p className="text-sm font-black text-rose-700 dark:text-rose-300">
                    تاریخ ثبت مرجوعی خودکار است
                  </p>


                  <p className="mt-1 text-xs leading-6 text-rose-600 dark:text-rose-400">
                    تاریخ امروز هنگام ثبت درخواست به‌صورت خودکار ذخیره می‌شود.
                  </p>
                </div>
              </div>
            </div>


            <div className="md:col-span-2">
              <button
                type="button"
                onClick={addItemToReturnList}
                disabled={
                  loading || !form.productId
                }
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-black text-rose-700 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-rose-800 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20"
              >
                <Plus className="h-5 w-5" />
                افزودن کالا به لیست مرجوعی
              </button>


              <p className="mt-2 text-xs font-bold text-gray-400 dark:text-gray-500">
                پس از انتخاب کالا و وارد کردن تعداد، آن را به لیست مرجوعی اضافه کنید.
              </p>
            </div>


            {returnItems.length > 0 ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-4 md:col-span-2 dark:border-rose-900/50 dark:bg-rose-950/20">
                <div className="flex flex-col gap-3 border-b border-rose-200 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-rose-900/50">
                  <div>
                    <h3 className="font-black text-rose-800 dark:text-rose-200">
                      کالاهای انتخاب‌شده برای مرجوعی
                    </h3>


                    <p className="mt-1 text-xs font-bold text-rose-600 dark:text-rose-300">
                      قبل از ثبت نهایی، تعداد هر کالا را بررسی کنید.
                    </p>
                  </div>


                  <span className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-black text-rose-700 shadow-sm dark:bg-gray-900 dark:text-rose-300">
                    {toPersianNumber(
                      returnItemsSummary.itemsCount,
                    )}{' '}
                    نوع کالا
                  </span>
                </div>


                <div className="mt-4 space-y-3">
                  {returnItems.map((item, index) => {
                    const quantity = toNumber(
                      item.quantity,
                    );


                    const total =
                      quantity * item.price;


                    return (
                      <div
                        key={item.id}
                        className="rounded-xl border border-rose-100 bg-white p-4 dark:border-rose-900/40 dark:bg-gray-900"
                      >
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                          <div className="min-w-0">
                            <p className="font-black text-gray-800 dark:text-white">
                              {toPersianNumber(
                                index + 1,
                              )}
                              . {item.title}
                            </p>


                            <p className="mt-1 text-xs font-bold text-gray-500 dark:text-gray-400">
                              {item.brand
                                ? `برند: ${item.brand}`
                                : 'برند: —'}
                              {item.category
                                ? ` · دسته‌بندی: ${item.category}`
                                : ''}
                            </p>


                            <p className="mt-2 text-xs font-black text-emerald-600 dark:text-emerald-400">
                              قیمت:{' '}
                              {toPersianNumber(
                                item.price,
                              )}{' '}
                              تومان · موجودی انبار:{' '}
                              {toPersianNumber(
                                item.maxQuantity,
                              )}{' '}
                              قلم
                            </p>
                          </div>


                          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                            <label className="block">
                              <span className="text-xs font-black text-gray-600 dark:text-gray-300">
                                تعداد مرجوعی
                              </span>


                              <input
                                type="number"
                                min="1"
                                max={item.maxQuantity}
                                value={item.quantity}
                                onChange={(event) => {
                                  changeReturnItemQuantity(
                                    item.id,
                                    event.target.value,
                                  );
                                }}
                                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-black text-gray-800 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:w-32"
                              />
                            </label>


                            <div className="rounded-lg bg-emerald-50 px-3 py-2 text-center dark:bg-emerald-500/10">
                              <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                                مبلغ این ردیف
                              </p>


                              <p className="mt-1 text-sm font-black text-emerald-700 dark:text-emerald-300">
                                {toPersianNumber(
                                  total,
                                )}{' '}
                                تومان
                              </p>
                            </div>


                            <button
                              type="button"
                              onClick={() => {
                                removeReturnItem(
                                  item.id,
                                );
                              }}
                              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-black text-red-700 transition-colors hover:bg-red-100 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
                            >
                              <Trash2 className="h-4 w-4" />
                              حذف
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>


                <div className="mt-4 grid grid-cols-1 gap-3 border-t border-rose-200 pt-4 sm:grid-cols-3 dark:border-rose-900/50">
                  <div className="rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                      تعداد نوع کالا
                    </p>


                    <p className="mt-1 text-lg font-black text-rose-700 dark:text-rose-300">
                      {toPersianNumber(
                        returnItemsSummary.itemsCount,
                      )}
                    </p>
                  </div>


                  <div className="rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                      مجموع تعداد
                    </p>


                    <p className="mt-1 text-lg font-black text-blue-700 dark:text-blue-300">
                      {toPersianNumber(
                        returnItemsSummary.totalQty,
                      )}{' '}
                      قلم
                    </p>
                  </div>


                  <div className="rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                      مجموع
                    </p>


                    <p className="mt-1 text-lg font-black text-emerald-700 dark:text-emerald-300">
                      {toPersianNumber(
                        returnItemsSummary.totalPrice,
                      )}{' '}
                      تومان
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-sm font-bold text-gray-500 md:col-span-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                هنوز کالایی به لیست مرجوعی اضافه نشده است.
              </div>
            )}


            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-rose-100 bg-rose-50 p-4 transition-colors hover:bg-rose-100 md:col-span-2 dark:border-rose-900/40 dark:bg-rose-950/20 dark:hover:bg-rose-950/35">
              <input
                type="checkbox"
                checked={form.confirmedReturn}
                onChange={(event) => {
                  setForm((current) => ({
                    ...current,
                    confirmedReturn:
                      event.target.checked,
                  }));


                  setLocalErrorMessage('');
                }}
                disabled={
                  loading ||
                  returnableWarehouseItems.length === 0
                }
                className="h-5 w-5 accent-rose-600 disabled:cursor-not-allowed"
              />


              <span className="flex items-center gap-2 text-sm font-black text-rose-700 dark:text-rose-300">
                <CheckCircle className="h-5 w-5 shrink-0" />
                تأیید می‌کنم که کالا جهت مرجوعی تحویل یا ارسال شده است.
              </span>
            </label>


            {errorMessage ? (
              <div className="rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700 md:col-span-2 dark:bg-red-950/30 dark:text-red-300">
                {errorMessage}
              </div>
            ) : null}


            {successMessage ? (
              <div className="rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700 md:col-span-2 dark:bg-emerald-950/30 dark:text-emerald-300">
                {successMessage}
              </div>
            ) : null}


            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={
                  submitting ||
                  loading ||
                  returnableWarehouseItems.length ===
                    0 ||
                  returnItems.length === 0
                }
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-rose-500/25 transition-all hover:from-rose-600 hover:to-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {submitting ? (
                  <Loader className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}


                {submitting
                  ? 'در حال ثبت درخواست...'
                  : `ثبت درخواست مرجوعی (${toPersianNumber(
                      returnItemsSummary.itemsCount,
                    )} کالا)`}
              </button>


              {!loading &&
              returnableWarehouseItems.length ===
                0 ? (
                <p className="mt-3 text-sm font-bold text-gray-500 dark:text-gray-400">
                  کالای قابل مرجوعی در انبار شما وجود ندارد.
                </p>
              ) : null}
            </div>
          </form>
        </section>


        <section className="return-print-area overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="return-screen-only flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                <ClipboardList className="h-5 w-5" />
              </div>


              <div>
                <h2 className="font-black text-gray-800 dark:text-white">
                  درخواست‌های مرجوعی من
                </h2>


                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  وضعیت بررسی درخواست‌های ثبت‌شده
                </p>
              </div>
            </div>


            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-black text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                {toPersianNumber(
                  pendingCount,
                )}{' '}
                در انتظار بررسی
              </span>


              <button
                type="button"
                onClick={handlePrint}
                disabled={
                  loading ||
                  requests.length === 0
                }
                className="flex min-h-9 items-center gap-2 rounded-lg bg-gray-800 px-3 text-xs font-black text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <Printer className="h-4 w-4" />
                چاپ گزارش
              </button>


              <button
                type="button"
                onClick={onRefresh}
                disabled={loading}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-rose-500/10"
                title="بروزرسانی"
                aria-label="بروزرسانی"
              >
                <RefreshCw
                  className={`h-4 w-4 ${
                    loading
                      ? 'animate-spin'
                      : ''
                  }`}
                />
              </button>
            </div>
          </div>


          {loading ? (
            <div className="return-screen-only flex items-center justify-center gap-2 p-10 text-sm font-black text-gray-500 dark:text-gray-400">
              <Loader className="h-5 w-5 animate-spin" />
              در حال دریافت اطلاعات...
            </div>
          ) : requests.length === 0 ? (
            <div className="return-screen-only p-10 text-center">
              <ClipboardList className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600" />


              <p className="mt-4 font-black text-gray-600 dark:text-gray-300">
                هنوز درخواست مرجوعی ثبت نکرده‌اید.
              </p>
            </div>
          ) : (
            <div className="return-screen-only divide-y divide-gray-100 dark:divide-gray-700">
              {requests.map((request) => {
                const statusInfo =
                  getReturnStatusInfo(
                    request.status,
                  );


                return (
                  <article
                    key={request.id}
                    className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-black text-gray-800 dark:text-white">
                        {getReturnTitle(request)}
                      </p>


                      <p className="mt-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        {toPersianNumber(
                          getReturnTotalPrice(
                            request,
                          ),
                        )}{' '}
                        تومان
                      </p>


                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        تعداد:{' '}
                        {toPersianNumber(
                          getReturnQuantity(
                            request,
                          ),
                        )}{' '}
                        قلم · تاریخ ثبت:{' '}
                        {request.returnDate ||
                          formatDateTime(
                            request.createdAt,
                          )}
                      </p>


                      {statusInfo.type ===
                        'rejected' &&
                      request.adminNote ? (
                        <p className="mt-3 rounded-xl bg-red-50 p-3 text-xs font-bold leading-6 text-red-700 dark:bg-red-950/30 dark:text-red-300">
                          دلیل رد ادمین:{' '}
                          {request.adminNote}
                        </p>
                      ) : null}
                    </div>


                    {statusInfo.type ===
                    'approved' ? (
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                        <CheckCircle className="h-4 w-4" />
                        {statusInfo.label}
                      </span>
                    ) : null}


                    {statusInfo.type ===
                    'rejected' ? (
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-black text-red-700 dark:bg-red-500/15 dark:text-red-300">
                        <XCircle className="h-4 w-4" />
                        {statusInfo.label}
                      </span>
                    ) : null}


                    {(
                      statusInfo.type ===
                        'pending' ||
                      statusInfo.type ===
                        'reviewing'
                    ) && (
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                        <Clock className="h-4 w-4" />
                        {statusInfo.label}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => handlePrintSingleReturn(request)}
                      className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-cyan-300 bg-cyan-50 px-3 py-1.5 text-xs font-black text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300"
                    >
                      <Printer className="h-4 w-4" />
                      چاپ
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>


      {isPrintOpen && (
        <ReturnRequestPrint
          requests={requests}
          representativeName={representativeName}
          representativeCity={representativeCity}
          representativePhone={representativePhone}
          onClose={() =>
            setIsPrintOpen(false)
          }
        />
      )}
    </>
  );
};


export default ReturnRequestsSection;