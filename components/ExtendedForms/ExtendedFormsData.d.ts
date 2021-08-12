declare interface ExtendedFormData {
  firstName: string | null;
  lastName: string | null;
  address: {
    city: string | null;
    country: string | null;
    street: string | null;
    zip: string | null;
  };
}
