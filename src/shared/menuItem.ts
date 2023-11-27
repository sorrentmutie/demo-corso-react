export interface MenuItem {
    text: string,
    link: string,
    key: string,
}

export interface MenuProps {
    menuItems: MenuItem[],
    onItemClicked: (key: string) => void,
}