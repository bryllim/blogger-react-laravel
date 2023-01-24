import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import Blog from '@/Components/Blog';
import InputError from '@/Components/InputError';
import { useForm, Head } from '@inertiajs/react';

export default function Index(props) {
    const { data, setData, post, errors, processing, reset } = useForm({
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('blogs.store'), {
            onSuccess: () => reset()
        });
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">New Blog</h2>}
        >
            <Head title="Index" />

            <div className="p-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-12">
                        <form onSubmit={submit}>
                            <h1 className="text-xl font-bold mb-3">Write a New Blog</h1>
                            <textarea
                                value={data.content}
                                placeholder="What's on your mind?"
                                className="h-72 w-full block border-grayy-300 focus:border-indigo-500 focus:ring focus:ring-opacity-50 rounded-md shadow-sm"
                                onChange={e => setData('content', e.target.value)}
                            >
                            </textarea>
                            <InputError className="mt-2" message={errors.content}></InputError>
                            <PrimaryButton processing={processing} className="mt-4 hover:bg-indigo-500">Submit</PrimaryButton>
                        </form>
                    </div>
                    <div className="bg-white shadow-sm rounded-lg divide-y mt-6 p-6">
                        {
                            props.blogs.map(blog => <Blog blog={blog}/>)
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
