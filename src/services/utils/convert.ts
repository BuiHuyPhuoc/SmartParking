export const StringConvert = {
  Upper(input: string): string {
    return input.toUpperCase();
  },

  Lower(input: string): string {
    return input.toLowerCase();
  },

  Capitalize(input: string): string {
    return input
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
};

export const MoneyConvert = {
  From(input: number, suffix?: string): string {
    const formatted = input
      .toFixed(0) // làm tròn
      .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // thêm dấu chấm phân cách hàng nghìn

    return suffix ? `${formatted} ${suffix}` : formatted;
  }
};
