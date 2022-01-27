import String from '@/components/String';

export const getFieldComponent = (type) => {
  if (type === 'string' || type === 'integer') {
    return String
  }

  return null
}