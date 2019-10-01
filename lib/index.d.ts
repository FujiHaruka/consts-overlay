type overlay<T> = (overlayer: {}, options?: {autoConvertNumeric?: boolean, onOverride?: (obj: any) => void}) => T

type consts = <T extends {}>(obj: T) => { overlay: overlay<T> }

declare const consts: consts

export = consts
