export interface FormField {
  label: string;
  name: string;
  type:
    | "multiple" // form multiple
    | "list" // form list
    | "select" // form select
    | "textarea" // form textarea
    | "checkbox" // form checkbox
    | "file" // todo
    // form input
    | "button"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  autocomplete?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  options?: { name: string; value?: string; id?: number }[];
  room?: string;
  helptext?: string;
}
