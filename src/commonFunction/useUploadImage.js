import { ref, watch } from '@vue/composition-api'

export default function useUploadImage() {
  const imageFile = ref('')
  const imageUrl = ref('')

  function handleImageSelected(event) {
    if (event.target.files.length === 0) {
      imageFile.value = ''
      imageUrl.value = ''
      return
    }
    const file = event.target.files[0]
    imageFile.value = file
  }

  watch(imageFile, imf => {
    if (!(imf instanceof File)) {
      return
    }

    const fileReader = new FileReader()

    fileReader.readAsDataURL(imageFile.value)

    fileReader.addEventListener('load', () => {
      imageUrl.value = fileReader.result
    })
  })
  const removeImage = () => {
    imageUrl.value = ''
    imageFile.value = ''
  }
  return {
    imageFile,
    imageUrl,
    handleImageSelected,
    removeImage,
  }
}
