
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <div>
                    <Link href="/">
                        <img className='h-30 w-60 mx-auto' src="/img/logo-learning-goals.png" alt="logo" />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
