export interface GeneratedSchemaForRoot{
UserInfo: {
userId: Tag
id: number
title: string
completed: boolean
}
Persion: {
name: Pet
}
}
export interface Tag{
id?: number
name?: string
}
export interface Category{
id?: number
name?: string
}
export interface Pet{
id?: number
category?: Category
name: string
photoUrls: string[]
tags?: Tag[]
/**
 * pet status in the store
 */
status?: ("available" | "pending" | "sold" | )
}