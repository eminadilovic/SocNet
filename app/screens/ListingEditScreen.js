import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import listingsApi from '../api/listings';
import {AppForm, SubmitButton, AppFormField, AppFormPicker} from '../components/forms/'
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select at least one image"),
    category: Yup.object().required().label("Category"),
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: 'red', icon:'apps'},
    { label: "Clothing", value: 2, backgroundColor: 'green', icon:'email'},
    { label: "Camera", value: 3, backgroundColor: 'blue', icon:'lock'}
]

function ListingEditScreen({route}) {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, {resetForm}) => {
        setProgress(0);
        setUploadVisible(true);
       const result = await listingsApi.addListing({...listing, location},
    progress => setProgress(progress)
    );
    setUploadVisible(false);

    if(!result.ok)
    return alert('Could not save the listing.'); 

    alert("Successs");
    resetForm();

    }

    return (
        <Screen style={styles.container}>
        <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
            <AppForm 
            initialValues={{
            title:'', 
            price:'', 
            description:'', 
            category: null,
            images: []
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            <FormImagePicker name="images" />
            <AppFormField 
                name='title'
                placeholder="Title"
                autoCapitalize="none"                
                maxLength={255}
            />
            <AppFormField 
                name='price'
                placeholder="Price"
                maxLength={8}
                keyboardType="numeric"
                width={120}
            />
            <AppFormPicker 
                items={categories}
                name='category'
                placeholder="Category"
                width='70%'
                PickerItemComponent={CategoryPickerItem}
                numberOfColumns={3}
            />
            <AppFormField 
                name='description'
                multiline
                placeholder="Description"
                numberOfLines={3}
                maxLength={255}
            />
            <SubmitButton title='Post'/>
            </AppForm>
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10
    }
})

export default ListingEditScreen;