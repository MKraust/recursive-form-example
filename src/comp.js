import String from '@/components/String';
import Block from '@/components/Block';

export const getFieldComponent = (type) => {
  const map = {
    string: String,
    integer: String,
    block: Block,
  }

  console.log(type, map[type])

  return map[type] || null
}