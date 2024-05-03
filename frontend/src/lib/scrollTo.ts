export default function scrollTo(id: string) {
    const element = document.getElementById(id)

    const posicaoTopo = element?.getBoundingClientRect().top! + window.pageYOffset - 50; // Subtrai 50px de padding
    window.scrollTo({
        top: posicaoTopo,
        behavior: "smooth"
    });
}