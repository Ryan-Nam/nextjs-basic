/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects () {
        return [
            {
                source: '/products/deleted_forever', //이 경로로 왔을때
                destination: '/products', //여기로 redirect
                permanent: true, // 영원히 여기로 옮겨갔어! 라고 말해주는 것 (308)
                // 여기로 와도 안전해 라고 캐시해도 돼 라고 알려주는 것 = 308
            },
            {
                source: '/products/deleted_temp',
                destination: '/products', 
                permanent: false, // 일시적으로 이동한 것이므로
            }
        ]
    }
}


module.exports = nextConfig
