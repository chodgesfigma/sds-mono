export type FormDataValue = FormDataEntryValue | FormDataEntryValue[];
export function formEventTargetToFormData(target: HTMLFormElement) {
  const dataIsArray = (data: FormDataValue): data is FormDataEntryValue[] => Array.isArray(data);

  const formData = new FormData(target);
  const data: {
    [k: string]: FormDataValue;
  } = {};

  formData.forEach((value, key) => {
    if (!Reflect.has(data, key)) {
      data[key] = value;
      return;
    }
    // convert to array from single value
    const currentItem = data[key];
    if (currentItem) {
      if (dataIsArray(currentItem)) {
        currentItem.push(value);
      } else {
        data[key] = [currentItem, value];
      }
    }
  });
  return data;
}
