import React from 'react';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';

function AppFormPicker({items, name, PickerItemComponent,numberOfColumns, placeholder, width}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();

    return (
        <>
             <AppPicker 
                items={items}
                onSelectItem={(item)=> setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
                PickerItemComponent={PickerItemComponent}
                numberOfColumns={numberOfColumns}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;