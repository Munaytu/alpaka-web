import ServiceDirectory from '@/components/service-directory';

export default function ServicesPage() {
    return (
        <div>
            <p className="text-muted-foreground mb-4 max-w-2xl">
                Una lista verificada y comentada de las plataformas y servicios que funcionan para los bolivianos, para ayudarte a tomar decisiones informadas.
            </p>
            <ServiceDirectory />
        </div>
    );
}
