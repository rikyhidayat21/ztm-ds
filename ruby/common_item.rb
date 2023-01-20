=begin

/**
 * Common Item
 * 
 * Question:
 * Create a function to make sure between 2 arrays
 * Is it have the common item ? if yes return true, if not return false.
 * 
 * Step to work:
 * 1. Write down the key points. Make sure you have all the details
 *  - it have 2 arrays of strings
 *  - if between 2 arrays have the common item, it will return true
 *  
 * example:
 * const array1 = ['a', 'b', 'c']
 * const array2 = ['d', 'x', 'y', 'o']
 * 
 * 2. make sure you double check: what are inpus? what are outputs?
 *  - input here should be 2 pieces of array
 *  - output is boolean, true or false
 * 
 * 3. what is the importatnt value of the problem? time, space, memory?  whats the main goals?
 * 
 * 4. dont be annoying and ask too many questions
 * 
 * 5. start with the naive/brute force approach. first thing that comes into mind.
 *  . it shows that you're able to think well and critically (you don't need to write this code, just speak about it)
 */


=end

array1 = ['a', 'b', 'c']
array2 = ['d', 'x', 'y', 'a']

#  method brute force
# def common_item(array1, array2)
#   array1.each_with_index do |item, index|
#     array2.each_with_index do |item2, index2|
#       if item == item2
#         return true
#       end
#     end
#   end
#   false
# end

# puts common_item(array1, array2)

=begin
Method 2

-> loop over the first slice then convert the first slice to be a map / hash
-> loop over the seconde slice then check if the item in second slice is exist in the hash / map
=end

# def common_item2(array1, array2)
#   # initialize the hash / map
#   init_map = {}

#   # loop over the first array then convert it to be a hash / map
#   array1.each do |item|
#     if init_map["#{item}"] == nil
#       init_map["#{item}"] = true
#     end
#   end

#   # loop over the second array then check if the item in second array is exist in the hash / map

#   array2.each do |item|
#     if init_map[item]
#       return true
#     end
#   end

#   false
# end

# puts common_item2(array1, array2)

=begin
Modularize method using class
=end

class CommonItem3
  def initialize(array1, array2)
    @array1 = array1
    @array2 = array2
  end
  
  def call
    converted_array_to_map = convert_to_map
    check_item(converted_array_to_map)
  end

  private

  def convert_to_map
    init_map = {}

    # loop over the first array then convert it to be a hash / map
    @array1.each do |item|
      if init_map["#{item}"] == nil
        init_map["#{item}"] = true
      end
    end

    init_map
  end

  def check_item(mapped_data)
    # loop over the second array then check if the item in second array is exist in the hash / map

    @array2.each do |item|
      if mapped_data[item]
        return true
      end
    end

    false
  end
end

common_item3 = CommonItem3.new(array1, array2)
puts common_item3.call