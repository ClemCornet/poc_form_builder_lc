import { resolveDynamicComponent, h } from 'vue'


export default function FormFieldsTitlePlugin() {
 
  return function (baseReturns) {
    const { parsedSchema } = baseReturns
    
    const flatSchema = parsedSchema.value.flat()

    const mapGroupFields = function (schema) {
      const components = schema.map(groupFields => {
        return groupFields.component
      })
      return components
    }

    const setTitleSlot = function (Comp) {
      return function () {
        return h(Comp, {
          ...props,
          ...attrs,
          
        })
      }
    }


    console.log(mapGroupFields(flatSchema))
  }
}