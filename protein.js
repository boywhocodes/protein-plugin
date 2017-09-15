def protein_finder
  puts "Enter price:"
  price = gets.chomp!
  price = price.to_f
  p "$#{price}"
  puts "Enter quantity"
  quantity = gets.chomp!
  quantity = quantity.to_f
  puts "Enter protein amount (per 1 unit/serving)"
  protein = gets.chomp!
  protein = protein.to_f

  pro_per_dol = (protein*quantity) / price

  p "Protein per Dollar: #{pro_per_dol.round(2)}g"
  p "Price per Gram of Protein: $#{(1/pro_per_dol).round(2)}"


end

function proteinPricing() {
  let price  = prompt("Enter price:");
  price = Math.round(parseFloat(price) * 100) / 100
  let quantity = prompt("Enter quantity:");
  let protein = prompt("Enter protein amount:");

}
