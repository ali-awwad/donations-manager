import FormCancelButton from "@/Shared/FormCancelButton";
import FormSubmitButton from "@/Shared/FormSubmitButton";
import { useForm } from "@inertiajs/inertia-react";

export default function Create() {
    const { data, setData, post, processing, errors, isDirty } = useForm({
        category_name: "",
        color: "",
        description: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setData(key,value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route('categories.store'), data);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
            <div>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Create Category {isDirty && <span className="sup text-red-500">*</span>}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        A category may represent a general idea of sectors to cover, such as education, healthcare, rations and food.
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            About
                        </label>
                        <div className="mt-1">
                            <textarea
                                defaultValue={data.description} onChange={handleChange}
                                id="description"
                                name="description"
                                rows={3}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"

                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Write a few sentences about this category.</p>
                        {errors.description && <p className="mt-2 text-sm text-red-500">{errors.description}</p>}
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="category_name" className="block text-sm font-medium text-gray-700">
                            Category Name
                        </label>
                        <div className="mt-1">
                            <input
                                defaultValue={data.category_name} onChange={handleChange}
                                type="text"
                                name="category_name"
                                id="category_name"
                                autoComplete="category_name"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.category_name && <p className="mt-2 text-sm text-red-500">{errors.category_name}</p>}
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                            Color
                        </label>
                        <div className="mt-1">
                            <input
                                defaultValue={data.color} onChange={handleChange}
                                type="text"
                                name="color"
                                id="color"
                                autoComplete="color"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.color && <p className="mt-2 text-sm text-red-500">{errors.color}</p>}
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <FormCancelButton href={route('categories.index')} />
                    <FormSubmitButton loading={processing} isEdit={true} />
                </div>
            </div>
        </form>
    )
}
