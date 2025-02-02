import { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillWriter = () => {
    const quillRef = useRef<ReactQuill>(null);
    const [value, setValue] = useState('');

    const handleChange = (content: string) => {
        console.log(content)
        setValue(content);
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    return (
        <div className="text-editor">
            <ReactQuill
                theme="snow"
                value={value}
                modules={modules}
                formats={formats}
                onChange={handleChange}
                ref={quillRef}
            />
        </div>
    );
};

export default QuillWriter;