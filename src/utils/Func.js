import {IMAGE_TYPES} from '@config'

export function isImage(file) {
    const filenames = file.split('.')
    const ext = filenames[filenames.length - 1]

    return IMAGE_TYPES.indexOf(ext) >= 0
}