export const tools = {
    photoshop : {
        label: 'Adobe Photoshop',
        icon: '/src/icons/photoshop.svg',
    },
    illustrator : {
        label: 'Adobe Illustrator',
        icon: '/src/icons/illustrator.svg',
    },
    max : {
        label: '3d Studio Max',
        icon: '/src/icons/3dsmax.svg',
    },
    vray : {
        label: 'V-ray',
        icon: '/src/icons/vray.svg',
    },
    voxedit : {
        label: 'VoxEdit',
        icon: '/src/icons/voxedit.svg',
    }
} as const;

export type ToolKey = keyof typeof tools;
export const toolKeys = Object.keys(tools) as [ToolKey, ...ToolKey[]];