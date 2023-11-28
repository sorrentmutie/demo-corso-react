export interface MenuItem {
    text: string,
    url: string,
    key: string,
}

export interface MenuProps {
    menuItems: MenuItem[],
    onItemClicked: (key: string) => void,
}