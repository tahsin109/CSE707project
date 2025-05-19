"use client";

const COUNTRIES = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
  { code: "in", name: "India" },
  { code: "jp", name: "Japan" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "it", name: "Italy" },
  { code: "es", name: "Spain" },
  { code: "br", name: "Brazil" },
  { code: "mx", name: "Mexico" },
  { code: "ru", name: "Russia" },
  { code: "cn", name: "China" },
  { code: "kr", name: "South Korea" },
  { code: "sg", name: "Singapore" },
  { code: "ae", name: "United Arab Emirates" },
  { code: "za", name: "South Africa" },
  { code: "nz", name: "New Zealand" },
  { code: "se", name: "Sweden" },
];

export default function CountrySelector({ selectedCountry, onCountryChange }) {
  return (
    <div className="mb-8">
      <label
        htmlFor="country"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select Country
      </label>
      <select
        id="country"
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        className="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      >
        {COUNTRIES.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
