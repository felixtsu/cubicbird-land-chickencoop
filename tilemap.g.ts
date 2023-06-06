// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "chickCoopInside":
            case "级别1":return tiles.createTilemap(hex`0d0008000104040404040404040404040502090909090909090909090906020909090909090909090909060209090909090909090909090602090909090909090909090906020909090909090909090909060209090909090909090909090603070707070000070707070708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 2 2 2 2 . . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.floorDark2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
