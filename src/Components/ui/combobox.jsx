"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"



export function ComboboxDemo({ menuApa, textPilih }) {

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[190px] justify-between rounded-sm text-[0.7rem]"
        >
          {value
            ? menuApa.find((menuApa) => menuApa.value === value)?.label
            :`Select ${textPilih}...`}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0 font-poppins ">
        <Command>
          <CommandInput placeholder={`Search ${textPilih}`} className="h-9" />
          <CommandList>
            <CommandEmpty>No {textPilih} Option</CommandEmpty>
            <CommandGroup className="text-[0.7rem]">
              {menuApa.map((menuApa) => (
                <CommandItem
                  key={menuApa.value}
                  value={menuApa.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                className="text-[0.8rem]"
                >
                  {menuApa.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === menuApa.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
