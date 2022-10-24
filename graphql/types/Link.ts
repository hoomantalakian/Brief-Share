// /graphql/types/Link.ts
import { objectType, extendType } from 'nexus'
import { User } from './User'

export const Link = objectType({
    name: 'Link',
    definition(t) {
        t.string('id')
        t.string('title')
        t.string('url')
        t.string('description')
        t.string('imageUrl')
        t.string('category')
        t.list.field('users', {
            type: User,
            async resolve(parent, _args, ctx) {
                return await ctx.prisma.link
                    .findUnique({
                        where: {
                            id: parent.id,
                        },
                    })
                    .users()
            },
        })
    },
})


export const LinksQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('links', {
            type: 'Link',
            resolve(_parent, _args, ctx) {
                return ctx.prisma.link.findMany()
            },
        })
    },
})