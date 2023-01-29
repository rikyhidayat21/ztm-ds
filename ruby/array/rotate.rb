=begin
/**
* rotate the array using size of the rotation
* if the rotation is positif integer -> it will rotate to right side
* if the rotation is negatif integer -> it will rotate to left side
*
* let array1 = [1, 2, 3, 4, 5]
* let rotate = 1
* so the result will be => [5, 1, 2, 3, 4]
 */
=end

class RotateArray
  def initialize(array, rotate)
    @array = array
    @rotate = rotate
  end

  def rotate()
    if @rotate > 0
      @rotate.times do
        @array.unshift(@array.pop())
      end
    else
      @rotate.abs.times do
        @array.push(@array.shift())
      end
    end
    @array
  end
end

solution = RotateArray.new([1, 2, 3, 4, 5], 1)
p solution.rotate()