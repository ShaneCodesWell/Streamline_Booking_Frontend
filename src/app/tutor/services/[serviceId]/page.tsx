export default function ServiceDetails ( {params}: 
    {params: {serviceId: string}} ) 
    {
    return <h1>Details about the Service {params.serviceId}</h1>;
}