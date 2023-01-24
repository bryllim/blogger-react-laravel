import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Blog({ blog }){
    return (
        <div className="p-6">
            <p className="font-bold">{blog.user.name}</p>
            <p className="text-sm text-gray-500">{dayjs(blog.created_at).fromNow()}</p>
            <p className="mt-3">{blog.content}</p>
        </div>
    )
}