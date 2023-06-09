namespace SpriteKind {
    export const Chicken = SpriteKind.create()
    export const Egg = SpriteKind.create()
}

namespace chickcoop {

    export function prepareChickCoop() {

        cbland.registerRoom("chickencoop", img`
            ....................8a8aa8a8....................
            .................aaa888aa8a8aaa.................
            ..............aaa8aa8a8aa888aa8aaa..............
            ...........8aa8aa8888a8aa8a8888aa8aa8...........
            ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
            .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
            ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
            dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
            bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
            dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
            dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
            dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
            bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
            dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
            dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
            dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
            bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
            dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
            dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
            dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
            bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
            dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
            dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
            dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
            bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
            dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
            dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
            dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
            ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
            bddddddddddddbcddddddddddddddddddcbddddddddddddb
            bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
            bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
            bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
            bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
            bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
            bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
            bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
            bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
            bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
            cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
            cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
            ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
            .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
            ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
            ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
            ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
            .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
            ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......`,
            assets.tilemap`chickCoopInside`)

        cbland_info.registerItem("鸡蛋", assets.image`eggImage`, 10)

        cbland.addExit("chickencoop", 5, 7, "village")
        cbland.addExit("chickencoop", 6, 7, "village")

        cbland.didEnterRoom("chickencoop", (player: Sprite, room: room.Room, entrance?: string) => {
            let chickenNumber = cbland.readSavingDataNumber('chickcoop', "chicken_number")
            if (!chickenNumber) {
                chickenNumber = 3
            }

            for (let i = 0; i < chickenNumber; i++) {
                let chicken = cbland.createRoomSprite(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . b 5 5 b . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . b b b b b 5 5 5 5 5 5 5 b . .
                . b d 5 b 5 5 5 5 5 5 5 5 b . .
                . . b 5 5 b 5 d 1 f 5 d 4 f . .
                . . b d 5 5 b 1 f f 5 4 4 c . .
                b b d b 5 5 5 d f b 4 4 4 4 b .
                b d d c d 5 5 b 5 4 4 4 4 4 4 b
                c d d d c c b 5 5 5 5 5 5 5 b .
                c b d d d d d 5 5 5 5 5 5 5 b .
                . c d d d d d d 5 5 5 5 5 d b .
                . . c b d d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
            `, SpriteKind.Chicken)
                tiles.placeOnRandomTile(chicken, sprites.dungeon.floorDark2)
                let angle = randint(-Math.PI, Math.PI)
                chicken.vx = 20 * Math.cos(angle)
                chicken.vy = 20 * Math.sin(angle)
                chicken.setFlag(SpriteFlag.BounceOnWall, true)
            }

            tiles.placeOnTile(player, tiles.getTileLocation(5,6))
            controller.moveSprite(player)
            scene.cameraFollowSprite(player)
        })

        forever(()=>{

            let chickens = sprites.allOfKind(SpriteKind.Chicken)

            for (let chicken of chickens ) {
                if (Math.percentChance(50)) {
                    let egg = cbland.createRoomSprite(assets.image`eggImage`, SpriteKind.Egg)
                    egg.x = chicken.x
                    egg.y = chicken.y
                }
            }

            pause(3000)

        })
     
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Egg, (sprite: Sprite, otherSprite: Sprite) => {
            otherSprite.sayText("捡鸡蛋", 500)

            if (controller.A.isPressed()) {
                otherSprite.destroy()
                cbland_info.getItem("鸡蛋", 1)
            }
        })

    }


}