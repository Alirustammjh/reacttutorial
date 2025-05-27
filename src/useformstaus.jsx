import { useForm } from 'react-hook-form';

function MyForm() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isDirty, isValid }
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} />
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
}


export default MyForm;