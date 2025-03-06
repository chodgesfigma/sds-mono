/**
 * Used by TextField, SelectField, TextareaField, SliderField, etc.
 */
export type SharedFieldProps = {
  label?: string;
  description?: string;
  placeholder?: string;
  error?: string; // | ((validation: RACValidationResult) => string); // TODO: figure out RACValidationResult
};
