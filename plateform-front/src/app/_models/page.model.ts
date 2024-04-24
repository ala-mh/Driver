export interface Page<T> {
  content: T[]; // List of items of type T
  totalPages: number; // Total number of pages
  totalElements: number; // Total number of items
  size: number; // Number of items per page
  number: number; // Current page number
}
