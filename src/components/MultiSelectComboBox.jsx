import { useState } from "react";
import ComboBox from "./ComboBox";
import Chip from "./Chip";

  export default function MultiSelectComboBox({ 
    fetchItems,
    selectedItems,
    onSelectionChange,
    placeholder,
    itemKey = "id",
    itemLabel = "label",
  }) {

    function handeleSelectItem(item) {
      const alreadyAdded = selectedItems.some(i => i[itemKey] === item[itemKey])
      if(!alreadyAdded) {
        const updated = [...selectedItems, item]
        onSelectionChange(updated)
      }
    }

    function handleRemoveItem(item) {
      const updated = selectedItems.filter(i => i[itemKey] !== item[itemKey])
      onSelectionChange(updated)
    }

    return (
      <div>
        <ComboBox
          fetchItems={fetchItems}
          onItemSelect={handeleSelectItem}
          placeholder={placeholder}
          itemKey={itemKey}
          itemLabel={itemLabel}
          multiSelect={true}
        />
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedItems.map(item => (
            <Chip
              key={item[itemKey]}
              label={item[itemLabel]}
              selectable={true}
              selected={true}
              onToggle={() => handleRemoveItem(item)}
            />
          ))}
        </div>
      </div>
    )
  }