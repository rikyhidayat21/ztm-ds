class MyArray
  def initialize()
    @length = 0
    @data = {}
  end

  def get(index)
    @data[index]
  end

  def push(item)
    @data[@length] = item
    @length += 1
  end

  def pop()
    @data.delete(@length - 1)
    @length -= 1
  end

  def delete(index)
    @data.delete(index)
    @length -= 1
  end
end

new_array = MyArray.new()
new_array.push('hi')
new_array.push('you')
new_array.push('!')
new_array.push('!')
new_array.delete(1)
puts new_array.inspect