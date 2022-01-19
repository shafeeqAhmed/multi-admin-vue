import { ref, watch } from '@vue/composition-api'

export default function useUploadImageTwo() {
  const imageFileTwo = ref('')
  const imageUrlTwo = ref('')

  function handleImageSelectedTwo(event) {
    if (event.target.files.length === 0) {
      imageFileTwo.value = ''
      imageUrlTwo.value = ''
      return
    }
    const file = event.target.files[0]
    imageFileTwo.value = file
  }

  watch(imageFileTwo, imf => {
    if (!(imf instanceof File)) {
      return
    }

    const fileReaderTwo = new FileReader()

    fileReaderTwo.readAsDataURL(imageFileTwo.value)

    fileReaderTwo.addEventListener('load', () => {
      imageUrlTwo.value = fileReaderTwo.result
    })
  })
  const removeImageTwo = () => {
    imageUrlTwo.value = ''
    imageFileTwo.value = ''
  }

  return {
    imageFileTwo,
    imageUrlTwo,
    handleImageSelectedTwo,
    removeImageTwo,
  }
}
