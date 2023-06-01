import GoProductsButton from '@/components/GoProductsButton';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';

export const revalidate = 3;

type Props = {
    params: {
        slug: string;
    };
};

export function generateMetadata({params} : Props){
    return {
        title: `Products name: ${params.slug}`,
    }

}

export default async function ProductPage({params} : Props) {
    // if (params.slug === 'nothing') {
    //     notFound();
    //   }

    const product = await getProduct(params.slug);
    if(!product) {
        // notFound();
        redirect('/products');
    }
    return (
        //서버 파일에 있는 데이터중, 해당 제품의 데이터를 찾아서 그걸 보여줌
        <>
        <h1>{product.name} Information </h1>
        <Image
            src={`/images/${product.image}`}
            alt={product.name}
            width='300'
            height='300'
        />
        <GoProductsButton />
        </>
    );
}


export async function generateStaticParams(){
    //모든 제품의 페이지들을 미리 만들어둘 수 있게하자 = SSG
    const products = await getProducts();
    return products.map(product => ({
        slug: product.id,
    }));
}
