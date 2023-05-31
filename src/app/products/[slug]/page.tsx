type Props = {
    params: {
        slug: string;
    };
};
export default function pantPage({params} : Props) {
    return (
        <h1>{params.slug} Information </h1>
    );
}


export function generateStaticParams(){
    const products = ['pants', 'skirt'];
    return products.map(product => ({
        slug: product,
    }));
}