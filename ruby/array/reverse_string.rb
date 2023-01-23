=begin
/**
 * create a function that reverses a string:
 * 'Hi My name is Riky' should be:
 * 'ykiR si eman yM iH'
 * 
 */
=end

class ReverseString
  def initialize(string)
    @string = string
  end

  def reverse
    result = []
    @string.each_char do |char|
      result.unshift(char)
    end
    result.join('')
  end

  def reverse_fancy
    @string.split('').reverse.join('')
  end
end

reverse = ReverseString.new('Hi My name is Riky')
puts reverse.reverse
puts reverse.reverse_fancy