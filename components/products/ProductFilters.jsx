'use client';

const formatPrice = (n) => Number(n).toLocaleString('en-US');

export default function ProductFilters({
  stockFilter,
  onStockChange,
  priceRange,
  onPriceChange,
  maxPrice,
  inStockCount,
  outOfStockCount,
}) {
  const [min, max] = priceRange;

  const clamp = (value) => Math.min(Math.max(Number(value) || 0, 0), maxPrice);

  const stockOptions = [
    { value: 'all', label: 'All', count: inStockCount + outOfStockCount },
    { value: 'in-stock', label: 'In stock', count: inStockCount },
    { value: 'out-of-stock', label: 'Out of stock', count: outOfStockCount },
  ];

  return (
    <div className="space-y-5">
      <div className="border border-gray-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-darkText uppercase tracking-wider">Availability</h4>
          <button
            onClick={() => onStockChange('all')}
            className="text-xs text-primary font-medium hover:underline"
          >
            Reset
          </button>
        </div>
        <div className="space-y-3">
          {stockOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="availability"
                value={option.value}
                checked={stockFilter === option.value}
                onChange={() => onStockChange(option.value)}
                className="w-4 h-4 accent-primary cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-primary transition-colors flex-1">
                {option.label}
              </span>
              <span className="text-xs text-gray-400">({option.count})</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border border-gray-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-darkText uppercase tracking-wider">Price</h4>
          <button
            onClick={() => onPriceChange([0, maxPrice])}
            className="text-xs text-primary font-medium hover:underline"
          >
            Reset
          </button>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-primary transition-colors">
            <span className="text-sm text-gray-500 mr-1.5">د.إ</span>
            <input
              type="number"
              value={min}
              min={0}
              max={maxPrice}
              onChange={(e) => onPriceChange([clamp(e.target.value), max])}
              className="w-full text-sm outline-none bg-transparent"
            />
          </div>
          <span className="text-gray-400 text-sm">–</span>
          <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-primary transition-colors">
            <span className="text-sm text-gray-500 mr-1.5">د.إ</span>
            <input
              type="number"
              value={max}
              min={0}
              max={maxPrice}
              onChange={(e) => onPriceChange([min, clamp(e.target.value)])}
              className="w-full text-sm outline-none bg-transparent"
            />
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={maxPrice}
          step={5}
          value={max}
          onChange={(e) => onPriceChange([min, Math.max(Number(e.target.value), min)])}
          className="w-full accent-primary cursor-pointer"
        />

        <p className="text-xs text-gray-600 mt-3">
          Price: Dhs. {formatPrice(min)} – Dhs. {formatPrice(max)}
        </p>
      </div>
    </div>
  );
}