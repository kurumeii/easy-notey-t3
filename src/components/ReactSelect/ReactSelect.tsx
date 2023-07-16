// import ReactSelect from "react-select"
import { forwardRef, type ForwardedRef } from "react"
import Select, { createFilter, type GroupBase, type Props } from "react-select"
import makeAnimated from "react-select/animated"
const animatedComponents = makeAnimated()

export default forwardRef(function ReactSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({ ...props }: Props<Option, IsMulti, Group>, ref?: ForwardedRef<unknown>) {
  return (
    <Select
      filterOption={createFilter({
        matchFrom: "start",
        ignoreCase: true,
      })}
      {...props}
      ref={ref}
      components={animatedComponents}
      classNames={{
        placeholder: () => "text-sm !text-muted-foreground",
        control: () => "!bg-background !border !border-input",
        input: () => "!text-popover-foreground text-sm",
        singleValue: () => "!text-popover-foreground",
        multiValue: () => "!bg-primary",
        multiValueLabel: () => "!text-primary-foreground ",
        multiValueRemove: () =>
          "!fill-primary-foreground !text-primary-foreground hover:!bg-secondary focus:!bg-secondary transition-colors duration-200 hover:!text-secondary-foreground focus:!text-secondary-foreground",
        menu: () =>
          "z-50 min-w-[8rem] rounded-md !border !shadow-md !bg-background text-sm",
        option: () => "!text-secondary-foreground",
      }}
      theme={(themes) => ({
        ...themes,
        colors: {
          ...themes.colors,
          primary25: "hsl(var(--input))",
          primary50: "hsl(var(--input))",
          primary: "hsl(var(--primary))",
          primary75: "hsl(var(--input))",
        },
      })}
    />
  )
})
