export type FreelancePricingRow = {
  item: string;
  price: string;
  details: string;
};

export type ProjectTypeOption =
  | "Static Website"
  | "Dynamic Website"
  | "Web Application";

export type FreelanceInquiryForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: ProjectTypeOption;
  budget: string;
  message: string;
};
