function zhCompare (param1, param2) {
  return param1.localeCompare(param2, 'zh-Hans-CN', {sensitivity: 'accent'})
}

export {
  zhCompare
}
