import { ref, watch } from '@vue/composition-api'

export default function useUploadImageOne() {
  const imageFileOne = ref('')
  const imageUrlOne = ref('')

  function handleImageSelectedOne(event) {
    if (event.target.files.length === 0) {
      imageFileOne.value = ''
      imageUrlOne.value = ''
      return
    }
    const file = event.target.files[0]
    imageFileOne.value = file
  }

  watch(imageFileOne, imf => {
    if (!(imf instanceof File)) {
      return
    }

    const fileReaderOne = new FileReader()

    fileReaderOne.readAsDataURL(imageFileOne.value)

    fileReaderOne.addEventListener('load', () => {
      imageUrlOne.value = fileReaderOne.result
    })
  })
  const removeImageOne = () => {
    imageUrlOne.value = ''
    imageFileOne.value = ''
  }

  return {
    imageFileOne,
    imageUrlOne,
    handleImageSelectedOne,
    removeImageOne,
  }
}
