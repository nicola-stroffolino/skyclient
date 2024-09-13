let m = {}
let f = {}
if(false){
/** 
 * 
 * 
 * Parent Class: PotionEffect
 */
m.getIsPotionDurationMax = "func_100011_g"
/** 
 * Toggle the isPotionDurationMax field.
 * 
 * Parent Class: PotionEffect
 */
m.setPotionDurationMax = "func_100012_b"
m.isKeyDown = {}
/** 
 * Returns whether the specified key binding is currently being pressed.
 *  
 * @param key The key tested
 * 
 * Parent Class: GameSettings
 */
m.isKeyDown.GameSettings = "func_100015_a"
/** 
 * Returns true if the key is pressed (used for continuous querying). Should be used in tickers.
 * 
 * Parent Class: KeyBinding
 */
m.isKeyDown.KeyBinding = "func_151470_d"

/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.isNoDespawnRequired = "func_104002_bU"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setForceGamemode = "func_104055_i"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getForceGamemode = "func_104056_am"
m.saveExtraData = {}
/** 
 * "Save extra data not associated with any Chunk.  Not saved during autosave
 * 
 * Parent Class: ChunkProviderServer
 */
m.saveExtraData.ChunkProviderServer = "func_104112_b"
/** 
 * "Save extra data not associated with any Chunk.  Not saved during autosave
 * 
 * Parent Class: AnvilChunkLoader
 */
m.saveExtraData.AnvilChunkLoader = "func_75818_b"

m.saveChunkData = {}
/** 
 * saves chunk data - currently only called during execution of the Save All command
 * 
 * Parent Class: WorldServer
 */
m.saveChunkData.WorldServer = "func_104140_m"
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
m.saveChunkData.ChunkProviderServer = "func_73242_b"

m.isNullOrEmpty = {}
/** 
 * 
 * 
 * Parent Class: Main
 */
m.isNullOrEmpty.Main = "func_110121_a"
/** 
 * Returns a value indicating whether the given string is null or empty.
 * 
 * Parent Class: StringUtils
 */
m.isNullOrEmpty.StringUtils = "func_151246_b"

m.onChunkLoad = {}
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.onChunkLoad.Entity = "func_110123_P"
/** 
 * Called when this Chunk is loaded by the ChunkProvider
 * 
 * Parent Class: Chunk
 */
m.onChunkLoad.Chunk = "func_76631_c"

m.getUniqueID = {}
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getUniqueID.Entity = "func_110124_au"
/** 
 * 
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.getUniqueID.PlayerUsageSnooper = "func_80006_f"

/** 
 * Called when this entity is broken. Entity parameter may be null.
 * 
 * Parent Class: EntityPainting
 */
m.onBroken = "func_110128_b"
/** 
 * Removes the dot representing this frame's position from the map when the item frame is broken.
 * 
 * Parent Class: EntityItemFrame
 */
m.removeFrameFromMap = "func_110131_b"
/** 
 * removes the specified IInvBasic from receiving further change notices
 *  
 * @param listener the listener to remove
 * 
 * Parent Class: InventoryBasic
 */
m.removeInventoryChangeListener = "func_110132_b"
m.setCustomName = {}
/** 
 * Sets the name of this inventory. This is displayed to the client on opening.
 * 
 * Parent Class: InventoryBasic
 */
m.setCustomName.InventoryBasic = "func_110133_a"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
m.setCustomName.TileEntityHopper = "func_145886_a"
/** 
 * 
 * 
 * Parent Class: TileEntityEnchantmentTable
 */
m.setCustomName.TileEntityEnchantmentTable = "func_145920_a"
/** 
 * 
 * 
 * Parent Class: TileEntityChest
 */
m.setCustomName.TileEntityChest = "func_145976_a"
/** 
 * 
 * 
 * Parent Class: TileEntityDispenser
 */
m.setCustomName.TileEntityDispenser = "func_146018_a"

/** 
 * Add a listener that will be notified when any item in this inventory is modified.
 *  
 * @param listener the listener to add
 * 
 * Parent Class: InventoryBasic
 */
m.addInventoryChangeListener = "func_110134_a"
/** 
 * 
 * 
 * Parent Class: IBossDisplayData
 */
m.getMaxHealth = "func_110138_aP"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getAbsorptionAmount = "func_110139_bj"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getAttributeMap = "func_110140_aT"
/** 
 * 1.8.9
 * 
 * Parent Class: EntityLivingBase
 */
m.getCombatTracker = "func_110142_aN"
m.getHealth = {}
/** 
 * 
 * 
 * Parent Class: IBossDisplayData
 */
m.getHealth.IBossDisplayData = "func_110143_aJ"
/** 
 * 
 * 
 * Parent Class: S06PacketUpdateHealth
 */
m.getHealth.S06PacketUpdateHealth = "func_149332_c"

/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getLastAttacker = "func_110144_aD"
/** 
 * Moves the entity to a position out of the way of its mount.
 * 
 * Parent Class: EntityLivingBase
 */
m.dismountEntity = "func_110145_l"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.updateDistance = "func_110146_f"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.applyEntityAttributes = "func_110147_ax"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getEntityAttribute = "func_110148_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.setAbsorptionAmount = "func_110149_m"
/** 
 * "Applies logic related to leashes
 * 
 * Parent Class: EntityCreature
 */
m.updateLeashedState = "func_110159_bB"
/** 
 * Removes the leash from this entity
 * 
 * Parent Class: EntityLiving
 */
m.clearLeashed = "func_110160_i"
/** 
 * Sets the entity to be leashed to.
 * 
 * Parent Class: EntityLiving
 */
m.setLeashedToEntity = "func_110162_b"
/** 
 * Enable the Entity persistence
 * 
 * Parent Class: EntityLiving
 */
m.enablePersistence = "func_110163_bv"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.allowLeashing = "func_110164_bC"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.recreateLeash = "func_110165_bF"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.getLeashedToEntity = "func_110166_bE"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.getLeashed = "func_110167_bD"
/** 
 * 
 * 
 * Parent Class: EntityCreature
 */
m.isWithinHomeDistanceCurrentPosition = "func_110173_bK"
/** 
 * 
 * 
 * Parent Class: EntityCreature
 */
m.getMaximumHomeDistance = "func_110174_bM"
/** 
 * Returns whether a home area is defined for this entity.
 * 
 * Parent Class: EntityCreature
 */
m.hasHome = "func_110175_bO"
/** 
 * 
 * 
 * Parent Class: EntityCreature
 */
m.detachHome = "func_110177_bN"
/** 
 * 
 * 
 * Parent Class: EntityGhast
 */
m.isAttacking = "func_110182_bF"
/** 
 * """Adds the value of the parameter times 20 to the age of this entity. If the entity is an adult (if the entity's age is greater than 0)
 * 
 * Parent Class: EntityAgeable
 */
m.addGrowth = "func_110195_a"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.increaseTemper = "func_110198_t"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.openGUI = "func_110199_f"
/** 
 * "Return true if the horse entity ready to mate. (no rider
 * 
 * Parent Class: EntityHorse
 */
m.canMate = "func_110200_cJ"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getMouthOpennessAngle = "func_110201_q"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getHorseVariant = "func_110202_bQ"
/** 
 * Returns randomized movement speed
 * 
 * Parent Class: EntityHorse
 */
m.getModifiedMovementSpeed = "func_110203_cN"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.isEatingHaystack = "func_110204_cc"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.isBreeding = "func_110205_ce"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setJumpPower = "func_110206_u"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setChested = "func_110207_m"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setHorseWatchableBoolean = "func_110208_b"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.isRearing = "func_110209_cd"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getVariantTexturePaths = "func_110212_cp"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setHorseType = "func_110214_p"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getHorseJumpStrength = "func_110215_cj"
/** 
 * """Spawns particles for the horse entity. par1 tells whether to spawn hearts. If it is false
 * 
 * Parent Class: EntityHorse
 */
m.spawnHorseParticles = "func_110216_r"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getAngrySoundName = "func_110217_cl"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getMaxTemper = "func_110218_cm"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setRearing = "func_110219_q"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.makeHorseRear = "func_110220_cK"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setHasReproduced = "func_110221_n"
/** 
 * Return true if the horse entity is sterile (Undead || Mule)
 * 
 * Parent Class: EntityHorse
 */
m.isSterile = "func_110222_cv"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getRearingAmount = "func_110223_p"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.dropChests = "func_110224_ci"
/** 
 * Returns number of slots depending horse type
 * 
 * Parent Class: EntityHorse
 */
m.getChestSize = "func_110225_cC"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.initHorseChest = "func_110226_cD"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setEatingHaystack = "func_110227_p"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.isAdultHorse = "func_110228_bR"
/** 
 * Return true if the horse entity can carry a chest.
 * 
 * Parent Class: EntityHorse
 */
m.canCarryChest = "func_110229_cs"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.resetTexturePrefix = "func_110230_cF"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.makeHorseRearWithSound = "func_110231_cz"
/** 
 * Updates the items in the saddle and armor slots of the horse's inventory.
 * 
 * Parent Class: EntityHorse
 */
m.updateHorseSlots = "func_110232_cE"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getHorseWatchableBoolean = "func_110233_w"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setHorseTamed = "func_110234_j"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setHorseVariant = "func_110235_q"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.mountTo = "func_110237_h"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setTemper = "func_110238_s"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.dropItemsInChest = "func_110240_a"
/** 
 * "Returns type of armor from DataWatcher (0 = iron
 * 
 * Parent Class: EntityHorse
 */
m.getHorseArmorIndexSynced = "func_110241_cb"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setBreeding = "func_110242_l"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getHasReproduced = "func_110243_cf"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.dropChestItems = "func_110244_cA"
/** 
 * Returns randomized jump strength
 * 
 * Parent Class: EntityHorse
 */
m.getModifiedJumpStrength = "func_110245_cM"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.isHorseJumping = "func_110246_bZ"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setHorseTexturePaths = "func_110247_cG"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.isTame = "func_110248_bS"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.openHorseMouth = "func_110249_cI"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getClosestHorse = "func_110250_a"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setHorseSaddled = "func_110251_o"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getTemper = "func_110252_cg"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getHorseSize = "func_110254_bY"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setHorseJumping = "func_110255_k"
/** 
 * "Used to know if the horse can be leashed
 * 
 * Parent Class: EntityHorse
 */
m.isUndead = "func_110256_cu"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.isHorseSaddled = "func_110257_ck"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getGrassEatingAmount = "func_110258_o"
/** 
 * Return true if the horse entity can wear an armor
 * 
 * Parent Class: EntityHorse
 */
m.canWearArmor = "func_110259_cr"
/** 
 * "0 = iron
 * 
 * Parent Class: EntityHorse
 */
m.getHorseArmorIndex = "func_110260_d"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.isChested = "func_110261_ca"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.prepareChunkForSpawn = "func_110262_ch"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setTamedBy = "func_110263_g"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.getHorseTexture = "func_110264_co"
/** 
 * "Returns the horse type. 0 = Normal
 * 
 * Parent Class: EntityHorse
 */
m.getHorseType = "func_110265_bP"
/** 
 * Returns randomized max health
 * 
 * Parent Class: EntityHorse
 */
m.getModifiedMaxHealth = "func_110267_cL"
/** 
 * "Notifies the merchant of a possible merchantrecipe being fulfilled or not. Usually
 * 
 * Parent Class: EntityVillager
 */
m.verifySellingItem = "func_110297_a_"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.displayGUIHorse = "func_110298_a"
m.getLocationCape = {}
/** 
 * 
 * 
 * Parent Class: AbstractClientPlayer
 */
m.getLocationCape.AbstractClientPlayer = "func_110303_q"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.getLocationCape.NetworkPlayerInfo = "func_178861_h"

/** 
 * 
 * 
 * Parent Class: AbstractClientPlayer
 */
m.getDownloadImageSkin = "func_110304_a"
m.getLocationSkin = {}
/** 
 * Returns true if the username has an associated skin.
 * 
 * Parent Class: AbstractClientPlayer
 */
m.getLocationSkin.AbstractClientPlayer = "func_110311_f"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.getLocationSkin.NetworkPlayerInfo = "func_178837_g"

m.isRidingHorse = {}
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
m.isRidingHorse.EntityPlayerSP = "func_110317_t"
/** 
 * "Checks if the player is riding a horse
 * 
 * Parent Class: PlayerControllerMP
 */
m.isRidingHorse.PlayerControllerMP = "func_110738_j"

/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
m.sendHorseJump = "func_110318_g"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
m.getHorseJumpPower = "func_110319_bJ"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.setRecordPlaying = "func_175188_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.setEntityActionState = "func_110430_a"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getSession = "func_110432_I"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getTextureManager = "func_110434_K"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.refreshResources = "func_110436_a"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getProxy = "func_110437_J"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getResourcePackRepository = "func_110438_M"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.updateDisplayMode = "func_110441_Q"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getResourceManager = "func_110442_L"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getServerProxy = "func_110454_ao"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getOpPermissionLevel = "func_110455_j"
/** 
 * 
 * 
 * Parent Class: PackMetadataSection
 */
m.getPackFormat = "func_110462_b"
m.getFrameIndex = {}
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
m.getFrameIndex.AnimationMetadataSection = "func_110468_c"
/** 
 * 
 * 
 * Parent Class: AnimationFrame
 */
m.getFrameIndex.AnimationFrame = "func_110496_c"

m.getFrameTime = {}
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
m.getFrameTime.AnimationMetadataSection = "func_110469_d"
/** 
 * 
 * 
 * Parent Class: AnimationFrame
 */
m.getFrameTime.AnimationFrame = "func_110497_b"

/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
m.frameHasTime = "func_110470_b"
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
m.getFrameHeight = "func_110471_a"
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
m.getFrameTimeSingle = "func_110472_a"
m.getFrameCount = {}
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
m.getFrameCount.AnimationMetadataSection = "func_110473_c"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getFrameCount.TextureAtlasSprite = "func_110970_k"

/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
m.getFrameWidth = "func_110474_b"
/** 
 * 
 * 
 * Parent Class: TextureMetadataSection
 */
m.getTextureBlur = "func_110479_a"
/** 
 * 
 * 
 * Parent Class: TextureMetadataSection
 */
m.getTextureClamp = "func_110480_b"
/** 
 * The name of this section type as it appears in JSON.
 * 
 * Parent Class: TextureMetadataSectionSerializer
 */
m.getSectionName = "func_110483_a"
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSectionSerializer
 */
m.parseAnimationFrame = "func_110492_a"
/** 
 * 
 * 
 * Parent Class: AnimationFrame
 */
m.hasNoTime = "func_110495_a"
/** 
 * 
 * 
 * Parent Class: IMetadataSerializer
 */
m.parseMetadataSection = "func_110503_a"
/** 
 * 
 * 
 * Parent Class: IMetadataSerializer
 */
m.registerMetadataSectionType = "func_110504_a"
/** 
 * Returns a Gson instance with type adapters registered for metadata sections.
 * 
 * Parent Class: IMetadataSerializer
 */
m.getGson = "func_110505_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
m.getResourcePack = "func_110514_c"
m.getResourcePackName = {}
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
m.getResourcePackName.ResourcePackRepository$Entry = "func_110515_d"
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
m.getResourcePackName.SimpleResource = "func_177240_d"

/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
m.updateResourcePack = "func_110516_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
m.closeResourcePack = "func_110517_b"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
m.bindTexturePackIcon = "func_110518_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
m.getTexturePackDescription = "func_110519_e"
m.getMetadata = {}
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
m.getMetadata.SimpleResource = "func_110526_a"
/** 
 * Gets the item damage value on an ItemStack that represents this fish type
 * 
 * Parent Class: ItemFishFood$FishType
 */
m.getMetadata.ItemFishFood$FishType = "func_150976_a"
/** 
 * 
 * 
 * Parent Class: BlockStoneBrick$EnumType
 */
m.getMetadata.BlockStoneBrick$EnumType = "func_176612_a"
/** 
 * 
 * 
 * Parent Class: BlockStoneSlab$EnumType
 */
m.getMetadata.BlockStoneSlab$EnumType = "func_176624_a"
/** 
 * Returns the EnumType's metadata value.
 * 
 * Parent Class: BlockStone$EnumType
 */
m.getMetadata.BlockStone$EnumType = "func_176642_a"
/** 
 * 
 * 
 * Parent Class: BlockWall$EnumType
 */
m.getMetadata.BlockWall$EnumType = "func_176657_a"
/** 
 * 
 * 
 * Parent Class: BlockSandStone$EnumType
 */
m.getMetadata.BlockSandStone$EnumType = "func_176675_a"
/** 
 * 
 * 
 * Parent Class: BlockSand$EnumType
 */
m.getMetadata.BlockSand$EnumType = "func_176688_a"
/** 
 * 
 * 
 * Parent Class: EnumDyeColor
 */
m.getMetadata.EnumDyeColor = "func_176765_a"
/** 
 * 
 * 
 * Parent Class: BlockQuartz$EnumType
 */
m.getMetadata.BlockQuartz$EnumType = "func_176796_a"
/** 
 * 
 * 
 * Parent Class: BlockPrismarine$EnumType
 */
m.getMetadata.BlockPrismarine$EnumType = "func_176807_a"
/** 
 * 
 * 
 * Parent Class: BlockRedSandstone$EnumType
 */
m.getMetadata.BlockRedSandstone$EnumType = "func_176827_a"
/** 
 * 
 * 
 * Parent Class: BlockPlanks$EnumType
 */
m.getMetadata.BlockPlanks$EnumType = "func_176839_a"
/** 
 * 
 * 
 * Parent Class: BlockLever$EnumOrientation
 */
m.getMetadata.BlockLever$EnumOrientation = "func_176855_a"
/** 
 * 
 * 
 * Parent Class: BlockSilverfish$EnumType
 */
m.getMetadata.BlockSilverfish$EnumType = "func_176881_a"
/** 
 * 
 * 
 * Parent Class: BlockHugeMushroom$EnumType
 */
m.getMetadata.BlockHugeMushroom$EnumType = "func_176896_a"
/** 
 * 
 * 
 * Parent Class: BlockStoneSlabNew$EnumType
 */
m.getMetadata.BlockStoneSlabNew$EnumType = "func_176915_a"
/** 
 * 
 * 
 * Parent Class: BlockDirt$DirtType
 */
m.getMetadata.BlockDirt$DirtType = "func_176925_a"
/** 
 * 
 * 
 * Parent Class: BlockRailBase$EnumRailDirection
 */
m.getMetadata.BlockRailBase$EnumRailDirection = "func_177015_a"
/** 
 * 
 * 
 * Parent Class: ItemModelMesher
 */
m.getMetadata.ItemModelMesher = "func_178084_b"
/** 
 * Converts the given ItemStack damage value into a metadata value to be placed in the world when this Item is placed as a Block (mostly used with ItemBlocks).
 * 
 * Parent Class: Item
 */
m.getMetadata.Item = "func_77647_b"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.getMetadata.ItemStack = "func_77960_j"

m.getInputStream = {}
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
m.getInputStream.SimpleResource = "func_110527_b"
/** 
 * 
 * 
 * Parent Class: IResourcePack
 */
m.getInputStream.IResourcePack = "func_110590_a"
/** 
 * 
 * 
 * Parent Class: FallbackResourceManager
 */
m.getInputStream.FallbackResourceManager = "func_177245_a"

/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
m.hasMetadata = "func_110528_c"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
m.getResource = "func_110536_a"
/** 
 * 
 * 
 * Parent Class: FallbackResourceManager
 */
m.getLocationMcmeta = "func_110537_b"
/** 
 * 
 * 
 * Parent Class: FallbackResourceManager
 */
m.addResourcePack = "func_110538_a"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
m.reloadResources = "func_110541_a"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
m.registerReloadListener = "func_110542_a"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
m.clearResources = "func_110543_a"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
m.notifyReloadListeners = "func_110544_b"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
m.reloadResourcePack = "func_110545_a"
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.onResourceManagerReload = "func_110549_a"
m.tick = {}
/** 
 * 
 * 
 * Parent Class: ITickable
 */
m.tick.ITickable = "func_110550_d"
/** 
 * Main function called by run() every loop.
 * 
 * Parent Class: MinecraftServer
 */
m.tick.MinecraftServer = "func_71217_p"
/** 
 * Runs a single tick for the world
 * 
 * Parent Class: WorldServer
 */
m.tick.WorldServer = "func_72835_b"
/** 
 * Runs a single tick for the village siege
 * 
 * Parent Class: VillageSiege
 */
m.tick.VillageSiege = "func_75528_a"
/** 
 * Runs a single tick for the village collection
 * 
 * Parent Class: VillageCollection
 */
m.tick.VillageCollection = "func_75544_a"
/** 
 * Called periodically by VillageCollection
 * 
 * Parent Class: Village
 */
m.tick.Village = "func_75560_a"

m.loadTexture = {}
/** 
 * 
 * 
 * Parent Class: ITextureObject
 */
m.loadTexture.ITextureObject = "func_110551_a"
/** 
 * 
 * 
 * Parent Class: TextureManager
 */
m.loadTexture.TextureManager = "func_110579_a"

/** 
 * 
 * 
 * Parent Class: ITextureObject
 */
m.getGlTextureId = "func_110552_b"
/** 
 * 
 * 
 * Parent Class: DynamicTexture
 */
m.updateDynamicTexture = "func_110564_a"
/** 
 * 
 * 
 * Parent Class: DynamicTexture
 */
m.getTextureData = "func_110565_c"
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
m.initMissingImage = "func_110569_e"
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
m.loadTextureAtlas = "func_110571_b"
m.getAtlasSprite = {}
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
m.getAtlasSprite.TextureMap = "func_110572_b"
/** 
 * 
 * 
 * Parent Class: Stitcher$Holder
 */
m.getAtlasSprite.Stitcher$Holder = "func_98150_a"

m.bindTexture = {}
/** 
 * 
 * 
 * Parent Class: TextureManager
 */
m.bindTexture.TextureManager = "func_110577_a"
/** 
 * 
 * 
 * Parent Class: Render
 */
m.bindTexture.Render = "func_110776_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySpecialRenderer
 */
m.bindTexture.TileEntitySpecialRenderer = "func_147499_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.bindTexture.GlStateManager = "func_179144_i"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.bindTexture.TextureUtil = "func_94277_a"

/** 
 * 
 * 
 * Parent Class: TextureManager
 */
m.getDynamicTextureLocation = "func_110578_a"
/** 
 * 
 * 
 * Parent Class: TextureManager
 */
m.loadTickableTexture = "func_110580_a"
m.getTexture = {}
/** 
 * 
 * 
 * Parent Class: TextureManager
 */
m.getTexture.TextureManager = "func_110581_b"
/** 
 * 
 * 
 * Parent Class: BlockModelShapes
 */
m.getTexture.BlockModelShapes = "func_178122_a"

/** 
 * 
 * 
 * Parent Class: IResourcePack
 */
m.getPackImage = "func_110586_a"
m.getResourceDomains = {}
/** 
 * 
 * 
 * Parent Class: IResourcePack
 */
m.getResourceDomains.IResourcePack = "func_110587_b"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
m.getResourceDomains.SimpleReloadableResourceManager = "func_135055_a"

/** 
 * 
 * 
 * Parent Class: IResourcePack
 */
m.resourceExists = "func_110589_b"
/** 
 * 
 * 
 * Parent Class: FolderResourcePack
 */
m.getInputStreamByName = "func_110591_a"
/** 
 * 
 * 
 * Parent Class: AbstractResourcePack
 */
m.locationToName = "func_110592_c"
/** 
 * 
 * 
 * Parent Class: FolderResourcePack
 */
m.hasResourceName = "func_110593_b"
/** 
 * 
 * 
 * Parent Class: AbstractResourcePack
 */
m.logNameNotLowercase = "func_110594_c"
/** 
 * 
 * 
 * Parent Class: AbstractResourcePack
 */
m.getRelativeName = "func_110595_a"
/** 
 * 
 * 
 * Parent Class: AbstractResourcePack
 */
m.readMetadata = "func_110596_a"
/** 
 * 
 * 
 * Parent Class: FileResourcePack
 */
m.getResourcePackZipFile = "func_110599_c"
/** 
 * 
 * 
 * Parent Class: DefaultResourcePack
 */
m.getResourceStream = "func_110605_c"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
m.getRepositoryEntriesAll = "func_110609_b"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
m.updateRepositoryEntriesAll = "func_110611_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
m.getDirResourcepacks = "func_110612_e"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
m.getRepositoryEntries = "func_110613_c"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
m.getResourcePackFiles = "func_110614_g"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
m.fixDirResourcepacks = "func_110616_f"
/** 
 * 
 * 
 * Parent Class: ResourceLocation
 */
m.getResourcePath = "func_110623_a"
/** 
 * 
 * 
 * Parent Class: ResourceLocation
 */
m.getResourceDomain = "func_110624_b"
/** 
 * "Returns a copy of the given string
 * 
 * Parent Class: EnumChatFormatting
 */
m.getTextWithoutFormattingCodes = "func_110646_a"
/** 
 * 
 * 
 * Parent Class: Util
 */
m.getOSType = "func_110647_a"
/** 
 * Sets the rotations for a ModelRenderer in the ModelHorse class.
 * 
 * Parent Class: ModelHorse
 */
m.setBoxRotation = "func_110682_a"
/** 
 * Fixes and offsets a rotation in the ModelHorse class.
 * 
 * Parent Class: ModelHorse
 */
m.updateHorseRotation = "func_110683_a"
/** 
 * Returns the location of an entity's texture. Doesn't seem to be called unless you call Render.bindEntityTexture.
 * 
 * Parent Class: RenderPlayer
 */
m.getEntityTexture = "func_110775_a"
/** 
 * 
 * 
 * Parent Class: RenderLiving
 */
m.renderLeash = "func_110827_b"
/** 
 * Gets the value between start and end according to pct
 * 
 * Parent Class: RenderLiving
 */
m.interpolateValue = "func_110828_a"
/** 
 * 
 * 
 * Parent Class: Stitcher
 */
m.addSprite = "func_110934_a"
/** 
 * 
 * 
 * Parent Class: Stitcher
 */
m.getCurrentWidth = "func_110935_a"
/** 
 * 
 * 
 * Parent Class: Stitcher
 */
m.getCurrentHeight = "func_110936_b"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.setIconWidth = "func_110966_b"
m.getOriginY = {}
/** 
 * "Returns the Y position of this icon on its texture sheet
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getOriginY.TextureAtlasSprite = "func_110967_i"
/** 
 * 
 * 
 * Parent Class: Stitcher$Slot
 */
m.getOriginY.Stitcher$Slot = "func_94185_c"

/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.setFramesTextureData = "func_110968_a"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.setIconHeight = "func_110969_c"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.initSprite = "func_110971_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.updateAnaglyph = "func_110985_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.readImageData = "func_110986_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.uploadTextureImage = "func_110987_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.uploadTexture = "func_110988_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.uploadTextureImageAllocate = "func_110989_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.copyToBuffer = "func_110990_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.allocateTexture = "func_110991_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.uploadTextureImageSubImpl = "func_110993_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.copyToBufferPos = "func_110994_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.uploadTextureImageSub = "func_110995_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.glGenTextures = "func_110996_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.setTextureClamped = "func_110997_a"
/** 
 * 
 * 
 * Parent Class: BaseAttribute
 */
m.getAttributeUnlocalizedName = "func_111108_a"
/** 
 * 
 * 
 * Parent Class: RangedAttribute
 */
m.clampValue = "func_111109_a"
/** 
 * 
 * 
 * Parent Class: BaseAttribute
 */
m.getDefaultValue = "func_111110_b"
/** 
 * 
 * 
 * Parent Class: BaseAttribute
 */
m.getShouldWatch = "func_111111_c"
/** 
 * 
 * 
 * Parent Class: BaseAttribute
 */
m.setShouldWatch = "func_111112_a"
m.getDescription = {}
/** 
 * 
 * 
 * Parent Class: RangedAttribute
 */
m.getDescription.RangedAttribute = "func_111116_f"
/** 
 * Returns the description of the Crash Report.
 * 
 * Parent Class: CrashReport
 */
m.getDescription.CrashReport = "func_71501_a"
/** 
 * Returns the fully description of the achievement - ready to be displayed on screen.
 * 
 * Parent Class: Achievement
 */
m.getDescription.Achievement = "func_75989_e"

/** 
 * 
 * 
 * Parent Class: RangedAttribute
 */
m.setDescription = "func_111117_a"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.applyModifier = "func_111121_a"
/** 
 * Get the Attribute this is an instance of
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.getAttribute = "func_111123_a"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.removeModifier = "func_111124_b"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.getBaseValue = "func_111125_b"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.getAttributeValue = "func_111126_e"
/** 
 * "Returns attribute modifier
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.getModifier = "func_111127_a"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.setBaseValue = "func_111128_a"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.computeValue = "func_111129_g"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.getModifiersByOperation = "func_111130_a"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.flagForUpdate = "func_111131_f"
/** 
 * 
 * 
 * Parent Class: DataWatcher
 */
m.getWatchableObjectFloat = "func_111145_d"
/** 
 * 
 * 
 * Parent Class: BaseAttributeMap
 */
m.getAllAttributes = "func_111146_a"
/** 
 * 
 * 
 * Parent Class: BaseAttributeMap
 */
m.applyAttributeModifiers = "func_111147_b"
/** 
 * 
 * 
 * Parent Class: BaseAttributeMap
 */
m.removeAttributeModifiers = "func_111148_a"
/** 
 * "Registers an attribute with this AttributeMap
 * 
 * Parent Class: ServersideAttributeMap
 */
m.registerAttribute = "func_111150_b"
/** 
 * 
 * 
 * Parent Class: ServersideAttributeMap
 */
m.getAttributeInstance = "func_111151_a"
/** 
 * 
 * 
 * Parent Class: ServersideAttributeMap
 */
m.getAttributeInstanceByName = "func_111152_a"
/** 
 * 
 * 
 * Parent Class: ServersideAttributeMap
 */
m.getWatchedAttributes = "func_111160_c"
/** 
 * 
 * 
 * Parent Class: ServersideAttributeMap
 */
m.getAttributeInstanceSet = "func_111161_b"
/** 
 * 
 * 
 * Parent Class: AttributeModifier
 */
m.getAmount = "func_111164_d"
/** 
 * @see #isSaved
 * 
 * Parent Class: AttributeModifier
 */
m.isSaved = "func_111165_e"
m.getName = {}
/** 
 * 
 * 
 * Parent Class: AttributeModifier
 */
m.getName.AttributeModifier = "func_111166_b"
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
m.getName.S3EPacketTeams = "func_149312_c"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse$MinecraftProtocolVersionIdentifier
 */
m.getName.ServerStatusResponse$MinecraftProtocolVersionIdentifier = "func_151303_a"
/** 
 * Returns the name of the save format.
 * 
 * Parent Class: ISaveFormat
 */
m.getName.ISaveFormat = "func_154333_a"
/** 
 * 
 * 
 * Parent Class: EnumDyeColor
 */
m.getName.EnumDyeColor = "func_176610_l"
/** 
 * Get the name for the given value.
 * 
 * Parent Class: IProperty
 */
m.getName.IProperty = "func_177702_a"
/** 
 * 
 * 
 * Parent Class: ItemArmor$ArmorMaterial
 */
m.getName.ItemArmor$ArmorMaterial = "func_179242_c"
/** 
 * 
 * 
 * Parent Class: ChatComponentScore
 */
m.getName.ChatComponentScore = "func_179995_g"
/** 
 * 
 * 
 * Parent Class: EntityMinecart$EnumMinecartType
 */
m.getName.EntityMinecart$EnumMinecartType = "func_180040_b"
/** 
 * Get the name of this object. For players this returns their username
 * 
 * Parent Class: InventoryCraftResult
 */
m.getName.InventoryCraftResult = "func_70005_c_"
/** 
 * returns the name of the potion
 * 
 * Parent Class: Potion
 */
m.getName.Potion = "func_76393_a"
/** 
 * Returns the name of this game type
 * 
 * Parent Class: WorldSettings$GameType
 */
m.getName.WorldSettings$GameType = "func_77149_b"
/** 
 * Return the name of key in translation table of this enchantment.
 * 
 * Parent Class: EnchantmentProtection
 */
m.getName.EnchantmentProtection = "func_77320_a"
/** 
 * 
 * 
 * Parent Class: IScoreObjectiveCriteria
 */
m.getName.IScoreObjectiveCriteria = "func_96636_a"
/** 
 * 
 * 
 * Parent Class: ScoreObjective
 */
m.getName.ScoreObjective = "func_96679_b"

m.getID = {}
/** 
 * 
 * 
 * Parent Class: AttributeModifier
 */
m.getID.AttributeModifier = "func_111167_a"
/** 
 * "Returns an integer that represents the state of the world border. Growing
 * 
 * Parent Class: EnumBorderStatus
 */
m.getID.EnumBorderStatus = "func_177766_a"
/** 
 * Returns the ID of this game type
 * 
 * Parent Class: WorldSettings$GameType
 */
m.getID.WorldSettings$GameType = "func_77148_a"

/** 
 * @see #isSaved
 * 
 * Parent Class: AttributeModifier
 */
m.setSaved = "func_111168_a"
/** 
 * 
 * 
 * Parent Class: AttributeModifier
 */
m.getOperation = "func_111169_c"
/** 
 * 
 * 
 * Parent Class: EntityAITarget
 */
m.getTargetDistance = "func_111175_f"
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.getAttributeModifierAmount = "func_111183_a"
/** 
 * Used by potions to register the attribute they modify.
 * 
 * Parent Class: Potion
 */
m.registerPotionAttributeModifier = "func_111184_a"
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.applyAttributesModifiersToEntity = "func_111185_a"
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.getAttributeModifierMap = "func_111186_k"
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.removeAttributesModifiersFromEntity = "func_111187_a"
/** 
 * "Sends the entity metadata (DataWatcher) and attributes to all players tracking this entity
 * 
 * Parent Class: EntityTrackerEntry
 */
m.sendMetadataToAllAssociatedPlayers = "func_111190_b"
/** 
 * This method currently only increases chunk inhabited time. Extension is possible in next versions
 * 
 * Parent Class: PlayerManager$PlayerInstance
 */
m.processChunk = "func_111194_a"
/** 
 * Increases chunk inhabited time every 8000 ticks
 * 
 * Parent Class: PlayerManager$PlayerInstance
 */
m.increaseInhabitedTime = "func_111196_a"
/** 
 * "Gets a map of item attribute modifiers
 * 
 * Parent Class: Item
 */
m.getItemAttributeModifiers = "func_111205_h"
/** 
 * "Tries to get an Item by it's name (e.g. minecraft:apple) or a String representation of a numerical ID. If both fail
 * 
 * Parent Class: Item
 */
m.getByNameOrId = "func_111206_d"
/** 
 * "Returns true if the item can be used on the given entity
 * 
 * Parent Class: Item
 */
m.itemInteractionForEntity = "func_111207_a"
/** 
 * Returns the enchantment types relevant to this tab
 * 
 * Parent Class: CreativeTabs
 */
m.getRelevantEnchantmentTypes = "func_111225_m"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
m.hasRelevantEnchantmentType = "func_111226_a"
/** 
 * Sets the enchantment types for populating this tab with enchanting books
 * 
 * Parent Class: CreativeTabs
 */
m.setRelevantEnchantmentTypes = "func_111229_a"
/** 
 * "Actualy only call when we want to render the white square effect over the slots. Return always True
 * 
 * Parent Class: Slot
 */
m.canBeHovered = "func_111238_b"
/** 
 * "Creates an NBTTagList from a BaseAttributeMap
 * 
 * Parent Class: SharedMonsterAttributes
 */
m.writeBaseAttributeMapToNBT = "func_111257_a"
/** 
 * 
 * 
 * Parent Class: SharedMonsterAttributes
 */
m.applyModifiersToAttributeInstance = "func_111258_a"
/** 
 * Creates an AttributeModifier from an NBTTagCompound
 * 
 * Parent Class: SharedMonsterAttributes
 */
m.readAttributeModifierFromNBT = "func_111259_a"
/** 
 * "Creates an NBTTagCompound from an AttributeInstance
 * 
 * Parent Class: SharedMonsterAttributes
 */
m.writeAttributeInstanceToNBT = "func_111261_a"
/** 
 * Creates an NBTTagCompound from an AttributeModifier
 * 
 * Parent Class: SharedMonsterAttributes
 */
m.writeAttributeModifierToNBT = "func_111262_a"
/** 
 * Gets the maximum distance that the path finding will search in.
 * 
 * Parent Class: PathNavigate
 */
m.getPathSearchRange = "func_111269_d"
/** 
 * 
 * 
 * Parent Class: AxisAlignedBB
 */
m.union = "func_111270_a"
/** 
 * 
 * 
 * Parent Class: FontRenderer
 */
m.getUnicodePageLocation = "func_111271_a"
/** 
 * 
 * 
 * Parent Class: FontRenderer
 */
m.readFontTexture = "func_111272_d"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.interactWithEntity = "func_111282_a"
/** 
 * Gets the attribute modifiers for this ItemStack.
 * Will check for an NBT tag list containing modifiers for the stack.
 * 
 * Parent Class: ItemStack
 */
m.getAttributeModifiers = "func_111283_C"
/** 
 * 
 * 
 * Parent Class: Session
 */
m.getUsername = "func_111285_a"
/** 
 * 
 * 
 * Parent Class: Session
 */
m.getSessionID = "func_111286_b"
/** 
 * 
 * 
 * Parent Class: DedicatedServer
 */
m.setGuiEnabled = "func_120011_ar"
/** 
 * Creates the server GUI and sets it visible for the user.
 * 
 * Parent Class: MinecraftServerGui
 */
m.createServerGui = "func_120016_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServerGui
 */
m.getLogComponent = "func_120018_d"
/** 
 * Generates new StatsComponent and returns it.
 * 
 * Parent Class: MinecraftServerGui
 */
m.getStatsComponent = "func_120019_b"
/** 
 * Generates new PlayerListComponent and returns it.
 * 
 * Parent Class: MinecraftServerGui
 */
m.getPlayerListComponent = "func_120020_c"
/** 
 * "gets the current fullness of the moon expressed as a float between 1.0 and 0.0
 * 
 * Parent Class: World
 */
m.getCurrentMoonPhaseFactor = "func_130001_d"
/** 
 * First layer of player interaction
 * 
 * Parent Class: EntityMinecartEmpty
 */
m.interactFirst = "func_130002_c"
m.getOriginX = {}
/** 
 * "Returns the X position of this icon on its texture sheet
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getOriginX.TextureAtlasSprite = "func_130010_a"
/** 
 * 
 * 
 * Parent Class: Stitcher$Slot
 */
m.getOriginX.Stitcher$Slot = "func_94186_b"

/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.setLastAttacker = "func_130011_c"
/** 
 * "Get the world
 * 
 * Parent Class: EntityMinecartCommandBlock$1
 */
m.getEntityWorld = "func_130014_f_"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getCurrentTimeMillis = "func_130071_aq"
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
m.getAnimationFrame = "func_130072_d"
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
m.getFrameIndexSet = "func_130073_e"
/** 
 * 
 * 
 * Parent Class: IResourcePack
 */
m.getPackName = "func_130077_b"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.hasAnimationMetadata = "func_130098_m"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.allocateFrameTextureData = "func_130099_d"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.resetSprite = "func_130102_n"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.clearFramesTextureData = "func_130103_l"
/** 
 * Returns the saved value of System#currentTimeMillis when the game started
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.getMinecraftStartTimeMillis = "func_130105_g"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getLanguageManager = "func_135016_M"
m.getLanguages = {}
/** 
 * 
 * 
 * Parent Class: LanguageMetadataSection
 */
m.getLanguages.LanguageMetadataSection = "func_135018_a"
/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
m.getLanguages.LanguageManager = "func_135040_d"

/** 
 * Loads the locale data for the list of resources.
 * 
 * Parent Class: Locale
 */
m.loadLocaleData = "func_135028_a"
/** 
 * "For each domain $D and language $L
 * 
 * Parent Class: Locale
 */
m.loadLocaleDataFiles = "func_135022_a"
/** 
 * "Calls String.format(translateKey(key)
 * 
 * Parent Class: Locale
 */
m.formatMessage = "func_135023_a"
/** 
 * 
 * 
 * Parent Class: Locale
 */
m.checkUnicode = "func_135024_b"
m.isUnicode = {}
/** 
 * 
 * 
 * Parent Class: Locale
 */
m.isUnicode.Locale = "func_135025_a"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.isUnicode.Minecraft = "func_152349_b"

/** 
 * "Returns the translation
 * 
 * Parent Class: Locale
 */
m.translateKeyPrivate = "func_135026_c"
/** 
 * 
 * 
 * Parent Class: Language
 */
m.getLanguageCode = "func_135034_a"
/** 
 * 
 * 
 * Parent Class: Language
 */
m.isBidirectional = "func_135035_b"
/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
m.getCurrentLanguage = "func_135041_c"
/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
m.isCurrentLocaleUnicode = "func_135042_a"
/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
m.parseLanguageMetadata = "func_135043_a"
/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
m.isCurrentLanguageBidirectional = "func_135044_b"
/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
m.setCurrentLanguage = "func_135045_a"
/** 
 * 
 * 
 * Parent Class: I18n
 */
m.setLocale = "func_135051_a"
m.format = {}
/** 
 * "format(a
 * 
 * Parent Class: I18n
 */
m.format.I18n = "func_135052_a"
/** 
 * Formats a given stat for human consumption.
 * 
 * Parent Class: IStatType
 */
m.format.IStatType = "func_75843_a"
/** 
 * 
 * 
 * Parent Class: StatBase
 */
m.format.StatBase = "func_75968_a"

/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
m.getAllResources = "func_135056_b"
/** 
 * 
 * 
 * Parent Class: IResourcePack
 */
m.getPackMetadata = "func_135058_a"
/** 
 * Replaces all the current instance's translations with the ones that are passed in.
 * 
 * Parent Class: StringTranslate
 */
m.replaceWith = "func_135063_a"
/** 
 * Tries to look up a translation for the given key; spits back the key if no result was found.
 * 
 * Parent Class: StringTranslate
 */
m.tryTranslateKey = "func_135064_c"
/** 
 * Clear any custom name set for this ItemStack
 * 
 * Parent Class: ItemStack
 */
m.clearCustomName = "func_135074_t"
/** 
 * 
 * 
 * Parent Class: GuiMainMenu
 */
m.switchToRealms = "func_140005_i"
/** 
 * 
 * 
 * Parent Class: EntityHanging
 */
m.shouldSetPosAfterLoading = "func_142008_O"
/** 
 * Returns true if the entity is on a specific team.
 * 
 * Parent Class: EntityLivingBase
 */
m.isOnTeam = "func_142012_a"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getLastAttackerTime = "func_142013_aG"
/** 
 * 
 * 
 * Parent Class: EntityTameable
 */
m.isOnSameTeam = "func_142014_c"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getRevengeTimer = "func_142015_aE"
/** 
 * 
 * 
 * Parent Class: EntityWolf
 */
m.shouldAttackEntity = "func_142018_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
m.getClientBrand = "func_142021_k"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.removeAllModifiers = "func_142049_d"
m.formatString = {}
/** 
 * 
 * 
 * Parent Class: Team
 */
m.formatString.Team = "func_142053_d"
/** 
 * Formats the strings based on 'IStatStringFormat' interface.
 *  
 * @param str The String to format
 * 
 * Parent Class: IStatStringFormat
 */
m.formatString.IStatStringFormat = "func_74535_a"

/** 
 * Same as ==
 * 
 * Parent Class: Team
 */
m.isSameTeam = "func_142054_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.markPlayerActive = "func_143004_u"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setPlayerIdleTimeout = "func_143006_e"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getMaxPlayerIdleMinutes = "func_143007_ar"
/** 
 * "Reads and sets structure base data (boundingbox
 * 
 * Parent Class: StructureComponent
 */
m.readStructureBaseNBT = "func_143009_a"
/** 
 * "Writes structure base data (id
 * 
 * Parent Class: StructureComponent
 */
m.createStructureBaseNBT = "func_143010_b"
/** 
 * (abstract) Helper method to read subclass data from NBT
 * 
 * Parent Class: StructureVillagePieces$Village
 */
m.readStructureFromNBT = "func_143011_b"
/** 
 * (abstract) Helper method to write subclass data to NBT
 * 
 * Parent Class: StructureVillagePieces$Village
 */
m.writeStructureToNBT = "func_143012_a"
/** 
 * 
 * 
 * Parent Class: StructureVillagePieces
 */
m.registerVillagePieces = "func_143016_a"
m.readFromNBT = {}
/** 
 * 
 * 
 * Parent Class: MapGenVillage$Start
 */
m.readFromNBT.MapGenVillage$Start = "func_143017_b"
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
m.readFromNBT.TileEntityPiston = "func_145839_a"
/** 
 * Reads the entity from NBT (calls an abstract helper method to read specialized data)
 * 
 * Parent Class: Entity
 */
m.readFromNBT.Entity = "func_70020_e"
/** 
 * Reads from the given tag list and fills the slots in the inventory with the correct items.
 *  
 * @param nbtTagListIn tagList to read from
 * 
 * Parent Class: InventoryPlayer
 */
m.readFromNBT.InventoryPlayer = "func_70443_b"
/** 
 * reads in data from the NBTTagCompound into this MapDataBase
 * 
 * Parent Class: VillageCollection
 */
m.readFromNBT.VillageCollection = "func_76184_a"
/** 
 * Read the stack fields from a NBT object.
 * 
 * Parent Class: ItemStack
 */
m.readFromNBT.ItemStack = "func_77963_c"
/** 
 * Set defined game rules from NBT.
 * 
 * Parent Class: GameRules
 */
m.readFromNBT.GameRules = "func_82768_a"
/** 
 * 
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.readFromNBT.MobSpawnerBaseLogic = "func_98270_a"

/** 
 * 
 * 
 * Parent Class: StructureStart
 */
m.getChunkPosZ = "func_143018_f"
/** 
 * 
 * 
 * Parent Class: StructureStart
 */
m.getChunkPosX = "func_143019_e"
/** 
 * 
 * 
 * Parent Class: StructureStart
 */
m.readStructureComponentsFromNBT = "func_143020_a"
/** 
 * 
 * 
 * Parent Class: StructureStart
 */
m.writeStructureComponentsToNBT = "func_143021_a"
m.writeToNBT = {}
/** 
 * 
 * 
 * Parent Class: MapGenVillage$Start
 */
m.writeToNBT.MapGenVillage$Start = "func_143022_a"
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
m.writeToNBT.TileEntityPiston = "func_145841_b"
/** 
 * 
 * 
 * Parent Class: Rotations
 */
m.writeToNBT.Rotations = "func_179414_a"
/** 
 * Save the entity to NBT (calls an abstract helper method to write extra data)
 * 
 * Parent Class: Entity
 */
m.writeToNBT.Entity = "func_70109_d"
/** 
 * "Writes the inventory out as a list of compound tags. This is where the slot indices are used (+100 for armor
 * 
 * Parent Class: InventoryPlayer
 */
m.writeToNBT.InventoryPlayer = "func_70442_a"
/** 
 * "write data to NBTTagCompound from this MapDataBase
 * 
 * Parent Class: VillageCollection
 */
m.writeToNBT.VillageCollection = "func_76187_b"
/** 
 * Write the stack fields to a NBT object. Return the new NBT object.
 * 
 * Parent Class: ItemStack
 */
m.writeToNBT.ItemStack = "func_77955_b"
/** 
 * Return the defined game rules as NBT.
 * 
 * Parent Class: GameRules
 */
m.writeToNBT.GameRules = "func_82770_a"
/** 
 * 
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.writeToNBT.MobSpawnerBaseLogic = "func_98280_b"

/** 
 * 
 * 
 * Parent Class: MapGenVillage
 */
m.getStructureName = "func_143025_a"
/** 
 * 
 * 
 * Parent Class: MapGenStructure
 */
m.setStructureStart = "func_143026_a"
/** 
 * 
 * 
 * Parent Class: MapGenStructure
 */
m.initializeStructureData = "func_143027_a"
/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
m.registerStructureComponent = "func_143031_a"
/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
m.getStructureComponent = "func_143032_b"
/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
m.getStructureStartName = "func_143033_a"
/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
m.registerStructure = "func_143034_b"
m.getStructureStart = {}
/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
m.getStructureStart.MapGenStructureIO = "func_143035_a"
/** 
 * 
 * 
 * Parent Class: MapGenVillage
 */
m.getStructureStart.MapGenVillage = "func_75049_b"

/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
m.getStructureComponentName = "func_143036_a"
m.getTagCompound = {}
/** 
 * 
 * 
 * Parent Class: MapGenStructureData
 */
m.getTagCompound.MapGenStructureData = "func_143041_a"
/** 
 * 
 * 
 * Parent Class: S49PacketUpdateEntityNBT
 */
m.getTagCompound.S49PacketUpdateEntityNBT = "func_179763_a"
/** 
 * Returns the NBTTagCompound of the ItemStack.
 * 
 * Parent Class: ItemStack
 */
m.getTagCompound.ItemStack = "func_77978_p"

/** 
 * 
 * 
 * Parent Class: MapGenStructureData
 */
m.formatChunkCoords = "func_143042_b"
/** 
 * "Writes the NBT tag of an instance of this structure type to the internal NBT tag
 * 
 * Parent Class: MapGenStructureData
 */
m.writeInstance = "func_143043_a"
/** 
 * 
 * 
 * Parent Class: ComponentScatteredFeaturePieces
 */
m.registerScatteredFeaturePieces = "func_143045_a"
/** 
 * 
 * 
 * Parent Class: StructureStrongholdPieces
 */
m.registerStrongholdPieces = "func_143046_a"
/** 
 * 
 * 
 * Parent Class: StructureMineshaftPieces
 */
m.registerStructurePieces = "func_143048_a"
/** 
 * 
 * 
 * Parent Class: StructureNetherBridgePieces
 */
m.registerNetherFortressPieces = "func_143049_a"
/** 
 * Send a chat message to the CommandSender
 * 
 * Parent Class: Entity
 */
m.addChatMessage = "func_145747_a"
m.getDisplayName = {}
/** 
 * Get the formatted ChatComponent that will be used for the sender's username in chat
 * 
 * Parent Class: InventoryCraftResult
 */
m.getDisplayName.InventoryCraftResult = "func_145748_c_"
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
m.getDisplayName.S3EPacketTeams = "func_149306_d"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement$EnumUsage
 */
m.getDisplayName.VertexFormatElement$EnumUsage = "func_177384_a"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement$EnumType
 */
m.getDisplayName.VertexFormatElement$EnumType = "func_177396_b"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.getDisplayName.NetworkPlayerInfo = "func_178854_k"
/** 
 * 
 * 
 * Parent Class: S38PacketPlayerListItem$AddPlayerData
 */
m.getDisplayName.S38PacketPlayerListItem$AddPlayerData = "func_179961_d"
/** 
 * return the display name of the save
 * 
 * Parent Class: SaveFormatComparator
 */
m.getDisplayName.SaveFormatComparator = "func_75788_b"
/** 
 * returns the display name of the itemstack
 * 
 * Parent Class: ItemStack
 */
m.getDisplayName.ItemStack = "func_82833_r"
/** 
 * 
 * 
 * Parent Class: ScoreObjective
 */
m.getDisplayName.ScoreObjective = "func_96678_d"

/** 
 * Returns the lastOutput.
 * 
 * Parent Class: CommandBlockLogic
 */
m.getLastOutput = "func_145749_h"
/** 
 * 
 * 
 * Parent Class: CommandBlockLogic
 */
m.setLastOutput = "func_145750_b"
/** 
 * Sets the command.
 * 
 * Parent Class: TileEntityCommandBlock$1
 */
m.setCommand = "func_145752_a"
/** 
 * Returns the command of the command block.
 * 
 * Parent Class: CommandBlockLogic
 */
m.getCommand = "func_145753_i"
m.setName = {}
/** 
 * 
 * 
 * Parent Class: CommandBlockLogic
 */
m.setName.CommandBlockLogic = "func_145754_b"
/** 
 * 
 * 
 * Parent Class: TileEntityBrewingStand
 */
m.setName.TileEntityBrewingStand = "func_145937_a"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon
 */
m.setName.TileEntityBeacon = "func_145999_a"
/** 
 * Sets the enchantment name
 * 
 * Parent Class: Enchantment
 */
m.setName.Enchantment = "func_77322_b"

/** 
 * 
 * 
 * Parent Class: CommandBlockLogic
 */
m.trigger = "func_145755_a"
/** 
 * 
 * 
 * Parent Class: EntityMinecartCommandBlock$1
 */
m.updateCommand = "func_145756_e"
/** 
 * Stores data to NBT format.
 * 
 * Parent Class: CommandBlockLogic
 */
m.writeDataToNBT = "func_145758_a"
/** 
 * Reads NBT formatting and stored data into variables.
 * 
 * Parent Class: CommandBlockLogic
 */
m.readDataFromNBT = "func_145759_b"
/** 
 * returns the successCount int.
 * 
 * Parent Class: CommandBlockLogic
 */
m.getSuccessCount = "func_145760_g"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.setEntityId = "func_145769_d"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.isInRangeToRender3d = "func_145770_h"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.pushOutOfBlocks = "func_145771_j"
/** 
 * Return whether this entity should NOT trigger a pressure plate or a tripwire.
 * 
 * Parent Class: EntityBat
 */
m.doesEntityNotTriggerPressurePlate = "func_145773_az"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.doBlockCollisions = "func_145775_I"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getSwimSound = "func_145776_H"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getSplashSound = "func_145777_O"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.dropItemWithOffset = "func_145778_a"
m.dropItem = {}
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.dropItem.Entity = "func_145779_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.dropItem.EntityPlayer = "func_146097_a"

/** 
 * 
 * 
 * Parent Class: EntitySlime
 */
m.onDataWatcherUpdate = "func_145781_i"
m.getEntityId = {}
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getEntityId.Entity = "func_145782_y"
/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
m.getEntityId.S2DPacketOpenWindow = "func_148897_h"
/** 
 * 
 * 
 * Parent Class: S1EPacketRemoveEntityEffect
 */
m.getEntityId.S1EPacketRemoveEntityEffect = "func_149076_c"
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
m.getEntityId.S01PacketJoinGame = "func_149197_c"
/** 
 * 
 * 
 * Parent Class: S1CPacketEntityMetadata
 */
m.getEntityId.S1CPacketEntityMetadata = "func_149375_d"
/** 
 * 
 * 
 * Parent Class: S1BPacketEntityAttach
 */
m.getEntityId.S1BPacketEntityAttach = "func_149403_d"
/** 
 * 
 * 
 * Parent Class: S1DPacketEntityEffect
 */
m.getEntityId.S1DPacketEntityEffect = "func_149426_d"
/** 
 * 
 * 
 * Parent Class: S20PacketEntityProperties
 */
m.getEntityId.S20PacketEntityProperties = "func_149442_c"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
m.getEntityId.S18PacketEntityTeleport = "func_149451_c"

/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.setOwner = "func_145797_a"
m.getOwner = {}
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.getOwner.EntityItem = "func_145798_i"
/** 
 * 
 * 
 * Parent Class: EntityTameable
 */
m.getOwner.EntityTameable = "func_70902_q"

/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.setThrower = "func_145799_b"
m.getThrower = {}
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.getThrower.EntityItem = "func_145800_j"
/** 
 * 
 * 
 * Parent Class: EntityThrowable
 */
m.getThrower.EntityThrowable = "func_85052_h"

/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
m.setHurtEntities = "func_145806_a"
/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
m.getWorldObj = "func_145807_e"
/** 
 * Returns true if this thing is named
 * 
 * Parent Class: InventoryCraftResult
 */
m.hasCustomName = "func_145818_k_"
m.getCommandBlockLogic = {}
/** 
 * 
 * 
 * Parent Class: EntityMinecartCommandBlock
 */
m.getCommandBlockLogic.EntityMinecartCommandBlock = "func_145822_e"
/** 
 * 
 * 
 * Parent Class: TileEntityCommandBlock
 */
m.getCommandBlockLogic.TileEntityCommandBlock = "func_145993_a"

m.addMapping = {}
/** 
 * Adds a new two-way mapping between the class and its string name in both hashmaps.
 * 
 * Parent Class: TileEntity
 */
m.addMapping.TileEntity = "func_145826_a"
/** 
 * adds a mapping between Entity classes and both a string representation and an ID
 * 
 * Parent Class: EntityList
 */
m.addMapping.EntityList = "func_75618_a"

/** 
 * Creates a new entity and loads its data from the specified NBT.
 * 
 * Parent Class: TileEntity
 */
m.createAndLoadEntity = "func_145827_c"
/** 
 * 
 * 
 * Parent Class: TileEntity
 */
m.addInfoToCrashReport = "func_145828_a"
/** 
 * validates a tile entity
 * 
 * Parent Class: TileEntity
 */
m.validate = "func_145829_t"
/** 
 * Returns true if the worldObj isn't null.
 * 
 * Parent Class: TileEntity
 */
m.hasWorldObj = "func_145830_o"
m.getWorld = {}
/** 
 * Returns the worldObj for this tileEntity.
 * 
 * Parent Class: EntityMinecartHopper
 */
m.getWorld.EntityMinecartHopper = "func_145831_w"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getWorld.Chunk = "func_177412_p"
/** 
 * 
 * 
 * Parent Class: TileEntitySpecialRenderer
 */
m.getWorld.TileEntitySpecialRenderer = "func_178459_a"
/** 
 * 
 * 
 * Parent Class: EntityDragon
 */
m.getWorld.EntityDragon = "func_82194_d"
/** 
 * 
 * 
 * Parent Class: ILocation
 */
m.getWorld.ILocation = "func_82618_k"

m.getBlockMetadata = {}
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
m.getBlockMetadata.TileEntityPiston = "func_145832_p"
/** 
 * Return the metadata corresponding to the given coordinates inside a chunk.
 * 
 * Parent Class: Chunk
 */
m.getBlockMetadata.Chunk = "func_76628_c"
/** 
 * 
 * 
 * Parent Class: BlockSourceImpl
 */
m.getBlockMetadata.BlockSourceImpl = "func_82620_h"

/** 
 * 
 * 
 * Parent Class: TileEntity
 */
m.getMaxRenderDistanceSquared = "func_145833_n"
/** 
 * Sets the worldObj for this tileEntity.
 * 
 * Parent Class: TileEntity
 */
m.setWorldObj = "func_145834_a"
m.getDistanceSq = {}
/** 
 * Returns the square of the distance between this entity and the passed in coordinates.
 * 
 * Parent Class: TileEntity
 */
m.getDistanceSq.TileEntity = "func_145835_a"
/** 
 * "Gets the squared distance to the position. Args: x
 * 
 * Parent Class: Entity
 */
m.getDistanceSq.Entity = "func_70092_e"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.getDistanceSq.WorldRenderer = "func_181665_a"

/** 
 * 
 * 
 * Parent Class: TileEntityChest
 */
m.updateContainingBlockInfo = "func_145836_u"
/** 
 * 
 * 
 * Parent Class: TileEntity
 */
m.isInvalid = "func_145837_r"
m.getBlockType = {}
/** 
 * Gets the block type at the location of this entity (client-only).
 * 
 * Parent Class: TileEntity
 */
m.getBlockType.TileEntity = "func_145838_q"
/** 
 * 
 * 
 * Parent Class: S24PacketBlockAction
 */
m.getBlockType.S24PacketBlockAction = "func_148868_c"
/** 
 * Get the Type of this flower (Yellow/Red)
 * 
 * Parent Class: BlockYellowFlower
 */
m.getBlockType.BlockYellowFlower = "func_176495_j"
/** 
 * 
 * 
 * Parent Class: BlockFlower$EnumFlowerType
 */
m.getBlockType.BlockFlower$EnumFlowerType = "func_176964_a"

/** 
 * 
 * 
 * Parent Class: TileEntityMobSpawner
 */
m.receiveClientEvent = "func_145842_c"
/** 
 * invalidates a tile entity
 * 
 * Parent Class: TileEntityEnderChest
 */
m.invalidate = "func_145843_s"
/** 
 * Allows for a specialized description packet to be created. This is often used to sync tile entity data from the server to the client easily. For example this is used by signs to synchronise the text to be displayed.
 * 
 * Parent Class: TileEntitySkull
 */
m.getDescriptionPacket = "func_145844_m"
m.getRecord = {}
/** 
 * 
 * 
 * Parent Class: BlockJukebox$TileEntityJukebox
 */
m.getRecord.BlockJukebox$TileEntityJukebox = "func_145856_a"
/** 
 * Return the record item corresponding to the given name.
 * 
 * Parent Class: ItemRecord
 */
m.getRecord.ItemRecord = "func_150926_b"

/** 
 * 
 * 
 * Parent Class: BlockJukebox$TileEntityJukebox
 */
m.setRecord = "func_145857_a"
m.getProgress = {}
/** 
 * Get interpolated progress value (between lastProgress and progress) given the fractional time between ticks as an argument
 * 
 * Parent Class: TileEntityPiston
 */
m.getProgress.TileEntityPiston = "func_145860_a"
/** 
 * 
 * 
 * Parent Class: S25PacketBlockBreakAnim
 */
m.getProgress.S25PacketBlockBreakAnim = "func_148846_g"

/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
m.launchWithSlimeBlock = "func_145863_a"
/** 
 * "removes a piston's tile entity (and if the piston is moving
 * 
 * Parent Class: TileEntityPiston
 */
m.clearPistonTileEntity = "func_145866_f"
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
m.shouldPistonHeadBeRendered = "func_145867_d"
/** 
 * Returns true if a piston is extending
 * 
 * Parent Class: TileEntityPiston
 */
m.isExtending = "func_145868_b"
/** 
 * change pitch by -> (currentPitch + 1) % 25
 * 
 * Parent Class: TileEntityNote
 */
m.changePitch = "func_145877_a"
/** 
 * 
 * 
 * Parent Class: TileEntityMobSpawner
 */
m.getSpawnerBaseLogic = "func_145881_a"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
m.transferItemsOut = "func_145883_k"
/** 
 * Returns the IInventory for the specified hopper
 * 
 * Parent Class: TileEntityHopper
 */
m.getHopperInventory = "func_145884_b"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
m.updateHopper = "func_145887_i"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
m.isOnTransferCooldown = "func_145888_j"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
m.captureDroppedItems = "func_145891_a"
/** 
 * Returns the IInventory (if applicable) of the TileEntity at the specified position
 * 
 * Parent Class: TileEntityHopper
 */
m.getInventoryAtPosition = "func_145893_b"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
m.canCombine = "func_145894_a"
/** 
 * Returns the IInventory that this hopper is pointing into
 * 
 * Parent Class: TileEntityHopper
 */
m.getInventoryForHopperTransfer = "func_145895_l"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
m.setTransferCooldown = "func_145896_c"
/** 
 * Attempts to place the passed EntityItem's stack into the inventory using as many slots as possible. Returns false if the stackSize of the drop was not depleted.
 * 
 * Parent Class: TileEntityHopper
 */
m.putDropInInventoryAllSlots = "func_145898_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySkull
 */
m.setSkullRotation = "func_145903_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySkull
 */
m.getSkullType = "func_145904_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySkull
 */
m.getSkullRotation = "func_145906_b"
m.getPlayer = {}
/** 
 * 
 * 
 * Parent Class: TileEntitySign
 */
m.getPlayer.TileEntitySign = "func_145911_b"
/** 
 * 
 * 
 * Parent Class: S0APacketUseBed
 */
m.getPlayer.S0APacketUseBed = "func_149091_a"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
m.getPlayer.S0CPacketSpawnPlayer = "func_179819_c"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.getPlayer.CommandBase = "func_82359_c"

m.setPlayer = {}
/** 
 * 
 * 
 * Parent Class: TileEntitySign
 */
m.setPlayer.TileEntitySign = "func_145912_a"
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.setPlayer.CommandScoreboard = "func_147197_m"

/** 
 * Sets the sign's isEditable flag to the specified parameter.
 * 
 * Parent Class: TileEntitySign
 */
m.setEditable = "func_145913_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySign
 */
m.getIsEditable = "func_145914_a"
/** 
 * 
 * 
 * Parent Class: TileEntityBrewingStand
 */
m.canBrew = "func_145934_k"
/** 
 * The result of brewing a potion of the specified damage value with an ingredient itemstack.
 * 
 * Parent Class: TileEntityBrewingStand
 */
m.getPotionResult = "func_145936_c"
/** 
 * 
 * 
 * Parent Class: TileEntityBrewingStand
 */
m.brewPotions = "func_145940_l"
/** 
 * "Returns true if the furnace can smelt an item
 * 
 * Parent Class: TileEntityFurnace
 */
m.canSmelt = "func_145948_k"
/** 
 * Turn one item from the furnace source stack into the appropriate smelted item in the furnace result stack
 * 
 * Parent Class: TileEntityFurnace
 */
m.smeltItem = "func_145949_j"
m.isBurning = {}
/** 
 * 
 * 
 * Parent Class: TileEntityFurnace
 */
m.isBurning.TileEntityFurnace = "func_174903_a"
/** 
 * Returns true if the entity is on fire. Used by render to add the fire effect on rendering.
 * 
 * Parent Class: EntityWitherSkull
 */
m.isBurning.EntityWitherSkull = "func_70027_ad"

/** 
 * 
 * 
 * Parent Class: TileEntityFurnace
 */
m.setCustomInventoryName = "func_145951_a"
/** 
 * "Returns the number of ticks that the supplied fuel item will keep the furnace burning
 * 
 * Parent Class: TileEntityFurnace
 */
m.getItemBurnTime = "func_145952_a"
/** 
 * 
 * 
 * Parent Class: TileEntityFurnace
 */
m.isItemFuel = "func_145954_b"
/** 
 * 
 * 
 * Parent Class: TileEntityFlowerPot
 */
m.setFlowerPotData = "func_145964_a"
/** 
 * 
 * 
 * Parent Class: TileEntityFlowerPot
 */
m.getFlowerPotItem = "func_145965_a"
/** 
 * 
 * 
 * Parent Class: TileEntityFlowerPot
 */
m.getFlowerPotData = "func_145966_b"
/** 
 * 
 * 
 * Parent Class: TileEntityEnderChest
 */
m.openChest = "func_145969_a"
/** 
 * 
 * 
 * Parent Class: TileEntityEnderChest
 */
m.closeChest = "func_145970_b"
/** 
 * 
 * 
 * Parent Class: TileEntityEnderChest
 */
m.canBeUsed = "func_145971_a"
/** 
 * Performs the check for adjacent chests to determine if this chest is double or not.
 * 
 * Parent Class: TileEntityChest
 */
m.checkForAdjacentChests = "func_145979_i"
/** 
 * 
 * 
 * Parent Class: TileEntityChest
 */
m.getChestType = "func_145980_j"
/** 
 * 
 * 
 * Parent Class: TileEntityComparator
 */
m.setOutputSignal = "func_145995_a"
/** 
 * 
 * 
 * Parent Class: TileEntityComparator
 */
m.getOutputSignal = "func_145996_a"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon
 */
m.addEffectsToPlayers = "func_146000_x"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon
 */
m.shouldBeamRender = "func_146002_i"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon
 */
m.updateSegmentColors = "func_146003_y"
/** 
 * 
 * 
 * Parent Class: TileEntityDispenser
 */
m.getDispenseSlot = "func_146017_i"
/** 
 * Add the given ItemStack to this Dispenser. Return the Slot the Item was placed in or -1 if no free slot is available.
 * 
 * Parent Class: TileEntityDispenser
 */
m.addItemStack = "func_146019_a"
m.getStrVsBlock = {}
/** 
 * 
 * 
 * Parent Class: InventoryPlayer
 */
m.getStrVsBlock.InventoryPlayer = "func_146023_a"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.getStrVsBlock.Item = "func_150893_a"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.getStrVsBlock.ItemStack = "func_150997_a"

/** 
 * 
 * 
 * Parent Class: InventoryPlayer
 */
m.getInventorySlotContainItemAndDamage = "func_146024_c"
/** 
 * 
 * 
 * Parent Class: InventoryPlayer
 */
m.canHeldItemHarvest = "func_146025_b"
/** 
 * "removed one item of specified Item from inventory (if it is in a stack
 * 
 * Parent Class: InventoryPlayer
 */
m.consumeInventoryItem = "func_146026_a"
/** 
 * Checks if a specified Item is inside the inventory
 * 
 * Parent Class: InventoryPlayer
 */
m.hasItem = "func_146028_b"
/** 
 * 
 * 
 * Parent Class: InventoryPlayer
 */
m.getInventorySlotContainItem = "func_146029_c"
/** 
 * 
 * 
 * Parent Class: InventoryPlayer
 */
m.setCurrentItem = "func_146030_a"
/** 
 * 
 * 
 * Parent Class: InventoryEnderChest
 */
m.setChestTileEntity = "func_146031_a"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
m.getFishingResult = "func_146033_f"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
m.handleHookRetraction = "func_146034_e"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
m.handleHookCasting = "func_146035_c"
/** 
 * 
 * 
 * Parent Class: EntityItemFrame
 */
m.dropItemOrSelf = "func_146065_b"
/** 
 * Entity won't drop items or experience points if this returns false
 * 
 * Parent Class: EntityMob
 */
m.canDropLoot = "func_146066_aG"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getFallSoundString = "func_146067_o"
/** 
 * 
 * 
 * Parent Class: EntityZombie
 */
m.getDropItem = "func_146068_u"
/** 
 * Multiplies the height and width by the provided float.
 * 
 * Parent Class: EntityZombie
 */
m.multiplySize = "func_146069_a"
/** 
 * Sets or removes EntityAIBreakDoor task
 * 
 * Parent Class: EntityZombie
 */
m.setBreakDoorsAItask = "func_146070_a"
/** 
 * sets the size of the entity to be half of its current size if true.
 * 
 * Parent Class: EntityZombie
 */
m.setChildSize = "func_146071_k"
/** 
 * 
 * 
 * Parent Class: EntityZombie
 */
m.isBreakDoorsTaskSet = "func_146072_bX"
m.explode = {}
/** 
 * Creates an explosion as determined by this creeper's power and explosion radius.
 * 
 * Parent Class: EntityCreeper
 */
m.explode.EntityCreeper = "func_146077_cc"
/** 
 * 
 * 
 * Parent Class: BlockTNT
 */
m.explode.BlockTNT = "func_180692_a"
/** 
 * 
 * 
 * Parent Class: EntityTNTPrimed
 */
m.explode.EntityTNTPrimed = "func_70515_d"

/** 
 * 
 * 
 * Parent Class: EntityCreeper
 */
m.hasIgnited = "func_146078_ca"
m.ignite = {}
/** 
 * 
 * 
 * Parent Class: EntityCreeper
 */
m.ignite.EntityCreeper = "func_146079_cb"
/** 
 * Ignites this TNT cart.
 * 
 * Parent Class: EntityMinecartTNT
 */
m.ignite.EntityMinecartTNT = "func_94105_c"

/** 
 * 
 * 
 * Parent Class: EntityAnimal
 */
m.setInLove = "func_146082_f"
/** 
 * 
 * 
 * Parent Class: EntityAnimal
 */
m.getPlayerInLove = "func_146083_cb"
/** 
 * Returns true if given item is horse armor
 * 
 * Parent Class: EntityHorse
 */
m.isArmorItem = "func_146085_a"
/** 
 * Set horse armor stack (for example: new ItemStack(Items.iron_horse_armor))
 * 
 * Parent Class: EntityHorse
 */
m.setHorseArmorStack = "func_146086_d"
/** 
 * Gets a players UUID given their GameProfie
 * 
 * Parent Class: EntityPlayer
 */
m.getUUID = "func_146094_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.openEditCommandBlock = "func_146095_a"
m.canHarvestBlock = {}
/** 
 * Checks if the player has the ability to harvest a block (checks current inventory item for a tool if necessary)
 * 
 * Parent Class: EntityPlayer
 */
m.canHarvestBlock.EntityPlayer = "func_146099_a"
/** 
 * Check whether this Item can harvest the given Block
 * 
 * Parent Class: Item
 */
m.canHarvestBlock.Item = "func_150897_b"
/** 
 * Check whether the given Block can be harvested using this ItemStack.
 * 
 * Parent Class: ItemStack
 */
m.canHarvestBlock.ItemStack = "func_150998_b"

m.getGameProfile = {}
/** 
 * Returns the GameProfile for this player
 * 
 * Parent Class: EntityPlayer
 */
m.getGameProfile.EntityPlayer = "func_146103_bH"
/** 
 * "Get a GameProfile given the MinecraftServer and the player's username. 
 * 
 *  The UUID of the GameProfile will <b>not</b> be null. If the server is offline
 * 
 * Parent Class: PlayerProfileCache
 */
m.getGameProfile.PlayerProfileCache = "func_152650_a"
/** 
 * Get the player's GameProfile
 * 
 * Parent Class: PlayerProfileCache$ProfileEntry
 */
m.getGameProfile.PlayerProfileCache$ProfileEntry = "func_152668_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayClient
 */
m.getGameProfile.NetHandlerPlayClient = "func_175105_e"
/** 
 * Returns the GameProfile for the player represented by this NetworkPlayerInfo instance
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.getGameProfile.NetworkPlayerInfo = "func_178845_a"

/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.addChatComponentMessage = "func_146105_b"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
m.getStatFileWriter = "func_146107_m"
/** 
 * "Draws a textured rectangle at z = 0. Args: x
 * 
 * Parent Class: Gui
 */
m.drawModalRectWithCustomSizedTexture = "func_146110_a"
/** 
 * 
 * 
 * Parent Class: GuiBeacon$PowerButton
 */
m.drawButtonForegroundLayer = "func_146111_b"
/** 
 * Draws this button to the screen.
 * 
 * Parent Class: GuiMerchant$MerchantButton
 */
m.drawButton = "func_146112_a"
/** 
 * 
 * 
 * Parent Class: GuiScreenOptionsSounds$Button
 */
m.playPressSound = "func_146113_a"
/** 
 * "Returns 0 if the button is disabled
 * 
 * Parent Class: GuiScreenOptionsSounds$Button
 */
m.getHoverState = "func_146114_a"
/** 
 * Whether the mouse cursor is currently over the button.
 * 
 * Parent Class: GuiButton
 */
m.isMouseOver = "func_146115_a"
m.mousePressed = {}
/** 
 * Returns true if the mouse has been pressed on this control. Equivalent of MouseListener.mousePressed(MouseEvent e).
 * 
 * Parent Class: GuiScreenOptionsSounds$Button
 */
m.mousePressed.GuiScreenOptionsSounds$Button = "func_146116_c"
/** 
 * Returns true if the mouse has been pressed on this control.
 * 
 * Parent Class: ResourcePackListEntry
 */
m.mousePressed.ResourcePackListEntry = "func_148278_a"

/** 
 * 
 * 
 * Parent Class: GuiButtonRealmsProxy
 */
m.getButtonWidth = "func_146117_b"
m.mouseReleased = {}
/** 
 * Fired when the mouse button is released. Equivalent of MouseListener.mouseReleased(MouseEvent e).
 * 
 * Parent Class: GuiScreenOptionsSounds$Button
 */
m.mouseReleased.GuiScreenOptionsSounds$Button = "func_146118_a"
/** 
 * "Called when a mouse button is released.  Args : mouseX
 * 
 * Parent Class: GuiScreenResourcePacks
 */
m.mouseReleased.GuiScreenResourcePacks = "func_146286_b"
/** 
 * 
 * 
 * Parent Class: GuiListExtended
 */
m.mouseReleased.GuiListExtended = "func_148181_b"
/** 
 * "Fired when the mouse button is released. Arguments: index
 * 
 * Parent Class: ResourcePackListEntry
 */
m.mouseReleased.ResourcePackListEntry = "func_148277_b"

/** 
 * Fired when the mouse button is dragged. Equivalent of MouseListener.mouseDragged(MouseEvent e).
 * 
 * Parent Class: GuiScreenOptionsSounds$Button
 */
m.mouseDragged = "func_146119_b"
/** 
 * 
 * 
 * Parent Class: GuiOptionButton
 */
m.returnEnumOptions = "func_146136_c"
/** 
 * "returns a pointer to the persistant Chat GUI
 * 
 * Parent Class: GuiIngame
 */
m.getChatGUI = "func_146158_b"
/** 
 * 
 * 
 * Parent Class: GuiLabel
 */
m.drawLabel = "func_146159_a"
/** 
 * 
 * 
 * Parent Class: GuiLabel
 */
m.drawLabelBackground = "func_146160_b"
/** 
 * "delete the selected text
 * 
 * Parent Class: GuiTextField
 */
m.deleteFromCursor = "func_146175_b"
/** 
 * returns true if this textbox is visible
 * 
 * Parent Class: GuiTextField
 */
m.getVisible = "func_146176_q"
/** 
 * Deletes the specified number of words starting at the cursor position. Negative numbers will delete words left of the cursor.
 * 
 * Parent Class: GuiTextField
 */
m.deleteWords = "func_146177_a"
/** 
 * Increments the cursor counter
 * 
 * Parent Class: GuiTextField
 */
m.updateCursorCounter = "func_146178_a"
m.getText = {}
/** 
 * Returns the contents of the textbox
 * 
 * Parent Class: GuiTextField
 */
m.getText.GuiTextField = "func_146179_b"
/** 
 * 
 * 
 * Parent Class: GuiCustomizeWorldScreen
 */
m.getText.GuiCustomizeWorldScreen = "func_175318_a"

m.setText = {}
/** 
 * Sets the text of the textbox
 * 
 * Parent Class: GuiTextField
 */
m.setText.GuiTextField = "func_146180_a"
/** 
 * 
 * 
 * Parent Class: GuiButtonRealmsProxy
 */
m.setText.GuiButtonRealmsProxy = "func_154311_a"
/** 
 * Sets the text of the chat
 * 
 * Parent Class: GuiScreen
 */
m.setText.GuiScreen = "func_175274_a"

/** 
 * get enable drawing background and outline
 * 
 * Parent Class: GuiTextField
 */
m.getEnableBackgroundDrawing = "func_146181_i"
/** 
 * Moves the text cursor by a specified number of characters and clears the selection
 * 
 * Parent Class: GuiTextField
 */
m.moveCursorBy = "func_146182_d"
/** 
 * "gets the position of the nth word. N may be negative
 * 
 * Parent Class: GuiTextField
 */
m.getNthWordFromPos = "func_146183_a"
m.setEnabled = {}
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
m.setEnabled.GuiTextField = "func_146184_c"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
m.setEnabled.GuiSlot = "func_148143_b"
/** 
 * 
 * 
 * Parent Class: GuiButtonRealmsProxy
 */
m.setEnabled.GuiButtonRealmsProxy = "func_154313_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager$BooleanState
 */
m.setEnabled.GlStateManager$BooleanState = "func_179200_b"

/** 
 * enable drawing background and outline
 * 
 * Parent Class: GuiTextField
 */
m.setEnableBackgroundDrawing = "func_146185_a"
/** 
 * "the side of the selection that is not the cursor
 * 
 * Parent Class: GuiTextField
 */
m.getSelectionEnd = "func_146186_n"
/** 
 * "see @getNthNextWordFromPos() params: N
 * 
 * Parent Class: GuiTextField
 */
m.getNthWordFromCursor = "func_146187_c"
/** 
 * draws the vertical line cursor in the textbox
 * 
 * Parent Class: GuiTextField
 */
m.drawCursorVertical = "func_146188_c"
m.setVisible = {}
/** 
 * Sets whether or not this textbox is visible
 * 
 * Parent Class: GuiTextField
 */
m.setVisible.GuiTextField = "func_146189_e"
/** 
 * 
 * 
 * Parent Class: SetVisibility
 */
m.setVisible.SetVisibility = "func_178619_a"

/** 
 * sets the position of the cursor to the provided index
 * 
 * Parent Class: GuiTextField
 */
m.setCursorPosition = "func_146190_e"
/** 
 * "replaces selected text
 * 
 * Parent Class: GuiTextField
 */
m.writeText = "func_146191_b"
m.mouseClicked = {}
/** 
 * "Args: x
 * 
 * Parent Class: GuiTextField
 */
m.mouseClicked.GuiTextField = "func_146192_a"
/** 
 * 
 * 
 * Parent Class: GuiPageButtonList
 */
m.mouseClicked.GuiPageButtonList = "func_148179_a"
/** 
 * "Called when the mouse is clicked. Args : mouseX
 * 
 * Parent Class: GuiScreenResourcePacks
 */
m.mouseClicked.GuiScreenResourcePacks = "func_73864_a"

/** 
 * Sets the text colour for this textbox (disabled text will not use this colour)
 * 
 * Parent Class: GuiTextField
 */
m.setTextColor = "func_146193_g"
/** 
 * Draws the textbox
 * 
 * Parent Class: GuiTextField
 */
m.drawTextBox = "func_146194_f"
/** 
 * Sets focus to this gui element
 * 
 * Parent Class: GuiTextField
 */
m.setFocused = "func_146195_b"
/** 
 * sets the cursors position to the beginning
 * 
 * Parent Class: GuiTextField
 */
m.setCursorPositionZero = "func_146196_d"
/** 
 * returns the current position of the cursor
 * 
 * Parent Class: GuiTextField
 */
m.getCursorPosition = "func_146198_h"
/** 
 * Sets the position of the selection anchor (i.e. position the selection was started at)
 * 
 * Parent Class: GuiTextField
 */
m.setSelectionPos = "func_146199_i"
m.getWidth = {}
/** 
 * returns the width of the textbox depending on if background drawing is enabled
 * 
 * Parent Class: GuiTextField
 */
m.getWidth.GuiTextField = "func_146200_o"
/** 
 * 
 * 
 * Parent Class: GuiSlotRealmsProxy
 */
m.getWidth.GuiSlotRealmsProxy = "func_154338_k"
/** 
 * 
 * 
 * Parent Class: InventoryCrafting
 */
m.getWidth.InventoryCrafting = "func_174922_i"
/** 
 * 
 * 
 * Parent Class: GuiSimpleScrolledSelectionListProxy
 */
m.getWidth.GuiSimpleScrolledSelectionListProxy = "func_178048_e"
/** 
 * 
 * 
 * Parent Class: Stitcher$Holder
 */
m.getWidth.Stitcher$Holder = "func_94197_a"

/** 
 * Call this method from your GuiScreen to process the keys into the textbox
 * 
 * Parent Class: GuiTextField
 */
m.textboxKeyTyped = "func_146201_a"
/** 
 * sets the cursors position to after the text
 * 
 * Parent Class: GuiTextField
 */
m.setCursorPositionEnd = "func_146202_e"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
m.setMaxStringLength = "func_146203_f"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
m.setDisabledTextColour = "func_146204_h"
/** 
 * if true the textbox can lose focus by clicking elsewhere on the screen
 * 
 * Parent Class: GuiTextField
 */
m.setCanLoseFocus = "func_146205_d"
/** 
 * Getter for the focused field
 * 
 * Parent Class: GuiTextField
 */
m.isFocused = "func_146206_l"
/** 
 * returns the text between the cursor and selectionEnd
 * 
 * Parent Class: GuiTextField
 */
m.getSelectedText = "func_146207_c"
/** 
 * returns the maximum number of character that can be contained in this textbox
 * 
 * Parent Class: GuiTextField
 */
m.getMaxStringLength = "func_146208_g"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
m.printChatMessage = "func_146227_a"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
m.getChatWidth = "func_146228_f"
/** 
 * Scrolls the chat by the given number of lines.
 *  
 * @param amount The amount to scroll
 * 
 * Parent Class: GuiNewChat
 */
m.scroll = "func_146229_b"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
m.drawChat = "func_146230_a"
/** 
 * Clears the chat.
 * 
 * Parent Class: GuiNewChat
 */
m.clearChatMessages = "func_146231_a"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
m.getLineCount = "func_146232_i"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
m.calculateChatboxWidth = "func_146233_a"
/** 
 * "prints the ChatComponent to Chat. If the ID is not 0
 * 
 * Parent Class: GuiNewChat
 */
m.printChatMessageWithOptionalDeletion = "func_146234_a"
m.getChatComponent = {}
/** 
 * Gets the chat component under the mouse
 *  
 * @param mouseX The x position of the mouse
 * @param mouseY The y position of the mouse
 * 
 * Parent Class: GuiNewChat
 */
m.getChatComponent.GuiNewChat = "func_146236_a"
/** 
 * 
 * 
 * Parent Class: S02PacketChat
 */
m.getChatComponent.S02PacketChat = "func_148915_c"
/** 
 * Get a ChatComponent for this Item's display name that shows this Item on hover
 * 
 * Parent Class: ItemStack
 */
m.getChatComponent.ItemStack = "func_151000_E"
/** 
 * 
 * 
 * Parent Class: ChatLine
 */
m.getChatComponent.ChatLine = "func_151461_a"

/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
m.setChatLine = "func_146237_a"
/** 
 * Gets the list of messages previously sent through the chat GUI
 * 
 * Parent Class: GuiNewChat
 */
m.getSentMessages = "func_146238_c"
/** 
 * "Adds this string to the list of sent messages
 * 
 * Parent Class: GuiNewChat
 */
m.addToSentMessages = "func_146239_a"
/** 
 * "Resets the chat scroll (executed when the GUI is closed
 * 
 * Parent Class: GuiNewChat
 */
m.resetScroll = "func_146240_d"
/** 
 * Returns true if the chat GUI is open
 * 
 * Parent Class: GuiNewChat
 */
m.getChatOpen = "func_146241_e"
/** 
 * finds and deletes a Chat line by ID
 *  
 * @param id The ChatLine's id to delete
 * 
 * Parent Class: GuiNewChat
 */
m.deleteChatLine = "func_146242_c"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
m.calculateChatboxHeight = "func_146243_b"
/** 
 * Returns the chatscale from mc.gameSettings.chatScale
 * 
 * Parent Class: GuiNewChat
 */
m.getChatScale = "func_146244_h"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
m.refreshChat = "func_146245_b"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
m.getChatHeight = "func_146246_g"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
m.updateAchievementWindow = "func_146254_a"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
m.displayUnformattedAchievement = "func_146255_b"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
m.displayAchievement = "func_146256_a"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
m.clearAchievements = "func_146257_b"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
m.updateAchievementWindowScale = "func_146258_c"
/** 
 * Delegates mouse and keyboard input.
 * 
 * Parent Class: GuiScreen
 */
m.handleInput = "func_146269_k"
/** 
 * 
 * 
 * Parent Class: GuiScreen
 */
m.drawWorldBackground = "func_146270_b"
/** 
 * Returns true if either windows ctrl key is down or if either mac meta key is down
 * 
 * Parent Class: GuiScreen
 */
m.isCtrlKeyDown = "func_146271_m"
/** 
 * Returns true if either shift key is down
 * 
 * Parent Class: GuiScreen
 */
m.isShiftKeyDown = "func_146272_n"
/** 
 * "Called when a mouse button is pressed and the mouse is moved around. Parameters are : mouseX
 * 
 * Parent Class: GuiContainer
 */
m.mouseClickMove = "func_146273_a"
m.handleMouseInput = {}
/** 
 * Handles mouse input.
 * 
 * Parent Class: GuiIngestServers
 */
m.handleMouseInput.GuiIngestServers = "func_146274_d"
/** 
 * 
 * 
 * Parent Class: GuiSimpleScrolledSelectionListProxy
 */
m.handleMouseInput.GuiSimpleScrolledSelectionListProxy = "func_178039_p"

/** 
 * Stores the given string in the system clipboard
 * 
 * Parent Class: GuiScreen
 */
m.setClipboardString = "func_146275_d"
/** 
 * Draws either a gradient over the background screen (when it exists) or a flat gradient over background.png
 * 
 * Parent Class: GuiScreen
 */
m.drawDefaultBackground = "func_146276_q_"
/** 
 * Returns a string stored in the system clipboard.
 * 
 * Parent Class: GuiScreen
 */
m.getClipboardString = "func_146277_j"
m.drawBackground = {}
/** 
 * Draws the background (i is always 0 as of 1.2.2)
 * 
 * Parent Class: GuiScreen
 */
m.drawBackground.GuiScreen = "func_146278_c"
/** 
 * 
 * 
 * Parent Class: GuiIngestServers$ServerList
 */
m.drawBackground.GuiIngestServers$ServerList = "func_148123_a"

/** 
 * "Draws the text when mouse is over creative inventory tab. Params: current creative tab to be checked
 * 
 * Parent Class: GuiScreen
 */
m.drawCreativeTabHoveringText = "func_146279_a"
/** 
 * Causes the screen to lay out its subcomponents again. This is the equivalent of the Java call Container.validate()
 * 
 * Parent Class: GuiScreen
 */
m.setWorldAndResolution = "func_146280_a"
/** 
 * Called when the screen is unloaded. Used to disable keyboard repeat events
 * 
 * Parent Class: GuiStreamUnavailable
 */
m.onGuiClosed = "func_146281_b"
/** 
 * Handles keyboard input.
 * 
 * Parent Class: GuiScreen
 */
m.handleKeyboardInput = "func_146282_l"
/** 
 * Draws a List of strings as a tooltip. Every entry is drawn on a seperate line.
 * 
 * Parent Class: GuiScreen
 */
m.drawHoveringText = "func_146283_a"
m.actionPerformed = {}
/** 
 * Called by the controls from the buttonList when activated. (Mouse pressed for buttons)
 * 
 * Parent Class: GuiTwitchUserMode
 */
m.actionPerformed.GuiTwitchUserMode = "func_146284_a"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
m.actionPerformed.GuiSlot = "func_148147_a"

/** 
 * 
 * 
 * Parent Class: GuiContainerCreative
 */
m.renderToolTip = "func_146285_a"
/** 
 * Determine a save-directory name from the world name
 * 
 * Parent Class: GuiCreateWorld
 */
m.calcSaveDirName = "func_146314_g"
/** 
 * "Toggles between initial world-creation display
 * 
 * Parent Class: GuiCreateWorld
 */
m.toggleMoreWorldOptions = "func_146315_i"
/** 
 * "Shows additional world-creation options if toggle is true
 * 
 * Parent Class: GuiCreateWorld
 */
m.showMoreWorldOptions = "func_146316_a"
/** 
 * "Ensures that a proposed directory name doesn't collide with existing names.
 * Returns the name
 * 
 * Parent Class: GuiCreateWorld
 */
m.getUncollidingSaveDirName = "func_146317_a"
/** 
 * "Set the initial values of a new world to create
 * 
 * Parent Class: GuiCreateWorld
 */
m.recreateFromExistingWorld = "func_146318_a"
/** 
 * Sets displayed GUI elements according to the current settings state
 * 
 * Parent Class: GuiCreateWorld
 */
m.updateDisplayState = "func_146319_h"
/** 
 * Sets the number of ticks to wait before enabling the buttons.
 * 
 * Parent Class: GuiYesNo
 */
m.setButtonDelay = "func_146350_a"
/** 
 * 
 * 
 * Parent Class: GuiConfirmOpenLink
 */
m.disableSecurityWarning = "func_146358_g"
/** 
 * Copies the link to the system clipboard.
 * 
 * Parent Class: GuiConfirmOpenLink
 */
m.copyLinkToClipboard = "func_146359_e"
/** 
 * 
 * 
 * Parent Class: GuiConnecting
 */
m.connect = "func_146367_a"
/** 
 * "input is relative and is applied directly to the sentHistoryCursor so -1 is the previous message
 * 
 * Parent Class: GuiChat
 */
m.getSentHistory = "func_146402_a"
/** 
 * 
 * 
 * Parent Class: GuiChat
 */
m.autocompletePlayerNames = "func_146404_p_"
/** 
 * 
 * 
 * Parent Class: GuiChat
 */
m.sendAutocompleteRequest = "func_146405_a"
/** 
 * 
 * 
 * Parent Class: GuiChat
 */
m.onAutocompleteResponse = "func_146406_a"
/** 
 * 
 * 
 * Parent Class: GuiSleepMP
 */
m.wakeFromSleep = "func_146418_g"
/** 
 * Returns the entire text of the current page as determined by currPage
 * 
 * Parent Class: GuiScreenBook
 */
m.pageGetCurrent = "func_146456_p"
/** 
 * Sets the text of the current page as determined by currPage
 * 
 * Parent Class: GuiScreenBook
 */
m.pageSetCurrent = "func_146457_a"
/** 
 * "Processes any text getting inserted into the current page
 * 
 * Parent Class: GuiScreenBook
 */
m.pageInsertIntoCurrent = "func_146459_b"
/** 
 * Processes keystrokes when editing the title of a book
 * 
 * Parent Class: GuiScreenBook
 */
m.keyTypedInTitle = "func_146460_c"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
m.addNewPage = "func_146461_i"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
m.sendBookToServer = "func_146462_a"
/** 
 * Processes keystrokes when editing the text of a book
 * 
 * Parent Class: GuiScreenBook
 */
m.keyTypedInBook = "func_146463_b"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
m.updateButtons = "func_146464_h"
m.getSoundVolume = {}
/** 
 * 
 * 
 * Parent Class: GuiScreenOptionsSounds
 */
m.getSoundVolume.GuiScreenOptionsSounds = "func_146504_a"
/** 
 * Returns the volume for the sounds this mob makes.
 * 
 * Parent Class: EntitySlime
 */
m.getSoundVolume.EntitySlime = "func_70599_aP"

/** 
 * 
 * 
 * Parent Class: IProgressMeter
 */
m.doneLoading = "func_146509_g"
/** 
 * 
 * 
 * Parent Class: GuiStats
 */
m.drawStatsScreen = "func_146521_a"
/** 
 * Draws a sprite from assets/textures/gui/container/stats_icons.png
 * 
 * Parent Class: GuiStats
 */
m.drawSprite = "func_146527_c"
/** 
 * Draws a gray box that serves as a button background.
 * 
 * Parent Class: GuiStats
 */
m.drawButtonBackground = "func_146531_b"
m.createButtons = {}
/** 
 * 
 * 
 * Parent Class: GuiStats
 */
m.createButtons.GuiStats = "func_146541_h"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
m.createButtons.GuiMultiplayer = "func_146794_g"

/** 
 * 
 * 
 * Parent Class: GuiAchievements
 */
m.drawAchievementScreen = "func_146552_b"
/** 
 * 
 * 
 * Parent Class: GuiAchievements
 */
m.drawTitle = "func_146553_h"
/** 
 * 
 * 
 * Parent Class: GuiWinGame
 */
m.sendRespawnPacket = "func_146574_g"
/** 
 * 
 * 
 * Parent Class: GuiWinGame
 */
m.drawWinGameScreen = "func_146575_b"
/** 
 * 
 * 
 * Parent Class: IProgressUpdate
 */
m.setDoneWorking = "func_146586_a"
/** 
 * 
 * 
 * Parent Class: GuiSelectWorld
 */
m.addWorldSelectionButtons = "func_146618_g"
/** 
 * Load the existing world saves for display
 * 
 * Parent Class: GuiSelectWorld
 */
m.loadLevelList = "func_146627_h"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
m.getOldServerPinger = "func_146789_i"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
m.selectServer = "func_146790_a"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
m.connectToServer = "func_146791_a"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
m.refreshServerList = "func_146792_q"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
m.setHoveringText = "func_146793_a"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
m.getServerList = "func_146795_p"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
m.connectToSelected = "func_146796_h"
/** 
 * 
 * 
 * Parent Class: GuiScreenResourcePacks
 */
m.hasResourcePackEntry = "func_146961_a"
/** 
 * "Returns the list containing the resource pack entry
 * 
 * Parent Class: GuiScreenResourcePacks
 */
m.getListContaining = "func_146962_b"
/** 
 * Returns a list containing the selected resource packs
 * 
 * Parent Class: GuiScreenResourcePacks
 */
m.getSelectedResourcePacks = "func_146963_h"
/** 
 * Returns a list containing the available resource packs
 * 
 * Parent Class: GuiScreenResourcePacks
 */
m.getAvailableResourcePacks = "func_146964_g"
/** 
 * Returns the slot at the given coordinates or null if there is none.
 * 
 * Parent Class: GuiContainer
 */
m.getSlotAtPosition = "func_146975_c"
/** 
 * "Args : renderPartialTicks
 * 
 * Parent Class: GuiMerchant
 */
m.drawGuiContainerBackgroundLayer = "func_146976_a"
m.drawSlot = {}
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
m.drawSlot.GuiContainer = "func_146977_a"
/** 
 * 
 * 
 * Parent Class: GuiIngestServers$ServerList
 */
m.drawSlot.GuiIngestServers$ServerList = "func_180791_a"

/** 
 * "Test if the 2D point is in a rectangle (relative to the GUI). Args : rectX
 * 
 * Parent Class: GuiContainer
 */
m.isPointInRegion = "func_146978_c"
/** 
 * "Draw the foreground layer for the GuiContainer (everything in front of the items). Args : mouseX
 * 
 * Parent Class: GuiMerchant
 */
m.drawGuiContainerForegroundLayer = "func_146979_b"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
m.updateDragSplitting = "func_146980_g"
/** 
 * "Returns if the passed mouse position is over the specified slot. Args : slot
 * 
 * Parent Class: GuiContainer
 */
m.isMouseOverSlot = "func_146981_a"
/** 
 * "Render an ItemStack. Args : stack
 * 
 * Parent Class: GuiContainer
 */
m.drawItemStack = "func_146982_a"
/** 
 * "This function is what controls the hotbar shortcut check when you press a number key when hovering a stack. Args : keyCode
 * 
 * Parent Class: GuiContainer
 */
m.checkHotbarKeys = "func_146983_a"
/** 
 * Called when the mouse is clicked over a slot or outside the gui.
 * 
 * Parent Class: GuiContainerCreative
 */
m.handleMouseClick = "func_146984_a"
/** 
 * 
 * 
 * Parent Class: GuiMerchant
 */
m.getMerchant = "func_147035_g"
/** 
 * Display the potion effects list
 * 
 * Parent Class: InventoryEffectRenderer
 */
m.drawActivePotionEffects = "func_147044_g"
/** 
 * "Draws the entity to the screen. Args: xPos
 * 
 * Parent Class: GuiInventory
 */
m.drawEntityOnScreen = "func_147046_a"
/** 
 * 
 * 
 * Parent Class: GuiContainerCreative
 */
m.setCurrentCreativeTab = "func_147050_b"
/** 
 * "Renders the creative inventory hovering text if mouse is over it. Returns true if did render or false otherwise. Params: current creative tab to be checked
 * 
 * Parent Class: GuiContainerCreative
 */
m.renderCreativeInventoryHoveringText = "func_147052_b"
/** 
 * 
 * 
 * Parent Class: GuiContainerCreative
 */
m.updateCreativeSearch = "func_147053_i"
/** 
 * returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items)
 * 
 * Parent Class: GuiContainerCreative
 */
m.needsScrollBars = "func_147055_p"
/** 
 * 
 * 
 * Parent Class: GuiContainerCreative
 */
m.getSelectedTabIndex = "func_147056_g"
/** 
 * 
 * 
 * Parent Class: GuiRepair
 */
m.renameItem = "func_147090_g"
m.getChatVisibility = {}
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.getChatVisibility.EntityPlayerMP = "func_147096_v"
/** 
 * 
 * 
 * Parent Class: C15PacketClientSettings
 */
m.getChatVisibility.C15PacketClientSettings = "func_149523_e"
/** 
 * 
 * 
 * Parent Class: EntityPlayer$EnumChatVisibility
 */
m.getChatVisibility.EntityPlayer$EnumChatVisibility = "func_151428_a"

/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.sendTileEntityUpdate = "func_147097_b"
/** 
 * Updates all biomes that have been explored by this player and triggers Adventuring Time if player qualifies.
 * 
 * Parent Class: EntityPlayerMP
 */
m.updateBiomesExplored = "func_147098_j"
/** 
 * Gets the stats file for reading achievements
 * 
 * Parent Class: EntityPlayerMP
 */
m.getStatFile = "func_147099_x"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.handleClientSettings = "func_147100_a"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getCurrentServerData = "func_147104_D"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.isFramerateLimitBelowMax = "func_147107_h"
/** 
 * Sets the argument GuiScreen as the main (topmost visible) screen.
 * 
 * Parent Class: Minecraft
 */
m.displayGuiScreen = "func_147108_a"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getAmbientMusicType = "func_147109_W"
m.getFramebuffer = {}
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getFramebuffer.Minecraft = "func_147110_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.getFramebuffer.ShaderGroup = "func_148017_a"

/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.isJava64bit = "func_147111_S"
/** 
 * Called when user clicked he's mouse middle button (pick block)
 * 
 * Parent Class: Minecraft
 */
m.middleClickMouse = "func_147112_ai"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.isGamePaused = "func_147113_T"
m.getNetHandler = {}
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getNetHandler.Minecraft = "func_147114_u"
/** 
 * Gets the current handler for processing packets
 * 
 * Parent Class: NetworkManager
 */
m.getNetHandler.NetworkManager = "func_150729_e"

/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.sendClickBlockToController = "func_147115_a"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.clickMouse = "func_147116_af"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getTextureMapBlocks = "func_147117_R"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getSoundHandler = "func_147118_V"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.updateFramebufferSize = "func_147119_ah"
/** 
 * Called when user clicked he's mouse right button (place)
 * 
 * Parent Class: Minecraft
 */
m.rightClickMouse = "func_147121_ag"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.isJvm64bit = "func_147122_X"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getMinecraftSessionService = "func_147130_as"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.refreshStatusNextTick = "func_147132_au"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getResourcePackUrl = "func_147133_T"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getServerStatusResponse = "func_147134_at"
m.getDifficulty = {}
/** 
 * Get the server's difficulty
 * 
 * Parent Class: MinecraftServer
 */
m.getDifficulty.MinecraftServer = "func_147135_j"
/** 
 * 
 * 
 * Parent Class: S07PacketRespawn
 */
m.getDifficulty.S07PacketRespawn = "func_149081_d"
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
m.getDifficulty.S01PacketJoinGame = "func_149192_g"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getDifficulty.World = "func_175659_aa"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.getDifficulty.WorldInfo = "func_176130_y"
/** 
 * 
 * 
 * Parent Class: S41PacketServerDifficulty
 */
m.getDifficulty.S41PacketServerDifficulty = "func_179831_b"

/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.isAnnouncingPlayerAchievements = "func_147136_ar"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getNetworkSystem = "func_147137_ag"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.addFaviconToStatusResponse = "func_147138_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setDifficultyForAllWorlds = "func_147139_a"
/** 
 * Saves this CrashReport to the given file and returns a value indicating whether we were successful at doing so.
 * 
 * Parent Class: CrashReport
 */
m.saveToFile = "func_147149_a"
/** 
 * 
 * 
 * Parent Class: CrashReportCategory
 */
m.getStackTrace = "func_147152_a"
m.getCategory = {}
/** 
 * 
 * 
 * Parent Class: SoundCategory
 */
m.getCategory.SoundCategory = "func_147154_a"
/** 
 * 
 * 
 * Parent Class: CrashReport
 */
m.getCategory.CrashReport = "func_85056_g"

/** 
 * 
 * 
 * Parent Class: SoundCategory
 */
m.getCategoryName = "func_147155_a"
/** 
 * 
 * 
 * Parent Class: SoundCategory
 */
m.getCategoryId = "func_147156_b"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.getChatComponentFromNthArg = "func_147178_a"
/** 
 * "Gets the Item specified by the given text string.  First checks the item registry
 * 
 * Parent Class: CommandBase
 */
m.getItemByText = "func_147179_f"
/** 
 * "Gets the Block specified by the given text string.  First checks the block registry
 * 
 * Parent Class: CommandBase
 */
m.getBlockByText = "func_147180_g"
m.getTeam = {}
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.getTeam.CommandScoreboard = "func_147183_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getTeam.EntityPlayer = "func_96124_cp"
/** 
 * Retrieve the ScorePlayerTeam instance identified by the passed team name
 * 
 * Parent Class: Scoreboard
 */
m.getTeam.Scoreboard = "func_96508_e"

/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.addTeam = "func_147185_d"
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.listTeams = "func_147186_g"
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.resetPlayers = "func_147187_n"
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.emptyTeam = "func_147188_j"
m.getObjective = {}
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.getObjective.CommandScoreboard = "func_147189_a"
/** 
 * 
 * 
 * Parent Class: ChatComponentScore
 */
m.getObjective.ChatComponentScore = "func_179994_h"
/** 
 * Returns a ScoreObjective for the objective name
 * 
 * Parent Class: Scoreboard
 */
m.getObjective.Scoreboard = "func_96518_b"
/** 
 * 
 * 
 * Parent Class: Score
 */
m.getObjective.Score = "func_96645_d"

/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.joinTeam = "func_147190_h"
m.removeObjective = {}
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.removeObjective.CommandScoreboard = "func_147191_h"
/** 
 * 
 * 
 * Parent Class: Scoreboard
 */
m.removeObjective.Scoreboard = "func_96519_k"

m.getScoreboard = {}
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.getScoreboard.CommandScoreboard = "func_147192_d"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getScoreboard.World = "func_96441_U"
/** 
 * 
 * 
 * Parent Class: ScoreObjective
 */
m.getScoreboard.ScoreObjective = "func_96682_a"

/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.addObjective = "func_147193_c"
m.removeTeam = {}
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.removeTeam.CommandScoreboard = "func_147194_f"
/** 
 * "Removes the team from the scoreboard
 * 
 * Parent Class: Scoreboard
 */
m.removeTeam.Scoreboard = "func_96511_d"

/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.listPlayers = "func_147195_l"
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.listObjectives = "func_147196_d"
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.setObjectiveDisplay = "func_147198_k"
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.leaveTeam = "func_147199_i"
/** 
 * 
 * 
 * Parent Class: CommandScoreboard
 */
m.setTeamOption = "func_147200_e"
m.getWittyComment = {}
/** 
 * Get a random witty comment
 * 
 * Parent Class: CommandDebug
 */
m.getWittyComment.CommandDebug = "func_147203_d"
/** 
 * Gets a random witty comment for inclusion in this CrashReport
 * 
 * Parent Class: CrashReport
 */
m.getWittyComment.CrashReport = "func_71503_h"

/** 
 * Get the profiling results from the last profile
 * 
 * Parent Class: CommandDebug
 */
m.getProfileResults = "func_147204_b"
/** 
 * Save the profiling results from the last profile
 * 
 * Parent Class: CommandDebug
 */
m.saveProfileResults = "func_147205_a"
/** 
 * 
 * 
 * Parent Class: OldServerPinger
 */
m.pingPendingNetworks = "func_147223_a"
/** 
 * 
 * 
 * Parent Class: OldServerPinger
 */
m.ping = "func_147224_a"
/** 
 * 
 * 
 * Parent Class: OldServerPinger
 */
m.tryCompatibilityPing = "func_147225_b"
/** 
 * 
 * 
 * Parent Class: OldServerPinger
 */
m.clearPendingNetworks = "func_147226_b"
/** 
 * "Invoked when disconnecting
 * 
 * Parent Class: RealmsServerStatusPinger$1
 */
m.onDisconnect = "func_147231_a"
/** 
 * Updates the block and metadata and generates a blockupdate (and notify the clients)
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleBlockChange = "func_147234_a"
/** 
 * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSpawnObject = "func_147235_a"
/** 
 * "Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death)
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityStatus = "func_147236_a"
/** 
 * "Handles the creation of a nearby player entity
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSpawnPlayer = "func_147237_a"
/** 
 * "Locally eliminates the entities. Invoked by the server when the items are in fact destroyed
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleDestroyEntities = "func_147238_a"
/** 
 * Verifies that the server and client are synchronized with respect to the inventory/container opened by the player and confirms if it is the case.
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleConfirmTransaction = "func_147239_a"
/** 
 * "Handles packets that have room for a channel specification. Vanilla implemented channels are ""MC|TrList"" to acquire a MerchantRecipeList trades for a villager merchant
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleCustomPayload = "func_147240_a"
/** 
 * Handles the placement of a specified ItemStack in a specified container/inventory slot
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleWindowItems = "func_147241_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityEquipment = "func_147242_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityAttach = "func_147243_a"
/** 
 * Sets the velocity of the specified entity to the specified value
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityVelocity = "func_147244_a"
/** 
 * Sets the progressbar of the opened window to the specified value
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleWindowProperty = "func_147245_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleCollectItem = "func_147246_a"
/** 
 * "Updates a team managed by the scoreboard: Create/Remove the team registration
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleTeams = "func_147247_a"
/** 
 * Updates a specified sign with the specified text lines
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleUpdateSign = "func_147248_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleUpdateHealth = "func_147249_a"
/** 
 * Either updates the score with a specified value or removes the score for an objective
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleUpdateScore = "func_147250_a"
/** 
 * Prints a chatmessage in the chat GUI
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleChat = "func_147251_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleChangeGameState = "func_147252_a"
m.handleDisconnect = {}
/** 
 * Closes the network channel
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleDisconnect.INetHandlerPlayClient = "func_147253_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerLoginClient
 */
m.handleDisconnect.INetHandlerLoginClient = "func_147388_a"

/** 
 * "Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleDisplayScoreboard = "func_147254_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSoundEffect = "func_147255_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handlePlayerListItem = "func_147256_a"
/** 
 * Updates which hotbar slot of the player is currently selected
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleHeldItemChange = "func_147257_a"
/** 
 * "Handles changes in player positioning and rotation such as when travelling to a new dimension
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handlePlayerPosLook = "func_147258_a"
/** 
 * "Updates the specified entity's position by the specified relative moment and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityMovement = "func_147259_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityEffect = "func_147260_a"
/** 
 * "Triggers Block.onBlockEventReceived
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleBlockAction = "func_147261_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleRemoveEntityEffect = "func_147262_a"
/** 
 * "Updates the specified chunk with the supplied data
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleChunkData = "func_147263_a"
/** 
 * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleMaps = "func_147264_a"
/** 
 * "Displays a GUI by ID. In order starting from id 0: Chest
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleOpenWindow = "func_147265_a"
/** 
 * Handles pickin up an ItemStack or dropping one in your inventory or an open (non-creative) container
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSetSlot = "func_147266_a"
/** 
 * "Updates the direction in which the specified entity is looking
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityHeadLook = "func_147267_a"
/** 
 * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSignEditorOpen = "func_147268_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleMapChunkBulk = "func_147269_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handlePlayerAbilities = "func_147270_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSpawnPosition = "func_147271_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleKeepAlive = "func_147272_a"
/** 
 * "Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleUpdateTileEntity = "func_147273_a"
/** 
 * Displays the available command-completion options the server knows of
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleTabComplete = "func_147274_a"
/** 
 * Updates an entity's position and rotation as specified by the packet
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityTeleport = "func_147275_a"
/** 
 * Resets the ItemStack held in hand and closes the window that is opened
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleCloseWindow = "func_147276_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEffect = "func_147277_a"
/** 
 * "Retrieves the player identified by the packet
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleUseBed = "func_147278_a"
m.handleAnimation = {}
/** 
 * "Renders a specified animation: Waking up a player
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleAnimation.INetHandlerPlayClient = "func_147279_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.handleAnimation.NetHandlerPlayServer = "func_175087_a"

/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleRespawn = "func_147280_a"
/** 
 * "Spawns the mob entity at the specified location
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSpawnMob = "func_147281_a"
/** 
 * "Registers some server properties (gametype
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleJoinGame = "func_147282_a"
/** 
 * "Initiates a new explosion (sound
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleExplosion = "func_147283_a"
/** 
 * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityMetadata = "func_147284_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleTimeUpdate = "func_147285_a"
/** 
 * Spawns an experience orb and sets its value (amount of XP)
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSpawnExperienceOrb = "func_147286_a"
/** 
 * "Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleMultiBlockChange = "func_147287_a"
/** 
 * Handles the spawning of a painting object
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSpawnPainting = "func_147288_a"
/** 
 * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleParticles = "func_147289_a"
/** 
 * "Updates en entity's attributes and their respective modifiers
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityProperties = "func_147290_a"
/** 
 * "May create a scoreboard objective
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleScoreboardObjective = "func_147291_a"
/** 
 * Handles globally visible entities. Used in vanilla for lightning bolts
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSpawnGlobalEntity = "func_147292_a"
/** 
 * Updates the players statistics or achievements
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleStatistics = "func_147293_a"
/** 
 * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleBlockBreakAnim = "func_147294_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSetExperience = "func_147295_a"
/** 
 * Clears the WorldClient instance associated with this NetHandlerPlayClient
 * 
 * Parent Class: NetHandlerPlayClient
 */
m.cleanup = "func_147296_c"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayClient
 */
m.addToSendQueue = "func_147297_a"
m.getNetworkManager = {}
/** 
 * Returns this the NetworkManager instance registered with this NetworkHandlerPlayClient
 * 
 * Parent Class: NetHandlerPlayClient
 */
m.getNetworkManager.NetHandlerPlayClient = "func_147298_b"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.getNetworkManager.NetHandlerPlayServer = "func_147362_b"

/** 
 * 
 * 
 * Parent Class: NetHandlerStatusServer
 */
m.processPing = "func_147311_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerStatusServer
 */
m.processServerQuery = "func_147312_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
m.processEncryptionResponse = "func_147315_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
m.processLoginStart = "func_147316_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
m.getConnectionInfo = "func_147317_d"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
m.closeConnection = "func_147322_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
m.tryAcceptPlayer = "func_147326_c"
/** 
 * "Enchants the item identified by the packet given some convoluted conditions (matching window
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processEnchantItem = "func_147338_a"
/** 
 * Received in response to the server requesting to confirm that the client-side open container matches the servers' after a mismatched container-slot manipulation. It will unlock the player's ability to manipulate the container contents
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processConfirmTransaction = "func_147339_a"
/** 
 * "Processes interactions ((un)leashing
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processUseEntity = "func_147340_a"
/** 
 * Retrieves possible tab completions for the requested command string and sends them to the client
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processTabComplete = "func_147341_a"
/** 
 * "Processes the client status updates: respawn attempt from player
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processClientStatus = "func_147342_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processUpdateSign = "func_147343_a"
/** 
 * Update the server with an ItemStack in a slot.
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processCreativeInventoryAction = "func_147344_a"
/** 
 * "Processes the player initiating/stopping digging on a particular spot
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processPlayerDigging = "func_147345_a"
/** 
 * "Processes block placement and block activation (anvil
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processPlayerBlockPlacement = "func_147346_a"
/** 
 * Processes clients perspective on player positioning and/or orientation
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processPlayer = "func_147347_a"
/** 
 * Processes a player starting/stopping flying
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processPlayerAbilities = "func_147348_a"
/** 
 * Synchronizes serverside and clientside book contents and signing
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processVanilla250Packet = "func_147349_a"
/** 
 * Executes a container/inventory slot manipulation as indicated by the packet. Sends the serverside result if they didn't match the indicated result and prevents further manipulation by the player until he confirms that it has the same open container/inventory
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processClickWindow = "func_147351_a"
/** 
 * "Updates serverside copy of client settings: language
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processClientSettings = "func_147352_a"
/** 
 * Updates a players' ping statistics
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processKeepAlive = "func_147353_a"
/** 
 * Process chat messages (broadcast back to clients) and commands (executes)
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processChatMessage = "func_147354_a"
/** 
 * Updates which quickbar slot is selected
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processHeldItemChange = "func_147355_a"
/** 
 * Processes the client closing windows (container)
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processCloseWindow = "func_147356_a"
/** 
 * "Processes a range of action-types: sneaking
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processEntityAction = "func_147357_a"
/** 
 * "Processes player movement input. Includes walking
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.processInput = "func_147358_a"
m.sendPacket = {}
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.sendPacket.NetHandlerPlayServer = "func_147359_a"
/** 
 * 
 * 
 * Parent Class: NetworkManager
 */
m.sendPacket.NetworkManager = "func_179290_a"

/** 
 * Kick a player from the server with a reason
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.kickPlayerFromServer = "func_147360_c"
/** 
 * Handle commands that start with a /
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.handleSlashCommand = "func_147361_d"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.currentTimeMillis = "func_147363_d"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.setPlayerLocation = "func_175089_a"
/** 
 * "There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention
 * 
 * Parent Class: NetHandlerHandshakeTCP
 */
m.processHandshake = "func_147383_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerLoginClient
 */
m.handleEncryptionRequest = "func_147389_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerLoginClient
 */
m.handleLoginSuccess = "func_147390_a"
m.getSessionService = {}
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginClient
 */
m.getSessionService.NetHandlerLoginClient = "func_147391_c"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getSessionService.Minecraft = "func_152347_ac"

/** 
 * 
 * 
 * Parent Class: RealmsServerStatusPinger$1
 */
m.handleServerInfo = "func_147397_a"
/** 
 * 
 * 
 * Parent Class: RealmsServerStatusPinger$1
 */
m.handlePong = "func_147398_a"
/** 
 * 
 * 
 * Parent Class: ServerData
 */
m.setBase64EncodedIconData = "func_147407_a"
/** 
 * "Returns the base-64 encoded representation of the server's icon
 * 
 * Parent Class: ServerData
 */
m.getBase64EncodedIconData = "func_147409_e"
/** 
 * Sets the strength of the thunder.
 * 
 * Parent Class: World
 */
m.setThunderStrength = "func_147442_i"
/** 
 * "ray traces all blocks
 * 
 * Parent Class: World
 */
m.rayTraceBlocks = "func_72933_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.addTileEntities = "func_147448_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.updateBlocks = "func_147456_g"
/** 
 * Adds the specified TileEntity to the pending removal list.
 * 
 * Parent Class: World
 */
m.markTileEntityForRemoval = "func_147457_a"
m.markBlockRangeForRenderUpdate = {}
/** 
 * 
 * 
 * Parent Class: World
 */
m.markBlockRangeForRenderUpdate.World = "func_175704_b"
/** 
 * "On the client
 * 
 * Parent Class: WorldManager
 */
m.markBlockRangeForRenderUpdate.WorldManager = "func_147585_a"

/** 
 * 
 * 
 * Parent Class: World
 */
m.getCollisionBoxes = "func_147461_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.playMoodSoundAndCheckLight = "func_147467_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isFlammableWithin = "func_147470_e"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.fireBlockEvent = "func_147485_a"
/** 
 * Returns all the tile entities located between the given coordinates
 * 
 * Parent Class: WorldServer
 */
m.getTileEntitiesIn = "func_147486_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.sendQueuedBlockEvents = "func_147488_Z"
/** 
 * 
 * 
 * Parent Class: TileEntitySkullRenderer
 */
m.setRendererDispatcher = "func_147497_a"
m.getFontRenderer = {}
/** 
 * 
 * 
 * Parent Class: TileEntitySpecialRenderer
 */
m.getFontRenderer.TileEntitySpecialRenderer = "func_147498_b"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
m.getFontRenderer.TileEntityRendererDispatcher = "func_147548_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.getFontRenderer.GuiIngame = "func_175179_f"
/** 
 * Returns the font renderer
 * 
 * Parent Class: RenderManager
 */
m.getFontRenderer.RenderManager = "func_78716_a"

/** 
 * Render the mob inside the mob spawner.
 * 
 * Parent Class: TileEntityMobSpawnerRenderer
 */
m.renderMob = "func_147517_a"
m.setWorld = {}
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
m.setWorld.TileEntityRendererDispatcher = "func_147543_a"
/** 
 * Sets the reference to the World object.
 * 
 * Parent Class: Entity
 */
m.setWorld.Entity = "func_70029_a"
/** 
 * Sets the world instance.
 * 
 * Parent Class: ItemInWorldManager
 */
m.setWorld.ItemInWorldManager = "func_73080_a"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.setWorld.Village = "func_82691_a"

/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
m.getSpecialRendererByClass = "func_147546_a"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
m.getSpecialRenderer = "func_147547_b"
m.renderTileEntityAt = {}
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
m.renderTileEntityAt.TileEntityRendererDispatcher = "func_178469_a"
/** 
 * 
 * 
 * Parent Class: TileEntityEndPortalRenderer
 */
m.renderTileEntityAt.TileEntityEndPortalRenderer = "func_180535_a"

/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.setFramebufferColor = "func_147604_a"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.createFramebuffer = "func_147605_b"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.unbindFramebufferTexture = "func_147606_d"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.setFramebufferFilter = "func_147607_a"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.deleteFramebuffer = "func_147608_a"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.unbindFramebuffer = "func_147609_e"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.bindFramebuffer = "func_147610_a"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.checkFramebufferComplete = "func_147611_b"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.bindFramebufferTexture = "func_147612_c"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.createBindFramebuffer = "func_147613_a"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.framebufferClear = "func_147614_f"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.framebufferRender = "func_147615_c"
/** 
 * 
 * 
 * Parent Class: AbstractTexture
 */
m.deleteGlTexture = "func_147631_c"
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
m.setMipmapLevels = "func_147633_a"
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
m.completeResourceLocation = "func_147634_a"
/** 
 * 
 * 
 * Parent Class: ThreadDownloadImageData
 */
m.checkTextureUploaded = "func_147640_e"
/** 
 * 
 * 
 * Parent Class: ThreadDownloadImageData
 */
m.setBufferedImage = "func_147641_a"
m.deleteTexture = {}
/** 
 * 
 * 
 * Parent Class: TextureManager
 */
m.deleteTexture.TextureManager = "func_147645_c"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.deleteTexture.TextureUtil = "func_147942_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.deleteTexture.GlStateManager = "func_179150_h"

/** 
 * Apply Unicode Bidirectional Algorithm to string and return a new possibly reordered string for visual rendering.
 * 
 * Parent Class: FontRenderer
 */
m.bidiReorder = "func_147647_b"
/** 
 * 
 * 
 * Parent Class: ISound
 */
m.getXPosF = "func_147649_g"
/** 
 * 
 * 
 * Parent Class: ISound
 */
m.getSoundLocation = "func_147650_b"
/** 
 * 
 * 
 * Parent Class: ISound
 */
m.getZPosF = "func_147651_i"
/** 
 * 
 * 
 * Parent Class: ISound
 */
m.getRepeatDelay = "func_147652_d"
m.getVolume = {}
/** 
 * 
 * 
 * Parent Class: ISound
 */
m.getVolume.ISound = "func_147653_e"
/** 
 * 
 * 
 * Parent Class: SoundPoolEntry
 */
m.getVolume.SoundPoolEntry = "func_148649_c"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
m.getVolume.S29PacketSoundEffect = "func_149208_g"
/** 
 * 
 * 
 * Parent Class: Block$SoundType
 */
m.getVolume.Block$SoundType = "func_150497_c"

/** 
 * 
 * 
 * Parent Class: ISound
 */
m.getYPosF = "func_147654_h"
m.getPitch = {}
/** 
 * 
 * 
 * Parent Class: ISound
 */
m.getPitch.ISound = "func_147655_f"
/** 
 * 
 * 
 * Parent Class: SoundPoolEntry
 */
m.getPitch.SoundPoolEntry = "func_148650_b"
/** 
 * 
 * 
 * Parent Class: S08PacketPlayerPosLook
 */
m.getPitch.S08PacketPlayerPosLook = "func_148930_g"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
m.getPitch.S0CPacketSpawnPlayer = "func_148945_j"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.getPitch.S0EPacketSpawnObject = "func_149008_j"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getPitch.S0FPacketSpawnMob = "func_149030_m"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
m.getPitch.S29PacketSoundEffect = "func_149209_h"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
m.getPitch.S18PacketEntityTeleport = "func_149447_h"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
m.getPitch.C03PacketPlayer = "func_149470_h"

/** 
 * 
 * 
 * Parent Class: ISound
 */
m.getAttenuationType = "func_147656_j"
/** 
 * 
 * 
 * Parent Class: ISound
 */
m.canRepeat = "func_147657_c"
/** 
 * 
 * 
 * Parent Class: ITickableSound
 */
m.isDonePlaying = "func_147667_k"
m.create = {}
/** 
 * 
 * 
 * Parent Class: PositionedSoundRecord
 */
m.create.PositionedSoundRecord = "func_147675_a"
/** 
 * Create a new PropertyEnum with all Enum constants of the given class.
 * 
 * Parent Class: PropertyEnum
 */
m.create.PropertyEnum = "func_177709_a"
/** 
 * Create a new PropertyDirection with the given name
 * 
 * Parent Class: PropertyDirection
 */
m.create.PropertyDirection = "func_177714_a"
/** 
 * 
 * 
 * Parent Class: PropertyBool
 */
m.create.PropertyBool = "func_177716_a"
/** 
 * 
 * 
 * Parent Class: PropertyInteger
 */
m.create.PropertyInteger = "func_177719_a"

/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.getSound = "func_147680_a"
m.playDelayedSound = {}
/** 
 * Plays the sound in n ticks
 * 
 * Parent Class: SoundHandler
 */
m.playDelayedSound.SoundHandler = "func_147681_a"
/** 
 * Adds a sound to play in n tick
 * 
 * Parent Class: SoundManager
 */
m.playDelayedSound.SoundManager = "func_148599_a"

m.playSound = {}
/** 
 * Play a sound
 * 
 * Parent Class: SoundHandler
 */
m.playSound.SoundHandler = "func_147682_a"
/** 
 * 
 * 
 * Parent Class: SoundManager
 */
m.playSound.SoundManager = "func_148611_c"
/** 
 * "Plays the specified sound. Arg: soundName
 * 
 * Parent Class: WorldManager
 */
m.playSound.WorldManager = "func_72704_a"
/** 
 * "par8 is loudness
 * 
 * Parent Class: WorldClient
 */
m.playSound.WorldClient = "func_72980_b"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.playSound.EntityPlayer = "func_85030_a"

m.stopSound = {}
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.stopSound.SoundHandler = "func_147683_b"
/** 
 * 
 * 
 * Parent Class: SoundManager
 */
m.stopSound.SoundManager = "func_148602_b"

m.setSoundLevel = {}
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.setSoundLevel.SoundHandler = "func_147684_a"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
m.setSoundLevel.GameSettings = "func_151439_a"

/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.unloadSounds = "func_147685_d"
/** 
 * Returns a random sound from one or more categories
 * 
 * Parent Class: SoundHandler
 */
m.getRandomSoundFromCategories = "func_147686_a"
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.resumeSounds = "func_147687_e"
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.pauseSounds = "func_147689_b"
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.stopSounds = "func_147690_c"
m.setListener = {}
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.setListener.SoundHandler = "func_147691_a"
/** 
 * Sets the listener of sounds
 * 
 * Parent Class: SoundManager
 */
m.setListener.SoundManager = "func_148615_a"

m.isSoundPlaying = {}
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.isSoundPlaying.SoundHandler = "func_147692_c"
/** 
 * Returns true if the sound is playing or still within time
 * 
 * Parent Class: SoundManager
 */
m.isSoundPlaying.SoundManager = "func_148597_a"

/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.loadSoundResource = "func_147693_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.getMapItemRenderer = "func_147701_i"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.isShaderActive = "func_147702_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.updateShaderGroupSize = "func_147704_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.activateNextShader = "func_147705_c"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.getShaderGroup = "func_147706_e"
/** 
 * Get ambient occlusion brightness
 * 
 * Parent Class: BlockModelRenderer$AmbientOcclusionFace
 */
m.getAoBrightness = "func_147778_a"
/** 
 * Renders an entity's name above its head
 * 
 * Parent Class: Render
 */
m.renderLivingLabel = "func_147906_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.renderEntityStatic = "func_147936_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.renderEntitySimple = "func_147937_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.doRenderEntity = "func_147939_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.renderEntityWithPosYaw = "func_147940_a"
m.blendColors = {}
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.blendColors.TextureUtil = "func_147943_a"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
m.blendColors.GuiOverlayDebug = "func_181553_a"

/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.blendColorComponent = "func_147944_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.uploadTextureSub = "func_147947_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.generateMipmapData = "func_147949_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.setTextureBlurred = "func_147951_b"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.processPixelValues = "func_147953_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.setTextureBlurMipmap = "func_147954_b"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.uploadTextureMipmap = "func_147955_a"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getFrameTextureData = "func_147965_a"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.generateMipmaps = "func_147963_d"
/** 
 * 
 * 
 * Parent Class: Stitcher
 */
m.getMipmapDimension = "func_147969_b"
/** 
 * "gets a shader uniform for the name given. if not found
 * 
 * Parent Class: ShaderManager
 */
m.getShaderUniformOrDefault = "func_147984_b"
m.markDirty = {}
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
m.markDirty.ShaderManager = "func_147985_d"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
m.markDirty.ShaderUniform = "func_148096_h"
/** 
 * "For tile entities
 * 
 * Parent Class: InventoryCraftResult
 */
m.markDirty.InventoryCraftResult = "func_70296_d"
/** 
 * "Marks this MapDataBase dirty
 * 
 * Parent Class: WorldSavedData
 */
m.markDirty.WorldSavedData = "func_76185_a"

/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
m.getProgram = "func_147986_h"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
m.parseUniform = "func_147987_b"
m.deleteShader = {}
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
m.deleteShader.ShaderManager = "func_147988_a"
/** 
 * 
 * 
 * Parent Class: Shader
 */
m.deleteShader.Shader = "func_148044_b"
/** 
 * 
 * 
 * Parent Class: ShaderLoader
 */
m.deleteShader.ShaderLoader = "func_148054_b"
/** 
 * 
 * 
 * Parent Class: ShaderLinkHelper
 */
m.deleteShader.ShaderLinkHelper = "func_148077_a"

/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
m.getVertexShaderLoader = "func_147989_e"
/** 
 * goes through the parsed uniforms and samplers and connects them to their GL counterparts.
 * 
 * Parent Class: ShaderManager
 */
m.setupUniforms = "func_147990_i"
/** 
 * gets a shader uniform for the name given. null if not found.
 * 
 * Parent Class: ShaderManager
 */
m.getShaderUniform = "func_147991_a"
/** 
 * "adds a shader sampler texture. if it already exists
 * 
 * Parent Class: ShaderManager
 */
m.addSamplerTexture = "func_147992_a"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
m.endShader = "func_147993_b"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
m.getFragmentShaderLoader = "func_147994_f"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
m.useShader = "func_147995_c"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
m.parseSampler = "func_147996_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.loadShaderGroup = "func_148018_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.addFramebuffer = "func_148020_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.deleteShaderGroup = "func_148021_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.getShaderGroupName = "func_148022_b"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.addShader = "func_148023_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.resetProjectionMatrix = "func_148024_c"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.createBindFramebuffers = "func_148026_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.initTarget = "func_148027_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.initUniform = "func_148028_c"
/** 
 * 
 * 
 * Parent Class: Shader
 */
m.preLoadShader = "func_148040_d"
/** 
 * 
 * 
 * Parent Class: Shader
 */
m.addAuxFramebuffer = "func_148041_a"
m.loadShader = {}
/** 
 * 
 * 
 * Parent Class: Shader
 */
m.loadShader.Shader = "func_148042_a"
/** 
 * 
 * 
 * Parent Class: ShaderLoader
 */
m.loadShader.ShaderLoader = "func_148057_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.loadShader.EntityRenderer = "func_175069_a"

/** 
 * 
 * 
 * Parent Class: Shader
 */
m.getShaderManager = "func_148043_c"
/** 
 * 
 * 
 * Parent Class: Shader
 */
m.setProjectionMatrix = "func_148045_a"
/** 
 * 
 * 
 * Parent Class: ShaderLoader
 */
m.getShaderFilename = "func_148055_a"
/** 
 * 
 * 
 * Parent Class: ShaderLoader
 */
m.attachShader = "func_148056_a"
m.getShaderName = {}
/** 
 * 
 * 
 * Parent Class: ShaderLoader$ShaderType
 */
m.getShaderName.ShaderLoader$ShaderType = "func_148062_a"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
m.getShaderName.ShaderUniform = "func_148086_a"

/** 
 * 
 * 
 * Parent Class: ShaderLoader$ShaderType
 */
m.getShaderExtension = "func_148063_b"
/** 
 * gets a map of loaded shaders for the ShaderType.
 * 
 * Parent Class: ShaderLoader$ShaderType
 */
m.getLoadedShaders = "func_148064_d"
/** 
 * 
 * 
 * Parent Class: ShaderLoader$ShaderType
 */
m.getShaderMode = "func_148065_c"
/** 
 * 
 * 
 * Parent Class: ShaderLinkHelper
 */
m.getStaticShaderLinkHelper = "func_148074_b"
/** 
 * 
 * 
 * Parent Class: ShaderLinkHelper
 */
m.linkProgram = "func_148075_b"
/** 
 * 
 * 
 * Parent Class: ShaderLinkHelper
 */
m.setNewStaticShaderLinkHelper = "func_148076_a"
/** 
 * 
 * 
 * Parent Class: ShaderLinkHelper
 */
m.createProgram = "func_148078_c"
m.set = {}
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
m.set.ShaderUniform = "func_148097_a"
/** 
 * Set the given index to the given tag
 * 
 * Parent Class: NBTTagList
 */
m.set.NBTTagList = "func_150304_a"
/** 
 * 
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.set.ExtendedBlockStorage = "func_177484_a"
/** 
 * Set the values
 * 
 * Parent Class: BlockPos$MutableBlockPos
 */
m.set.BlockPos$MutableBlockPos = "func_181079_c"
/** 
 * "Arguments are x
 * 
 * Parent Class: NibbleArray
 */
m.set.NibbleArray = "func_76581_a"
/** 
 * World sets this RenderManager's worldObj to the world provided
 * 
 * Parent Class: RenderManager
 */
m.set.RenderManager = "func_78717_a"

/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
m.uploadFloatMatrix = "func_148082_k"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
m.setUniformLocation = "func_148084_b"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
m.parseType = "func_148085_a"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
m.uploadFloat = "func_148089_j"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
m.uploadInt = "func_148091_i"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
m.upload = "func_148093_b"
m.drawSelectionBox = {}
/** 
 * Draws the selection box around the selected slot element.
 * 
 * Parent Class: GuiClickableScrolledSelectionListProxy
 */
m.drawSelectionBox.GuiClickableScrolledSelectionListProxy = "func_148120_b"
/** 
 * "Draws the selection box for the player. Args: entityPlayer
 * 
 * Parent Class: RenderGlobal
 */
m.drawSelectionBox.RenderGlobal = "func_72731_b"

/** 
 * Stop the thing from scrolling out of bounds
 * 
 * Parent Class: GuiSlot
 */
m.bindAmountScrolled = "func_148121_k"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
m.setDimensions = "func_148122_a"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
m.getSlotIndexFromScreenCoords = "func_148124_c"
m.getEnabled = {}
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
m.getEnabled.GuiSlot = "func_148125_i"
/** 
 * 
 * 
 * Parent Class: GuiButtonRealmsProxy
 */
m.getEnabled.GuiButtonRealmsProxy = "func_154315_e"

m.getSize = {}
/** 
 * 
 * 
 * Parent Class: GuiIngestServers$ServerList
 */
m.getSize.GuiIngestServers$ServerList = "func_148127_b"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement
 */
m.getSize.VertexFormatElement = "func_177368_f"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement$EnumType
 */
m.getSize.VertexFormatElement$EnumType = "func_177395_a"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getSize.WorldBorder = "func_177722_l"

m.drawScreen = {}
/** 
 * 
 * 
 * Parent Class: GuiSimpleScrolledSelectionListProxy
 */
m.drawScreen.GuiSimpleScrolledSelectionListProxy = "func_148128_a"
/** 
 * "Draws the screen and all the components in it. Args : mouseX
 * 
 * Parent Class: GuiTwitchUserMode
 */
m.drawScreen.GuiTwitchUserMode = "func_73863_a"

/** 
 * Handles drawing a list's header row.
 * 
 * Parent Class: GuiResourcePackList
 */
m.drawListHeader = "func_148129_a"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
m.setShowSelectionBox = "func_148130_a"
/** 
 * Returns true if the element passed in is currently selected
 * 
 * Parent Class: GuiIngestServers$ServerList
 */
m.isSelected = "func_148131_a"
/** 
 * "Sets hasListHeader and headerHeight. Params: hasListHeader
 * 
 * Parent Class: GuiSlot
 */
m.setHasListHeader = "func_148133_a"
/** 
 * Registers the IDs that can be used for the scrollbar's up/down buttons.
 * 
 * Parent Class: GuiSlot
 */
m.registerScrollButtons = "func_148134_d"
/** 
 * Overlays the background to hide scrolled items
 * 
 * Parent Class: GuiSlot
 */
m.overlayBackground = "func_148136_c"
/** 
 * 
 * 
 * Parent Class: GuiIngestServers$ServerList
 */
m.getScrollBarX = "func_148137_d"
/** 
 * Return the height of the content being scrolled
 * 
 * Parent Class: GuiStats$StatsMobsList
 */
m.getContentHeight = "func_148138_e"
/** 
 * Gets the width of the list
 * 
 * Parent Class: GuiResourcePackList
 */
m.getListWidth = "func_148139_c"
/** 
 * "Sets the left and right bounds of the slot. Param is the left bound
 * 
 * Parent Class: GuiSlot
 */
m.setSlotXBoundsFromLeft = "func_148140_g"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
m.isMouseYWithinSlotBounds = "func_148141_e"
/** 
 * "The element in the slot that was clicked
 * 
 * Parent Class: GuiIngestServers$ServerList
 */
m.elementClicked = "func_148144_a"
/** 
 * "Scrolls the slot by the given amount. A positive value scrolls down
 * 
 * Parent Class: GuiSlot
 */
m.scrollBy = "func_148145_f"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
m.getSlotHeight = "func_148146_j"
/** 
 * Returns the amountScrolled field as an integer.
 * 
 * Parent Class: GuiSlot
 */
m.getAmountScrolled = "func_148148_g"
/** 
 * Gets the IGuiListEntry object for the given index
 * 
 * Parent Class: GuiResourcePackList
 */
m.getListEntry = "func_148180_b"
/** 
 * 
 * 
 * Parent Class: ServerSelectionList
 */
m.setSelectedSlotIndex = "func_148192_c"
/** 
 * 
 * 
 * Parent Class: GuiResourcePackList
 */
m.getList = "func_148201_l"
/** 
 * 
 * 
 * Parent Class: GuiResourcePackSelected
 */
m.getListHeader = "func_148202_k"
m.updateMapTexture = {}
/** 
 * Updates a map {@link net.minecraft.client.gui.MapItemRenderer.Instance#mapTexture texture}
 * 
 * Parent Class: MapItemRenderer$Instance
 */
m.updateMapTexture.MapItemRenderer$Instance = "func_148236_a"
/** 
 * Updates a map texture
 * 
 * Parent Class: MapItemRenderer
 */
m.updateMapTexture.MapItemRenderer = "func_148246_a"

m.render = {}
/** 
 * Renders map and players to it
 * 
 * Parent Class: MapItemRenderer$Instance
 */
m.render.MapItemRenderer$Instance = "func_148237_a"
/** 
 * 
 * 
 * Parent Class: GuiStreamIndicator
 */
m.render.GuiStreamIndicator = "func_152437_a"
/** 
 * 
 * 
 * Parent Class: ModelBox
 */
m.render.ModelBox = "func_178780_a"
/** 
 * Sets the models various rotation angles then renders the model.
 * 
 * Parent Class: ModelEnderCrystal
 */
m.render.ModelEnderCrystal = "func_78088_a"
/** 
 * 
 * 
 * Parent Class: ModelRenderer
 */
m.render.ModelRenderer = "func_78785_a"

/** 
 * Returns {@link net.minecraft.client.gui.MapItemRenderer.Instance MapItemRenderer.Instance} with given map data
 * 
 * Parent Class: MapItemRenderer
 */
m.getMapRendererInstance = "func_148248_b"
/** 
 * Clears the currently loaded maps and removes their corresponding textures
 * 
 * Parent Class: MapItemRenderer
 */
m.clearLoadedMaps = "func_148249_a"
/** 
 * 
 * 
 * Parent Class: MapItemRenderer
 */
m.renderMap = "func_148250_a"
/** 
 * 
 * 
 * Parent Class: Session
 */
m.getToken = "func_148254_d"
/** 
 * 
 * 
 * Parent Class: Session
 */
m.getPlayerID = "func_148255_b"
m.getProfile = {}
/** 
 * 
 * 
 * Parent Class: Session
 */
m.getProfile.Session = "func_148256_e"
/** 
 * 
 * 
 * Parent Class: C00PacketLoginStart
 */
m.getProfile.C00PacketLoginStart = "func_149304_c"
/** 
 * 
 * 
 * Parent Class: S02PacketLoginSuccess
 */
m.getProfile.S02PacketLoginSuccess = "func_179730_a"
/** 
 * 
 * 
 * Parent Class: S38PacketPlayerListItem$AddPlayerData
 */
m.getProfile.S38PacketPlayerListItem$AddPlayerData = "func_179962_a"

/** 
 * "Saves a screenshot in the game directory with a time-stamped filename.  Args: gameDirectory
 * 
 * Parent Class: ScreenShotHelper
 */
m.saveScreenshot = "func_148260_a"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.denormalizeValue = "func_148262_d"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.setValueMax = "func_148263_a"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.snapToStep = "func_148264_f"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.normalizeValue = "func_148266_c"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.getValueMax = "func_148267_f"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.snapToStepClamp = "func_148268_e"
/** 
 * 
 * 
 * Parent Class: ServerListEntryLanDetected
 */
m.getLanServer = "func_148289_a"
m.getServerData = {}
/** 
 * 
 * 
 * Parent Class: ServerListEntryNormal
 */
m.getServerData.ServerListEntryNormal = "func_148296_a"
/** 
 * Gets the ServerData instance stored for the given index in the list.
 * 
 * Parent Class: ServerList
 */
m.getServerData.ServerList = "func_78850_a"

/** 
 * 
 * 
 * Parent Class: ServerListEntryNormal
 */
m.prepareServerIcon = "func_148297_b"
/** 
 * Updates the gui slots ItemStack's based on scroll position.
 * 
 * Parent Class: GuiContainerCreative$ContainerCreative
 */
m.scrollTo = "func_148329_a"
/** 
 * Randomly generates a new name built up of 3 or 4 randomly selected words.
 * 
 * Parent Class: EnchantmentNameParts
 */
m.generateNewRandomName = "func_148334_a"
/** 
 * Resets the underlying random number generator using a given seed.
 * 
 * Parent Class: EnchantmentNameParts
 */
m.reseedRandomGenerator = "func_148335_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
m.setRepositories = "func_148527_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
m.clearResourcePack = "func_148529_f"
/** 
 * Getter for the IResourcePack instance associated with this ResourcePackRepository
 * 
 * Parent Class: ResourcePackRepository
 */
m.getResourcePackInstance = "func_148530_e"
/** 
 * 
 * 
 * Parent Class: TextureMetadataSection
 */
m.getListMipmaps = "func_148535_c"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.sendPacketToAllPlayersInDimension = "func_148537_a"
/** 
 * Sends the given string to every player as chat message.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.sendChatMsg = "func_148539_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.sendPacketToAllPlayers = "func_148540_a"
/** 
 * "params: x
 * 
 * Parent Class: ServerConfigurationManager
 */
m.sendToAllNear = "func_148541_a"
/** 
 * "checks ban-lists
 * 
 * Parent Class: ServerConfigurationManager
 */
m.allowUserToConnect = "func_148542_a"
/** 
 * "params: srcPlayer
 * 
 * Parent Class: ServerConfigurationManager
 */
m.sendToAllNearExcept = "func_148543_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.sendChatMsgImpl = "func_148544_a"
/** 
 * also checks for multiple logins across servers
 * 
 * Parent Class: ServerConfigurationManager
 */
m.createPlayerForUser = "func_148545_a"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.isStreaming = "func_148552_f"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.setSoundEntryVolume = "func_148553_a"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.setSoundEntryWeight = "func_148554_a"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.getSoundEntryWeight = "func_148555_d"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.getSoundEntryName = "func_148556_a"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.setStreaming = "func_148557_a"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.getSoundEntryVolume = "func_148558_b"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.setSoundEntryPitch = "func_148559_b"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.getSoundEntryPitch = "func_148560_c"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.setSoundEntryName = "func_148561_a"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.setSoundEntryType = "func_148562_a"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
m.getSoundEntryType = "func_148563_e"
/** 
 * 
 * 
 * Parent Class: SoundList
 */
m.getSoundList = "func_148570_a"
/** 
 * 
 * 
 * Parent Class: SoundList
 */
m.setSoundCategory = "func_148571_a"
/** 
 * 
 * 
 * Parent Class: SoundList
 */
m.setReplaceExisting = "func_148572_a"
m.getSoundCategory = {}
/** 
 * 
 * 
 * Parent Class: SoundList
 */
m.getSoundCategory.SoundList = "func_148573_c"
/** 
 * 
 * 
 * Parent Class: SoundEventAccessorComposite
 */
m.getSoundCategory.SoundEventAccessorComposite = "func_148728_d"

/** 
 * 
 * 
 * Parent Class: SoundList
 */
m.canReplaceExisting = "func_148574_b"
m.getType = {}
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry$Type
 */
m.getType.SoundList$SoundEntry$Type = "func_148580_a"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.getType.S0EPacketSpawnObject = "func_148993_l"
/** 
 * Get the given FlowerType from BlockType & metadata
 * 
 * Parent Class: BlockFlower$EnumFlowerType
 */
m.getType.BlockFlower$EnumFlowerType = "func_176967_a"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement
 */
m.getType.VertexFormatElement = "func_177367_b"
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.getType.ChunkCompileTaskGenerator = "func_178538_g"
/** 
 * 
 * 
 * Parent Class: S45PacketTitle
 */
m.getType.S45PacketTitle = "func_179807_a"
/** 
 * "Returns the id of the area to display the text
 * 
 * Parent Class: S02PacketChat
 */
m.getType.S02PacketChat = "func_179841_c"
/** 
 * 
 * 
 * Parent Class: GameRules$Value
 */
m.getType.GameRules$Value = "func_180254_e"

/** 
 * 
 * 
 * Parent Class: ISound$AttenuationType
 */
m.getTypeInt = "func_148586_a"
/** 
 * "Normalizes volume level from parameters.  Range [0.0
 * 
 * Parent Class: SoundManager
 */
m.getNormalizedVolume = "func_148594_a"
/** 
 * "Returns the sound level (between 0.0 and 1.0) for a category
 * 
 * Parent Class: SoundManager
 */
m.getSoundCategoryVolume = "func_148595_a"
/** 
 * 
 * 
 * Parent Class: SoundManager
 */
m.reloadSoundSystem = "func_148596_a"
/** 
 * Adjusts volume for currently playing sounds in this category
 * 
 * Parent Class: SoundManager
 */
m.setSoundCategoryVolume = "func_148601_a"
/** 
 * Resumes playing all currently playing sounds (after pauseAllSounds)
 * 
 * Parent Class: SoundManager
 */
m.resumeAllSounds = "func_148604_f"
/** 
 * 
 * 
 * Parent Class: SoundManager
 */
m.updateAllSounds = "func_148605_d"
/** 
 * "Normalizes pitch from parameters and clamps to [0.5
 * 
 * Parent Class: SoundManager
 */
m.getNormalizedPitch = "func_148606_a"
/** 
 * "Tries to add the paulscode library and the relevant codecs. If it fails
 * 
 * Parent Class: SoundManager
 */
m.loadSoundSystem = "func_148608_i"
/** 
 * Pauses all currently playing sounds
 * 
 * Parent Class: SoundManager
 */
m.pauseAllSounds = "func_148610_e"
/** 
 * 
 * 
 * Parent Class: SoundManager
 */
m.getURLForSoundResource = "func_148612_a"
/** 
 * Cleans up the Sound System
 * 
 * Parent Class: SoundManager
 */
m.unloadSoundSystem = "func_148613_b"
/** 
 * Stops all currently playing sounds
 * 
 * Parent Class: SoundManager
 */
m.stopAllSounds = "func_148614_c"
/** 
 * Returns the maximum delay between playing music of this type.
 * 
 * Parent Class: MusicTicker$MusicType
 */
m.getMaxDelay = "func_148633_c"
/** 
 * Returns the minimum delay between playing music of this type.
 * 
 * Parent Class: MusicTicker$MusicType
 */
m.getMinDelay = "func_148634_b"
/** 
 * 
 * 
 * Parent Class: MusicTicker$MusicType
 */
m.getMusicLocation = "func_148635_a"
/** 
 * 
 * 
 * Parent Class: SoundPoolEntry
 */
m.setVolume = "func_148647_b"
/** 
 * 
 * 
 * Parent Class: SoundPoolEntry
 */
m.isStreamingSound = "func_148648_d"
/** 
 * 
 * 
 * Parent Class: SoundPoolEntry
 */
m.setPitch = "func_148651_a"
/** 
 * 
 * 
 * Parent Class: SoundPoolEntry
 */
m.getSoundPoolEntryLocation = "func_148652_a"
/** 
 * 
 * 
 * Parent Class: SoundEventAccessor
 */
m.cloneEntry = "func_148720_g"
m.getWeight = {}
/** 
 * 
 * 
 * Parent Class: SoundEventAccessor
 */
m.getWeight.SoundEventAccessor = "func_148721_a"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variant
 */
m.getWeight.ModelBlockDefinition$Variant = "func_178430_d"
/** 
 * Retrieves the weight value of an Enchantment. This weight value is used within vanilla to determine how rare an enchantment is.
 * 
 * Parent Class: Enchantment
 */
m.getWeight.Enchantment = "func_77324_c"

/** 
 * 
 * 
 * Parent Class: SoundEventAccessorComposite
 */
m.addSoundToEventPool = "func_148727_a"
/** 
 * 
 * 
 * Parent Class: SoundEventAccessorComposite
 */
m.getSoundEventLocation = "func_148729_c"
/** 
 * Creates the Map we will use to map keys to their registered values.
 * 
 * Parent Class: RegistrySimple
 */
m.createUnderlyingMap = "func_148740_a"
/** 
 * Does this registry contain an entry for the given key?
 * 
 * Parent Class: RegistrySimple
 */
m.containsKey = "func_148741_d"
m.getKeys = {}
/** 
 * Gets all the keys recognized by this registry.
 * 
 * Parent Class: RegistrySimple
 */
m.getKeys.RegistrySimple = "func_148742_b"
/** 
 * 
 * 
 * Parent Class: UserListWhitelist
 */
m.getKeys.UserListWhitelist = "func_152685_a"

/** 
 * 
 * 
 * Parent Class: ObjectIntIdentityMap
 */
m.getByValue = "func_148745_a"
/** 
 * 
 * 
 * Parent Class: ObjectIntIdentityMap
 */
m.put = "func_148746_a"
m.get = {}
/** 
 * 
 * 
 * Parent Class: ObjectIntIdentityMap
 */
m.get.ObjectIntIdentityMap = "func_148747_b"
/** 
 * Send a GET request to the given URL.
 * 
 * Parent Class: HttpUtil
 */
m.get.HttpUtil = "func_152755_a"
/** 
 * 
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.get.ExtendedBlockStorage = "func_177485_a"
/** 
 * Get the tag at the given position
 * 
 * Parent Class: NBTTagList
 */
m.get.NBTTagList = "func_179238_g"
/** 
 * "Returns the nibble of data corresponding to the passed in x
 * 
 * Parent Class: NibbleArray
 */
m.get.NibbleArray = "func_76582_a"
/** 
 * 
 * 
 * Parent Class: NibbleArrayReader
 */
m.get.NibbleArrayReader = "func_76686_a"

/** 
 * Gets the object identified by the given ID.
 * 
 * Parent Class: RegistryNamespaced
 */
m.getObjectById = "func_148754_a"
/** 
 * Gets the integer ID we use to identify the given object.
 * 
 * Parent Class: RegistryNamespaced
 */
m.getIDForObject = "func_148757_b"
/** 
 * 
 * 
 * Parent Class: SoundRegistry
 */
m.registerSound = "func_148762_a"
m.clearMap = {}
/** 
 * Reset the underlying sound map (Called on resource manager reload)
 * 
 * Parent Class: SoundRegistry
 */
m.clearMap.SoundRegistry = "func_148763_c"
/** 
 * Removes all entries from the map
 * 
 * Parent Class: IntHashMap
 */
m.clearMap.IntHashMap = "func_76046_c"

/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glBlendFunc = "func_148821_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.isFramebufferEnabled = "func_148822_b"
/** 
 * Passes this Packet on to the NetHandler for processing.
 * 
 * Parent Class: C00PacketServerQuery
 */
m.processPacket = "func_148833_a"
/** 
 * Reads the raw packet data from the data stream.
 * 
 * Parent Class: C00PacketServerQuery
 */
m.readPacketData = "func_148837_a"
/** 
 * Writes the raw packet data to the data stream.
 * 
 * Parent Class: C00PacketServerQuery
 */
m.writePacketData = "func_148840_b"
/** 
 * 
 * 
 * Parent Class: S25PacketBlockBreakAnim
 */
m.getBreakerId = "func_148845_c"
/** 
 * 
 * 
 * Parent Class: S35PacketUpdateTileEntity
 */
m.getTileEntityType = "func_148853_f"
/** 
 * 
 * 
 * Parent Class: S35PacketUpdateTileEntity
 */
m.getNbtCompound = "func_148857_g"
/** 
 * pitch data for noteblocks
 * 
 * Parent Class: S24PacketBlockAction
 */
m.getData2 = "func_148864_h"
/** 
 * instrument data for noteblocks
 * 
 * Parent Class: S24PacketBlockAction
 */
m.getData1 = "func_148869_g"
m.getWindowId = {}
/** 
 * 
 * 
 * Parent Class: S32PacketConfirmTransaction
 */
m.getWindowId.S32PacketConfirmTransaction = "func_148889_c"
/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
m.getWindowId.S2DPacketOpenWindow = "func_148901_c"
/** 
 * 
 * 
 * Parent Class: S31PacketWindowProperty
 */
m.getWindowId.S31PacketWindowProperty = "func_149182_c"
/** 
 * 
 * 
 * Parent Class: C0FPacketConfirmTransaction
 */
m.getWindowId.C0FPacketConfirmTransaction = "func_149532_c"
/** 
 * 
 * 
 * Parent Class: C11PacketEnchantItem
 */
m.getWindowId.C11PacketEnchantItem = "func_149539_c"
/** 
 * 
 * 
 * Parent Class: C0EPacketClickWindow
 */
m.getWindowId.C0EPacketClickWindow = "func_149548_c"

m.getActionNumber = {}
/** 
 * 
 * 
 * Parent Class: S32PacketConfirmTransaction
 */
m.getActionNumber.S32PacketConfirmTransaction = "func_148890_d"
/** 
 * 
 * 
 * Parent Class: C0EPacketClickWindow
 */
m.getActionNumber.C0EPacketClickWindow = "func_149547_f"

/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
m.getSlotCount = "func_148898_f"
/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
m.hasSlots = "func_148900_g"
/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
m.getGuiId = "func_148902_e"
/** 
 * 
 * 
 * Parent Class: S30PacketWindowItems
 */
m.getItemStacks = "func_148910_d"
/** 
 * 
 * 
 * Parent Class: S02PacketChat
 */
m.isChat = "func_148916_d"
m.getY = {}
/** 
 * 
 * 
 * Parent Class: S08PacketPlayerPosLook
 */
m.getY.S08PacketPlayerPosLook = "func_148928_d"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
m.getY.S0CPacketSpawnPlayer = "func_148949_g"
/** 
 * 
 * 
 * Parent Class: S11PacketSpawnExperienceOrb
 */
m.getY.S11PacketSpawnExperienceOrb = "func_148983_e"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.getY.S0EPacketSpawnObject = "func_148998_e"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getY.S0FPacketSpawnMob = "func_149034_g"
/** 
 * 
 * 
 * Parent Class: S27PacketExplosion
 */
m.getY.S27PacketExplosion = "func_149143_g"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
m.getY.S29PacketSoundEffect = "func_149211_e"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
m.getY.S18PacketEntityTeleport = "func_149448_e"
/** 
 * Get the Y coordinate
 * 
 * Parent Class: Vec3i
 */
m.getY.Vec3i = "func_177956_o"
/** 
 * Gets the Y axis rotation
 * 
 * Parent Class: Rotations
 */
m.getY.Rotations = "func_179416_c"
/** 
 * 
 * 
 * Parent Class: EntityMoveHelper
 */
m.getY.EntityMoveHelper = "func_179919_e"
/** 
 * 
 * 
 * Parent Class: PositionImpl
 */
m.getY.PositionImpl = "func_82617_b"

m.getYaw = {}
/** 
 * 
 * 
 * Parent Class: S08PacketPlayerPosLook
 */
m.getYaw.S08PacketPlayerPosLook = "func_148931_f"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
m.getYaw.S0CPacketSpawnPlayer = "func_148941_i"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.getYaw.S0EPacketSpawnObject = "func_149006_k"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getYaw.S0FPacketSpawnMob = "func_149028_l"
/** 
 * 
 * 
 * Parent Class: S19PacketEntityHeadLook
 */
m.getYaw.S19PacketEntityHeadLook = "func_149380_c"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
m.getYaw.S18PacketEntityTeleport = "func_149450_g"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
m.getYaw.C03PacketPlayer = "func_149462_g"

m.getX = {}
/** 
 * 
 * 
 * Parent Class: S08PacketPlayerPosLook
 */
m.getX.S08PacketPlayerPosLook = "func_148932_c"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
m.getX.S0CPacketSpawnPlayer = "func_148942_f"
/** 
 * 
 * 
 * Parent Class: S11PacketSpawnExperienceOrb
 */
m.getX.S11PacketSpawnExperienceOrb = "func_148984_d"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.getX.S0EPacketSpawnObject = "func_148997_d"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getX.S0FPacketSpawnMob = "func_149023_f"
/** 
 * 
 * 
 * Parent Class: S27PacketExplosion
 */
m.getX.S27PacketExplosion = "func_149148_f"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
m.getX.S29PacketSoundEffect = "func_149207_d"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
m.getX.S18PacketEntityTeleport = "func_149449_d"
/** 
 * Get the X coordinate
 * 
 * Parent Class: Vec3i
 */
m.getX.Vec3i = "func_177958_n"
/** 
 * Gets the X axis rotation
 * 
 * Parent Class: Rotations
 */
m.getX.Rotations = "func_179415_b"
/** 
 * 
 * 
 * Parent Class: EntityMoveHelper
 */
m.getX.EntityMoveHelper = "func_179917_d"
/** 
 * 
 * 
 * Parent Class: PositionImpl
 */
m.getX.PositionImpl = "func_82615_a"

m.getZ = {}
/** 
 * 
 * 
 * Parent Class: S08PacketPlayerPosLook
 */
m.getZ.S08PacketPlayerPosLook = "func_148933_e"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
m.getZ.S0CPacketSpawnPlayer = "func_148946_h"
/** 
 * 
 * 
 * Parent Class: S11PacketSpawnExperienceOrb
 */
m.getZ.S11PacketSpawnExperienceOrb = "func_148982_f"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.getZ.S0EPacketSpawnObject = "func_148994_f"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getZ.S0FPacketSpawnMob = "func_149029_h"
/** 
 * 
 * 
 * Parent Class: S27PacketExplosion
 */
m.getZ.S27PacketExplosion = "func_149145_h"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
m.getZ.S29PacketSoundEffect = "func_149210_f"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
m.getZ.S18PacketEntityTeleport = "func_149446_f"
/** 
 * Get the Z coordinate
 * 
 * Parent Class: Vec3i
 */
m.getZ.Vec3i = "func_177952_p"
/** 
 * Gets the Z axis rotation
 * 
 * Parent Class: Rotations
 */
m.getZ.Rotations = "func_179413_d"
/** 
 * 
 * 
 * Parent Class: EntityMoveHelper
 */
m.getZ.EntityMoveHelper = "func_179918_f"
/** 
 * 
 * 
 * Parent Class: PositionImpl
 */
m.getZ.PositionImpl = "func_82616_c"

m.getEntityID = {}
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
m.getEntityID.S0CPacketSpawnPlayer = "func_148943_d"
/** 
 * 
 * 
 * Parent Class: S10PacketSpawnPainting
 */
m.getEntityID.S10PacketSpawnPainting = "func_148965_c"
/** 
 * 
 * 
 * Parent Class: S0BPacketAnimation
 */
m.getEntityID.S0BPacketAnimation = "func_148978_c"
/** 
 * 
 * 
 * Parent Class: S11PacketSpawnExperienceOrb
 */
m.getEntityID.S11PacketSpawnExperienceOrb = "func_148985_c"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.getEntityID.S0EPacketSpawnObject = "func_149001_c"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getEntityID.S0FPacketSpawnMob = "func_149024_d"
/** 
 * 
 * 
 * Parent Class: S0DPacketCollectItem
 */
m.getEntityID.S0DPacketCollectItem = "func_149353_d"
/** 
 * 
 * 
 * Parent Class: S04PacketEntityEquipment
 */
m.getEntityID.S04PacketEntityEquipment = "func_149389_d"
/** 
 * 
 * 
 * Parent Class: S12PacketEntityVelocity
 */
m.getEntityID.S12PacketEntityVelocity = "func_149412_c"
/** 
 * gets the entityID of a specific entity
 * 
 * Parent Class: EntityList
 */
m.getEntityID.EntityList = "func_75619_a"

/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
m.getCurrentItemID = "func_148947_k"
/** 
 * 
 * 
 * Parent Class: S10PacketSpawnPainting
 */
m.getTitle = "func_148961_h"
/** 
 * 
 * 
 * Parent Class: S0BPacketAnimation
 */
m.getAnimationType = "func_148977_d"
/** 
 * 
 * 
 * Parent Class: S11PacketSpawnExperienceOrb
 */
m.getXPValue = "func_148986_g"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.setY = "func_148995_b"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.setX = "func_148996_a"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.getSpeedZ = "func_148999_i"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.setSpeedY = "func_149000_e"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.setSpeedX = "func_149003_d"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.getSpeedY = "func_149004_h"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.setZ = "func_149005_c"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.setSpeedZ = "func_149007_f"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
m.getSpeedX = "func_149010_g"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getEntityType = "func_149025_e"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getVelocityX = "func_149026_i"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getVelocityZ = "func_149031_k"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getHeadPitch = "func_149032_n"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
m.getVelocityY = "func_149033_j"
m.getEntity = {}
/** 
 * 
 * 
 * Parent Class: S14PacketEntity
 */
m.getEntity.S14PacketEntity = "func_149065_a"
/** 
 * 
 * 
 * Parent Class: S19PacketEntityStatus
 */
m.getEntity.S19PacketEntityStatus = "func_149161_a"
/** 
 * 
 * 
 * Parent Class: S19PacketEntityHeadLook
 */
m.getEntity.S19PacketEntityHeadLook = "func_149381_a"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.getEntity.CommandBase = "func_175768_b"
/** 
 * 
 * 
 * Parent Class: C18PacketSpectate
 */
m.getEntity.C18PacketSpectate = "func_179727_a"
/** 
 * 
 * 
 * Parent Class: S49PacketUpdateEntityNBT
 */
m.getEntity.S49PacketUpdateEntityNBT = "func_179764_a"
/** 
 * 
 * 
 * Parent Class: S43PacketCamera
 */
m.getEntity.S43PacketCamera = "func_179780_a"
/** 
 * 
 * 
 * Parent Class: EntityDamageSourceIndirect
 */
m.getEntity.EntityDamageSourceIndirect = "func_76346_g"

m.getEffectId = {}
/** 
 * 
 * 
 * Parent Class: S1EPacketRemoveEntityEffect
 */
m.getEffectId.S1EPacketRemoveEntityEffect = "func_149075_d"
/** 
 * 
 * 
 * Parent Class: S1DPacketEntityEffect
 */
m.getEffectId.S1DPacketEntityEffect = "func_149427_e"

m.getWorldType = {}
/** 
 * 
 * 
 * Parent Class: S07PacketRespawn
 */
m.getWorldType.S07PacketRespawn = "func_149080_f"
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
m.getWorldType.S01PacketJoinGame = "func_149196_i"
/** 
 * 
 * 
 * Parent Class: ChunkCache
 */
m.getWorldType.ChunkCache = "func_175624_G"

/** 
 * 
 * 
 * Parent Class: S07PacketRespawn
 */
m.getDimensionID = "func_149082_c"
m.getGameType = {}
/** 
 * 
 * 
 * Parent Class: S07PacketRespawn
 */
m.getGameType.S07PacketRespawn = "func_149083_e"
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
m.getGameType.S01PacketJoinGame = "func_149198_e"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.getGameType.NetworkPlayerInfo = "func_178848_b"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getGameType.MinecraftServer = "func_71265_f"
/** 
 * 
 * 
 * Parent Class: ItemInWorldManager
 */
m.getGameType.ItemInWorldManager = "func_73081_b"
/** 
 * Gets the GameType.
 * 
 * Parent Class: WorldInfo
 */
m.getGameType.WorldInfo = "func_76077_q"
/** 
 * Gets the game type.
 * 
 * Parent Class: WorldSettings
 */
m.getGameType.WorldSettings = "func_77162_e"

/** 
 * 
 * 
 * Parent Class: S13PacketDestroyEntities
 */
m.getEntityIDs = "func_149098_c"
m.getFlySpeed = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.getFlySpeed.S39PacketPlayerAbilities = "func_149101_g"
/** 
 * 
 * 
 * Parent Class: PlayerCapabilities
 */
m.getFlySpeed.PlayerCapabilities = "func_75093_a"

m.setFlying = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.setFlying.S39PacketPlayerAbilities = "func_149102_b"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
m.setFlying.C13PacketPlayerAbilities = "func_149483_b"

m.isCreativeMode = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.isCreativeMode.S39PacketPlayerAbilities = "func_149103_f"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
m.isCreativeMode.C13PacketPlayerAbilities = "func_149484_f"

m.setFlySpeed = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.setFlySpeed.S39PacketPlayerAbilities = "func_149104_a"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
m.setFlySpeed.C13PacketPlayerAbilities = "func_149485_a"
/** 
 * 
 * 
 * Parent Class: PlayerCapabilities
 */
m.setFlySpeed.PlayerCapabilities = "func_75092_a"

m.isAllowFlying = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.isAllowFlying.S39PacketPlayerAbilities = "func_149105_e"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
m.isAllowFlying.C13PacketPlayerAbilities = "func_149486_e"

m.isFlying = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.isFlying.S39PacketPlayerAbilities = "func_149106_d"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
m.isFlying.C13PacketPlayerAbilities = "func_149488_d"

m.getWalkSpeed = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.getWalkSpeed.S39PacketPlayerAbilities = "func_149107_h"
/** 
 * 
 * 
 * Parent Class: PlayerCapabilities
 */
m.getWalkSpeed.PlayerCapabilities = "func_75094_b"

m.setInvulnerable = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.setInvulnerable.S39PacketPlayerAbilities = "func_149108_a"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
m.setInvulnerable.C13PacketPlayerAbilities = "func_149490_a"
/** 
 * Set whether this skull comes from an invulnerable (aura) wither boss.
 * 
 * Parent Class: EntityWitherSkull
 */
m.setInvulnerable.EntityWitherSkull = "func_82343_e"

m.setAllowFlying = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.setAllowFlying.S39PacketPlayerAbilities = "func_149109_c"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
m.setAllowFlying.C13PacketPlayerAbilities = "func_149491_c"

m.setWalkSpeed = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.setWalkSpeed.S39PacketPlayerAbilities = "func_149110_b"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
m.setWalkSpeed.C13PacketPlayerAbilities = "func_149492_b"

m.setCreativeMode = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.setCreativeMode.S39PacketPlayerAbilities = "func_149111_d"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
m.setCreativeMode.C13PacketPlayerAbilities = "func_149493_d"

m.isInvulnerable = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
m.isInvulnerable.S39PacketPlayerAbilities = "func_149112_c"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
m.isInvulnerable.C13PacketPlayerAbilities = "func_149494_c"
/** 
 * Return whether this skull comes from an invulnerable (aura) wither boss.
 * 
 * Parent Class: EntityWitherSkull
 */
m.isInvulnerable.EntityWitherSkull = "func_82342_d"

/** 
 * 
 * 
 * Parent Class: S2BPacketChangeGameState
 */
m.getGameState = "func_149138_c"
/** 
 * 
 * 
 * Parent Class: S27PacketExplosion
 */
m.getStrength = "func_149146_i"
m.getAffectedBlockPositions = {}
/** 
 * 
 * 
 * Parent Class: S27PacketExplosion
 */
m.getAffectedBlockPositions.S27PacketExplosion = "func_149150_j"
/** 
 * 
 * 
 * Parent Class: Explosion
 */
m.getAffectedBlockPositions.Explosion = "func_180343_e"

/** 
 * 
 * 
 * Parent Class: S19PacketEntityStatus
 */
m.getOpCode = "func_149160_c"
/** 
 * 
 * 
 * Parent Class: S40PacketDisconnect
 */
m.getReason = "func_149165_c"
m.getChannelName = {}
/** 
 * 
 * 
 * Parent Class: S3FPacketCustomPayload
 */
m.getChannelName.S3FPacketCustomPayload = "func_149169_c"
/** 
 * 
 * 
 * Parent Class: C17PacketCustomPayload
 */
m.getChannelName.C17PacketCustomPayload = "func_149559_c"

/** 
 * 
 * 
 * Parent Class: S31PacketWindowProperty
 */
m.getVarValue = "func_149180_e"
/** 
 * 
 * 
 * Parent Class: S31PacketWindowProperty
 */
m.getVarIndex = "func_149181_d"
/** 
 * 
 * 
 * Parent Class: S34PacketMaps
 */
m.getMapId = "func_149188_c"
m.getMaxPlayers = {}
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
m.getMaxPlayers.S01PacketJoinGame = "func_149193_h"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse$PlayerCountData
 */
m.getMaxPlayers.ServerStatusResponse$PlayerCountData = "func_151332_a"
/** 
 * Returns the maximum number of players allowed on the server.
 * 
 * Parent Class: MinecraftServer
 */
m.getMaxPlayers.MinecraftServer = "func_71275_y"
/** 
 * Returns the maximum number of players allowed on the server.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getMaxPlayers.ServerConfigurationManager = "func_72352_l"

/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
m.getDimension = "func_149194_f"
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
m.isHardcoreMode = "func_149195_d"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
m.getSoundName = "func_149212_c"
/** 
 * Gets the x coordinate to spawn the particle.
 * 
 * Parent Class: S2APacketParticles
 */
m.getXCoordinate = "func_149220_d"
/** 
 * Gets the x coordinate offset for the particle. The particle may use the offset for particle spread.
 * 
 * Parent Class: S2APacketParticles
 */
m.getXOffset = "func_149221_g"
/** 
 * Gets the amount of particles to spawn
 * 
 * Parent Class: S2APacketParticles
 */
m.getParticleCount = "func_149222_k"
/** 
 * Gets the z coordinate offset for the particle. The particle may use the offset for particle spread.
 * 
 * Parent Class: S2APacketParticles
 */
m.getZOffset = "func_149223_i"
m.getYOffset = {}
/** 
 * Gets the y coordinate offset for the particle. The particle may use the offset for particle spread.
 * 
 * Parent Class: S2APacketParticles
 */
m.getYOffset.S2APacketParticles = "func_149224_h"
/** 
 * Returns the Y Offset of this entity.
 * 
 * Parent Class: EntityPlayer
 */
m.getYOffset.EntityPlayer = "func_70033_W"

/** 
 * Gets the z coordinate to spawn the particle.
 * 
 * Parent Class: S2APacketParticles
 */
m.getZCoordinate = "func_149225_f"
/** 
 * Gets the y coordinate to spawn the particle.
 * 
 * Parent Class: S2APacketParticles
 */
m.getYCoordinate = "func_149226_e"
/** 
 * Gets the speed of the particle animation (used in client side rendering).
 * 
 * Parent Class: S2APacketParticles
 */
m.getParticleSpeed = "func_149227_j"
/** 
 * 
 * 
 * Parent Class: S28PacketEffect
 */
m.getSoundData = "func_149241_e"
/** 
 * 
 * 
 * Parent Class: S28PacketEffect
 */
m.getSoundType = "func_149242_d"
/** 
 * 
 * 
 * Parent Class: S28PacketEffect
 */
m.isSoundServerwide = "func_149244_c"
m.getChunkZ = {}
/** 
 * 
 * 
 * Parent Class: S26PacketMapChunkBulk
 */
m.getChunkZ.S26PacketMapChunkBulk = "func_149253_b"
/** 
 * 
 * 
 * Parent Class: S21PacketChunkData
 */
m.getChunkZ.S21PacketChunkData = "func_149271_f"

/** 
 * 
 * 
 * Parent Class: S26PacketMapChunkBulk
 */
m.getChunkCount = "func_149254_d"
m.getChunkX = {}
/** 
 * 
 * 
 * Parent Class: S26PacketMapChunkBulk
 */
m.getChunkX.S26PacketMapChunkBulk = "func_149255_a"
/** 
 * 
 * 
 * Parent Class: S21PacketChunkData
 */
m.getChunkX.S21PacketChunkData = "func_149273_e"

/** 
 * 
 * 
 * Parent Class: S26PacketMapChunkBulk
 */
m.getChunkBytes = "func_149256_c"
/** 
 * 
 * 
 * Parent Class: S21PacketChunkData
 */
m.getExtractedDataBytes = "func_149272_d"
/** 
 * 
 * 
 * Parent Class: S21PacketChunkData
 */
m.getExtractedSize = "func_149276_g"
/** 
 * 
 * 
 * Parent Class: C01PacketPing
 */
m.getClientTime = "func_149289_c"
/** 
 * 
 * 
 * Parent Class: S00PacketServerInfo
 */
m.getResponse = "func_149294_c"
m.getVerifyToken = {}
/** 
 * 
 * 
 * Parent Class: C01PacketEncryptionResponse
 */
m.getVerifyToken.C01PacketEncryptionResponse = "func_149299_b"
/** 
 * 
 * 
 * Parent Class: S01PacketEncryptionRequest
 */
m.getVerifyToken.S01PacketEncryptionRequest = "func_149607_e"

/** 
 * 
 * 
 * Parent Class: C01PacketEncryptionResponse
 */
m.getSecretKey = "func_149300_a"
m.getAction = {}
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
m.getAction.S3EPacketTeams = "func_149307_h"
/** 
 * 
 * 
 * Parent Class: C02PacketUseEntity
 */
m.getAction.C02PacketUseEntity = "func_149565_c"
/** 
 * Gets the action to perform when this event is raised.
 * 
 * Parent Class: ClickEvent
 */
m.getAction.ClickEvent = "func_150669_a"
/** 
 * Gets the action to perform when this event is raised.
 * 
 * Parent Class: HoverEvent
 */
m.getAction.HoverEvent = "func_150701_a"
/** 
 * 
 * 
 * Parent Class: S38PacketPlayerListItem
 */
m.getAction.S38PacketPlayerListItem = "func_179768_b"
/** 
 * 
 * 
 * Parent Class: C0BPacketEntityAction
 */
m.getAction.C0BPacketEntityAction = "func_180764_b"

/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
m.getFriendlyFlags = "func_149308_i"
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
m.getSuffix = "func_149309_f"
m.getPlayers = {}
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
m.getPlayers.S3EPacketTeams = "func_149310_g"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse$PlayerCountData
 */
m.getPlayers.ServerStatusResponse$PlayerCountData = "func_151331_c"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getPlayers.World = "func_175661_b"
/** 
 * 
 * 
 * Parent Class: CommandGive
 */
m.getPlayers.CommandGive = "func_71536_c"

/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
m.getPrefix = "func_149311_e"
/** 
 * 
 * 
 * Parent Class: S3CPacketUpdateScore
 */
m.getObjectiveName = "func_149321_d"
/** 
 * 
 * 
 * Parent Class: S3CPacketUpdateScore
 */
m.getScoreValue = "func_149323_e"
m.getPlayerName = {}
/** 
 * 
 * 
 * Parent Class: S3CPacketUpdateScore
 */
m.getPlayerName.S3CPacketUpdateScore = "func_149324_c"
/** 
 * Returns the name that should be renderd for the player supplied
 * 
 * Parent Class: GuiPlayerTabOverlay
 */
m.getPlayerName.GuiPlayerTabOverlay = "func_175243_a"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.getPlayerName.CommandBase = "func_96332_d"
/** 
 * Returns the name of the player this score belongs to
 * 
 * Parent Class: Score
 */
m.getPlayerName.Score = "func_96653_e"

m.getFoodLevel = {}
/** 
 * 
 * 
 * Parent Class: S06PacketUpdateHealth
 */
m.getFoodLevel.S06PacketUpdateHealth = "func_149330_d"
/** 
 * Get the player's food level.
 * 
 * Parent Class: FoodStats
 */
m.getFoodLevel.FoodStats = "func_75116_a"

m.getSaturationLevel = {}
/** 
 * 
 * 
 * Parent Class: S06PacketUpdateHealth
 */
m.getSaturationLevel.S06PacketUpdateHealth = "func_149331_e"
/** 
 * Get the player's food saturation level.
 * 
 * Parent Class: FoodStats
 */
m.getSaturationLevel.FoodStats = "func_75115_e"

/** 
 * 
 * 
 * Parent Class: S0DPacketCollectItem
 */
m.getCollectedItemEntityID = "func_149354_c"
m.getWorldTime = {}
/** 
 * 
 * 
 * Parent Class: S03PacketTimeUpdate
 */
m.getWorldTime.S03PacketTimeUpdate = "func_149365_d"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getWorldTime.World = "func_72820_D"
/** 
 * Get current world time
 * 
 * Parent Class: WorldInfo
 */
m.getWorldTime.WorldInfo = "func_76073_f"

m.getTotalWorldTime = {}
/** 
 * 
 * 
 * Parent Class: S03PacketTimeUpdate
 */
m.getTotalWorldTime.S03PacketTimeUpdate = "func_149366_c"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getTotalWorldTime.World = "func_82737_E"

/** 
 * 
 * 
 * Parent Class: S09PacketHeldItemChange
 */
m.getHeldItemHotbarIndex = "func_149385_c"
/** 
 * 
 * 
 * Parent Class: S04PacketEntityEquipment
 */
m.getEquipmentSlot = "func_149388_e"
m.getItemStack = {}
/** 
 * 
 * 
 * Parent Class: S04PacketEntityEquipment
 */
m.getItemStack.S04PacketEntityEquipment = "func_149390_c"
/** 
 * 
 * 
 * Parent Class: WeightedRandomFishable
 */
m.getItemStack.WeightedRandomFishable = "func_150708_a"
/** 
 * "Stack helds by mouse
 * 
 * Parent Class: InventoryPlayer
 */
m.getItemStack.InventoryPlayer = "func_70445_o"

m.getLevel = {}
/** 
 * 
 * 
 * Parent Class: S1FPacketSetExperience
 */
m.getLevel.S1FPacketSetExperience = "func_149395_e"
/** 
 * 
 * 
 * Parent Class: BlockLiquid
 */
m.getLevel.BlockLiquid = "func_176362_e"

/** 
 * 
 * 
 * Parent Class: S1FPacketSetExperience
 */
m.getTotalExperience = "func_149396_d"
/** 
 * 
 * 
 * Parent Class: S1BPacketEntityAttach
 */
m.getVehicleEntityId = "func_149402_e"
/** 
 * 
 * 
 * Parent Class: S1BPacketEntityAttach
 */
m.getLeash = "func_149404_c"
/** 
 * 
 * 
 * Parent Class: S12PacketEntityVelocity
 */
m.getMotionZ = "func_149409_f"
/** 
 * 
 * 
 * Parent Class: S12PacketEntityVelocity
 */
m.getMotionY = "func_149410_e"
/** 
 * 
 * 
 * Parent Class: S12PacketEntityVelocity
 */
m.getMotionX = "func_149411_d"
m.getMessage = {}
/** 
 * 
 * 
 * Parent Class: C14PacketTabComplete
 */
m.getMessage.C14PacketTabComplete = "func_149419_c"
/** 
 * 
 * 
 * Parent Class: C01PacketChatMessage
 */
m.getMessage.C01PacketChatMessage = "func_149439_c"
/** 
 * 
 * 
 * Parent Class: S45PacketTitle
 */
m.getMessage.S45PacketTitle = "func_179805_b"

m.getAmplifier = {}
/** 
 * 
 * 
 * Parent Class: S1DPacketEntityEffect
 */
m.getAmplifier.S1DPacketEntityEffect = "func_149428_f"
/** 
 * 
 * 
 * Parent Class: PotionEffect
 */
m.getAmplifier.PotionEffect = "func_76458_c"

m.getStatus = {}
/** 
 * 
 * 
 * Parent Class: C16PacketClientStatus
 */
m.getStatus.C16PacketClientStatus = "func_149435_c"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getStatus.WorldBorder = "func_177734_a"
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.getStatus.ChunkCompileTaskGenerator = "func_178546_a"
/** 
 * 
 * 
 * Parent Class: C07PacketPlayerDigging
 */
m.getStatus.C07PacketPlayerDigging = "func_180762_c"

m.getKey = {}
/** 
 * 
 * 
 * Parent Class: C00PacketKeepAlive
 */
m.getKey.C00PacketKeepAlive = "func_149460_c"
/** 
 * 
 * 
 * Parent Class: ChatComponentTranslation
 */
m.getKey.ChatComponentTranslation = "func_150268_i"
/** 
 * 
 * 
 * Parent Class: LongHashMap$Entry
 */
m.getKey.LongHashMap$Entry = "func_76146_a"
/** 
 * 
 * 
 * Parent Class: CrashReportCategory$Entry
 */
m.getKey.CrashReportCategory$Entry = "func_85089_a"

/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
m.getRotating = "func_149463_k"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
m.getPositionX = "func_149464_c"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
m.isOnGround = "func_149465_i"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
m.isMoving = "func_149466_j"
m.getPositionY = {}
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
m.getPositionY.C03PacketPlayer = "func_149467_d"
/** 
 * 
 * 
 * Parent Class: GuiButtonRealmsProxy
 */
m.getPositionY.GuiButtonRealmsProxy = "func_154316_f"

/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
m.setMoving = "func_149469_a"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
m.getPositionZ = "func_149472_e"
/** 
 * 
 * 
 * Parent Class: C0BPacketEntityAction
 */
m.getAuxData = "func_149512_e"
/** 
 * 
 * 
 * Parent Class: C15PacketClientSettings
 */
m.isColorsEnabled = "func_149520_f"
/** 
 * 
 * 
 * Parent Class: C15PacketClientSettings
 */
m.getModelPartFlags = "func_149521_d"
/** 
 * 
 * 
 * Parent Class: C15PacketClientSettings
 */
m.getLang = "func_149524_c"
/** 
 * 
 * 
 * Parent Class: C0FPacketConfirmTransaction
 */
m.getUid = "func_149533_d"
/** 
 * 
 * 
 * Parent Class: C11PacketEnchantItem
 */
m.getButton = "func_149537_d"
/** 
 * 
 * 
 * Parent Class: C0EPacketClickWindow
 */
m.getMode = "func_149542_h"
/** 
 * 
 * 
 * Parent Class: C0EPacketClickWindow
 */
m.getUsedButton = "func_149543_e"
m.getSlotId = {}
/** 
 * 
 * 
 * Parent Class: C0EPacketClickWindow
 */
m.getSlotId.C0EPacketClickWindow = "func_149544_d"
/** 
 * 
 * 
 * Parent Class: C09PacketHeldItemChange
 */
m.getSlotId.C09PacketHeldItemChange = "func_149614_c"
/** 
 * 
 * 
 * Parent Class: C10PacketCreativeInventoryAction
 */
m.getSlotId.C10PacketCreativeInventoryAction = "func_149627_c"

/** 
 * 
 * 
 * Parent Class: C0EPacketClickWindow
 */
m.getClickedItem = "func_149546_g"
/** 
 * 
 * 
 * Parent Class: C02PacketUseEntity
 */
m.getEntityFromWorld = "func_149564_a"
/** 
 * 
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
m.getPlacedBlockDirection = "func_149568_f"
/** 
 * Returns the offset from yPosition where the actual click took place.
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
m.getPlacedBlockOffsetY = "func_149569_i"
/** 
 * Returns the offset from xPosition where the actual click took place.
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
m.getPlacedBlockOffsetX = "func_149573_h"
m.getStack = {}
/** 
 * 
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
m.getStack.C08PacketPlayerBlockPlacement = "func_149574_g"
/** 
 * 
 * 
 * Parent Class: C10PacketCreativeInventoryAction
 */
m.getStack.C10PacketCreativeInventoryAction = "func_149625_d"
/** 
 * Helper fnct to get the stack in the slot.
 * 
 * Parent Class: Slot
 */
m.getStack.Slot = "func_75211_c"

/** 
 * Returns the offset from zPosition where the actual click took place.
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
m.getPlacedBlockOffsetZ = "func_149575_j"
/** 
 * 
 * 
 * Parent Class: C00Handshake
 */
m.getRequestedState = "func_149594_c"
/** 
 * 
 * 
 * Parent Class: C00Handshake
 */
m.getProtocolVersion = "func_149595_d"
/** 
 * 
 * 
 * Parent Class: S01PacketEncryptionRequest
 */
m.getPublicKey = "func_149608_d"
/** 
 * 
 * 
 * Parent Class: S01PacketEncryptionRequest
 */
m.getServerId = "func_149609_c"
/** 
 * 
 * 
 * Parent Class: C0CPacketInput
 */
m.getForwardSpeed = "func_149616_d"
m.isSneaking = {}
/** 
 * 
 * 
 * Parent Class: C0CPacketInput
 */
m.isSneaking.C0CPacketInput = "func_149617_f"
/** 
 * Returns if this entity is sneaking.
 * 
 * Parent Class: Entity
 */
m.isSneaking.Entity = "func_70093_af"

/** 
 * 
 * 
 * Parent Class: C0CPacketInput
 */
m.isJumping = "func_149618_e"
/** 
 * 
 * 
 * Parent Class: C0CPacketInput
 */
m.getStrafeSpeed = "func_149620_c"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.getBlockFromItem = "func_149634_a"
/** 
 * 
 * 
 * Parent Class: BlockLilyPad
 */
m.getBlockColor = "func_149635_D"
m.isBlockNormalCube = {}
/** 
 * Indicate if a material is a normal solid opaque cube
 * 
 * Parent Class: Block
 */
m.isBlockNormalCube.Block = "func_149637_q"
/** 
 * "Checks if a block's material is opaque
 * 
 * Parent Class: World
 */
m.isBlockNormalCube.World = "func_175677_d"

m.getExplosionResistance = {}
/** 
 * Returns how much this block can resist explosions from the passed in entity.
 * 
 * Parent Class: BlockStairs
 */
m.getExplosionResistance.BlockStairs = "func_149638_a"
/** 
 * Explosion resistance of a block relative to this entity
 * 
 * Parent Class: EntityWitherSkull
 */
m.getExplosionResistance.EntityWitherSkull = "func_180428_a"

m.getRenderType = {}
/** 
 * "The type of render function called. 3 for standard block models
 * 
 * Parent Class: BlockNote
 */
m.getRenderType.BlockNote = "func_149645_b"
/** 
 * 
 * 
 * Parent Class: ScoreObjective
 */
m.getRenderType.ScoreObjective = "func_178766_e"
/** 
 * 
 * 
 * Parent Class: IScoreObjectiveCriteria
 */
m.getRenderType.IScoreObjectiveCriteria = "func_178790_c"

m.setCreativeTab = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
m.setCreativeTab.Block = "func_149647_a"
/** 
 * returns this;
 * 
 * Parent Class: Item
 */
m.setCreativeTab.Item = "func_77637_a"

/** 
 * Returns true only if block is flowerPot
 * 
 * Parent Class: BlockFlowerPot
 */
m.isFlowerPot = "func_149648_K"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.disableStats = "func_149649_H"
/** 
 * Return the state of blocks statistics flags - if the block is counted for mined and placed.
 * 
 * Parent Class: Block
 */
m.getEnableStats = "func_149652_G"
/** 
 * Returns whether or not this block is of a type that needs random ticking. Called for ref-counting purposes by ExtendedBlockStorage in order to broadly cull a chunk from the random chunk update list for efficiency's sake.
 * 
 * Parent Class: Block
 */
m.getTickRandomly = "func_149653_t"
/** 
 * Checks if a vector is within the Y and Z bounds of the block.
 * 
 * Parent Class: Block
 */
m.isVecInsideYZBounds = "func_149654_a"
/** 
 * 
 * 
 * Parent Class: BlockIce
 */
m.getMobilityFlag = "func_149656_h"
/** 
 * Return whether this block can drop from an explosion.
 * 
 * Parent Class: BlockTNT
 */
m.canDropFromExplosion = "func_149659_a"
/** 
 * Checks if a vector is within the X and Y bounds of the block.
 * 
 * Parent Class: Block
 */
m.isVecInsideXYBounds = "func_149661_c"
/** 
 * Used to determine ambient occlusion and culling when rebuilding chunks for render
 * 
 * Parent Class: BlockPistonMoving
 */
m.isOpaqueCube = "func_149662_c"
m.setUnlocalizedName = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
m.setUnlocalizedName.Block = "func_149663_c"
/** 
 * "Sets the unlocalized name of this item to the string passed as the parameter
 * 
 * Parent Class: Item
 */
m.setUnlocalizedName.Item = "func_77655_b"

/** 
 * returns the block bounderies minY value
 * 
 * Parent Class: Block
 */
m.getBlockBoundsMinY = "func_149665_z"
/** 
 * "returns a list of blocks with the same ID
 * 
 * Parent Class: BlockCarpet
 */
m.getSubBlocks = "func_149666_a"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneTorch
 */
m.isAssociatedBlock = "func_149667_c"
/** 
 * returns the block bounderies maxY value
 * 
 * Parent Class: Block
 */
m.getBlockBoundsMaxY = "func_149669_A"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.registerBlocks = "func_149671_p"
/** 
 * Sets the footstep sound for the block. Returns the object for convenience in constructing.
 * 
 * Parent Class: Block
 */
m.setStepSound = "func_149672_a"
/** 
 * Sets whether this block type will receive random update ticks
 * 
 * Parent Class: Block
 */
m.setTickRandomly = "func_149675_a"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.setBlockBounds = "func_149676_a"
/** 
 * Get the quantity dropped based on the given fortune level
 * 
 * Parent Class: BlockTallGrass
 */
m.quantityDroppedWithBonus = "func_149679_a"
m.isEqualTo = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
m.isEqualTo.Block = "func_149680_a"
/** 
 * returns true if the biome specified is equal to this biome
 * 
 * Parent Class: BiomeGenMutated
 */
m.isEqualTo.BiomeGenMutated = "func_150569_a"

/** 
 * 
 * 
 * Parent Class: Block
 */
m.getIdFromBlock = "func_149682_b"
/** 
 * Sets the block's bounds for rendering it as an item
 * 
 * Parent Class: BlockPistonBase
 */
m.setBlockBoundsForItemRender = "func_149683_g"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.getBlockFromName = "func_149684_b"
/** 
 * Returns the default ambient occlusion value based on block opacity
 * 
 * Parent Class: Block
 */
m.getAmbientOcclusionLightValue = "func_149685_I"
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.isFullCube = "func_149686_d"
/** 
 * Checks if a vector is within the X and Z bounds of the block.
 * 
 * Parent Class: Block
 */
m.isVecInsideXZBounds = "func_149687_b"
/** 
 * Get a material of block
 * 
 * Parent Class: Block
 */
m.getMaterial = "func_149688_o"
/** 
 * returns the block bounderies maxZ value
 * 
 * Parent Class: Block
 */
m.getBlockBoundsMaxZ = "func_149693_C"
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
m.requiresUpdates = "func_149698_L"
/** 
 * 
 * 
 * Parent Class: BlockWeb
 */
m.canSilkHarvest = "func_149700_E"
/** 
 * "Returns if this block is collidable (only used by Fire). Args: x
 * 
 * Parent Class: BlockStairs
 */
m.isCollidable = "func_149703_v"
/** 
 * returns the block bounderies minX value
 * 
 * Parent Class: Block
 */
m.getBlockBoundsMinX = "func_149704_x"
/** 
 * returns the block bounderies minZ value
 * 
 * Parent Class: Block
 */
m.getBlockBoundsMinZ = "func_149706_B"
/** 
 * Returns the CreativeTab to display the given block on.
 * 
 * Parent Class: Block
 */
m.getCreativeTabToDisplayOn = "func_149708_J"
/** 
 * Should block use the brightest neighbor light value as its own
 * 
 * Parent Class: Block
 */
m.getUseNeighborBrightness = "func_149710_n"
/** 
 * Sets how many hits it takes to break a block.
 * 
 * Parent Class: Block
 */
m.setHardness = "func_149711_c"
/** 
 * Sets how much light is blocked going through this block. Returns the object for convenience in constructing.
 * 
 * Parent Class: Block
 */
m.setLightOpacity = "func_149713_g"
/** 
 * Sets the light value that the block emits. Returns resulting block instance for constructing convenience. Args: level
 * 
 * Parent Class: Block
 */
m.setLightLevel = "func_149715_a"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.hasTileEntity = "func_149716_u"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.getLightOpacity = "func_149717_k"
/** 
 * "Used for nearly all game logic (non-rendering) purposes. Use Forge-provided isNormalCube(IBlockAccess
 * 
 * Parent Class: Block
 */
m.isNormalCube = "func_149721_r"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.setBlockUnbreakable = "func_149722_s"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.getBlockById = "func_149729_e"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.isFullBlock = "func_149730_j"
/** 
 * Gets the localized name of this block. Used for the statistics page.
 * 
 * Parent Class: BlockWall
 */
m.getLocalizedName = "func_149732_F"
/** 
 * How many world ticks before ticking
 * 
 * Parent Class: BlockPressurePlateWeighted
 */
m.tickRate = "func_149738_a"
m.getUnlocalizedName = {}
/** 
 * "Returns the unlocalized name of the block with ""tile."" appended to the front."
 * 
 * Parent Class: Block
 */
m.getUnlocalizedName.Block = "func_149739_a"
/** 
 * Returns the slab block name with the type associated with it
 * 
 * Parent Class: BlockWoodSlab
 */
m.getUnlocalizedName.BlockWoodSlab = "func_150002_b"
/** 
 * "Gets the value that this fish type uses to replace ""XYZ"" in: ""fish.XYZ.raw"" / ""fish.XYZ.cooked"" for the unlocalized name and ""fish_XYZ_raw"" / ""fish_XYZ_cooked"" for the icon string."
 * 
 * Parent Class: ItemFishFood$FishType
 */
m.getUnlocalizedName.ItemFishFood$FishType = "func_150972_b"
/** 
 * 
 * 
 * Parent Class: BlockStoneBrick$EnumType
 */
m.getUnlocalizedName.BlockStoneBrick$EnumType = "func_176614_c"
/** 
 * 
 * 
 * Parent Class: BlockStoneSlab$EnumType
 */
m.getUnlocalizedName.BlockStoneSlab$EnumType = "func_176627_c"
/** 
 * 
 * 
 * Parent Class: BlockStone$EnumType
 */
m.getUnlocalizedName.BlockStone$EnumType = "func_176644_c"
/** 
 * 
 * 
 * Parent Class: BlockWall$EnumType
 */
m.getUnlocalizedName.BlockWall$EnumType = "func_176659_c"
/** 
 * 
 * 
 * Parent Class: BlockSandStone$EnumType
 */
m.getUnlocalizedName.BlockSandStone$EnumType = "func_176676_c"
/** 
 * 
 * 
 * Parent Class: BlockSand$EnumType
 */
m.getUnlocalizedName.BlockSand$EnumType = "func_176685_d"
/** 
 * 
 * 
 * Parent Class: EnumDyeColor
 */
m.getUnlocalizedName.EnumDyeColor = "func_176762_d"
/** 
 * 
 * 
 * Parent Class: BlockPrismarine$EnumType
 */
m.getUnlocalizedName.BlockPrismarine$EnumType = "func_176809_c"
/** 
 * 
 * 
 * Parent Class: BlockRedSandstone$EnumType
 */
m.getUnlocalizedName.BlockRedSandstone$EnumType = "func_176828_c"
/** 
 * 
 * 
 * Parent Class: BlockPlanks$EnumType
 */
m.getUnlocalizedName.BlockPlanks$EnumType = "func_176840_c"
/** 
 * 
 * 
 * Parent Class: BlockSilverfish$EnumType
 */
m.getUnlocalizedName.BlockSilverfish$EnumType = "func_176882_c"
/** 
 * 
 * 
 * Parent Class: BlockStoneSlabNew$EnumType
 */
m.getUnlocalizedName.BlockStoneSlabNew$EnumType = "func_176918_c"
/** 
 * 
 * 
 * Parent Class: BlockDirt$DirtType
 */
m.getUnlocalizedName.BlockDirt$DirtType = "func_176927_c"
/** 
 * 
 * 
 * Parent Class: BlockDoublePlant$EnumPlantType
 */
m.getUnlocalizedName.BlockDoublePlant$EnumPlantType = "func_176939_c"
/** 
 * 
 * 
 * Parent Class: BlockFlower$EnumFlowerType
 */
m.getUnlocalizedName.BlockFlower$EnumFlowerType = "func_176963_d"
/** 
 * Returns the unlocalized name of this item. This version accepts an ItemStack so different stacks can have different names based on their damage or NBT.
 * 
 * Parent Class: Item
 */
m.getUnlocalizedName.Item = "func_77667_c"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.getUnlocalizedName.ItemStack = "func_77977_a"

/** 
 * 
 * 
 * Parent Class: BlockJukebox
 */
m.hasComparatorInputOverride = "func_149740_M"
/** 
 * Can this block provide power. Only wire currently seems to have this change based on its state.
 * 
 * Parent Class: BlockTripWireHook
 */
m.canProvidePower = "func_149744_f"
/** 
 * Returns the quantity of items to drop on block destruction.
 * 
 * Parent Class: BlockPistonExtension
 */
m.quantityDropped = "func_149745_a"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.getLightValue = "func_149750_m"
/** 
 * Used in the renderer to apply ambient occlusion
 * 
 * Parent Class: Block
 */
m.isTranslucent = "func_149751_l"
/** 
 * Sets the the blocks resistance to explosions. Returns the object for convenience in constructing.
 * 
 * Parent Class: Block
 */
m.setResistance = "func_149752_b"
/** 
 * returns the block bounderies maxX value
 * 
 * Parent Class: Block
 */
m.getBlockBoundsMaxX = "func_149753_y"
/** 
 * "Returns the percentage of the liquid block that is air
 * 
 * Parent Class: BlockLiquid
 */
m.getLiquidHeightPercent = "func_149801_b"
/** 
 * 
 * 
 * Parent Class: BlockFalling
 */
m.onStartFalling = "func_149829_a"
m.init = {}
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
m.init.BlockFire = "func_149843_e"
/** 
 * 
 * 
 * Parent Class: StatList
 */
m.init.StatList = "func_151178_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.init.WorldServer = "func_175643_b"
/** 
 * A stub functions called to make the static initializer for this class run.
 * 
 * Parent Class: AchievementList
 */
m.init.AchievementList = "func_75997_a"
/** 
 * 
 * 
 * Parent Class: ClippingHelperImpl
 */
m.init.ClippingHelperImpl = "func_78560_b"

/** 
 * "is the block grass
 * 
 * Parent Class: BlockLilyPad
 */
m.canPlaceBlockOn = "func_149854_a"
/** 
 * 
 * 
 * Parent Class: BlockPotato
 */
m.getCrop = "func_149865_P"
m.getSeed = {}
/** 
 * 
 * 
 * Parent Class: BlockPotato
 */
m.getSeed.BlockPotato = "func_149866_i"
/** 
 * gets the random world seed
 * 
 * Parent Class: World
 */
m.getSeed.World = "func_72905_C"
/** 
 * Returns the seed of current world.
 * 
 * Parent Class: WorldInfo
 */
m.getSeed.WorldInfo = "func_76063_b"
/** 
 * Returns the seed for the world.
 * 
 * Parent Class: WorldSettings
 */
m.getSeed.WorldSettings = "func_77160_d"

/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.isAssociated = "func_149907_e"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneRepeater
 */
m.canPowerSide = "func_149908_a"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.isRedstoneRepeaterBlockID = "func_149909_d"
m.createNewTileEntity = {}
/** 
 * Returns a new instance of a block's tile entity class. Called on placing the block.
 * 
 * Parent Class: BlockPistonMoving
 */
m.createNewTileEntity.BlockPistonMoving = "func_149915_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.createNewTileEntity.Chunk = "func_177422_i"

/** 
 * "Get's the hopper's active status from the 8-bit of the metadata. Note that the metadata stores whether the block is powered
 * 
 * Parent Class: BlockHopper
 */
m.isEnabled = "func_149917_c"
/** 
 * 
 * 
 * Parent Class: BlockFlowerPot
 */
m.canNotContain = "func_149928_a"
m.getFacing = {}
/** 
 * Get the facing of a dispenser with the given metadata
 * 
 * Parent Class: BlockDispenser
 */
m.getFacing.BlockDispenser = "func_149937_b"
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
m.getFacing.TileEntityPiston = "func_174930_e"
/** 
 * 
 * 
 * Parent Class: BlockTrapDoor
 */
m.getFacing.BlockTrapDoor = "func_176281_b"
/** 
 * 
 * 
 * Parent Class: BlockPistonBase
 */
m.getFacing.BlockPistonBase = "func_176317_b"
/** 
 * 
 * 
 * Parent Class: BlockPistonExtension
 */
m.getFacing.BlockPistonExtension = "func_176322_b"
/** 
 * 
 * 
 * Parent Class: BlockHopper
 */
m.getFacing.BlockHopper = "func_176428_b"
/** 
 * 
 * 
 * Parent Class: BlockDoor
 */
m.getFacing.BlockDoor = "func_176517_h"
/** 
 * 
 * 
 * Parent Class: BlockLever$EnumOrientation
 */
m.getFacing.BlockLever$EnumOrientation = "func_176852_c"
/** 
 * Gets the direction of the block's facing.
 * 
 * Parent Class: ItemModelGenerator$SpanFacing
 */
m.getFacing.ItemModelGenerator$SpanFacing = "func_178367_a"
/** 
 * 
 * 
 * Parent Class: EnumFaceDirection
 */
m.getFacing.EnumFaceDirection = "func_179027_a"
/** 
 * 
 * 
 * Parent Class: C07PacketPlayerDigging
 */
m.getFacing.C07PacketPlayerDigging = "func_179714_b"
/** 
 * 
 * 
 * Parent Class: S10PacketSpawnPainting
 */
m.getFacing.S10PacketSpawnPainting = "func_179836_c"

/** 
 * Get the position where the dispenser at the given Coordinates should dispense to.
 * 
 * Parent Class: BlockDispenser
 */
m.getDispensePosition = "func_149939_a"
/** 
 * 
 * 
 * Parent Class: BlockDropper
 */
m.getBehavior = "func_149940_a"
/** 
 * 
 * 
 * Parent Class: BlockBed
 */
m.setBedBounds = "func_149978_e"
/** 
 * 
 * 
 * Parent Class: BlockSlab
 */
m.isSlab = "func_150003_a"
/** 
 * 
 * 
 * Parent Class: BlockDoor
 */
m.setBoundBasedOnMeta = "func_150011_b"
/** 
 * 
 * 
 * Parent Class: BlockCarpet
 */
m.setBlockBoundsFromMeta = "func_150089_b"
m.canPlaceOn = {}
/** 
 * 
 * 
 * Parent Class: BlockVine
 */
m.canPlaceOn.BlockVine = "func_150093_a"
/** 
 * 
 * 
 * Parent Class: BlockTorch
 */
m.canPlaceOn.BlockTorch = "func_176594_d"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.canPlaceOn.ItemStack = "func_179547_d"

/** 
 * 
 * 
 * Parent Class: BlockPane
 */
m.canPaneConnectToBlock = "func_150098_a"
/** 
 * 
 * 
 * Parent Class: BlockTrapDoor
 */
m.isValidSupportBlock = "func_150119_a"
/** 
 * "Pass true to draw this block using fancy graphics
 * 
 * Parent Class: BlockLeaves
 */
m.setGraphicsLevel = "func_150122_b"
/** 
 * Checks if a block is stairs
 * 
 * Parent Class: BlockStairs
 */
m.isBlockStairs = "func_150148_a"
/** 
 * 
 * 
 * Parent Class: BlockSnow
 */
m.getBoundsForLayers = "func_150154_b"
/** 
 * Creates a deep copy of this style.  No changes to this instance or its parent style will be reflected in the copy.
 * 
 * Parent Class: ChatStyle$1
 */
m.createDeepCopy = "func_150206_m"
/** 
 * Sets the event that should be run when text of this ChatStyle is hovered over.
 * 
 * Parent Class: ChatStyle$1
 */
m.setChatHoverEvent = "func_150209_a"
/** 
 * The effective chat hover event.
 * 
 * Parent Class: ChatStyle$1
 */
m.getChatHoverEvent = "func_150210_i"
m.getColor = {}
/** 
 * Gets the effective color of this ChatStyle.
 * 
 * Parent Class: ChatStyle$1
 */
m.getColor.ChatStyle$1 = "func_150215_a"
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
m.getColor.S3EPacketTeams = "func_179813_h"
/** 
 * "Return a color to display the profiler
 * 
 * Parent Class: Profiler$Result
 */
m.getColor.Profiler$Result = "func_76329_a"
/** 
 * Return the color for the specified armor ItemStack.
 * 
 * Parent Class: ItemArmor
 */
m.getColor.ItemArmor = "func_82814_b"

/** 
 * "Sets whether or not text of this ChatStyle should be italicized.  Set to false if
 * 
 * Parent Class: ChatStyle$1
 */
m.setItalic = "func_150217_b"
/** 
 * "Gets the equivalent text formatting code for this style
 * 
 * Parent Class: ChatStyle$1
 */
m.getFormattingCode = "func_150218_j"
/** 
 * "Sets the fallback ChatStyle to use if this ChatStyle does not override some value.  Without a parent
 * 
 * Parent Class: ChatStyle$1
 */
m.setParentStyle = "func_150221_a"
/** 
 * Whether or not text of this ChatStyle should be in bold.
 * 
 * Parent Class: ChatStyle$1
 */
m.getBold = "func_150223_b"
m.getParent = {}
/** 
 * Gets the immediate parent of this ChatStyle.
 * 
 * Parent Class: ChatStyle
 */
m.getParent.ChatStyle = "func_150224_n"
/** 
 * 
 * 
 * Parent Class: ModelBlock$Deserializer
 */
m.getParent.ModelBlock$Deserializer = "func_178326_c"

/** 
 * "Sets whether or not to format text of this ChatStyle using strikethrough.  Set to false if
 * 
 * Parent Class: ChatStyle$1
 */
m.setStrikethrough = "func_150225_c"
/** 
 * "Sets whether or not text of this ChatStyle should be in bold.  Set to false if
 * 
 * Parent Class: ChatStyle$1
 */
m.setBold = "func_150227_a"
/** 
 * "Sets whether or not text of this ChatStyle should be underlined.  Set to false if
 * 
 * Parent Class: ChatStyle$1
 */
m.setUnderlined = "func_150228_d"
m.isEmpty = {}
/** 
 * Whether or not this style is empty (inherits everything from the parent).
 * 
 * Parent Class: ChatStyle
 */
m.isEmpty.ChatStyle = "func_150229_g"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
m.isEmpty.TileEntityHopper = "func_152104_k"
/** 
 * 
 * 
 * Parent Class: UserList
 */
m.isEmpty.UserList = "func_152690_d"
/** 
 * 
 * 
 * Parent Class: CompiledChunk
 */
m.isEmpty.CompiledChunk = "func_178489_a"
/** 
 * 
 * 
 * Parent Class: LockCode
 */
m.isEmpty.LockCode = "func_180160_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.isEmpty.Chunk = "func_76621_g"
/** 
 * "Returns whether or not this block storage's Chunk is fully empty
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.isEmpty.ExtendedBlockStorage = "func_76663_a"

/** 
 * "Creates a shallow copy of this style.  Changes to this instance's values will not be reflected in the copy
 * 
 * Parent Class: ChatStyle$1
 */
m.createShallowCopy = "func_150232_l"
/** 
 * Whether or not text of this ChatStyle should be obfuscated.
 * 
 * Parent Class: ChatStyle$1
 */
m.getObfuscated = "func_150233_f"
/** 
 * Whether or not text of this ChatStyle should be underlined.
 * 
 * Parent Class: ChatStyle$1
 */
m.getUnderlined = "func_150234_e"
/** 
 * The effective chat click event.
 * 
 * Parent Class: ChatStyle$1
 */
m.getChatClickEvent = "func_150235_h"
/** 
 * Whether or not to format text of this ChatStyle using strikethrough.
 * 
 * Parent Class: ChatStyle$1
 */
m.getStrikethrough = "func_150236_d"
/** 
 * "Sets whether or not text of this ChatStyle should be obfuscated.  Set to false if
 * 
 * Parent Class: ChatStyle$1
 */
m.setObfuscated = "func_150237_e"
m.setColor = {}
/** 
 * Sets the color for this ChatStyle to the given value.  Only use color values for this; set other values using the specific methods.
 * 
 * Parent Class: ChatStyle$1
 */
m.setColor.ChatStyle$1 = "func_150238_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenBase
 */
m.setColor.BiomeGenBase = "func_76739_b"
/** 
 * Sets the color of the specified armor ItemStack
 * 
 * Parent Class: ItemArmor
 */
m.setColor.ItemArmor = "func_82813_b"

/** 
 * Sets the event that should be run when text of this ChatStyle is clicked on.
 * 
 * Parent Class: ChatStyle$1
 */
m.setChatClickEvent = "func_150241_a"
/** 
 * Whether or not text of this ChatStyle should be italicized.
 * 
 * Parent Class: ChatStyle$1
 */
m.getItalic = "func_150242_c"
/** 
 * Gets the sibling components of this one.
 * 
 * Parent Class: IChatComponent
 */
m.getSiblings = "func_150253_a"
/** 
 * "Gets the text of this component
 * 
 * Parent Class: IChatComponent
 */
m.getFormattedText = "func_150254_d"
/** 
 * 
 * 
 * Parent Class: ChatComponentTranslation
 */
m.setChatStyle = "func_150255_a"
/** 
 * 
 * 
 * Parent Class: IChatComponent
 */
m.getChatStyle = "func_150256_b"
/** 
 * Appends the given component to the end of this one.
 * 
 * Parent Class: IChatComponent
 */
m.appendSibling = "func_150257_a"
/** 
 * Appends the given text to the end of this component.
 * 
 * Parent Class: IChatComponent
 */
m.appendText = "func_150258_a"
/** 
 * "Creates a copy of this component.  Almost a deep copy
 * 
 * Parent Class: ChatComponentTranslation
 */
m.createCopy = "func_150259_f"
/** 
 * "Get the text of this component
 * 
 * Parent Class: IChatComponent
 */
m.getUnformattedText = "func_150260_c"
/** 
 * "Gets the text of this component
 * 
 * Parent Class: ChatComponentTranslation
 */
m.getUnformattedTextForChat = "func_150261_e"
/** 
 * "Creates an iterator that iterates over the given components
 * 
 * Parent Class: ChatComponentStyle
 */
m.createDeepCopyIterator = "func_150262_a"
/** 
 * Gets the text value of this ChatComponentText.  TODO: what are getUnformattedText and getUnformattedTextForChat missing that made someone decide to create a third equivalent method that only ChatComponentText can implement?
 * 
 * Parent Class: ChatComponentText
 */
m.getChatComponentText_TextValue = "func_150265_g"
/** 
 * "initializes our children from a format string
 * 
 * Parent Class: ChatComponentTranslation
 */
m.initializeFromFormat = "func_150269_b"
/** 
 * ensures that our children are initialized from the most recent string translation mapping.
 * 
 * Parent Class: ChatComponentTranslation
 */
m.ensureInitialized = "func_150270_g"
/** 
 * 
 * 
 * Parent Class: ChatComponentTranslation
 */
m.getFormatArgs = "func_150271_j"
/** 
 * 
 * 
 * Parent Class: ChatComponentTranslation
 */
m.getFormatArgumentAsComponent = "func_150272_a"
/** 
 * Creates a new NBTBase object that corresponds with the passed in id.
 * 
 * Parent Class: NBTBase
 */
m.createNewByType = "func_150284_a"
m.getString = {}
/** 
 * 
 * 
 * Parent Class: NBTBase
 */
m.getString.NBTBase = "func_150285_a_"
/** 
 * "Gets the string value of the field on the JsonObject with the given name
 * 
 * Parent Class: JsonUtils
 */
m.getString.JsonUtils = "func_151219_a"
/** 
 * "Retrieves a string value using the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getString.NBTTagCompound = "func_74779_i"
/** 
 * Gets the GameRule's value as String.
 * 
 * Parent Class: GameRules$Value
 */
m.getString.GameRules$Value = "func_82756_a"
/** 
 * Gets the string Game Rule value.
 * 
 * Parent Class: GameRules
 */
m.getString.GameRules = "func_82767_a"

m.getDouble = {}
/** 
 * 
 * 
 * Parent Class: NBTBase$NBTPrimitive
 */
m.getDouble.NBTBase$NBTPrimitive = "func_150286_g"
/** 
 * "Retrieves a double value using the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getDouble.NBTTagCompound = "func_74769_h"

m.getInt = {}
/** 
 * 
 * 
 * Parent Class: NBTBase$NBTPrimitive
 */
m.getInt.NBTBase$NBTPrimitive = "func_150287_d"
/** 
 * Gets the integer value of the given JsonElement.  Expects the second parameter to be the name of the element's field if an error message needs to be thrown.
 * 
 * Parent Class: JsonUtils
 */
m.getInt.JsonUtils = "func_151215_f"
/** 
 * 
 * 
 * Parent Class: GameRules$Value
 */
m.getInt.GameRules$Value = "func_180255_c"
/** 
 * 
 * 
 * Parent Class: GameRules
 */
m.getInt.GameRules = "func_180263_c"

m.getFloat = {}
/** 
 * 
 * 
 * Parent Class: NBTBase$NBTPrimitive
 */
m.getFloat.NBTBase$NBTPrimitive = "func_150288_h"
/** 
 * "Gets the float value of the field on the JsonObject with the given name
 * 
 * Parent Class: JsonUtils
 */
m.getFloat.JsonUtils = "func_151221_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.getFloat.GlStateManager = "func_179111_a"
/** 
 * "Retrieves a float value using the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getFloat.NBTTagCompound = "func_74760_g"

m.getShort = {}
/** 
 * 
 * 
 * Parent Class: NBTBase$NBTPrimitive
 */
m.getShort.NBTBase$NBTPrimitive = "func_150289_e"
/** 
 * "Retrieves a short value using the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getShort.NBTTagCompound = "func_74765_d"

m.getByte = {}
/** 
 * 
 * 
 * Parent Class: NBTBase$NBTPrimitive
 */
m.getByte.NBTBase$NBTPrimitive = "func_150290_f"
/** 
 * "Retrieves a byte value using the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getByte.NBTTagCompound = "func_74771_c"

m.getLong = {}
/** 
 * 
 * 
 * Parent Class: NBTBase$NBTPrimitive
 */
m.getLong.NBTBase$NBTPrimitive = "func_150291_c"
/** 
 * "Retrieves a long value using the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getLong.NBTTagCompound = "func_74763_f"

m.getByteArray = {}
/** 
 * 
 * 
 * Parent Class: NBTTagByteArray
 */
m.getByteArray.NBTTagByteArray = "func_150292_c"
/** 
 * "Retrieves a byte array using the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getByteArray.NBTTagCompound = "func_74770_j"

/** 
 * "Gets the NBTTagList object with the given name. Args: name
 * 
 * Parent Class: NBTTagCompound
 */
m.getTagList = "func_150295_c"
/** 
 * Gets a set with the names of the keys in the tag compound.
 * 
 * Parent Class: NBTTagCompound
 */
m.getKeySet = "func_150296_c"
/** 
 * Returns whether the given string has been previously stored as a key in the map.
 * 
 * Parent Class: NBTTagCompound
 */
m.hasKey = "func_74764_b"
/** 
 * 
 * 
 * Parent Class: NBTTagCompound
 */
m.writeEntry = "func_150298_a"
/** 
 * Gets the ID byte for the given tag key
 * 
 * Parent Class: NBTTagCompound
 */
m.getTagId = "func_150299_b"
m.getIntArray = {}
/** 
 * 
 * 
 * Parent Class: NBTTagIntArray
 */
m.getIntArray.NBTTagIntArray = "func_150302_c"
/** 
 * "Retrieves an int array using the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getIntArray.NBTTagCompound = "func_74759_k"

/** 
 * 
 * 
 * Parent Class: NBTTagList
 */
m.getTagType = "func_150303_d"
/** 
 * Retrieves the NBTTagCompound at the specified index in the list
 * 
 * Parent Class: NBTTagList
 */
m.getCompoundTagAt = "func_150305_b"
/** 
 * 
 * 
 * Parent Class: NBTTagList
 */
m.getIntArrayAt = "func_150306_c"
/** 
 * Retrieves the tag String value at the specified index in the list
 * 
 * Parent Class: NBTTagList
 */
m.getStringTagAt = "func_150307_f"
/** 
 * 
 * 
 * Parent Class: NBTTagList
 */
m.getFloatAt = "func_150308_e"
/** 
 * 
 * 
 * Parent Class: NBTTagList
 */
m.getDoubleAt = "func_150309_d"
/** 
 * Parses the JSON string contained in this object.
 * @return an {@link NBTBase} which can be safely cast to the type represented by this class.
 * 
 * Parent Class: JsonToNBT$Primitive
 */
m.parse = "func_150489_a"
/** 
 * 
 * 
 * Parent Class: Block$SoundType
 */
m.getFrequency = "func_150494_d"
/** 
 * Get the breaking sound for the Block
 * 
 * Parent Class: Block$SoundType
 */
m.getBreakSound = "func_150495_a"
/** 
 * 
 * 
 * Parent Class: Block$SoundType
 */
m.getPlaceSound = "func_150496_b"
/** 
 * 
 * 
 * Parent Class: Block$SoundType
 */
m.getStepSound = "func_150498_e"
/** 
 * 
 * 
 * Parent Class: NettyEncryptionTranslator
 */
m.decipher = "func_150503_a"
/** 
 * 
 * 
 * Parent Class: NettyEncryptionTranslator
 */
m.cipher = "func_150504_a"
/** 
 * "Gets the time
 * 
 * Parent Class: StringTranslate
 */
m.getLastUpdateTimeInMilliseconds = "func_150510_c"
/** 
 * 
 * 
 * Parent Class: BiomeEndDecorator
 */
m.genDecorations = "func_150513_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenBase
 */
m.isSnowyBiome = "func_150559_j"
/** 
 * 
 * 
 * Parent Class: BiomeGenOcean
 */
m.getTempCategory = "func_150561_m"
/** 
 * 
 * 
 * Parent Class: BiomeGenMutated
 */
m.getBiomeClass = "func_150562_l"
/** 
 * 
 * 
 * Parent Class: BiomeGenBase
 */
m.getBiomeGenArray = "func_150565_n"
/** 
 * Creates a mutated version of the biome and places it into the biomeList with an index equal to the original plus 128
 * 
 * Parent Class: BiomeGenBase
 */
m.createMutation = "func_150566_k"
/** 
 * 
 * 
 * Parent Class: BiomeGenTaiga
 */
m.genBigTreeChance = "func_150567_a"
m.getBiome = {}
/** 
 * "return the biome specified by biomeID
 * 
 * Parent Class: BiomeGenBase
 */
m.getBiome.BiomeGenBase = "func_150568_d"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getBiome.Chunk = "func_177411_a"
/** 
 * Return the biome used on this preset.
 * 
 * Parent Class: FlatGeneratorInfo
 */
m.getBiome.FlatGeneratorInfo = "func_82648_a"

/** 
 * 
 * 
 * Parent Class: BiomeGenBase
 */
m.setHeight = "func_150570_a"
/** 
 * this creates a mutation specific to Hills biomes
 * 
 * Parent Class: BiomeGenHills
 */
m.mutateHills = "func_150633_b"
/** 
 * Counts the number of rails adjacent to this rail.
 * 
 * Parent Class: BlockRailBase$Rail
 */
m.countAdjacentRails = "func_150650_a"
/** 
 * 
 * 
 * Parent Class: CompressedStreamTools
 */
m.writeTag = "func_150663_a"
m.getValue = {}
/** 
 * "Gets the value to perform the action on when this event is raised.  For example
 * 
 * Parent Class: ClickEvent
 */
m.getValue.ClickEvent = "func_150668_b"
/** 
 * "Gets the value to perform the action on when this event is raised.  For example
 * 
 * Parent Class: HoverEvent
 */
m.getValue.HoverEvent = "func_150702_b"
/** 
 * 
 * 
 * Parent Class: UserListEntry
 */
m.getValue.UserListEntry = "func_152640_f"
/** 
 * Get the value of the given Property for this BlockState
 * 
 * Parent Class: BlockState$StateImplementation
 */
m.getValue.BlockState$StateImplementation = "func_177229_b"
/** 
 * 
 * 
 * Parent Class: LazyLoadBase
 */
m.getValue.LazyLoadBase = "func_179281_c"
/** 
 * Returns the object stored in this entry
 * 
 * Parent Class: IntHashMap$Entry
 */
m.getValue.IntHashMap$Entry = "func_76030_b"
/** 
 * 
 * 
 * Parent Class: LongHashMap$Entry
 */
m.getValue.LongHashMap$Entry = "func_76145_b"
/** 
 * 
 * 
 * Parent Class: CrashReportCategory$Entry
 */
m.getValue.CrashReportCategory$Entry = "func_85090_b"

m.getValueByCanonicalName = {}
/** 
 * Gets a value by its canonical name.
 * 
 * Parent Class: ClickEvent$Action
 */
m.getValueByCanonicalName.ClickEvent$Action = "func_150672_a"
/** 
 * Gets a value by its canonical name.
 * 
 * Parent Class: HoverEvent$Action
 */
m.getValueByCanonicalName.HoverEvent$Action = "func_150684_a"

m.getCanonicalName = {}
/** 
 * "Gets the canonical name for this action (e.g.
 * 
 * Parent Class: ClickEvent$Action
 */
m.getCanonicalName.ClickEvent$Action = "func_150673_b"
/** 
 * "Gets the canonical name for this action (e.g.
 * 
 * Parent Class: HoverEvent$Action
 */
m.getCanonicalName.HoverEvent$Action = "func_150685_b"

m.shouldAllowInChat = {}
/** 
 * Indicates whether this event can be run from chat text.
 * 
 * Parent Class: ClickEvent$Action
 */
m.shouldAllowInChat.ClickEvent$Action = "func_150674_a"
/** 
 * Indicates whether this event can be run from chat text.
 * 
 * Parent Class: HoverEvent$Action
 */
m.shouldAllowInChat.HoverEvent$Action = "func_150686_a"

/** 
 * 
 * 
 * Parent Class: IChatComponent$Serializer
 */
m.serializeChatStyle = "func_150695_a"
/** 
 * 
 * 
 * Parent Class: IChatComponent$Serializer
 */
m.componentToJson = "func_150696_a"
/** 
 * 
 * 
 * Parent Class: IChatComponent$Serializer
 */
m.jsonToComponent = "func_150699_a"
/** 
 * 
 * 
 * Parent Class: WeightedRandomFishable
 */
m.setEnchantable = "func_150707_a"
/** 
 * 
 * 
 * Parent Class: WeightedRandomFishable
 */
m.setMaxDamagePercent = "func_150709_a"
/** 
 * "Closes the channel
 * 
 * Parent Class: NetworkManager
 */
m.closeChannel = "func_150718_a"
/** 
 * "Sets the NetHandler for this NetworkManager
 * 
 * Parent Class: NetworkManager
 */
m.setNetHandler = "func_150719_a"
/** 
 * Switches the channel to manual reading modus
 * 
 * Parent Class: NetworkManager
 */
m.disableAutoRead = "func_150721_g"
/** 
 * Prepares a clientside NetworkManager: establishes a connection to the socket supplied and configures the channel pipeline. Returns the newly created instance.
 * 
 * Parent Class: NetworkManager
 */
m.provideLocalClient = "func_150722_a"
/** 
 * Sets the new connection state and registers which packets this channel may send and receive
 * 
 * Parent Class: NetworkManager
 */
m.setConnectionState = "func_150723_a"
/** 
 * "Returns true if this NetworkManager has an active channel
 * 
 * Parent Class: NetworkManager
 */
m.isChannelOpen = "func_150724_d"
/** 
 * Adds an encoder+decoder to the channel pipeline. The parameter is the secret key used for encrypted communication
 * 
 * Parent Class: NetworkManager
 */
m.enableEncryption = "func_150727_a"
/** 
 * "If this channel is closed
 * 
 * Parent Class: NetworkManager
 */
m.getExitMessage = "func_150730_f"
/** 
 * True if this NetworkManager uses a memory connection (single player game). False may imply both an active TCP connection or simply no active connection at all
 * 
 * Parent Class: NetworkManager
 */
m.isLocalChannel = "func_150731_c"
/** 
 * "Will commit the packet to the channel. If the current thread 'owns' the channel it will write and flush the packet
 * 
 * Parent Class: NetworkManager
 */
m.dispatchPacket = "func_150732_b"
/** 
 * Will iterate through the outboundPacketQueue and dispatch all Packets
 * 
 * Parent Class: NetworkManager
 */
m.flushOutboundQueue = "func_150733_h"
/** 
 * 
 * 
 * Parent Class: EnumConnectionState
 */
m.getFromPacket = "func_150752_a"
m.getId = {}
/** 
 * 
 * 
 * Parent Class: EnumConnectionState
 */
m.getId.EnumConnectionState = "func_150759_c"
/** 
 * 
 * 
 * Parent Class: GuiButtonRealmsProxy
 */
m.getId.GuiButtonRealmsProxy = "func_154314_d"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
m.getId.GuiTextField = "func_175206_d"
/** 
 * Gets the type byte for the tag.
 * 
 * Parent Class: NBTBase
 */
m.getId.NBTBase = "func_74732_a"
/** 
 * returns the ID of the potion
 * 
 * Parent Class: Potion
 */
m.getId.Potion = "func_76396_c"

/** 
 * 
 * 
 * Parent Class: EnumConnectionState
 */
m.getById = "func_150760_a"
/** 
 * "Reduces the baseHeight by 20%
 * 
 * Parent Class: BiomeGenBase$Height
 */
m.attenuate = "func_150775_a"
/** 
 * Writes a compressed NBTTagCompound to this buffer
 * 
 * Parent Class: PacketBuffer
 */
m.writeNBTTagCompoundToBuffer = "func_150786_a"
/** 
 * Writes a compressed int to the buffer. The smallest number of bytes to fit the passed int will be written. Of each such byte only 7 bits will be used to describe the actual value since its most significant bit dictates whether the next byte is part of that same int. Micro-optimization for int values that are expected to have values below 128.
 * 
 * Parent Class: PacketBuffer
 */
m.writeVarIntToBuffer = "func_150787_b"
/** 
 * "Writes the ItemStack's ID (short)
 * 
 * Parent Class: PacketBuffer
 */
m.writeItemStackToBuffer = "func_150788_a"
/** 
 * Reads a string from this buffer. Expected parameter is maximum allowed string length. Will throw IOException if string length exceeds this value!
 * 
 * Parent Class: PacketBuffer
 */
m.readStringFromBuffer = "func_150789_c"
/** 
 * Calculates the number of bytes required to fit the supplied int (0-5) if it were to be read/written using readVarIntFromBuffer or writeVarIntToBuffer
 * 
 * Parent Class: PacketBuffer
 */
m.getVarIntSize = "func_150790_a"
/** 
 * Reads an ItemStack from this buffer
 * 
 * Parent Class: PacketBuffer
 */
m.readItemStackFromBuffer = "func_150791_c"
/** 
 * Reads a compressed int from the buffer. To do so it maximally reads 5 byte-sized chunks whose most significant bit dictates whether another byte should be read.
 * 
 * Parent Class: PacketBuffer
 */
m.readVarIntFromBuffer = "func_150792_a"
/** 
 * Reads a compressed NBTTagCompound from this buffer
 * 
 * Parent Class: PacketBuffer
 */
m.readNBTTagCompoundFromBuffer = "func_150793_b"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.isPopulated = "func_150802_k"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.recheckGaps = "func_150803_c"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getBlockLightOpacity = "func_177437_b"
/** 
 * Returns the block corresponding to the given coordinates inside a chunk.
 * 
 * Parent Class: Chunk
 */
m.getBlock0 = "func_150810_a"
m.addTileEntity = {}
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.addTileEntity.Chunk = "func_177426_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.addTileEntity.World = "func_175700_a"
/** 
 * 
 * 
 * Parent Class: CompiledChunk
 */
m.addTileEntity.CompiledChunk = "func_178490_a"

/** 
 * "Returns the block for a location in a chunk
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.getBlockByExtId = "func_150819_a"
/** 
 * Translates a Stat name using the fallback (hardcoded en_US) locale.  Looks like it's only intended to be used if translateToLocal fails.
 * 
 * Parent Class: StatCollector
 */
m.translateToFallback = "func_150826_b"
/** 
 * "Gets the time
 * 
 * Parent Class: StatCollector
 */
m.getLastTranslationUpdateTimeInMilliseconds = "func_150827_a"
/** 
 * 
 * 
 * Parent Class: BlockSourceImpl
 */
m.getBlockTileEntity = "func_150835_j"
/** 
 * 
 * 
 * Parent Class: PlayerSelector
 */
m.matchEntitiesToChatComponent = "func_150869_b"
/** 
 * 
 * 
 * Parent Class: StatFileWriter
 */
m.increaseStat = "func_150871_b"
/** 
 * Triggers the logging of an achievement and attempts to announce to server
 * 
 * Parent Class: StatFileWriter
 */
m.unlockAchievement = "func_150873_a"
/** 
 * 
 * 
 * Parent Class: StatisticsFile
 */
m.dumpJson = "func_150880_a"
/** 
 * 
 * 
 * Parent Class: StatisticsFile
 */
m.parseJson = "func_150881_a"
/** 
 * 
 * 
 * Parent Class: StatisticsFile
 */
m.readStatFile = "func_150882_a"
/** 
 * 
 * 
 * Parent Class: StatisticsFile
 */
m.saveStatFile = "func_150883_b"
/** 
 * 
 * 
 * Parent Class: StatisticsFile
 */
m.sendAchievements = "func_150884_b"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.getIdFromItem = "func_150891_b"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.isPotionIngredient = "func_150892_m"
/** 
 * "returns a list of items with the same ID
 * 
 * Parent Class: Item
 */
m.getSubItems = "func_150895_a"
m.getPotionEffect = {}
/** 
 * 
 * 
 * Parent Class: Item
 */
m.getPotionEffect.Item = "func_150896_i"
/** 
 * 
 * 
 * Parent Class: PotionHelper
 */
m.getPotionEffect.PotionHelper = "func_77904_a"

/** 
 * 
 * 
 * Parent Class: Item
 */
m.getItemFromBlock = "func_150898_a"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.getItemById = "func_150899_d"
m.registerItems = {}
/** 
 * 
 * 
 * Parent Class: Item
 */
m.registerItems.Item = "func_150900_l"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.registerItems.RenderItem = "func_175041_b"

/** 
 * 
 * 
 * Parent Class: ItemFireworkCharge
 */
m.addExplosionInfo = "func_150902_a"
/** 
 * 
 * 
 * Parent Class: ItemFireworkCharge
 */
m.getExplosionTag = "func_150903_a"
/** 
 * 
 * 
 * Parent Class: ItemFood
 */
m.getHealAmount = "func_150905_g"
/** 
 * 
 * 
 * Parent Class: ItemFood
 */
m.getSaturationModifier = "func_150906_h"
/** 
 * 
 * 
 * Parent Class: ItemBucket
 */
m.fillBucket = "func_150910_a"
/** 
 * 
 * 
 * Parent Class: ItemMapBase
 */
m.createMapDataPacket = "func_150911_c"
/** 
 * 
 * 
 * Parent Class: ItemMap
 */
m.loadMapData = "func_150912_a"
/** 
 * 
 * 
 * Parent Class: ItemTool
 */
m.getToolMaterial = "func_150913_i"
/** 
 * 
 * 
 * Parent Class: ItemRecord
 */
m.getRecordNameLocal = "func_150927_i"
/** 
 * "this method returns true if the book's NBT Tag List ""pages"" is valid"
 * 
 * Parent Class: ItemWritableBook
 */
m.isNBTValid = "func_150930_a"
m.getDamageVsEntity = {}
/** 
 * Returns the amount of damage this item will deal. One heart of damage is equal to 2 damage points.
 * 
 * Parent Class: ItemSword
 */
m.getDamageVsEntity.ItemSword = "func_150931_i"
/** 
 * Returns the damage against a given entity.
 * 
 * Parent Class: Item$ToolMaterial
 */
m.getDamageVsEntity.Item$ToolMaterial = "func_78000_c"

m.getToolMaterialName = {}
/** 
 * Return the name for this tool's material.
 * 
 * Parent Class: ItemSword
 */
m.getToolMaterialName.ItemSword = "func_150932_j"
/** 
 * Return the name for this tool's material.
 * 
 * Parent Class: ItemTool
 */
m.getToolMaterialName.ItemTool = "func_77861_e"

/** 
 * 
 * 
 * Parent Class: ItemColored
 */
m.setSubtypeNames = "func_150943_a"
/** 
 * 
 * 
 * Parent Class: StatBase
 */
m.getStatName = "func_150951_e"
m.getCriteria = {}
/** 
 * 1.8.9
 * 
 * Parent Class: StatBase
 */
m.getCriteria.StatBase = "func_150952_k"
/** 
 * 
 * 
 * Parent Class: ScoreObjective
 */
m.getCriteria.ScoreObjective = "func_96680_c"

/** 
 * 1.8.9
 * 
 * Parent Class: StatBase
 */
m.createChatComponent = "func_150955_j"
/** 
 * Gets the saturation modifier to apply to the heal amount when the player eats the uncooked version of this fish.
 * 
 * Parent Class: ItemFishFood$FishType
 */
m.getUncookedSaturationModifier = "func_150967_d"
/** 
 * Gets the amount that eating the cooked version of this fish should heal the player.
 * 
 * Parent Class: ItemFishFood$FishType
 */
m.getCookedHealAmount = "func_150970_e"
/** 
 * "Gets a value indicating whether this type of fish has ""raw"" and ""cooked"" variants."
 * 
 * Parent Class: ItemFishFood$FishType
 */
m.canCook = "func_150973_i"
m.byMetadata = {}
/** 
 * "Gets the corresponding FishType value for the given item damage value of an ItemStack
 * 
 * Parent Class: ItemFishFood$FishType
 */
m.byMetadata.ItemFishFood$FishType = "func_150974_a"
/** 
 * 
 * 
 * Parent Class: BlockStoneBrick$EnumType
 */
m.byMetadata.BlockStoneBrick$EnumType = "func_176613_a"
/** 
 * 
 * 
 * Parent Class: BlockStoneSlab$EnumType
 */
m.byMetadata.BlockStoneSlab$EnumType = "func_176625_a"
/** 
 * Returns an EnumType for the BlockState from a metadata value.
 * 
 * Parent Class: BlockStone$EnumType
 */
m.byMetadata.BlockStone$EnumType = "func_176643_a"
/** 
 * 
 * 
 * Parent Class: BlockWall$EnumType
 */
m.byMetadata.BlockWall$EnumType = "func_176660_a"
/** 
 * Returns the matching EnumType for the given metadata.
 * 
 * Parent Class: BlockSandStone$EnumType
 */
m.byMetadata.BlockSandStone$EnumType = "func_176673_a"
/** 
 * 
 * 
 * Parent Class: BlockSand$EnumType
 */
m.byMetadata.BlockSand$EnumType = "func_176686_a"
/** 
 * 
 * 
 * Parent Class: EnumDyeColor
 */
m.byMetadata.EnumDyeColor = "func_176764_b"
/** 
 * 
 * 
 * Parent Class: BlockQuartz$EnumType
 */
m.byMetadata.BlockQuartz$EnumType = "func_176794_a"
/** 
 * 
 * 
 * Parent Class: BlockPrismarine$EnumType
 */
m.byMetadata.BlockPrismarine$EnumType = "func_176810_a"
/** 
 * 
 * 
 * Parent Class: BlockRedSandstone$EnumType
 */
m.byMetadata.BlockRedSandstone$EnumType = "func_176825_a"
/** 
 * 
 * 
 * Parent Class: BlockPlanks$EnumType
 */
m.byMetadata.BlockPlanks$EnumType = "func_176837_a"
/** 
 * 
 * 
 * Parent Class: BlockLever$EnumOrientation
 */
m.byMetadata.BlockLever$EnumOrientation = "func_176853_a"
/** 
 * 
 * 
 * Parent Class: BlockSilverfish$EnumType
 */
m.byMetadata.BlockSilverfish$EnumType = "func_176879_a"
/** 
 * 
 * 
 * Parent Class: BlockHugeMushroom$EnumType
 */
m.byMetadata.BlockHugeMushroom$EnumType = "func_176895_a"
/** 
 * 
 * 
 * Parent Class: BlockStoneSlabNew$EnumType
 */
m.byMetadata.BlockStoneSlabNew$EnumType = "func_176916_a"
/** 
 * 
 * 
 * Parent Class: BlockDirt$DirtType
 */
m.byMetadata.BlockDirt$DirtType = "func_176924_a"
/** 
 * 
 * 
 * Parent Class: BlockDoublePlant$EnumPlantType
 */
m.byMetadata.BlockDoublePlant$EnumPlantType = "func_176938_a"
/** 
 * 
 * 
 * Parent Class: BlockRailBase$EnumRailDirection
 */
m.byMetadata.BlockRailBase$EnumRailDirection = "func_177016_a"
/** 
 * 
 * 
 * Parent Class: BlockTallGrass$EnumType
 */
m.byMetadata.BlockTallGrass$EnumType = "func_177045_a"

/** 
 * Gets the amount that eating the uncooked version of this fish should heal the player.
 * 
 * Parent Class: ItemFishFood$FishType
 */
m.getUncookedHealAmount = "func_150975_c"
/** 
 * Gets the saturation modifier to apply to the heal amount when the player eats the cooked version of this fish.
 * 
 * Parent Class: ItemFishFood$FishType
 */
m.getCookedSaturationModifier = "func_150977_f"
/** 
 * "Gets the FishType that corresponds to the given ItemStack
 * 
 * Parent Class: ItemFishFood$FishType
 */
m.byItemStack = "func_150978_a"
m.getRepairItem = {}
/** 
 * 
 * 
 * Parent Class: Item$ToolMaterial
 */
m.getRepairItem.Item$ToolMaterial = "func_150995_f"
/** 
 * Get a main crafting component of this Armor Material (example is Items.iron_ingot)
 * 
 * Parent Class: ItemArmor$ArmorMaterial
 */
m.getRepairItem.ItemArmor$ArmorMaterial = "func_151685_b"

/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.setItem = "func_150996_a"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.setStackDisplayName = "func_151001_c"
/** 
 * Gets the JsonElement that can be serialized.
 * 
 * Parent Class: JsonSerializableSet
 */
m.getSerializableElement = "func_151003_a"
/** 
 * 
 * 
 * Parent Class: StatList
 */
m.getStatEntityKilledBy = "func_151176_b"
/** 
 * 
 * 
 * Parent Class: StatList
 */
m.getOneShotStat = "func_151177_a"
/** 
 * 
 * 
 * Parent Class: StatList
 */
m.initItemDepleteStats = "func_151179_e"
/** 
 * Merge {@link StatBase} object references for similar blocks
 * 
 * Parent Class: StatList
 */
m.mergeStatBases = "func_151180_a"
/** 
 * 
 * 
 * Parent Class: StatList
 */
m.initMiningStats = "func_151181_c"
/** 
 * 
 * 
 * Parent Class: StatList
 */
m.getStatKillEntity = "func_151182_a"
/** 
 * Gets the JsonSerializable value stored in this tuple.
 * 
 * Parent Class: TupleIntJsonSerializable
 */
m.getJsonSerializableValue = "func_151187_b"
/** 
 * Sets this tuple's integer value to the given value.
 * 
 * Parent Class: TupleIntJsonSerializable
 */
m.setIntegerValue = "func_151188_a"
/** 
 * Gets the integer value stored in this tuple.
 * 
 * Parent Class: TupleIntJsonSerializable
 */
m.getIntegerValue = "func_151189_a"
/** 
 * Sets this tuple's JsonSerializable value to the given value.
 * 
 * Parent Class: TupleIntJsonSerializable
 */
m.setJsonSerializableValue = "func_151190_a"
/** 
 * "Does the given JsonObject contain a field with the given name whose type is primitive (String
 * 
 * Parent Class: JsonUtils
 */
m.isJsonPrimitive = "func_151201_f"
/** 
 * Does the given JsonObject contain an array field with the given name?
 * 
 * Parent Class: JsonUtils
 */
m.isJsonArray = "func_151202_d"
/** 
 * Does the given JsonObject contain a field with the given name?
 * 
 * Parent Class: JsonUtils
 */
m.hasField = "func_151204_g"
/** 
 * Is the given JsonElement a string?
 * 
 * Parent Class: JsonUtils
 */
m.isString = "func_151211_a"
/** 
 * Gets the JsonArray field on the JsonObject with the given name.
 * 
 * Parent Class: JsonUtils
 */
m.getJsonArray = "func_151214_t"
m.getBoolean = {}
/** 
 * Gets the boolean value of the given JsonElement.  Expects the second parameter to be the name of the element's field if an error message needs to be thrown.
 * 
 * Parent Class: JsonUtils
 */
m.getBoolean.JsonUtils = "func_151216_b"
/** 
 * "Retrieves a boolean value using the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getBoolean.NBTTagCompound = "func_74767_n"
/** 
 * Gets the GameRule's value as boolean.
 * 
 * Parent Class: GameRules$Value
 */
m.getBoolean.GameRules$Value = "func_82758_b"
/** 
 * Gets the boolean Game Rule value.
 * 
 * Parent Class: GameRules
 */
m.getBoolean.GameRules = "func_82766_b"

/** 
 * 
 * 
 * Parent Class: JsonUtils
 */
m.getJsonObject = "func_152754_s"
/** 
 * Sends a POST to the given URL
 * 
 * Parent Class: HttpUtil
 */
m.post = "func_151225_a"
/** 
 * Sends a POST to the given URL using the map as the POST args
 * 
 * Parent Class: HttpUtil
 */
m.postMap = "func_151226_a"
/** 
 * Creates an Cipher instance using the AES/CFB8/NoPadding algorithm. Used for protocol encryption.
 * 
 * Parent Class: CryptManager
 */
m.createNetCipherInstance = "func_151229_a"
/** 
 * "Is the given value a power of two?  (1
 * 
 * Parent Class: MathHelper
 */
m.isPowerOfTwo = "func_151235_d"
/** 
 * Returns the input value rounded up to the next highest power of two.
 * 
 * Parent Class: MathHelper
 */
m.roundUpToPowerOfTwo = "func_151236_b"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.clamp_double = "func_151237_a"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.denormalizeClamp = "func_151238_b"
/** 
 * "Efficiently calculates the floor of the base-2 log of an integer value.  This is effectively the index of the highest bit that is set.  For example
 * 
 * Parent Class: MathHelper
 */
m.calculateLogBaseTwo = "func_151239_c"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.randomFloatClamp = "func_151240_a"
/** 
 * "Uses a B(2
 * 
 * Parent Class: MathHelper
 */
m.calculateLogBaseTwoDeBruijn = "func_151241_e"
/** 
 * 
 * 
 * Parent Class: CreativeTabs$5
 */
m.getIconItemDamage = "func_151243_f"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
m.getIconItemStack = "func_151244_d"
/** 
 * 
 * 
 * Parent Class: EntityTracker
 */
m.sendToAllTrackingEntity = "func_151247_a"
/** 
 * 
 * 
 * Parent Class: PlayerManager$PlayerInstance
 */
m.sendToAllPlayersWatchingChunk = "func_151251_a"
/** 
 * 
 * 
 * Parent Class: PlayerManager$PlayerInstance
 */
m.sendTileToAllPlayersWatchingChunk = "func_151252_a"
/** 
 * 
 * 
 * Parent Class: PlayerManager$PlayerInstance
 */
m.flagChunkForUpdate = "func_151253_a"
/** 
 * 
 * 
 * Parent Class: PingResponseHandler
 */
m.getStringBuffer = "func_151255_a"
/** 
 * 
 * 
 * Parent Class: PingResponseHandler
 */
m.writeAndFlush = "func_151256_a"
/** 
 * Send the given packet to all players tracking this entity.
 * 
 * Parent Class: EntityTrackerEntry
 */
m.sendPacketToTrackedPlayers = "func_151259_a"
/** 
 * Creates a spawn packet for the entity managed by this entry.
 * 
 * Parent Class: EntityTrackerEntry
 */
m.createSpawnPacket = "func_151260_c"
/** 
 * Adds a channel that listens on publicly accessible network ports
 * 
 * Parent Class: NetworkSystem
 */
m.addLanEndpoint = "func_151265_a"
m.getServer = {}
/** 
 * 
 * 
 * Parent Class: NetworkSystem
 */
m.getServer.NetworkSystem = "func_151267_d"
/** 
 * Gets mcServer.
 * 
 * Parent Class: MinecraftServer
 */
m.getServer.MinecraftServer = "func_71276_C"

/** 
 * Shuts down all open endpoints (with immediate effect?)
 * 
 * Parent Class: NetworkSystem
 */
m.terminateEndpoints = "func_151268_b"
/** 
 * "Will try to process the packets received by each NetworkManager
 * 
 * Parent Class: NetworkSystem
 */
m.networkTick = "func_151269_c"
/** 
 * Adds a channel that listens locally
 * 
 * Parent Class: NetworkSystem
 */
m.addLocalEndpoint = "func_151270_a"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse$MinecraftProtocolVersionIdentifier
 */
m.getProtocol = "func_151304_b"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse
 */
m.setServerDescription = "func_151315_a"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse
 */
m.getFavicon = "func_151316_d"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse
 */
m.getServerDescription = "func_151317_a"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse
 */
m.getPlayerCountData = "func_151318_b"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse
 */
m.setPlayerCountData = "func_151319_a"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse
 */
m.setFavicon = "func_151320_a"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse
 */
m.setProtocolVersionInfo = "func_151321_a"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse
 */
m.getProtocolVersionInfo = "func_151322_c"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse$PlayerCountData
 */
m.setPlayers = "func_151330_a"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse$PlayerCountData
 */
m.getOnlinePlayerCount = "func_151333_b"
m.getBlock = {}
/** 
 * 
 * 
 * Parent Class: BlockEventData
 */
m.getBlock.BlockEventData = "func_151337_f"
/** 
 * 
 * 
 * Parent Class: NextTickListEntry
 */
m.getBlock.NextTickListEntry = "func_151351_a"
/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
m.getBlock.EntityFallingBlock = "func_175131_l"
/** 
 * 
 * 
 * Parent Class: BlockState$StateImplementation
 */
m.getBlock.BlockState$StateImplementation = "func_177230_c"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getBlock.Chunk = "func_177438_a"
/** 
 * 
 * 
 * Parent Class: BlockState
 */
m.getBlock.BlockState = "func_177622_c"
/** 
 * 
 * 
 * Parent Class: ItemBlock
 */
m.getBlock.ItemBlock = "func_179223_d"
/** 
 * Get the World coordinates of the Block with the given Chunk coordinates relative to this chunk
 * 
 * Parent Class: ChunkCoordIntPair
 */
m.getBlock.ChunkCoordIntPair = "func_180331_a"
/** 
 * 
 * 
 * Parent Class: BlockFlower$EnumFlowerColor
 */
m.getBlock.BlockFlower$EnumFlowerColor = "func_180346_a"

/** 
 * 
 * 
 * Parent Class: BlockEventData
 */
m.getEventParameter = "func_151338_e"
/** 
 * Get the Event ID (different for each BlockID)
 * 
 * Parent Class: BlockEventData
 */
m.getEventID = "func_151339_d"
/** 
 * 
 * 
 * Parent Class: Bootstrap
 */
m.registerDispenserBehaviors = "func_151353_a"
m.register = {}
/** 
 * "Registers blocks
 * 
 * Parent Class: Bootstrap
 */
m.register.Bootstrap = "func_151354_b"
/** 
 * 
 * 
 * Parent Class: RegistryNamespaced
 */
m.register.RegistryNamespaced = "func_177775_a"
/** 
 * 
 * 
 * Parent Class: ItemModelMesher
 */
m.register.ItemModelMesher = "func_178086_a"

/** 
 * returns true if selecting this worldtype from the customize menu should display the generator.[worldtype].info message
 * 
 * Parent Class: WorldType
 */
m.showWorldInfoNotice = "func_151357_h"
/** 
 * enables the display of generator.[worldtype].info message on the customize world menu
 * 
 * Parent Class: WorldType
 */
m.setNotificationData = "func_151358_j"
/** 
 * Gets the translation key for the info text for this world type.
 * 
 * Parent Class: WorldType
 */
m.getTranslatedInfo = "func_151359_c"
/** 
 * Whenever an entity that has this enchantment on one of its associated items is damaged this method will be called.
 * 
 * Parent Class: EnchantmentThorns
 */
m.onUserHurt = "func_151367_b"
/** 
 * Called whenever a mob is damaged with an item that has this enchantment on it.
 * 
 * Parent Class: Enchantment
 */
m.onEntityDamaged = "func_151368_a"
/** 
 * 
 * 
 * Parent Class: EnchantmentHelper
 */
m.applyThornEnchantments = "func_151384_a"
/** 
 * 
 * 
 * Parent Class: EnchantmentHelper
 */
m.applyArthropodEnchantments = "func_151385_b"
/** 
 * Returns the level of the 'Luck Of The Sea' enchantment.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getLuckOfSeaModifier = "func_151386_g"
/** 
 * Returns the level of the 'Lure' enchantment on the players held item.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getLureModifier = "func_151387_h"
/** 
 * 
 * 
 * Parent Class: MerchantRecipeList
 */
m.readFromBuf = "func_151390_b"
/** 
 * 
 * 
 * Parent Class: MerchantRecipeList
 */
m.writeToBuf = "func_151391_a"
/** 
 * Adds a player to the given team
 * 
 * Parent Class: ServerScoreboard
 */
m.addPlayerToTeam = "func_151392_a"
/** 
 * "Adds a smelting recipe
 * 
 * Parent Class: FurnaceRecipes
 */
m.addSmeltingRecipeForBlock = "func_151393_a"
/** 
 * Adds a smelting recipe using an ItemStack as the input for the recipe.
 * 
 * Parent Class: FurnaceRecipes
 */
m.addSmeltingRecipe = "func_151394_a"
/** 
 * Returns the smelting result of an item.
 * 
 * Parent Class: FurnaceRecipes
 */
m.getSmeltingResult = "func_151395_a"
/** 
 * Adds a smelting recipe using an Item as the input item.
 * 
 * Parent Class: FurnaceRecipes
 */
m.addSmelting = "func_151396_a"
/** 
 * Compares two itemstacks to ensure that they are the same. This checks both the item and the metadata of the item.
 * 
 * Parent Class: FurnaceRecipes
 */
m.compareItemStacks = "func_151397_a"
/** 
 * 
 * 
 * Parent Class: FurnaceRecipes
 */
m.getSmeltingExperience = "func_151398_b"
/** 
 * 
 * 
 * Parent Class: EntityPlayer$EnumChatVisibility
 */
m.getEnumChatVisibility = "func_151426_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer$EnumChatVisibility
 */
m.getResourceKey = "func_151429_b"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
m.getSoundLevel = "func_151438_a"
/** 
 * Sets a key binding and then saves all settings.
 *  
 * @param key The key that the option will be set
 * @param keyCode The option (keycode) to set.
 * 
 * Parent Class: GameSettings
 */
m.setOptionKeyBinding = "func_151440_a"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.setKeyCode = "func_151462_b"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.getKeyCode = "func_151463_i"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.getKeyDescription = "func_151464_g"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.getKeyCategory = "func_151466_e"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.getKeybinds = "func_151467_c"
/** 
 * Returns true on the initial key press. For continuous querying use {@link isKeyDown()}. Should be used in key events.
 * 
 * Parent Class: KeyBinding
 */
m.isPressed = "func_151468_f"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.getKeyCodeDefault = "func_151469_h"
/** 
 * 
 * 
 * Parent Class: SharedMonsterAttributes
 */
m.setAttributeModifiers = "func_151475_a"
/** 
 * True if the block is a stair block or a slab block
 * 
 * Parent Class: EntityAIControlledByPlayer
 */
m.isStairOrSlab = "func_151498_a"
/** 
 * Number of ticks since the entity started to eat grass
 * 
 * Parent Class: EntityAIEatGrass
 */
m.getEatingGrassTimer = "func_151499_f"
/** 
 * "Writes the list of watched objects (entity attribute of type {byte
 * 
 * Parent Class: DataWatcher
 */
m.writeWatchedListToPacketBuffer = "func_151507_a"
/** 
 * "Reads a list of watched objects (entity attribute of type {byte
 * 
 * Parent Class: DataWatcher
 */
m.readWatchedListFromPacketBuffer = "func_151508_b"
/** 
 * 
 * 
 * Parent Class: DataWatcher
 */
m.writeTo = "func_151509_a"
/** 
 * "Writes a watchable object (entity attribute of type {byte
 * 
 * Parent Class: DataWatcher
 */
m.writeWatchableObjectToPacketBuffer = "func_151510_a"
/** 
 * Whether or not the damage ignores modification by potion effects or enchantments.
 * 
 * Parent Class: DamageSource
 */
m.isDamageAbsolute = "func_151517_h"
/** 
 * "Sets a value indicating whether the damage is absolute (ignores modification by potion effects or enchantments)
 * 
 * Parent Class: DamageSource
 */
m.setDamageIsAbsolute = "func_151518_m"
m.getDeathMessage = {}
/** 
 * Gets the death message that is displayed when the player dies
 *  
 * @param entityLivingBaseIn The EntityLivingBase that died
 * 
 * Parent Class: EntityDamageSourceIndirect
 */
m.getDeathMessage.EntityDamageSourceIndirect = "func_151519_b"
/** 
 * 
 * 
 * Parent Class: CombatTracker
 */
m.getDeathMessage.CombatTracker = "func_151521_b"

/** 
 * 
 * 
 * Parent Class: CombatEntry
 */
m.getDamageSrcDisplayName = "func_151522_h"
/** 
 * 
 * 
 * Parent Class: EnumDifficulty
 */
m.getDifficultyEnum = "func_151523_a"
/** 
 * 
 * 
 * Parent Class: EnumDifficulty
 */
m.getDifficultyId = "func_151525_a"
/** 
 * 
 * 
 * Parent Class: EnumDifficulty
 */
m.getDifficultyResourceKey = "func_151526_b"
/** 
 * 
 * 
 * Parent Class: StructureBoundingBox
 */
m.toNBTTagIntArray = "func_151535_h"
/** 
 * 
 * 
 * Parent Class: FlatLayerInfo
 */
m.getLayerMaterialBlock = "func_151536_b"
/** 
 * "Returns the direction-shifted metadata for blocks that require orientation
 * 
 * Parent Class: StructureComponent
 */
m.getMetadataWithOffset = "func_151555_a"
/** 
 * Retrieves the color index of the block. This is is the same color used by vanilla maps to represent this block.
 * 
 * Parent Class: Material
 */
m.getMaterialMapColor = "func_151565_r"
/** 
 * 
 * 
 * Parent Class: GenLayer
 */
m.biomesEqualOrMesaPlateau = "func_151616_a"
/** 
 * "returns the most frequently occurring number of the set
 * 
 * Parent Class: GenLayer
 */
m.selectModeOrRandom = "func_151617_b"
/** 
 * returns true if the biomeId is one of the various ocean biomes.
 * 
 * Parent Class: GenLayer
 */
m.isBiomeOceanic = "func_151618_b"
/** 
 * selects a random integer from a set of provided integers
 * 
 * Parent Class: GenLayer
 */
m.selectRandom = "func_151619_a"
/** 
 * 
 * 
 * Parent Class: GenLayerEdge
 */
m.getIntsHeatIce = "func_151624_d"
/** 
 * 
 * 
 * Parent Class: GenLayerEdge
 */
m.getIntsSpecial = "func_151625_e"
/** 
 * 
 * 
 * Parent Class: GenLayerEdge
 */
m.getIntsCoolWarm = "func_151626_c"
/** 
 * "Returns if two biomes can logically be neighbors. If one is hot and the other cold
 * 
 * Parent Class: GenLayerBiomeEdge
 */
m.canBiomesBeNeighbors = "func_151634_b"
/** 
 * Creates a border around a biome.
 * 
 * Parent Class: GenLayerBiomeEdge
 */
m.replaceBiomeEdge = "func_151635_b"
/** 
 * "Creates a border around a biome if necessary
 * 
 * Parent Class: GenLayerBiomeEdge
 */
m.replaceBiomeEdgeIfNecessary = "func_151636_a"
m.getMapColor = {}
/** 
 * 
 * 
 * Parent Class: MapColor
 */
m.getMapColor.MapColor = "func_151643_b"
/** 
 * 
 * 
 * Parent Class: BlockSand$EnumType
 */
m.getMapColor.BlockSand$EnumType = "func_176687_c"
/** 
 * 
 * 
 * Parent Class: EnumDyeColor
 */
m.getMapColor.EnumDyeColor = "func_176768_e"
/** 
 * Get the MapColor for this Block and the given BlockState
 * 
 * Parent Class: BlockCarpet
 */
m.getMapColor.BlockCarpet = "func_180659_g"
/** 
 * The color which represents this entry on a map.
 * 
 * Parent Class: BlockPlanks$EnumType
 */
m.getMapColor.BlockPlanks$EnumType = "func_181070_c"

/** 
 * Add food stats.
 * 
 * Parent Class: FoodStats
 */
m.addStats = "func_75122_a"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
m.isFull = "func_152105_l"
/** 
 * 
 * 
 * Parent Class: TileEntitySkull
 */
m.setPlayerProfile = "func_152106_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySkull
 */
m.setType = "func_152107_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySkull
 */
m.getPlayerProfile = "func_152108_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySkull
 */
m.updatePlayerProfile = "func_152109_d"
/** 
 * Sends an ENTER_COMBAT packet to the client
 * 
 * Parent Class: EntityLivingBase
 */
m.sendEnterCombat = "func_152111_bt"
/** 
 * Sends an END_COMBAT packet to the client
 * 
 * Parent Class: EntityLivingBase
 */
m.sendEndCombat = "func_152112_bu"
m.getOwnerId = {}
/** 
 * 
 * 
 * Parent Class: EntityTameable
 */
m.getOwnerId.EntityTameable = "func_152113_b"
/** 
 * Gets the horse's owner
 * 
 * Parent Class: EntityHorse
 */
m.getOwnerId.EntityHorse = "func_152119_ch"

/** 
 * 
 * 
 * Parent Class: EntityTameable
 */
m.isOwner = "func_152114_e"
m.setOwnerId = {}
/** 
 * 
 * 
 * Parent Class: EntityTameable
 */
m.setOwnerId.EntityTameable = "func_152115_b"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setOwnerId.EntityHorse = "func_152120_b"

/** 
 * Determines if this chicken is a jokey with a zombie riding it.
 * 
 * Parent Class: EntityChicken
 */
m.isChickenJockey = "func_152116_bZ"
/** 
 * Sets whether this chicken is a jockey or not.
 * 
 * Parent Class: EntityChicken
 */
m.setChickenJockey = "func_152117_i"
/** 
 * Checks if this instance of AbstractClientPlayer has any associated player data.
 * 
 * Parent Class: AbstractClientPlayer
 */
m.hasPlayerInfo = "func_152122_n"
/** 
 * Returns true if the player has an associated skin.
 * 
 * Parent Class: AbstractClientPlayer
 */
m.hasSkin = "func_152123_o"
/** 
 * "Draws a scaled
 * 
 * Parent Class: Gui
 */
m.drawScaledCustomSizeModalRect = "func_152125_a"
/** 
 * "Generate a GuiYesNo asking for confirmation to delete a world
 *  
 * Called when user selects the ""Delete"" button.
 *  
 * @param selectWorld A reference back to the GuiSelectWorld spawning the GuiYesNo
 * @param name The name of the world selected for deletion
 * @param id An arbitrary integer passed back to selectWorld's confirmClicked method"
 * 
 * Parent Class: GuiSelectWorld
 */
m.makeDeleteWorldYesNo = "func_152129_a"
m.removeEntity = {}
/** 
 * Sends a packet to the player to remove an entity.
 * 
 * Parent Class: EntityPlayerMP
 */
m.removeEntity.EntityPlayerMP = "func_152339_d"
/** 
 * Schedule the entity for removal during the next tick. Marks the entity dead in anticipation.
 * 
 * Parent Class: WorldClient
 */
m.removeEntity.WorldClient = "func_72900_e"
/** 
 * removes entity using its y chunk coordinate as its index
 * 
 * Parent Class: Chunk
 */
m.removeEntity.Chunk = "func_76622_b"

/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.readImageToBuffer = "func_152340_a"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getSkinManager = "func_152342_ad"
m.addScheduledTask = {}
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.addScheduledTask.Minecraft = "func_152343_a"
/** 
 * 
 * 
 * Parent Class: IThreadListener
 */
m.addScheduledTask.IThreadListener = "func_152344_a"

/** 
 * 
 * 
 * Parent Class: IThreadListener
 */
m.isCallingFromMinecraftThread = "func_152345_ab"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getTwitchStream = "func_152346_Z"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.dispatchKeypresses = "func_152348_aa"
/** 
 * Returns an array of the GameProfiles of all the connected players
 * 
 * Parent Class: MinecraftServer
 */
m.getGameProfiles = "func_152357_F"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getPlayerProfileCache = "func_152358_ax"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getGameProfileRepository = "func_152359_aw"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setConfigManager = "func_152361_a"
/** 
 * 
 * 
 * Parent Class: DedicatedServer
 */
m.convertFiles = "func_152368_aE"
/** 
 * 
 * 
 * Parent Class: DedicatedServer
 */
m.sleepFiveSeconds = "func_152369_aG"
m.notifyOperators = {}
/** 
 * Send an informative message to the server operators
 * 
 * Parent Class: IAdminCommand
 */
m.notifyOperators.IAdminCommand = "func_152372_a"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.notifyOperators.CommandBase = "func_152374_a"

/** 
 * Calculates the additional damage that will be dealt by an item with this enchantment. This alternative to calcModifierDamage is sensitive to the targets EnumCreatureAttribute.
 * 
 * Parent Class: Enchantment
 */
m.calcDamageByCreature = "func_152376_a"
/** 
 * 
 * 
 * Parent Class: EnchantmentHelper
 */
m.getModifierForCreature = "func_152377_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getPlayerEntityByUUID = "func_152378_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.getRenderDistanceChunks = "func_152379_p"
/** 
 * 
 * 
 * Parent Class: Session$Type
 */
m.setSessionType = "func_152421_a"
/** 
 * Returns either 'legacy' or 'mojang' whether the account is migrated or not
 * 
 * Parent Class: Session
 */
m.getSessionType = "func_152428_f"
m.renderStreamIndicator = {}
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.renderStreamIndicator.EntityRenderer = "func_152430_c"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderStreamIndicator.GuiIngame = "func_180478_c"

/** 
 * 
 * 
 * Parent Class: ThreadDownloadImageData
 */
m.loadTextureFromServer = "func_152433_a"
/** 
 * 
 * 
 * Parent Class: GuiStreamIndicator
 */
m.updateStreamAlpha = "func_152439_a"
m.read = {}
/** 
 * 
 * 
 * Parent Class: NBTBase
 */
m.read.NBTBase = "func_152446_a"
/** 
 * Tracks the reading of the given amount of bits(!)
 * 
 * Parent Class: NBTSizeTracker$1
 */
m.read.NBTSizeTracker$1 = "func_152450_a"
/** 
 * 
 * 
 * Parent Class: CompressedStreamTools
 */
m.read.CompressedStreamTools = "func_74797_a"

/** 
 * 
 * 
 * Parent Class: NBTTagCompound
 */
m.readType = "func_152447_a"
/** 
 * 
 * 
 * Parent Class: NBTTagCompound
 */
m.readKey = "func_152448_b"
m.readNBT = {}
/** 
 * 
 * 
 * Parent Class: NBTTagCompound
 */
m.readNBT.NBTTagCompound = "func_152449_a"
/** 
 * Reads the food data for the player.
 * 
 * Parent Class: FoodStats
 */
m.readNBT.FoodStats = "func_75112_a"

/** 
 * Reads and returns a GameProfile that has been saved to the passed in NBTTagCompound
 * 
 * Parent Class: NBTUtil
 */
m.readGameProfileFromNBT = "func_152459_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
m.getOfflineProfile = "func_152506_a"
m.copyFrom = {}
/** 
 * 
 * 
 * Parent Class: ServerData
 */
m.copyFrom.ServerData = "func_152583_a"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.copyFrom.TextureAtlasSprite = "func_94217_a"

/** 
 * 
 * 
 * Parent Class: ServerData
 */
m.setResourceMode = "func_152584_a"
/** 
 * 
 * 
 * Parent Class: ServerData
 */
m.getResourceMode = "func_152586_b"
m.getMotd = {}
/** 
 * 
 * 
 * Parent Class: ServerData$ServerResourceMode
 */
m.getMotd.ServerData$ServerResourceMode = "func_152589_a"
/** 
 * Returns the server message of the day
 * 
 * Parent Class: MinecraftServer
 */
m.getMotd.MinecraftServer = "func_71274_v"

/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.canSendCommands = "func_152596_g"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.removePlayerFromWhitelist = "func_152597_c"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getWhitelistedPlayerNames = "func_152598_l"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getWhitelistedPlayers = "func_152599_k"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getAllProfiles = "func_152600_g"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.addWhitelistedPlayer = "func_152601_d"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getPlayerStatsFile = "func_152602_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getOppedPlayers = "func_152603_m"
m.setGameType = {}
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.setGameType.ServerConfigurationManager = "func_152604_a"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.setGameType.NetworkPlayerInfo = "func_178839_a"
/** 
 * Sets the player's game mode and sends it to them.
 * 
 * Parent Class: EntityPlayer
 */
m.setGameType.EntityPlayer = "func_71033_a"
/** 
 * Sets the game type for all worlds.
 * 
 * Parent Class: MinecraftServer
 */
m.setGameType.MinecraftServer = "func_71235_a"
/** 
 * 
 * 
 * Parent Class: CommandDefaultGameMode
 */
m.setGameType.CommandDefaultGameMode = "func_71541_a"
/** 
 * 
 * 
 * Parent Class: ItemInWorldManager
 */
m.setGameType.ItemInWorldManager = "func_73076_a"
/** 
 * Sets the GameType.
 * 
 * Parent Class: WorldInfo
 */
m.setGameType.WorldInfo = "func_76060_a"
/** 
 * Sets the game type for the player.
 *  
 * @param type The GameType to set
 * 
 * Parent Class: PlayerControllerMP
 */
m.setGameType.PlayerControllerMP = "func_78746_a"

/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.addOp = "func_152605_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getOppedPlayerNames = "func_152606_n"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.canJoin = "func_152607_e"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getBannedPlayers = "func_152608_h"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.removeOp = "func_152610_b"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.setViewDistance = "func_152611_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getPlayerByUsername = "func_152612_a"
/** 
 * 
 * 
 * Parent Class: DedicatedPlayerList
 */
m.saveUserBanList = "func_152617_w"
/** 
 * 
 * 
 * Parent Class: DedicatedPlayerList
 */
m.saveIpBanList = "func_152618_v"
/** 
 * 
 * 
 * Parent Class: DedicatedPlayerList
 */
m.loadIpBanList = "func_152619_x"
/** 
 * 
 * 
 * Parent Class: DedicatedPlayerList
 */
m.loadUserBansList = "func_152620_y"
/** 
 * 
 * 
 * Parent Class: PlayerManager
 */
m.hasPlayerInstance = "func_152621_a"
/** 
 * 
 * 
 * Parent Class: PlayerManager
 */
m.setPlayerViewRadius = "func_152622_a"
m.skinAvailable = {}
/** 
 * 
 * 
 * Parent Class: SkinManager$2
 */
m.skinAvailable.SkinManager$2 = "func_152634_a"
/** 
 * 
 * 
 * Parent Class: SkinManager$SkinAvailableCallback
 */
m.skinAvailable.SkinManager$SkinAvailableCallback = "func_180521_a"

/** 
 * 
 * 
 * Parent Class: UserListWhitelistEntry
 */
m.onSerialization = "func_152641_a"
/** 
 * 
 * 
 * Parent Class: UserListOpsEntry
 */
m.constructProfile = "func_152643_b"
/** 
 * "Gets the permission level of the user
 * 
 * Parent Class: UserListOpsEntry
 */
m.getPermissionLevel = "func_152644_a"
/** 
 * 
 * 
 * Parent Class: UserListWhitelistEntry
 */
m.gameProfileFromJsonObject = "func_152646_b"
/** 
 * 
 * 
 * Parent Class: IPBanEntry
 */
m.getIPFromJson = "func_152647_b"
/** 
 * Convert a {@linkplain com.google.gson.JsonObject JsonObject} into a {@linkplain com.mojang.authlib.GameProfile}. The json object must have {@code uuid} and {@code name} attributes or {@code null} will be returned.
 * 
 * Parent Class: UserListBansEntry
 */
m.toGameProfile = "func_152648_b"
m.addEntry = {}
/** 
 * Add an entry to this cache
 * 
 * Parent Class: PlayerProfileCache
 */
m.addEntry.PlayerProfileCache = "func_152651_a"
/** 
 * Adds an entry to the list
 * 
 * Parent Class: UserList
 */
m.addEntry.UserList = "func_152687_a"

/** 
 * Get a player's {@link GameProfile} given their UUID
 * 
 * Parent Class: PlayerProfileCache
 */
m.getProfileByUUID = "func_152652_a"
/** 
 * Get a {@link ProfileEntry} by UUID
 * 
 * Parent Class: PlayerProfileCache
 */
m.getByUUID = "func_152653_b"
m.getUsernames = {}
/** 
 * Get an array of the usernames that are cached in this cache
 * 
 * Parent Class: PlayerProfileCache
 */
m.getUsernames.PlayerProfileCache = "func_152654_a"
/** 
 * 
 * 
 * Parent Class: CommandReplaceItem
 */
m.getUsernames.CommandReplaceItem = "func_175784_d"

/** 
 * Get a player's GameProfile given their username. Mojang's server's will be contacted if the entry is not cached locally.
 * 
 * Parent Class: PlayerProfileCache
 */
m.getGameProfileForUsername = "func_152655_a"
/** 
 * Get the {@link PlayerProfileCache.ProfileEntry entries} of this cache with a given limit
 * 
 * Parent Class: PlayerProfileCache
 */
m.getEntriesWithLimit = "func_152656_a"
m.load = {}
/** 
 * Load the cached profiles from disk
 * 
 * Parent Class: PlayerProfileCache
 */
m.load.PlayerProfileCache = "func_152657_b"
/** 
 * 
 * 
 * Parent Class: LazyLoadBase
 */
m.load.LazyLoadBase = "func_179280_b"
/** 
 * 
 * 
 * Parent Class: ChunkLoader
 */
m.load.ChunkLoader = "func_76691_a"

/** 
 * Save the cached profiles to disk
 * 
 * Parent Class: PlayerProfileCache
 */
m.save = "func_152658_c"
/** 
 * Get the date that this entry will expire
 * 
 * Parent Class: PlayerProfileCache$ProfileEntry
 */
m.getExpirationDate = "func_152670_b"
/** 
 * 
 * 
 * Parent Class: UserList
 */
m.writeChanges = "func_152678_f"
/** 
 * 
 * 
 * Parent Class: UserList
 */
m.readSavedFile = "func_152679_g"
/** 
 * Removes expired bans from the list. See {@link BanEntry#hasBanExpired}
 * 
 * Parent Class: UserList
 */
m.removeExpired = "func_152680_h"
/** 
 * Gets the key value for the given object
 * 
 * Parent Class: UserListWhitelist
 */
m.getObjectKey = "func_152681_a"
/** 
 * 
 * 
 * Parent Class: UserListWhitelist
 */
m.createEntry = "func_152682_a"
m.getEntry = {}
/** 
 * 
 * 
 * Parent Class: UserList
 */
m.getEntry.UserList = "func_152683_b"
/** 
 * 
 * 
 * Parent Class: LongHashMap
 */
m.getEntry.LongHashMap = "func_76160_c"

m.removeEntry = {}
/** 
 * 
 * 
 * Parent Class: UserList
 */
m.removeEntry.UserList = "func_152684_c"
/** 
 * Removes the specified entry from the map and returns it
 * 
 * Parent Class: IntHashMap
 */
m.removeEntry.IntHashMap = "func_76036_e"

/** 
 * 
 * 
 * Parent Class: UserList
 */
m.setLanServer = "func_152686_a"
/** 
 * 
 * 
 * Parent Class: UserList
 */
m.getValues = "func_152688_e"
/** 
 * 
 * 
 * Parent Class: UserList
 */
m.isLanServer = "func_152689_b"
/** 
 * 
 * 
 * Parent Class: UserList
 */
m.getSaveFile = "func_152691_c"
/** 
 * 
 * 
 * Parent Class: UserList
 */
m.hasEntry = "func_152692_d"
/** 
 * Gets the GameProfile of based on the provided username.
 * 
 * Parent Class: UserListOps
 */
m.getGameProfileFromName = "func_152700_a"
m.isBanned = {}
/** 
 * 
 * 
 * Parent Class: UserListBans
 */
m.isBanned.UserListBans = "func_152702_a"
/** 
 * 
 * 
 * Parent Class: BanList
 */
m.isBanned.BanList = "func_152708_a"

/** 
 * 
 * 
 * Parent Class: UserListBans
 */
m.isUsernameBanned = "func_152703_a"
/** 
 * Returns true if the profile is in the whitelist.
 * 
 * Parent Class: UserListWhitelist
 */
m.isWhitelisted = "func_152705_a"
/** 
 * "Gets the GameProfile for the UserListBanEntry with the specified username
 * 
 * Parent Class: UserListWhitelist
 */
m.getBannedProfile = "func_152706_a"
/** 
 * 
 * 
 * Parent Class: BanList
 */
m.addressToString = "func_152707_c"
/** 
 * 
 * 
 * Parent Class: BanList
 */
m.getBanEntry = "func_152709_b"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.convertWhitelist = "func_152710_d"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.mkdir = "func_152711_b"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.hasUnconvertableFiles = "func_152712_b"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.parseDate = "func_152713_b"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.tryConvert = "func_152714_a"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.hasUnconvertablePlayerFiles = "func_152715_c"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.lookupNames = "func_152717_a"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.convertOplist = "func_152718_c"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.getStringUUIDFromName = "func_152719_a"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.readFile = "func_152721_a"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.convertIpBanlist = "func_152722_b"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.convertSaveFiles = "func_152723_a"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.convertUserBanlist = "func_152724_a"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.getPlayersDirectory = "func_152725_d"
/** 
 * 
 * 
 * Parent Class: PreYggdrasilConverter
 */
m.backupConverted = "func_152727_c"
/** 
 * 
 * 
 * Parent Class: JsonSerializableSet
 */
m.fromJson = "func_152753_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.parsePass = "func_152764_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.parseGroup = "func_152765_a"
/** 
 * Add OS data into the snooper
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.addOSData = "func_152766_h"
/** 
 * 
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.addStatToSnooper = "func_152767_b"
/** 
 * 
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.addClientStat = "func_152768_a"
/** 
 * 
 * 
 * Parent Class: DefaultResourcePack
 */
m.getInputStreamAssets = "func_152780_c"
/** 
 * 
 * 
 * Parent Class: ResourceIndex
 */
m.getResourceMap = "func_152782_a"
/** 
 * 
 * 
 * Parent Class: SkinManager
 */
m.loadSkinFromCache = "func_152788_a"
/** 
 * Used in the Skull renderer to fetch a skin. May download the skin if it's not in the cache
 * 
 * Parent Class: SkinManager
 */
m.loadSkin = "func_152792_a"
/** 
 * 
 * 
 * Parent Class: SkinManager
 */
m.loadProfileTextures = "func_152790_a"
/** 
 * 
 * 
 * Parent Class: PackMetadataSection
 */
m.getPackDescription = "func_152805_a"
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.getStreamInfo = "func_152816_j"
m.stopBroadcasting = {}
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.stopBroadcasting.BroadcastController = "func_152819_E"
/** 
 * 
 * 
 * Parent Class: NullStream
 */
m.stopBroadcasting.NullStream = "func_152914_u"

/** 
 * Log an error
 *  
 * @param error The error to log
 * 
 * Parent Class: BroadcastController
 */
m.logError = "func_152820_d"
/** 
 * Set a new IngestServer
 *  
 * @param ingestServerSet The new IngestServer
 * 
 * Parent Class: BroadcastController
 */
m.setIngestServer = "func_152824_a"
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.isIngestTesting = "func_152825_o"
/** 
 * Return the PixelFormat
 * 
 * Parent Class: BroadcastController
 */
m.getPixelFormat = "func_152826_z"
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.setRecordingDeviceVolume = "func_152829_a"
m.requestCommercial = {}
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.requestCommercial.BroadcastController = "func_152830_D"
/** 
 * 
 * 
 * Parent Class: NullStream
 */
m.requestCommercial.NullStream = "func_152931_p"

m.logWarning = {}
/** 
 * Log an warning
 *  
 * @param warning The warning to log
 * 
 * Parent Class: BroadcastController
 */
m.logWarning.BroadcastController = "func_152832_e"
/** 
 * Logs the message with a level of WARN.
 * 
 * Parent Class: MinecraftServer
 */
m.logWarning.MinecraftServer = "func_71236_h"
/** 
 * Log warning message
 * 
 * Parent Class: RConThreadBase
 */
m.logWarning.RConThreadBase = "func_72606_c"

/** 
 * Return the IngestServer's instance
 * 
 * Parent Class: BroadcastController
 */
m.getIngestServer = "func_152833_s"
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.setPlaybackDeviceVolume = "func_152837_b"
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.isBroadcastPaused = "func_152839_p"
/** 
 * Set a new BroadcastListener
 *  
 * @param broadcastListenerIn The BroadcastListener to set
 * 
 * Parent Class: BroadcastController
 */
m.setBroadcastListener = "func_152841_a"
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.getChannelInfo = "func_152843_l"
/** 
 * Return the stream time
 * 
 * Parent Class: BroadcastController
 */
m.getStreamTime = "func_152844_x"
/** 
 * caputres the current framebuffer
 * 
 * Parent Class: BroadcastController
 */
m.captureFramebuffer = "func_152846_a"
m.isBroadcasting = {}
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.isBroadcasting.BroadcastController = "func_152850_m"
/** 
 * 
 * 
 * Parent Class: NullStream
 */
m.isBroadcasting.NullStream = "func_152934_n"

/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.getErrorCode = "func_152852_P"
/** 
 * Return the IngestList
 * 
 * Parent Class: BroadcastController
 */
m.getIngestList = "func_152855_t"
m.isReady = {}
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.isReady.BroadcastController = "func_152856_w"
/** 
 * checks if Potion effect is ready to be applied this tick.
 * 
 * Parent Class: Potion
 */
m.isReady.Potion = "func_76397_a"

m.isReadyToBroadcast = {}
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
m.isReadyToBroadcast.BroadcastController = "func_152857_n"
/** 
 * 
 * 
 * Parent Class: NullStream
 */
m.isReadyToBroadcast.NullStream = "func_152924_m"

/** 
 * passes the framebuffer on to the video stream
 *  
 * @param frame The FrameBuffer tu submit
 * 
 * Parent Class: BroadcastController
 */
m.submitStreamFrame = "func_152859_b"
/** 
 * mutes or unmutes the microphone based on the boolean parameter passed into the method
 * 
 * Parent Class: NullStream
 */
m.muteMicrophone = "func_152910_a"
/** 
 * 
 * 
 * Parent Class: NullStream
 */
m.updateStreamVolume = "func_152915_s"
/** 
 * pauses a stream
 * 
 * Parent Class: NullStream
 */
m.pause = "func_152916_q"
/** 
 * 
 * 
 * Parent Class: NullStream
 */
m.isPaused = "func_152919_o"
/** 
 * Shuts down a steam
 * 
 * Parent Class: NullStream
 */
m.shutdownStream = "func_152923_i"
/** 
 * unpauses a stream
 * 
 * Parent Class: NullStream
 */
m.unpause = "func_152933_r"
/** 
 * 
 * 
 * Parent Class: TwitchStream
 */
m.formatStreamKbps = "func_152946_b"
/** 
 * 
 * 
 * Parent Class: TwitchStream
 */
m.formatStreamBps = "func_152947_c"
/** 
 * 
 * 
 * Parent Class: TwitchStream
 */
m.formatStreamFps = "func_152948_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glGetShaderi = "func_153157_c"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glGetShaderInfoLog = "func_153158_d"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glUniform4 = "func_153162_d"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glUniformMatrix4 = "func_153160_c"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glUseProgram = "func_153161_d"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glUniform1i = "func_153163_f"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glGetAttribLocation = "func_153164_b"
/** 
 * "Calls the appropriate glGenFramebuffers method and returns the newly created fbo
 * 
 * Parent Class: OpenGlHelper
 */
m.glGenFramebuffers = "func_153165_e"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glGetProgramInfoLog = "func_153166_e"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glCheckFramebufferStatus = "func_153167_i"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glUniform1 = "func_153181_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glShaderSource = "func_153169_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glCompileShader = "func_153170_c"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glBindFramebuffer = "func_153171_g"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.getLogText = "func_153172_c"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glUniformMatrix2 = "func_153173_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glDeleteFramebuffers = "func_153174_h"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glGetProgrami = "func_153175_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glBindRenderbuffer = "func_153176_h"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glUniform2 = "func_153182_b"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glAttachShader = "func_153178_b"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glLinkProgram = "func_153179_f"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glDeleteShader = "func_153180_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glCreateProgram = "func_153183_d"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glDeleteRenderbuffers = "func_153184_g"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glGenRenderbuffers = "func_153185_f"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glRenderbufferStorage = "func_153186_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glDeleteProgram = "func_153187_e"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glFramebufferTexture2D = "func_153188_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glUniformMatrix3 = "func_153189_b"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glFramebufferRenderbuffer = "func_153190_b"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glUniform3 = "func_153192_c"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.areShadersSupported = "func_153193_b"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glGetUniformLocation = "func_153194_a"
/** 
 * creates a shader with the given mode and returns the GL id. params: mode
 * 
 * Parent Class: OpenGlHelper
 */
m.glCreateShader = "func_153195_b"
/** 
 * 
 * 
 * Parent Class: GuiButtonRealmsProxy
 */
m.getRealmsButton = "func_154317_g"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.getLastActiveTime = "func_154331_x"
/** 
 * 
 * 
 * Parent Class: ISaveFormat
 */
m.isConvertible = "func_154334_a"
/** 
 * 
 * 
 * Parent Class: ISaveFormat
 */
m.isNewLevelIdAcceptable = "func_154335_d"
m.getSizeOnDisk = {}
/** 
 * 
 * 
 * Parent Class: SaveFormatComparator
 */
m.getSizeOnDisk.SaveFormatComparator = "func_154336_c"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.getSizeOnDisk.WorldInfo = "func_76092_g"

m.getMouseX = {}
/** 
 * 
 * 
 * Parent Class: GuiSlotRealmsProxy
 */
m.getMouseX.GuiSlotRealmsProxy = "func_154337_m"
/** 
 * 
 * 
 * Parent Class: GuiSimpleScrolledSelectionListProxy
 */
m.getMouseX.GuiSimpleScrolledSelectionListProxy = "func_178049_g"

m.getMouseY = {}
/** 
 * 
 * 
 * Parent Class: GuiSlotRealmsProxy
 */
m.getMouseY.GuiSlotRealmsProxy = "func_154339_l"
/** 
 * 
 * 
 * Parent Class: GuiSimpleScrolledSelectionListProxy
 */
m.getMouseY.GuiSimpleScrolledSelectionListProxy = "func_178047_f"

/** 
 * 
 * 
 * Parent Class: ServerEula
 */
m.hasAcceptedEULA = "func_154346_a"
/** 
 * 
 * 
 * Parent Class: ServerEula
 */
m.loadEULAFile = "func_154347_a"
/** 
 * 
 * 
 * Parent Class: ServerEula
 */
m.createEULAFile = "func_154348_b"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.roundUp = "func_154354_b"
/** 
 * "Get the position vector. <b>{@code null} is not allowed!</b> If you are not an entity in the world
 * 
 * Parent Class: EntityMinecartCommandBlock$1
 */
m.getPositionVector = "func_174791_d"
/** 
 * Returns true if the command sender should be sent feedback about executed commands
 * 
 * Parent Class: EntityPlayer
 */
m.sendCommandFeedback = "func_174792_t_"
/** 
 * Returns the entity associated with the command sender. MAY BE NULL!
 * 
 * Parent Class: EntityMinecartCommandBlock$1
 */
m.getCommandSenderEntity = "func_174793_f"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.setCommandStat = "func_174794_a"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.setAlwaysRenderNameTag = "func_174805_g"
/** 
 * Creates a Vec3 using the pitch and yaw of the entities rotation.
 * 
 * Parent Class: Entity
 */
m.getVectorForRotation = "func_174806_f"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getCommandStats = "func_174807_aT"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.createRunningParticles = "func_174808_Z"
/** 
 * Determines if a liquid is present within the specified AxisAlignedBB.
 * 
 * Parent Class: Entity
 */
m.isLiquidPresentInAABB = "func_174809_b"
/** 
 * When set to true the entity will not play sounds.
 * 
 * Parent Class: Entity
 */
m.setSilent = "func_174810_b"
/** 
 * 
 * 
 * Parent Class: EntityHanging
 */
m.getHorizontalFacing = "func_174811_aO"
/** 
 * Called by the /kill command.
 * 
 * Parent Class: EntityArmorStand
 */
m.onKillCommand = "func_174812_G"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getEntityBoundingBox = "func_174813_aQ"
/** 
 * @return True if this entity will not play sounds
 * 
 * Parent Class: Entity
 */
m.isSilent = "func_174814_R"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.applyEnchantments = "func_174815_a"
/** 
 * 
 * 
 * Parent Class: EntityMinecartTNT
 */
m.verifyExplosion = "func_174816_a"
/** 
 * Set the CommandResultStats from the entity
 * 
 * Parent Class: Entity
 */
m.setCommandStats = "func_174817_o"
m.getNBTTagCompound = {}
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getNBTTagCompound.Entity = "func_174819_aU"
/** 
 * Gets the NBTTagCompound for the worldInfo
 * 
 * Parent Class: WorldInfo
 */
m.getNBTTagCompound.WorldInfo = "func_76066_a"

/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.replaceItemInInventory = "func_174820_d"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.setOutsideBorder = "func_174821_h"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.rayTrace = "func_174822_a"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getHoverEvent = "func_174823_aP"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getPositionEyes = "func_174824_e"
/** 
 * New version of interactWith that includes vector information on where precisely the player targeted.
 * 
 * Parent Class: EntityArmorStand
 */
m.interactAt = "func_174825_a"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.setEntityBoundingBox = "func_174826_a"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.isSpectatedByPlayer = "func_174827_a"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.moveToBlockPosAndAngles = "func_174828_a"
/** 
 * Resets the entity's position to the center (planar) and bottom (vertical) points of its bounding box.
 * 
 * Parent Class: Entity
 */
m.resetPositionToBB = "func_174829_m"
/** 
 * Attempts to create sprinting particles if the entity is sprinting and not in water.
 * 
 * Parent Class: EntityRabbit
 */
m.spawnRunningParticles = "func_174830_Y"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getDistanceSqToCenter = "func_174831_c"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.isOutsideBorder = "func_174832_aS"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getAlwaysRenderNameTag = "func_174833_aM"
/** 
 * Called when client receives entity's NBTTagCompound from server.
 * 
 * Parent Class: Entity
 */
m.clientUpdateEntityNBT = "func_174834_g"
/** 
 * 
 * 
 * Parent Class: EntityFX
 */
m.getAlpha = "func_174838_j"
/** 
 * Sets the position of the block that this particle came from. Used for calculating texture and color multiplier.
 * 
 * Parent Class: EntityDiggingFX
 */
m.setBlockPos = "func_174846_a"
m.updateBoundingBox = {}
/** 
 * Updates the entity bounding box based on current facing
 * 
 * Parent Class: EntityHanging
 */
m.updateBoundingBox.EntityHanging = "func_174856_o"
/** 
 * Calculates total bounding box based on components' bounding boxes and saves it to boundingBox
 * 
 * Parent Class: StructureStart
 */
m.updateBoundingBox.StructureStart = "func_75072_c"

/** 
 * 
 * 
 * Parent Class: EntityHanging
 */
m.getHangingPosition = "func_174857_n"
/** 
 * Updates facing and bounding box based on it
 * 
 * Parent Class: EntityLeashKnot
 */
m.updateFacingWithBoundingBox = "func_174859_a"
/** 
 * 
 * 
 * Parent Class: EntityLeashKnot
 */
m.createKnot = "func_174862_a"
/** 
 * 
 * 
 * Parent Class: EntityLeashKnot
 */
m.getKnotForPosition = "func_174863_b"
/** 
 * 
 * 
 * Parent Class: EntityItemFrame
 */
m.setDisplayedItemWithUpdate = "func_174864_a"
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.setPickupDelay = "func_174867_a"
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.setNoPickupDelay = "func_174868_q"
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.setDefaultPickupDelay = "func_174869_p"
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.setInfinitePickupDelay = "func_174871_r"
m.getAge = {}
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.getAge.EntityItem = "func_174872_o"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getAge.EntityLivingBase = "func_70654_ax"

/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.setNoDespawn = "func_174873_u"
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
m.cannotPickup = "func_174874_s"
/** 
 * 
 * 
 * Parent Class: EntityMinecartHopper
 */
m.getGuiID = "func_174875_k"
/** 
 * 
 * 
 * Parent Class: EntityMinecartHopper
 */
m.createContainer = "func_174876_a"
m.getPos = {}
/** 
 * 
 * 
 * Parent Class: TileEntity
 */
m.getPos.TileEntity = "func_174877_v"
/** 
 * 
 * 
 * Parent Class: BlockWorldState
 */
m.getPos.BlockWorldState = "func_177508_d"
/** 
 * 
 * 
 * Parent Class: S33PacketUpdateSign
 */
m.getPos.S33PacketUpdateSign = "func_179704_a"
/** 
 * 
 * 
 * Parent Class: S35PacketUpdateTileEntity
 */
m.getPos.S35PacketUpdateTileEntity = "func_179823_a"
/** 
 * 
 * 
 * Parent Class: S22PacketMultiBlockChange$BlockUpdateData
 */
m.getPos.S22PacketMultiBlockChange$BlockUpdateData = "func_180090_a"
/** 
 * Return the BlockPos of the Pattern
 * 
 * Parent Class: BlockPattern$PatternHelper
 */
m.getPos.BlockPattern$PatternHelper = "func_181117_a"

/** 
 * 
 * 
 * Parent Class: TileEntity
 */
m.setPos = "func_174878_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySign
 */
m.getStats = "func_174880_d"
m.executeCommand = {}
/** 
 * 
 * 
 * Parent Class: TileEntitySign
 */
m.executeCommand.TileEntitySign = "func_174882_b"
/** 
 * "Attempt to execute a command. This method should return the number of times that the command was executed. If the command does not exist or if the player does not have permission
 * 
 * Parent Class: ICommandManager
 */
m.executeCommand.ICommandManager = "func_71556_a"

/** 
 * 
 * 
 * Parent Class: TileEntitySkull
 */
m.updateGameprofile = "func_174884_b"
/** 
 * 
 * 
 * Parent Class: InventoryCraftResult
 */
m.setField = "func_174885_b"
/** 
 * 
 * 
 * Parent Class: InventoryCraftResult
 */
m.closeInventory = "func_174886_c"
/** 
 * 
 * 
 * Parent Class: InventoryCraftResult
 */
m.getField = "func_174887_a_"
m.clear = {}
/** 
 * 
 * 
 * Parent Class: InventoryCraftResult
 */
m.clear.InventoryCraftResult = "func_174888_l"
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.clear.VertexFormat = "func_177339_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.clear.GlStateManager = "func_179086_m"

/** 
 * 
 * 
 * Parent Class: InventoryCraftResult
 */
m.openInventory = "func_174889_b"
/** 
 * 
 * 
 * Parent Class: InventoryCraftResult
 */
m.getFieldCount = "func_174890_g"
/** 
 * 
 * 
 * Parent Class: EntityMinecartContainer
 */
m.getLockCode = "func_174891_i"
/** 
 * 
 * 
 * Parent Class: EntityMinecartContainer
 */
m.setLockCode = "func_174892_a"
m.isLocked = {}
/** 
 * 
 * 
 * Parent Class: EntityMinecartContainer
 */
m.isLocked.EntityMinecartContainer = "func_174893_q_"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneRepeater
 */
m.isLocked.BlockRedstoneRepeater = "func_176405_b"
/** 
 * 
 * 
 * Parent Class: Score
 */
m.isLocked.Score = "func_178816_g"

/** 
 * 
 * 
 * Parent Class: EntityMinecart
 */
m.getDisplayTile = "func_174897_t"
/** 
 * Get's the maximum speed for a minecart
 * 
 * Parent Class: EntityMinecartFurnace
 */
m.getMaximumSpeed = "func_174898_m"
/** 
 * 
 * 
 * Parent Class: TileEntityFurnace
 */
m.getCookTime = "func_174904_a"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon
 */
m.getBeamSegments = "func_174907_n"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon
 */
m.updateBeacon = "func_174908_m"
/** 
 * 
 * 
 * Parent Class: TileEntityChest
 */
m.getAdjacentChest = "func_174911_a"
/** 
 * 
 * 
 * Parent Class: TileEntityChest
 */
m.isChestAt = "func_174912_b"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
m.mayTransfer = "func_174914_o"
/** 
 * Pulls from the specified slot in the inventory and places in any available slot in the hopper. Returns true if the entire stack was moved
 * 
 * Parent Class: TileEntityHopper
 */
m.pullItemFromSlot = "func_174915_a"
/** 
 * Insert the specified stack to the specified inventory and return any leftover items
 * 
 * Parent Class: TileEntityHopper
 */
m.insertStack = "func_174916_c"
/** 
 * Returns false if the specified IInventory contains any items
 * 
 * Parent Class: TileEntityHopper
 */
m.isInventoryEmpty = "func_174917_b"
/** 
 * "Attempts to place the passed stack in the inventory
 * 
 * Parent Class: TileEntityHopper
 */
m.putStackInInventoryAllSlots = "func_174918_a"
/** 
 * Returns false if the inventory has any room to place items in
 * 
 * Parent Class: TileEntityHopper
 */
m.isInventoryFull = "func_174919_a"
/** 
 * Can this hopper insert the specified item from the specified slot on the specified side?
 * 
 * Parent Class: TileEntityHopper
 */
m.canInsertItemInSlot = "func_174920_a"
/** 
 * Can this hopper extract the specified item from the specified slot on the specified side?
 * 
 * Parent Class: TileEntityHopper
 */
m.canExtractItemFromSlot = "func_174921_b"
m.getHeight = {}
/** 
 * 
 * 
 * Parent Class: InventoryCrafting
 */
m.getHeight.InventoryCrafting = "func_174923_h"
/** 
 * 
 * 
 * Parent Class: GuiButtonRealmsProxy
 */
m.getHeight.GuiButtonRealmsProxy = "func_175232_g"
/** 
 * Returns maximum world height.
 * 
 * Parent Class: World
 */
m.getHeight.World = "func_72800_K"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon$BeamSegment
 */
m.getHeight.TileEntityBeacon$BeamSegment = "func_177264_c"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getHeight.Chunk = "func_177433_f"
/** 
 * 
 * 
 * Parent Class: Stitcher$Holder
 */
m.getHeight.Stitcher$Holder = "func_94199_b"

/** 
 * "Removes matching items from the inventory.
 * @param itemIn The item to match
 * 
 * Parent Class: InventoryPlayer
 */
m.clearMatchingItems = "func_174925_a"
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
m.getOffsetZ = "func_174926_d"
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
m.getPistonState = "func_174927_b"
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
m.getOffsetY = "func_174928_c"
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
m.getOffsetX = "func_174929_b"
/** 
 * 
 * 
 * Parent Class: ITextureObject
 */
m.restoreLastBlurMipmap = "func_174935_a"
/** 
 * 
 * 
 * Parent Class: ITextureObject
 */
m.setBlurMipmap = "func_174936_b"
/** 
 * 
 * 
 * Parent Class: AbstractTexture
 */
m.setBlurMipmapDirect = "func_174937_a"
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
m.registerSprite = "func_174942_a"
m.loadSprites = {}
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
m.loadSprites.TextureMap = "func_174943_a"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.loadSprites.ModelBakery = "func_177572_j"

/** 
 * 
 * 
 * Parent Class: TextureMap
 */
m.getMissingSprite = "func_174944_f"
/** 
 * 
 * 
 * Parent Class: ModelManager
 */
m.getMissingModel = "func_174951_a"
/** 
 * 
 * 
 * Parent Class: ModelManager
 */
m.getTextureMap = "func_174952_b"
/** 
 * 
 * 
 * Parent Class: ModelManager
 */
m.getModel = "func_174953_a"
m.getBlockModelShapes = {}
/** 
 * 
 * 
 * Parent Class: ModelManager
 */
m.getBlockModelShapes.ModelManager = "func_174954_c"
/** 
 * 
 * 
 * Parent Class: BlockRendererDispatcher
 */
m.getBlockModelShapes.BlockRendererDispatcher = "func_175023_a"

m.notifyLightSet = {}
/** 
 * 
 * 
 * Parent Class: WorldManager
 */
m.notifyLightSet.WorldManager = "func_174959_b"
/** 
 * 
 * 
 * Parent Class: World
 */
m.notifyLightSet.World = "func_175679_n"

m.markBlockForUpdate = {}
/** 
 * 
 * 
 * Parent Class: WorldManager
 */
m.markBlockForUpdate.WorldManager = "func_174960_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.markBlockForUpdate.World = "func_175689_h"
/** 
 * 
 * 
 * Parent Class: PlayerManager
 */
m.markBlockForUpdate.PlayerManager = "func_180244_a"

m.playRecord = {}
/** 
 * 
 * 
 * Parent Class: WorldManager
 */
m.playRecord.WorldManager = "func_174961_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.playRecord.World = "func_175717_a"

/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.getViewVector = "func_174962_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.generateStars = "func_174963_q"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.generateSky2 = "func_174964_o"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.cleanupDamagedBlocks = "func_174965_a"
/** 
 * Creates the entity outline shader to be stored in RenderGlobal.entityOutlineShader
 * 
 * Parent Class: RenderGlobal
 */
m.makeEntityOutlineShader = "func_174966_b"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.updateChunks = "func_174967_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.renderSky = "func_174976_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.postRenderDamagedBlocks = "func_174969_t"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.setupTerrain = "func_174970_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.updateDestroyBlockIcons = "func_174971_n"
m.spawnParticle = {}
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.spawnParticle.RenderGlobal = "func_174972_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.spawnParticle.World = "func_175720_a"
/** 
 * Spawns the desired particle and sends the necessary packets to the relevant connected players.
 * 
 * Parent Class: WorldServer
 */
m.spawnParticle.WorldServer = "func_180505_a"
/** 
 * 
 * 
 * Parent Class: WorldManager
 */
m.spawnParticle.WorldManager = "func_180442_a"

/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.spawnEntityFX = "func_174974_b"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.renderEntityOutlineFramebuffer = "func_174975_c"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.renderBlockLayer = "func_174982_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.getVisibleFacings = "func_174978_c"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.setDisplayListEntitiesDirty = "func_174979_m"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.generateSky = "func_174980_p"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.drawBlockDamageTexture = "func_174981_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.isPositionInRenderChunk = "func_174983_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.fixTerrainFrustum = "func_174984_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.isRenderEntityOutlines = "func_174985_d"
m.stopChunkUpdates = {}
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.stopChunkUpdates.RenderGlobal = "func_174986_e"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.stopChunkUpdates.ChunkRenderDispatcher = "func_178514_b"

/** 
 * 
 * 
 * Parent Class: BlockRendererDispatcher
 */
m.renderBlockBrightness = "func_175016_a"
/** 
 * 
 * 
 * Parent Class: BlockRendererDispatcher
 */
m.getBakedModel = "func_175017_a"
/** 
 * 
 * 
 * Parent Class: BlockRendererDispatcher
 */
m.renderBlock = "func_175018_a"
/** 
 * 
 * 
 * Parent Class: BlockRendererDispatcher
 */
m.getBlockModelRenderer = "func_175019_b"
/** 
 * 
 * 
 * Parent Class: BlockRendererDispatcher
 */
m.renderBlockDamage = "func_175020_a"
/** 
 * 
 * 
 * Parent Class: BlockRendererDispatcher
 */
m.isRenderTypeChest = "func_175021_a"
/** 
 * 
 * 
 * Parent Class: BlockRendererDispatcher
 */
m.getModelFromBlockState = "func_175022_a"
m.registerBlock = {}
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.registerBlock.RenderItem = "func_175031_a"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.registerBlock.Block = "func_176219_a"

/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.renderItemOverlays = "func_175030_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.renderQuads = "func_175032_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.renderQuad = "func_175033_a"
m.renderModel = {}
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.renderModel.RenderItem = "func_175045_a"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer
 */
m.renderModel.BlockModelRenderer = "func_178267_a"
/** 
 * Renders the model in RenderLiving
 * 
 * Parent Class: RendererLivingEntity
 */
m.renderModel.RendererLivingEntity = "func_77036_a"

/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.getItemModelMesher = "func_175037_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.putQuadNormal = "func_175038_a"
/** 
 * False when the renderer is rendering the item's effects into a GUI
 *  
 * @param isNot If the renderer is not rendering the effects in a GUI
 * 
 * Parent Class: RenderItem
 */
m.isNotRenderingEffectsInGUI = "func_175039_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.renderItemModelTransform = "func_175040_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.renderItemIntoGUI = "func_175042_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.preTransform = "func_175046_c"
m.registerItem = {}
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.registerItem.RenderItem = "func_175048_a"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.registerItem.Item = "func_179219_a"

/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.renderItemModelForEntity = "func_175049_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.shouldRenderItemIn3D = "func_175050_a"
/** 
 * Draws the specified string with a shadow.
 * 
 * Parent Class: FontRenderer
 */
m.drawStringWithShadow = "func_175063_a"
/** 
 * 
 * 
 * Parent Class: FontRenderer
 */
m.getColorCode = "func_175064_b"
m.drawString = {}
/** 
 * Draws the specified string.
 * 
 * Parent Class: FontRenderer
 */
m.drawString.FontRenderer = "func_78276_b"
/** 
 * "Renders the specified text to the screen. Args : renderer
 * 
 * Parent Class: Gui
 */
m.drawString.Gui = "func_73731_b"

/** 
 * What shader to use when spectating this entity
 * 
 * Parent Class: EntityRenderer
 */
m.loadEntityShader = "func_175066_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.renderWorldDirections = "func_175067_i"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.renderWorldPass = "func_175068_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.isDrawBlockOutline = "func_175070_n"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.switchUseShader = "func_175071_c"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.disableLightmap = "func_175072_h"
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
m.getSoundMap = "func_175085_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.handleResourcePackStatus = "func_175086_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
m.handleSpectate = "func_175088_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleWorldBorder = "func_175093_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleCamera = "func_175094_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleResourcePack = "func_175095_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handlePlayerListHeaderFooter = "func_175096_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleEntityNBT = "func_175097_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleCombatEvent = "func_175098_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleTitle = "func_175099_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleSetCompressionLevel = "func_175100_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerPlayClient
 */
m.handleServerDifficulty = "func_175101_a"
m.getPlayerInfo = {}
/** 
 * Gets the client's description information about another player on the server.
 * 
 * Parent Class: NetHandlerPlayClient
 */
m.getPlayerInfo.NetHandlerPlayClient = "func_175104_a"
/** 
 * 
 * 
 * Parent Class: AbstractClientPlayer
 */
m.getPlayerInfo.AbstractClientPlayer = "func_175155_b"

/** 
 * 
 * 
 * Parent Class: NetHandlerPlayClient
 */
m.getPlayerInfoMap = "func_175106_d"
/** 
 * 
 * 
 * Parent Class: TileEntityNote
 */
m.triggerNote = "func_175108_a"
/** 
 * Establishes all of the basic properties for the banner. This will also apply the data from the tile entities nbt tag compounds.
 * 
 * Parent Class: TileEntityBanner
 */
m.initializeBannerData = "func_175109_g"
/** 
 * Retrieves the list of colors for this tile entity. The banner data will be initialized/refreshed before this happens.
 * 
 * Parent Class: TileEntityBanner
 */
m.getColorList = "func_175110_d"
m.getBaseColor = {}
/** 
 * 
 * 
 * Parent Class: TileEntityBanner
 */
m.getBaseColor.TileEntityBanner = "func_175115_b"
/** 
 * 
 * 
 * Parent Class: ItemBanner
 */
m.getBaseColor.ItemBanner = "func_179225_h"

/** 
 * 
 * 
 * Parent Class: TileEntityBanner
 */
m.setItemValues = "func_175112_a"
/** 
 * 
 * 
 * Parent Class: TileEntityBanner
 */
m.getPatterns = "func_181021_d"
/** 
 * Retrieves the list of patterns for this tile entity. The banner data will be initialized/refreshed before this happens.
 * 
 * Parent Class: TileEntityBanner
 */
m.getPatternList = "func_175114_c"
/** 
 * 
 * 
 * Parent Class: TileEntityBanner
 */
m.getPatternResourceLocation = "func_175116_e"
/** 
 * Removes all the banner related data from a provided instance of ItemStack.
 * 
 * Parent Class: TileEntityBanner
 */
m.removeBannerData = "func_175117_e"
m.getCommandResultStats = {}
/** 
 * 
 * 
 * Parent Class: TileEntityCommandBlock
 */
m.getCommandResultStats.TileEntityCommandBlock = "func_175124_c"
/** 
 * 
 * 
 * Parent Class: CommandBlockLogic
 */
m.getCommandResultStats.CommandBlockLogic = "func_175572_n"

/** 
 * Resets the potion effect color and ambience metadata values
 * 
 * Parent Class: EntityLivingBase
 */
m.resetPotionEffectMetadata = "func_175133_bi"
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.getJumpUpwardsMotion = "func_175134_bD"
/** 
 * "Clears potion metadata values if the entity has no potion effects. Otherwise
 * 
 * Parent Class: EntityArmorStand
 */
m.updatePotionMetadata = "func_175135_B"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.markPotionsDirty = "func_175136_bO"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getXPSeed = "func_175138_ci"
/** 
 * "Whether the ""reducedDebugInfo"" option is active for this player."
 * 
 * Parent Class: EntityPlayer
 */
m.hasReducedDebug = "func_175140_cp"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.openEditSign = "func_175141_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.isAllowEdit = "func_175142_cm"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.isInBed = "func_175143_p"
/** 
 * "returns true if this is an EntityPlayerSP
 * 
 * Parent Class: EntityPlayer
 */
m.isUser = "func_175144_cb"
/** 
 * Check whether this player can open an inventory locked with the given LockCode.
 * 
 * Parent Class: EntityPlayer
 */
m.canOpen = "func_175146_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getOfflineUUID = "func_175147_b"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.isWearing = "func_175148_a"
m.isSpectator = {}
/** 
 * Returns true if the player is in spectator mode.
 * 
 * Parent Class: EntityPlayer
 */
m.isSpectator.EntityPlayer = "func_175149_v"
/** 
 * None
 * 
 * Parent Class: PlayerControllerMP
 */
m.isSpectator.PlayerControllerMP = "func_78747_a"

/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.setReducedDebug = "func_175150_k"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.canPlayerEdit = "func_175151_a"
m.getSkinType = {}
/** 
 * 
 * 
 * Parent Class: AbstractClientPlayer
 */
m.getSkinType.AbstractClientPlayer = "func_175154_l"
/** 
 * Retrieves the type of skin that a player is using. The Alex model is slim while the Steve model is default.
 * 
 * Parent Class: DefaultPlayerSkin
 */
m.getSkinType.DefaultPlayerSkin = "func_177332_b"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.getSkinType.NetworkPlayerInfo = "func_178851_f"

/** 
 * 
 * 
 * Parent Class: AbstractClientPlayer
 */
m.getFovModifier = "func_175156_o"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
m.setClientBrand = "func_175158_f"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
m.closeScreenAndDropStack = "func_175159_q"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
m.isCurrentViewEntity = "func_175160_A"
/** 
 * called every tick when the player is on foot. Performs all the things that normally happen during movement.
 * 
 * Parent Class: EntityPlayerSP
 */
m.onUpdateWalkingPlayer = "func_175161_p"
/** 
 * Returns true if the block at the given BlockPos and the block above it are NOT full cubes.
 * 
 * Parent Class: EntityPlayerSP
 */
m.isOpenBlockSpace = "func_175162_d"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
m.sendHorseInventory = "func_175163_u"
/** 
 * 
 * 
 * Parent Class: ICrafting
 */
m.sendAllWindowProperties = "func_175173_a"
m.drawTexturedModalRect = {}
/** 
 * Draws a texture rectangle using the texture currently bound to the TextureManager
 * 
 * Parent Class: Gui
 */
m.drawTexturedModalRect.Gui = "func_175175_a"
/** 
 * "Draws a textured rectangle at the stored z-value. Args: x
 * 
 * Parent Class: GuiScreenRealmsProxy
 */
m.drawTexturedModalRect.GuiScreenRealmsProxy = "func_73729_b"

/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderExpBar = "func_175176_b"
/** 
 * Set the differents times for the titles to their default values
 * 
 * Parent Class: GuiIngame
 */
m.setDefaultTitlesTimes = "func_175177_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.displayTitle = "func_175178_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderGameOverlay = "func_175180_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.getTabList = "func_175181_h"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.showCrosshair = "func_175183_b"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderHotbarItem = "func_175184_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderDemo = "func_175185_b"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderHorseJumpBar = "func_175186_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.getSpectatorGui = "func_175187_g"
/** 
 * Sets the Label to be centered
 * 
 * Parent Class: GuiLabel
 */
m.setCentered = "func_175203_a"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
m.setValidator = "func_175205_a"
/** 
 * 
 * 
 * Parent Class: GuiButton
 */
m.setWidth = "func_175211_a"
/** 
 * Builds the localized display string for this GuiListButton
 * 
 * Parent Class: GuiListButton
 */
m.buildDisplayString = "func_175213_c"
/** 
 * 
 * 
 * Parent Class: GuiSlider
 */
m.getDisplayString = "func_175221_e"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
m.isReducedDebug = "func_175236_d"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
m.renderDebugInfo = "func_175237_a"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
m.getDebugInfoRight = "func_175238_c"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
m.renderDebugInfoRight = "func_175239_b"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
m.bytesToMb = "func_175240_a"
/** 
 * 
 * 
 * Parent Class: GuiPlayerTabOverlay
 */
m.setHeader = "func_175244_b"
/** 
 * 
 * 
 * Parent Class: GuiPlayerTabOverlay
 */
m.drawPing = "func_175245_a"
m.updatePlayerList = {}
/** 
 * "Called by GuiIngame to update the information stored in the playerlist
 * 
 * Parent Class: GuiPlayerTabOverlay
 */
m.updatePlayerList.GuiPlayerTabOverlay = "func_175246_a"
/** 
 * 
 * 
 * Parent Class: EntityTrackerEntry
 */
m.updatePlayerList.EntityTrackerEntry = "func_73122_a"

/** 
 * 
 * 
 * Parent Class: GuiPlayerTabOverlay
 */
m.drawScoreboardValues = "func_175247_a"
/** 
 * 
 * 
 * Parent Class: GuiPlayerTabOverlay
 */
m.setFooter = "func_175248_a"
/** 
 * "Renders the playerlist
 * 
 * Parent Class: GuiPlayerTabOverlay
 */
m.renderPlayerlist = "func_175249_a"
m.renderSelectedItem = {}
/** 
 * 
 * 
 * Parent Class: GuiSpectator
 */
m.renderSelectedItem.GuiSpectator = "func_175263_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderSelectedItem.GuiIngame = "func_181551_a"

m.renderTooltip = {}
/** 
 * 
 * 
 * Parent Class: GuiSpectator
 */
m.renderTooltip.GuiSpectator = "func_175264_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderTooltip.GuiIngame = "func_180479_a"

/** 
 * Draws the hover event specified by the given chat component
 *  
 * @param component The IChatComponent to render
 * @param x The x position where to render
 * @param y The y position where to render
 * 
 * Parent Class: GuiScreen
 */
m.handleComponentHover = "func_175272_a"
/** 
 * Called when the GUI is resized in order to update the world and the resolution
 *  
 * @param w The width of the screen
 * @param h The height of the screen
 * 
 * Parent Class: GuiScreen
 */
m.onResize = "func_175273_b"
m.sendChatMessage = {}
/** 
 * 
 * 
 * Parent Class: GuiScreen
 */
m.sendChatMessage.GuiScreen = "func_175281_b"
/** 
 * Sends a chat message from the player. Args: chatMessage
 * 
 * Parent Class: EntityPlayerSP
 */
m.sendChatMessage.EntityPlayerSP = "func_71165_d"

/** 
 * Executes the click event specified by the given chat component
 *  
 * @param component The ChatComponent to check for click
 * 
 * Parent Class: GuiScreenBook
 */
m.handleComponentClick = "func_175276_a"
/** 
 * 
 * 
 * Parent Class: GuiScreen
 */
m.isKeyComboCtrlX = "func_175277_d"
/** 
 * 
 * 
 * Parent Class: GuiScreen
 */
m.isKeyComboCtrlA = "func_175278_g"
/** 
 * 
 * 
 * Parent Class: GuiScreen
 */
m.isKeyComboCtrlV = "func_175279_e"
/** 
 * 
 * 
 * Parent Class: GuiScreen
 */
m.isKeyComboCtrlC = "func_175280_f"
/** 
 * 
 * 
 * Parent Class: GuiScreen
 */
m.openWebLink = "func_175282_a"
/** 
 * Returns true if either alt key is down
 * 
 * Parent Class: GuiScreen
 */
m.isAltKeyDown = "func_175283_s"
/** 
 * Marks the selected resource packs list as changed to trigger a resource reload when the screen is closed
 * 
 * Parent Class: GuiScreenResourcePacks
 */
m.markChanged = "func_175288_g"
/** 
 * "Returns whether the currently-selected world type is actually acceptable for selection
 * Used to hide the ""debug"" world type unless the shift key is depressed."
 * 
 * Parent Class: GuiCreateWorld
 */
m.canSelectCurWorldType = "func_175299_g"
m.onTick = {}
/** 
 * 
 * 
 * Parent Class: GuiCustomizeWorldScreen
 */
m.onTick.GuiCustomizeWorldScreen = "func_175320_a"
/** 
 * self explanitory
 * 
 * Parent Class: ServerConfigurationManager
 */
m.onTick.ServerConfigurationManager = "func_72374_b"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.onTick.KeyBinding = "func_74507_a"

/** 
 * 
 * 
 * Parent Class: InventoryEffectRenderer
 */
m.updateActivePotionEffects = "func_175378_g"
/** 
 * 
 * 
 * Parent Class: GuiFurnace
 */
m.getCookProgressScaled = "func_175381_h"
/** 
 * 
 * 
 * Parent Class: GuiFurnace
 */
m.getBurnLeftScaled = "func_175382_i"
/** 
 * "Returns null which indicates the tab list should just display the player's name
 * 
 * Parent Class: EntityPlayerMP
 */
m.getTabListDisplayName = "func_175396_E"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.loadResourcePack = "func_175397_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.getSpectatingEntity = "func_175398_C"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.setSpectatingEntity = "func_175399_e"
/** 
 * Returns if other players can attack this player
 * 
 * Parent Class: EntityPlayerMP
 */
m.canPlayersAttack = "func_175400_cq"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.getShowArms = "func_175402_q"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.getLeftLegRotation = "func_175403_w"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.getLeftArmRotation = "func_175404_u"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setLeftArmRotation = "func_175405_c"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.damageArmorStand = "func_175406_a"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.getRightLegRotation = "func_175407_x"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.getBodyRotation = "func_175408_t"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.dropContents = "func_175409_C"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.isSmall = "func_175410_n"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.getRightArmRotation = "func_175411_v"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.playParticles = "func_175412_z"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setShowArms = "func_175413_k"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.hasNoBasePlate = "func_175414_r"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setHeadRotation = "func_175415_a"
/** 
 * Saves the pose to an NBTTagCompound.
 * 
 * Parent Class: EntityArmorStand
 */
m.writePoseToNBT = "func_175416_h"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setLeftLegRotation = "func_175417_e"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.getHeadRotation = "func_175418_s"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.readPoseFromNBT = "func_175419_y"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setSmall = "func_175420_a"
m.dropBlock = {}
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.dropBlock.EntityArmorStand = "func_175421_A"
/** 
 * 
 * 
 * Parent Class: BlockCocoa
 */
m.dropBlock.BlockCocoa = "func_176500_f"

/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.hasNoGravity = "func_175423_p"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setBodyRotation = "func_175424_b"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setNoGravity = "func_175425_j"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setNoBasePlate = "func_175426_l"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setRightLegRotation = "func_175427_f"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setRightArmRotation = "func_175428_d"
/** 
 * Tests if this entity should pickup a weapon or an armor. Entity drops current weapon or armor if the new one is better.
 * 
 * Parent Class: EntityVillager
 */
m.updateEquipmentIfNeeded = "func_175445_a"
/** 
 * Get whether this Entity's AI is disabled
 * 
 * Parent Class: EntityLiving
 */
m.isAIDisabled = "func_175446_cd"
/** 
 * Returns new PathNavigateGround instance
 * 
 * Parent Class: EntitySpider
 */
m.getNewNavigator = "func_175447_b"
/** 
 * Sets home position and max distance for it
 * 
 * Parent Class: EntityCreature
 */
m.setHomePosAndDistance = "func_175449_a"
/** 
 * 
 * 
 * Parent Class: EntityGhast
 */
m.getFireballStrength = "func_175453_cd"
/** 
 * 
 * 
 * Parent Class: EntityGhast
 */
m.setAttacking = "func_175454_a"
/** 
 * 
 * 
 * Parent Class: EntityZombie
 */
m.applyEntityAI = "func_175456_n"
m.isAngry = {}
/** 
 * 
 * 
 * Parent Class: EntityPigZombie
 */
m.isAngry.EntityPigZombie = "func_175457_ck"
/** 
 * Determines whether this wolf is angry or not.
 * 
 * Parent Class: EntityWolf
 */
m.isAngry.EntityWolf = "func_70919_bu"

/** 
 * 
 * 
 * Parent Class: EntityGuardian
 */
m.isElder = "func_175461_cl"
/** 
 * 
 * 
 * Parent Class: EntityGuardian
 */
m.setTargetedEntity = "func_175463_b"
/** 
 * Sets this Guardian to be an elder or not.
 * 
 * Parent Class: EntityGuardian
 */
m.setElder = "func_175467_a"
/** 
 * 
 * 
 * Parent Class: EntityGuardian
 */
m.getTargetedEntity = "func_175466_co"
/** 
 * Returns true if given flag is set
 * 
 * Parent Class: EntityGuardian
 */
m.isSyncedFlagSet = "func_175468_a"
/** 
 * "Sets a flag state ""on/off"" on both sides (client/server) by using DataWatcher"
 * 
 * Parent Class: EntityGuardian
 */
m.setSyncedFlag = "func_175473_a"
/** 
 * 
 * 
 * Parent Class: EntityGuardian
 */
m.hasTargetedEntity = "func_175474_cn"
/** 
 * Gets this enderman's held block state
 * 
 * Parent Class: EntityEnderman
 */
m.getHeldBlockState = "func_175489_ck"
/** 
 * Sets this enderman's held block state
 * 
 * Parent Class: EntityEnderman
 */
m.setHeldBlockState = "func_175490_a"
/** 
 * 
 * 
 * Parent Class: EntityEndermite
 */
m.isSpawnedByPlayer = "func_175495_n"
/** 
 * Sets if this mob was spawned by a player or not.
 * 
 * Parent Class: EntityEndermite
 */
m.setSpawnedByPlayer = "func_175496_a"
/** 
 * Generate the portal when the dragon dies
 * 
 * Parent Class: EntityDragon
 */
m.generatePortal = "func_175499_a"
/** 
 * "This is called when Entity's growing age timer reaches 0 (negative values are considered as a child
 * 
 * Parent Class: EntityVillager
 */
m.onGrowingAdult = "func_175500_n"
/** 
 * Decreases ItemStack size by one
 * 
 * Parent Class: EntityAnimal
 */
m.consumeItemFromStack = "func_175505_a"
/** 
 * Gets the wool color of this sheep.
 * 
 * Parent Class: EntitySheep
 */
m.getFleeceColor = "func_175509_cj"
/** 
 * "Chooses a ""vanilla"" sheep color based on the provided random."
 * 
 * Parent Class: EntitySheep
 */
m.getRandomSheepColor = "func_175510_a"
/** 
 * Attempts to mix both parent sheep to come up with a mixed dye color.
 * 
 * Parent Class: EntitySheep
 */
m.getDyeColorMixFromParents = "func_175511_a"
/** 
 * Sets the wool color of this sheep
 * 
 * Parent Class: EntitySheep
 */
m.setFleeceColor = "func_175512_b"
/** 
 * 
 * 
 * Parent Class: EntitySheep
 */
m.getDyeRgb = "func_175513_a"
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.setMovementSpeed = "func_175515_b"
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.getJumpingSound = "func_175516_ck"
m.setJumping = {}
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.setJumping.EntityRabbit = "func_175519_a"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.setJumping.EntityLivingBase = "func_70637_d"
/** 
 * 
 * 
 * Parent Class: EntityJumpHelper
 */
m.setJumping.EntityJumpHelper = "func_75660_a"

/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.setMoveType = "func_175522_a"
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.doMovementAction = "func_175524_b"
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.isRabbitBreedingItem = "func_175525_a"
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.createEatingParticles = "func_175528_cn"
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.setRabbitType = "func_175529_r"
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.updateMoveTypeDuration = "func_175530_ct"
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.getRabbitType = "func_175531_cl"
/** 
 * Returns duration of the current {@link net.minecraft.entity.passive.EntityRabbit.EnumMoveType move type}
 * 
 * Parent Class: EntityRabbit
 */
m.getMoveTypeDuration = "func_175532_cm"
/** 
 * 
 * 
 * Parent Class: EntityRabbit
 */
m.calculateRotationYaw = "func_175533_a"
/** 
 * Returns true if {@link net.minecraft.entity.passive.EntityRabbit#carrotTicks carrotTicks} has reached zero
 * 
 * Parent Class: EntityRabbit
 */
m.isCarrotEaten = "func_175534_cv"
/** 
 * 
 * 
 * Parent Class: EntityOcelot
 */
m.setupTamedAI = "func_175544_ck"
/** 
 * 
 * 
 * Parent Class: EntityWolf
 */
m.getCollarColor = "func_175546_cu"
/** 
 * 
 * 
 * Parent Class: EntityWolf
 */
m.setCollarColor = "func_175547_a"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.setIsWillingToMate = "func_175549_o"
/** 
 * Returns current or updated value of {@link #isWillingToMate}
 * 
 * Parent Class: EntityVillager
 */
m.getIsWillingToMate = "func_175550_n"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.getVillagerInventory = "func_175551_co"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.setAdditionalAItasks = "func_175552_ct"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.populateBuyingList = "func_175554_cu"
/** 
 * Used by {@link net.minecraft.entity.ai.EntityAIVillagerInteract EntityAIVillagerInteract} to check if the villager can give some items from an inventory to another villager.
 * 
 * Parent Class: EntityVillager
 */
m.canAbondonItems = "func_175555_cq"
/** 
 * "Returns true if villager has seeds
 * 
 * Parent Class: EntityVillager
 */
m.isFarmItemInInventory = "func_175556_cs"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.canVillagerPickupItem = "func_175558_a"
/** 
 * Returns true if villager has enough items in inventory
 * 
 * Parent Class: EntityVillager
 */
m.hasEnoughItems = "func_175559_s"
/** 
 * 
 * 
 * Parent Class: EntityBat
 */
m.isDateAroundHalloween = "func_175569_a"
m.getInstance = {}
/** 
 * 
 * 
 * Parent Class: RConConsoleSource
 */
m.getInstance.RConConsoleSource = "func_175570_h"
/** 
 * 
 * 
 * Parent Class: EnchantmentNameParts
 */
m.getInstance.EnchantmentNameParts = "func_178176_a"
/** 
 * 
 * 
 * Parent Class: Tessellator
 */
m.getInstance.Tessellator = "func_178181_a"
/** 
 * Return the StringTranslate singleton instance
 * 
 * Parent Class: StringTranslate
 */
m.getInstance.StringTranslate = "func_74808_a"
/** 
 * Returns the static instance of this class
 * 
 * Parent Class: CraftingManager
 */
m.getInstance.CraftingManager = "func_77594_a"
/** 
 * Initialises the ClippingHelper object then returns an instance of it.
 * 
 * Parent Class: ClippingHelperImpl
 */
m.getInstance.ClippingHelperImpl = "func_78558_a"

/** 
 * 
 * 
 * Parent Class: CommandBlockLogic
 */
m.shouldTrackOutput = "func_175571_m"
/** 
 * 
 * 
 * Parent Class: CommandBlockLogic
 */
m.setTrackOutput = "func_175573_a"
/** 
 * 
 * 
 * Parent Class: CommandBlockLogic
 */
m.tryOpenEditCommandBlock = "func_175574_a"
m.getEntityFromUuid = {}
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getEntityFromUuid.MinecraftServer = "func_175576_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.getEntityFromUuid.WorldServer = "func_175733_a"

/** 
 * "The compression treshold. If the packet is larger than the specified amount of bytes
 * 
 * Parent Class: MinecraftServer
 */
m.getNetworkCompressionTreshold = "func_175577_aI"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.isAnvilFileSet = "func_175578_N"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.isBlockProtected = "func_175579_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getMaxWorldSize = "func_175580_aG"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getResourcePackHash = "func_175581_ab"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.createNewCommandManager = "func_175582_h"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getServerThread = "func_175583_aK"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setResourcePackFromWorld = "func_175584_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setInstance = "func_175585_v"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.callFromMainThread = "func_175586_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getCurrentTime = "func_175587_aJ"
/** 
 * 
 * 
 * Parent Class: IntegratedServer
 */
m.setStaticInstance = "func_175592_a"
/** 
 * 
 * 
 * Parent Class: DedicatedServer
 */
m.getMaxTickTime = "func_175593_aQ"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.setWindowIcon = "func_175594_ao"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.initStream = "func_175595_al"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getSessionInfo = "func_175596_ai"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getItemRenderer = "func_175597_ag"
m.getRenderManager = {}
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getRenderManager.Minecraft = "func_175598_ae"
/** 
 * 
 * 
 * Parent Class: Render
 */
m.getRenderManager.Render = "func_177068_d"

/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getRenderItem = "func_175599_af"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getVersion = "func_175600_c"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.updateDisplay = "func_175601_h"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getBlockRendererDispatcher = "func_175602_ab"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.scheduleResourcesRefresh = "func_175603_A"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.checkWindowResize = "func_175604_i"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.setInitialDisplayMode = "func_175605_an"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getRenderViewEntity = "func_175606_aa"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.setRenderViewEntity = "func_175607_a"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.registerMetadataSerializers = "func_175608_ak"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.createDisplay = "func_175609_am"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getDebugFPS = "func_175610_ah"
/** 
 * "Checks to see if an air block exists at the provided location. Note that this only checks to see if the blocks material is set to air
 * 
 * Parent Class: ChunkCache
 */
m.isAirBlock = "func_175623_d"
m.getTileEntity = {}
/** 
 * 
 * 
 * Parent Class: RegionRenderCache
 */
m.getTileEntity.RegionRenderCache = "func_175625_s"
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.getTileEntity.BlockPistonMoving = "func_176422_e"
/** 
 * 
 * 
 * Parent Class: BlockFlowerPot
 */
m.getTileEntity.BlockFlowerPot = "func_176442_d"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getTileEntity.Chunk = "func_177424_a"
/** 
 * 
 * 
 * Parent Class: BlockWorldState
 */
m.getTileEntity.BlockWorldState = "func_177507_b"

/** 
 * 
 * 
 * Parent Class: RegionRenderCache
 */
m.getCombinedLight = "func_175626_b"
m.getStrongPower = {}
/** 
 * 
 * 
 * Parent Class: ChunkCache
 */
m.getStrongPower.ChunkCache = "func_175627_a"
/** 
 * "Returns the single highest strong power out of all directions using getStrongPower(BlockPos
 * 
 * Parent Class: World
 */
m.getStrongPower.World = "func_175676_y"
/** 
 * 
 * 
 * Parent Class: BlockTripWireHook
 */
m.getStrongPower.BlockTripWireHook = "func_176211_b"

m.getLightFor = {}
/** 
 * 
 * 
 * Parent Class: ChunkCache
 */
m.getLightFor.ChunkCache = "func_175628_b"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getLightFor.World = "func_175642_b"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getLightFor.Chunk = "func_177413_a"

/** 
 * 
 * 
 * Parent Class: ChunkCache
 */
m.getLightForExt = "func_175629_a"
/** 
 * 
 * 
 * Parent Class: RegionRenderCache
 */
m.getPositionIndex = "func_175630_e"
/** 
 * 
 * 
 * Parent Class: RegionRenderCache
 */
m.getBlockStateRaw = "func_175631_c"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isAnyPlayerWithinRangeAt = "func_175636_b"
/** 
 * 
 * 
 * Parent Class: World
 */
m.forceBlockUpdateTick = "func_175637_a"
/** 
 * gets the light level at the supplied position
 * 
 * Parent Class: World
 */
m.getRawLight = "func_175638_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isAreaLoaded = "func_175711_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isBlockPowered = "func_175640_z"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.addBlockEvent = "func_175641_c"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getEntities = "func_175644_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.markChunkDirty = "func_175646_b"
/** 
 * "Returns all entities of the specified class type which intersect with the AABB. Args: entityClass
 * 
 * Parent Class: World
 */
m.getEntitiesWithinAABB = "func_72872_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getDifficultyForLocation = "func_175649_E"
/** 
 * 
 * 
 * Parent Class: World
 */
m.loadEntities = "func_175650_b"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getRedstonePower = "func_175651_c"
m.setSpawnPoint = {}
/** 
 * 
 * 
 * Parent Class: World
 */
m.setSpawnPoint.World = "func_175652_B"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.setSpawnPoint.EntityPlayer = "func_180473_a"

m.setLightFor = {}
/** 
 * 
 * 
 * Parent Class: World
 */
m.setLightFor.World = "func_175653_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setLightFor.Chunk = "func_177431_a"

/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.updateBlockTick = "func_175654_a"
/** 
 * "Sets a block to air
 * 
 * Parent Class: World
 */
m.destroyBlock = "func_175655_b"
m.setBlockState = {}
/** 
 * "Sets the block state at a given location. Flag 1 will cause a block update. Flag 2 will send the change to clients (you almost always want this). Flag 4 prevents the block from being re-rendered
 * 
 * Parent Class: World
 */
m.setBlockState.World = "func_180501_a"
/** 
 * 
 * 
 * Parent Class: StructureVillagePieces$Village
 */
m.setBlockState.StructureVillagePieces$Village = "func_175811_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setBlockState.Chunk = "func_177436_a"
/** 
 * 
 * 
 * Parent Class: ChunkPrimer
 */
m.setBlockState.ChunkPrimer = "func_177857_a"

/** 
 * 
 * 
 * Parent Class: World
 */
m.getSkylightSubtracted = "func_175657_ab"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getLastLightningBolt = "func_175658_ac"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.isBlockModifiable = "func_175660_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.canBlockFreezeNoWater = "func_175662_w"
/** 
 * 
 * 
 * Parent Class: World
 */
m.checkLight = "func_175664_x"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isBlockFullCube = "func_175665_u"
/** 
 * 
 * 
 * Parent Class: World
 */
m.updateComparatorOutputLevel = "func_175666_e"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isBlockLoaded = "func_175668_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.playBroadcastSound = "func_175669_a"
/** 
 * Checks to see if a given block is both water and cold enough to freeze.
 * 
 * Parent Class: World
 */
m.canBlockFreeze = "func_175670_e"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getLightFromNeighbors = "func_175671_l"
/** 
 * "Finds the highest block on the x and z coordinate that is solid or liquid
 * 
 * Parent Class: World
 */
m.getTopSolidOrLiquidBlock = "func_175672_r"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isInsideBorder = "func_175673_a"
/** 
 * "Gets all entities within the specified AABB excluding the one passed into it. Args: entityToExclude
 * 
 * Parent Class: World
 */
m.getEntitiesInAABBexcluding = "func_175674_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.canBlockFreezeWater = "func_175675_v"
m.canSeeSky = {}
/** 
 * 
 * 
 * Parent Class: World
 */
m.canSeeSky.World = "func_175678_i"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.canSeeSky.Chunk = "func_177444_d"

/** 
 * 
 * 
 * Parent Class: World
 */
m.isChunkLoaded = "func_175680_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.unloadEntities = "func_175681_c"
/** 
 * 
 * 
 * Parent Class: World
 */
m.doesBlockHaveSolidTopSurface = "func_175683_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.scheduleUpdate = "func_175684_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.notifyNeighborsOfStateChange = "func_175685_c"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isFindingSpawnPoint = "func_175686_ad"
/** 
 * Checks if the specified block or its neighbors are powered by a neighboring block. Used by blocks like TNT and Doors.
 * 
 * Parent Class: World
 */
m.isBlockIndirectlyGettingPowered = "func_175687_A"
/** 
 * 
 * 
 * Parent Class: World
 */
m.setTileEntity = "func_175690_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.isBlockTickPending = "func_175691_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.setSkylightSubtracted = "func_175692_b"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getMapStorage = "func_175693_T"
/** 
 * Gets the spawn point in the world
 * 
 * Parent Class: World
 */
m.getSpawnPoint = "func_175694_M"
/** 
 * 
 * 
 * Parent Class: World
 */
m.notifyNeighborsOfStateExcept = "func_175695_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isWater = "func_175696_F"
/** 
 * 
 * 
 * Parent Class: World
 */
m.setBlockToAir = "func_175698_g"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getLight = "func_175721_c"
/** 
 * Check if the given BlockPos has valid coordinates
 * 
 * Parent Class: World
 */
m.isValid = "func_175701_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.setLastLightningBolt = "func_175702_c"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getGroundAboveSeaLevel = "func_175703_c"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getLightFromNeighborsFor = "func_175705_a"
/** 
 * Checks to see if a given block can accumulate snow from it snowing
 * 
 * Parent Class: World
 */
m.canSnowAt = "func_175708_f"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isSidePowered = "func_175709_b"
/** 
 * 
 * 
 * Parent Class: World
 */
m.canBlockSeeSky = "func_175710_j"
m.removeTileEntity = {}
/** 
 * 
 * 
 * Parent Class: World
 */
m.removeTileEntity.World = "func_175713_t"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.removeTileEntity.Chunk = "func_177425_e"

/** 
 * 
 * 
 * Parent Class: World
 */
m.getVillageCollection = "func_175714_ae"
m.sendBlockBreakProgress = {}
/** 
 * 
 * 
 * Parent Class: World
 */
m.sendBlockBreakProgress.World = "func_175715_c"
/** 
 * 
 * 
 * Parent Class: WorldManager
 */
m.sendBlockBreakProgress.WorldManager = "func_180441_b"

/** 
 * 
 * 
 * Parent Class: World
 */
m.canBlockBePlaced = "func_175716_a"
m.playAuxSFX = {}
/** 
 * 
 * 
 * Parent Class: World
 */
m.playAuxSFX.World = "func_175718_b"
/** 
 * 
 * 
 * Parent Class: WorldManager
 */
m.playAuxSFX.WorldManager = "func_180439_a"

/** 
 * Attempts to extinguish a fire
 * 
 * Parent Class: World
 */
m.extinguishFire = "func_175719_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.notifyNeighborsRespectDebug = "func_175722_b"
m.getWorldBorder = {}
/** 
 * 
 * 
 * Parent Class: World
 */
m.getWorldBorder.World = "func_175723_af"
/** 
 * 
 * 
 * Parent Class: CommandWorldBorder
 */
m.getWorldBorder.CommandWorldBorder = "func_175772_d"
/** 
 * 
 * 
 * Parent Class: WorldProviderHell
 */
m.getWorldBorder.WorldProviderHell = "func_177501_r"

/** 
 * 
 * 
 * Parent Class: World
 */
m.getLightBrightness = "func_175724_o"
m.getPrecipitationHeight = {}
/** 
 * 
 * 
 * Parent Class: World
 */
m.getPrecipitationHeight.World = "func_175725_q"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getPrecipitationHeight.Chunk = "func_177440_h"

/** 
 * 
 * 
 * Parent Class: World
 */
m.getChunkFromBlockCoords = "func_175726_f"
/** 
 * Check if precipitation is currently happening at a position
 * 
 * Parent Class: World
 */
m.isRainingAt = "func_175727_C"
/** 
 * Plays a sound at the specified position.
 *  
 * @param pos The position where to play the sound
 * @param soundName The name of the sound to play
 * @param volume The volume of the sound
 * @param pitch The pitch of the sound
 * @param distanceDelay True if the sound is delayed over distance
 * 
 * Parent Class: WorldClient
 */
m.playSoundAtPos = "func_175731_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.canCreatureTypeSpawnHere = "func_175732_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.getSpawnListEntryForTypeAt = "func_175734_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.canSpawnAnimals = "func_175735_ai"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.adjustPosToNearbyEntity = "func_175736_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.setDebugWorldSettings = "func_175737_aj"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.canSpawnNPCs = "func_175738_ah"
m.getColorIndex = {}
/** 
 * Returns the numerical color index that represents this formatting
 * 
 * Parent Class: EnumChatFormatting
 */
m.getColorIndex.EnumChatFormatting = "func_175746_b"
/** 
 * Takes in the pass the call list is being requested for. Args: renderPass
 * 
 * Parent Class: WorldRenderer
 */
m.getColorIndex.WorldRenderer = "func_78909_a"

/** 
 * 
 * 
 * Parent Class: CrashReportCategory
 */
m.addBlockInfo = "func_180523_a"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.parseInt = "func_180528_a"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.parseDouble = "func_180526_a"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.parseBlockPos = "func_175757_a"
/** 
 * "Attempts to retrieve an entity's name
 * 
 * Parent Class: CommandBase
 */
m.getEntityName = "func_175758_e"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.parseLong = "func_175766_b"
/** 
 * Returns a List of strings (chosen from the given strings) which the last word in the given string array is a beginning-match for. (Tab completion).
 * 
 * Parent Class: CommandBase
 */
m.getListOfStringsMatchingLastWord = "func_71530_a"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.parseCoordinate = "func_175770_a"
/** 
 * 
 * 
 * Parent Class: CommandReplaceItem
 */
m.getSlotForShortcut = "func_175783_e"
/** 
 * 
 * 
 * Parent Class: CommandHandler
 */
m.tryExecute = "func_175786_a"
m.generate = {}
/** 
 * 
 * 
 * Parent Class: MapGenBase
 */
m.generate.MapGenBase = "func_175792_a"
/** 
 * 
 * 
 * Parent Class: WorldGenWaterlily
 */
m.generate.WorldGenWaterlily = "func_180709_b"

m.generateStructure = {}
/** 
 * 
 * 
 * Parent Class: MapGenStructure
 */
m.generateStructure.MapGenStructure = "func_175794_a"
/** 
 * Keeps iterating Structure Pieces and spawning them until the checks tell it to stop
 * 
 * Parent Class: StructureStart
 */
m.generateStructure.StructureStart = "func_75068_a"

/** 
 * 
 * 
 * Parent Class: MapGenStructure
 */
m.isPositionInStructure = "func_175796_a"
m.getScatteredFeatureSpawnList = {}
/** 
 * Gets the scattered feature spawn list
 * 
 * Parent Class: StructureOceanMonument
 */
m.getScatteredFeatureSpawnList.StructureOceanMonument = "func_175799_b"
/** 
 * returns possible spawns for scattered features
 * 
 * Parent Class: MapGenScatteredFeature
 */
m.getScatteredFeatureSpawnList.MapGenScatteredFeature = "func_82667_a"

/** 
 * Fill the given area with the selected blocks
 * 
 * Parent Class: StructureVillagePieces$Village
 */
m.fillWithBlocks = "func_175804_a"
m.generateDispenserContents = {}
/** 
 * 
 * 
 * Parent Class: StructureComponent
 */
m.generateDispenserContents.StructureComponent = "func_175806_a"
/** 
 * 
 * 
 * Parent Class: WeightedRandomChestContent
 */
m.generateDispenserContents.WeightedRandomChestContent = "func_177631_a"

/** 
 * 
 * 
 * Parent Class: StructureComponent
 */
m.getBlockStateFromPos = "func_175807_a"
/** 
 * Replaces air and liquid from given position downwards. Stops when hitting anything else than air or liquid
 * 
 * Parent Class: StructureVillagePieces$Village
 */
m.replaceAirAndLiquidDownwards = "func_175808_b"
/** 
 * 
 * 
 * Parent Class: StructureComponent
 */
m.randomlyPlaceBlock = "func_175809_a"
/** 
 * Places door on given position
 * 
 * Parent Class: StructureComponent
 */
m.placeDoorCurrentPosition = "func_175810_a"
/** 
 * Create a bounding box with the specified dimensions and rotate it. Used to project a possible new component Bounding Box - to check if it would cut anything already spawned
 * 
 * Parent Class: StructureBoundingBox
 */
m.getComponentToAddBoundingBox = "func_175897_a"
m.isVecInside = {}
/** 
 * Checks if given Vec3i is inside of StructureBoundingBox
 * 
 * Parent Class: StructureBoundingBox
 */
m.isVecInside.StructureBoundingBox = "func_175898_b"
/** 
 * Returns if the supplied Vec3D is completely inside the bounding box
 * 
 * Parent Class: AxisAlignedBB
 */
m.isVecInside.AxisAlignedBB = "func_72318_a"

/** 
 * 
 * 
 * Parent Class: FlatLayerInfo
 */
m.getLayerMaterial = "func_175900_c"
/** 
 * 
 * 
 * Parent Class: WorldGenerator
 */
m.setBlockAndNotifyAdequately = "func_175903_a"
/** 
 * 
 * 
 * Parent Class: WorldGenFlowers
 */
m.setGeneratedBlock = "func_175914_a"
/** 
 * Returns the absolute greatest distance in the BlockPos object.
 * 
 * Parent Class: WorldGenBigTree
 */
m.getGreatestDistance = "func_175935_b"
/** 
 * "Checks a line of blocks in the world from the first coordinate to triplet to the second
 * 
 * Parent Class: WorldGenBigTree
 */
m.checkBlockLine = "func_175936_a"
/** 
 * Generates additional wood blocks to fill out the bases of different leaf nodes that would otherwise degrade.
 * 
 * Parent Class: WorldGenBigTree
 */
m.generateLeafNodeBases = "func_175939_d"
/** 
 * Generates the leaves surrounding an individual entry in the leafNodes list.
 * 
 * Parent Class: WorldGenBigTree
 */
m.generateLeafNode = "func_175940_a"
/** 
 * Generates the leaf portion of the tree as specified by the leafNodes list.
 * 
 * Parent Class: WorldGenBigTree
 */
m.generateLeaves = "func_175941_b"
/** 
 * Places the trunk for the big tree that is being generated. Able to generate double-sized trunks by changing a field that is always 1 to 2.
 * 
 * Parent Class: WorldGenBigTree
 */
m.generateTrunk = "func_175942_c"
/** 
 * 
 * 
 * Parent Class: StructureOceanMonumentPieces
 */
m.registerOceanMonumentPieces = "func_175970_a"
/** 
 * 
 * 
 * Parent Class: MapData
 */
m.getMapPacket = "func_176052_a"
m.updateMapData = {}
/** 
 * 
 * 
 * Parent Class: MapData
 */
m.updateMapData.MapData = "func_176053_a"
/** 
 * 
 * 
 * Parent Class: ItemMap
 */
m.updateMapData.ItemMap = "func_77872_a"

/** 
 * 
 * 
 * Parent Class: MapData
 */
m.calculateMapCenter = "func_176054_a"
/** 
 * "returns the VillageDoorInfo if it exists in any village or in the newDoor list
 * 
 * Parent Class: VillageCollection
 */
m.checkDoorExistence = "func_176055_c"
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.getNearestVillage = "func_176056_a"
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.positionInList = "func_176057_e"
m.isWoodDoor = {}
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.isWoodDoor.VillageCollection = "func_176058_f"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.isWoodDoor.Village = "func_179860_f"

/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.addToNewDoorsList = "func_176059_d"
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.addToVillagerPositionList = "func_176060_a"
/** 
 * Check five blocks in the direction. The centerPos will not be checked.
 * 
 * Parent Class: VillageCollection
 */
m.countBlocksCanSeeSky = "func_176061_a"
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.fileNameForProvider = "func_176062_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glBufferData = "func_176071_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glBindBuffer = "func_176072_g"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glGenBuffers = "func_176073_e"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.glDeleteBuffers = "func_176074_g"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.useVbo = "func_176075_f"
m.getPacket = {}
/** 
 * 
 * 
 * Parent Class: MapData$MapInfo
 */
m.getPacket.MapData$MapInfo = "func_176101_a"
/** 
 * 
 * 
 * Parent Class: EnumConnectionState
 */
m.getPacket.EnumConnectionState = "func_179244_a"

m.update = {}
/** 
 * 
 * 
 * Parent Class: MapData$MapInfo
 */
m.update.MapData$MapInfo = "func_176102_a"
/** 
 * "Like the old updateEntity()
 * 
 * Parent Class: NetHandlerLoginServer
 */
m.update.NetHandlerLoginServer = "func_73660_a"

/** 
 * Sets the border lerp target
 * 
 * Parent Class: WorldInfo
 */
m.setBorderLerpTarget = "func_176118_b"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.setHardcore = "func_176119_g"
/** 
 * Sets the border center X position
 * 
 * Parent Class: WorldInfo
 */
m.getBorderCenterX = "func_176124_d"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.setAllowCommands = "func_176121_c"
/** 
 * Sets the border warning distance
 * 
 * Parent Class: WorldInfo
 */
m.setBorderWarningDistance = "func_176122_j"
m.isDifficultyLocked = {}
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.isDifficultyLocked.WorldInfo = "func_176123_z"
/** 
 * 
 * 
 * Parent Class: S41PacketServerDifficulty
 */
m.isDifficultyLocked.S41PacketServerDifficulty = "func_179830_a"

/** 
 * Sets the border damage per block
 * 
 * Parent Class: WorldInfo
 */
m.setBorderDamagePerBlock = "func_176125_f"
/** 
 * Sets the border center Z position
 * 
 * Parent Class: WorldInfo
 */
m.getBorderCenterZ = "func_176141_c"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.populateFromWorldSettings = "func_176127_a"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.setMapFeaturesEnabled = "func_176128_f"
/** 
 * Sets the border safe zone
 * 
 * Parent Class: WorldInfo
 */
m.setBorderSafeZone = "func_176129_e"
/** 
 * Returns the border warning distance
 * 
 * Parent Class: WorldInfo
 */
m.getBorderWarningDistance = "func_176131_J"
/** 
 * Returns the border lerp target
 * 
 * Parent Class: WorldInfo
 */
m.getBorderLerpTarget = "func_176132_G"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.getCleanWeatherTime = "func_176133_A"
/** 
 * Returns the border lerp time
 * 
 * Parent Class: WorldInfo
 */
m.getBorderLerpTime = "func_176134_F"
/** 
 * Sets the border lerp time
 * 
 * Parent Class: WorldInfo
 */
m.setBorderLerpTime = "func_176135_e"
/** 
 * Sets the border warning time
 * 
 * Parent Class: WorldInfo
 */
m.setBorderWarningTime = "func_176136_k"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.getBorderSize = "func_176137_E"
/** 
 * Returns the border safe zone
 * 
 * Parent Class: WorldInfo
 */
m.getBorderSafeZone = "func_176138_H"
/** 
 * Returns the border warning time
 * 
 * Parent Class: WorldInfo
 */
m.getBorderWarningTime = "func_176139_K"
/** 
 * Returns the border damage per block
 * 
 * Parent Class: WorldInfo
 */
m.getBorderDamagePerBlock = "func_176140_I"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.setCleanWeatherTime = "func_176142_i"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.setSpawn = "func_176143_a"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.setDifficulty = "func_176144_a"
/** 
 * Sets the border size
 * 
 * Parent Class: WorldInfo
 */
m.setBorderSize = "func_176145_a"
/** 
 * Returns a mapped point or creates and adds one
 * 
 * Parent Class: NodeProcessor
 */
m.openPoint = "func_176159_a"
/** 
 * Returns PathPoint for given coordinates
 * 
 * Parent Class: WalkNodeProcessor
 */
m.getPathPointToCoords = "func_176160_a"
/** 
 * Returns given entity's position as PathPoint
 * 
 * Parent Class: WalkNodeProcessor
 */
m.getPathPointTo = "func_176161_a"
/** 
 * 
 * 
 * Parent Class: WalkNodeProcessor
 */
m.initProcessor = "func_176162_a"
/** 
 * This method is called when all nodes have been processed and PathEntity is created.
 *  {@link net.minecraft.world.pathfinder.WalkNodeProcessor WalkNodeProcessor} uses this to change its field {@link net.minecraft.world.pathfinder.WalkNodeProcessor#avoidsWater avoidsWater}
 * 
 * Parent Class: WalkNodeProcessor
 */
m.postProcess = "func_176163_a"
/** 
 * 
 * 
 * Parent Class: WalkNodeProcessor
 */
m.findPathOptions = "func_176164_a"
m.getSafePoint = {}
/** 
 * Returns a point that the entity can safely move to
 * 
 * Parent Class: WalkNodeProcessor
 */
m.getSafePoint.WalkNodeProcessor = "func_176171_a"
/** 
 * Returns a point that the entity can safely move to
 * 
 * Parent Class: SwimNodeProcessor
 */
m.getSafePoint.SwimNodeProcessor = "func_176185_a"

m.setBreakDoors = {}
/** 
 * 
 * 
 * Parent Class: WalkNodeProcessor
 */
m.setBreakDoors.WalkNodeProcessor = "func_176172_b"
/** 
 * 
 * 
 * Parent Class: PathNavigateGround
 */
m.setBreakDoors.PathNavigateGround = "func_179688_b"

m.getAvoidsWater = {}
/** 
 * 
 * 
 * Parent Class: WalkNodeProcessor
 */
m.getAvoidsWater.WalkNodeProcessor = "func_176173_e"
/** 
 * 
 * 
 * Parent Class: PathNavigateGround
 */
m.getAvoidsWater.PathNavigateGround = "func_179689_e"

m.getCanSwim = {}
/** 
 * 
 * 
 * Parent Class: WalkNodeProcessor
 */
m.getCanSwim.WalkNodeProcessor = "func_176174_d"
/** 
 * 
 * 
 * Parent Class: PathNavigateGround
 */
m.getCanSwim.PathNavigateGround = "func_179684_h"

m.setEnterDoors = {}
/** 
 * 
 * 
 * Parent Class: WalkNodeProcessor
 */
m.setEnterDoors.WalkNodeProcessor = "func_176175_a"
/** 
 * 
 * 
 * Parent Class: PathNavigateGround
 */
m.setEnterDoors.PathNavigateGround = "func_179691_c"

m.setAvoidsWater = {}
/** 
 * 
 * 
 * Parent Class: WalkNodeProcessor
 */
m.setAvoidsWater.WalkNodeProcessor = "func_176176_c"
/** 
 * 
 * 
 * Parent Class: PathNavigateGround
 */
m.setAvoidsWater.PathNavigateGround = "func_179690_a"

/** 
 * "Checks if an entity collides with blocks at a position.
 * Returns 1 if clear
 * 
 * Parent Class: WalkNodeProcessor
 */
m.getVerticalOffset = "func_176177_a"
m.setCanSwim = {}
/** 
 * 
 * 
 * Parent Class: WalkNodeProcessor
 */
m.setCanSwim.WalkNodeProcessor = "func_176178_d"
/** 
 * 
 * 
 * Parent Class: PathNavigateGround
 */
m.setCanSwim.PathNavigateGround = "func_179693_d"

m.getEnterDoors = {}
/** 
 * 
 * 
 * Parent Class: WalkNodeProcessor
 */
m.getEnterDoors.WalkNodeProcessor = "func_176179_b"
/** 
 * 
 * 
 * Parent Class: PathNavigateGround
 */
m.getEnterDoors.PathNavigateGround = "func_179686_g"

/** 
 * Adds a path from start to end and returns the whole path
 * 
 * Parent Class: PathFinder
 */
m.addToPath = "func_176187_a"
/** 
 * Creates a path from an entity to a specified location within a minimum distance
 * 
 * Parent Class: PathFinder
 */
m.createEntityPathTo = "func_180782_a"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.canReplace = "func_176193_a"
m.getBlockState = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
m.getBlockState.Block = "func_176194_O"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getBlockState.Chunk = "func_177435_g"
/** 
 * 
 * 
 * Parent Class: BlockWorldState
 */
m.getBlockState.BlockWorldState = "func_177509_a"
/** 
 * 
 * 
 * Parent Class: ChunkPrimer
 */
m.getBlockState.ChunkPrimer = "func_177858_a"
/** 
 * 
 * 
 * Parent Class: S22PacketMultiBlockChange$BlockUpdateData
 */
m.getBlockState.S22PacketMultiBlockChange$BlockUpdateData = "func_180088_c"
/** 
 * 
 * 
 * Parent Class: BlockRailBase$Rail
 */
m.getBlockState.BlockRailBase$Rail = "func_180362_b"
/** 
 * 
 * 
 * Parent Class: RegionRenderCache
 */
m.getBlockState.RegionRenderCache = "func_180495_p"
/** 
 * 
 * 
 * Parent Class: S23PacketBlockChange
 */
m.getBlockState.S23PacketBlockChange = "func_180728_a"
/** 
 * 
 * 
 * Parent Class: StructureComponent$BlockSelector
 */
m.getBlockState.StructureComponent$BlockSelector = "func_180780_a"

/** 
 * 
 * 
 * Parent Class: Block
 */
m.getBlockHardness = "func_176195_g"
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.canPlaceBlockAt = "func_176196_c"
/** 
 * 
 * 
 * Parent Class: BlockStairs
 */
m.modifyAcceleration = "func_176197_a"
m.canPlaceBlockOnSide = {}
/** 
 * Check whether this Block can be placed on the given side
 * 
 * Parent Class: BlockPistonMoving
 */
m.canPlaceBlockOnSide.BlockPistonMoving = "func_176198_a"
/** 
 * 
 * 
 * Parent Class: ItemBlock
 */
m.canPlaceBlockOnSide.ItemBlock = "func_179222_a"

m.onEntityCollidedWithBlock = {}
/** 
 * Triggered whenever an entity collides with this block (enters into the block)
 * 
 * Parent Class: BlockStairs
 */
m.onEntityCollidedWithBlock.BlockStairs = "func_176199_a"
/** 
 * Called When an Entity Collided with the Block
 * 
 * Parent Class: BlockWeb
 */
m.onEntityCollidedWithBlock.BlockWeb = "func_180634_a"

m.isReplaceable = {}
/** 
 * Whether this Block can be replaced directly by other blocks (true for e.g. tall grass)
 * 
 * Parent Class: BlockVine
 */
m.isReplaceable.BlockVine = "func_176200_f"
/** 
 * "Returns whether the material can be replaced by other blocks when placed - eg snow
 * 
 * Parent Class: Material
 */
m.isReplaceable.Material = "func_76222_j"

/** 
 * Convert the BlockState into the correct metadata value
 * 
 * Parent Class: BlockPistonMoving
 */
m.getMetaFromState = "func_176201_c"
m.colorMultiplier = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
m.colorMultiplier.Block = "func_176202_d"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneWire
 */
m.colorMultiplier.BlockRedstoneWire = "func_176337_b"
/** 
 * 
 * 
 * Parent Class: BlockLilyPad
 */
m.colorMultiplier.BlockLilyPad = "func_180662_a"

/** 
 * Convert the given metadata into a BlockState for this Block
 * 
 * Parent Class: BlockPistonMoving
 */
m.getStateFromMeta = "func_176203_a"
/** 
 * Called when a neighboring block changes.
 * 
 * Parent Class: BlockPistonMoving
 */
m.onNeighborBlockChange = "func_176204_a"
/** 
 * 
 * 
 * Parent Class: BlockWall
 */
m.isPassable = "func_176205_b"
/** 
 * Called when a player destroys this Block
 * 
 * Parent Class: BlockPistonMoving
 */
m.onBlockDestroyedByPlayer = "func_176206_d"
/** 
 * 
 * 
 * Parent Class: BlockStairs
 */
m.getMixedBrightnessForBlock = "func_176207_c"
/** 
 * 
 * 
 * Parent Class: BlockPistonExtension
 */
m.onBlockHarvested = "func_176208_a"
/** 
 * 
 * 
 * Parent Class: BlockStairs
 */
m.canCollideCheck = "func_176209_a"
/** 
 * "Get a unique ID for the given BlockState
 * 
 * Parent Class: Block
 */
m.getStateId = "func_176210_f"
/** 
 * Whether this Block is solid on the given Side
 * 
 * Parent Class: BlockLiquid
 */
m.isBlockSolid = "func_176212_b"
/** 
 * 
 * 
 * Parent Class: BlockPistonBase
 */
m.onBlockAdded = "func_176213_c"
/** 
 * 
 * 
 * Parent Class: BlockLeaves
 */
m.isVisuallyOpaque = "func_176214_u"
/** 
 * Called when an Entity lands on this Block. This method *must* update motionY because the entity will not do that on its own
 * 
 * Parent Class: BlockSlime
 */
m.onLanded = "func_176216_a"
/** 
 * "Possibly modify the given BlockState before rendering it on an Entity (Minecarts
 * 
 * Parent Class: BlockPistonBase
 */
m.getStateForEntityRender = "func_176217_b"
/** 
 * Get the OffsetType for this Block. Determines if the model is rendered slightly offset.
 * 
 * Parent Class: BlockTallGrass
 */
m.getOffsetType = "func_176218_Q"
/** 
 * Get a BlockState by it's ID (see getStateId)
 * 
 * Parent Class: Block
 */
m.getStateById = "func_176220_d"
/** 
 * "Get the actual Block state of this Block at the given position. This applies properties not visible in the metadata
 * 
 * Parent Class: BlockWall
 */
m.getActualState = "func_176221_a"
/** 
 * Gets the meta to use for the Pick Block ItemStack result
 * 
 * Parent Class: BlockTallGrass
 */
m.getDamageValue = "func_176222_j"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.getDefaultState = "func_176223_P"
/** 
 * "Called similar to random ticks
 * 
 * Parent Class: BlockCauldron
 */
m.fillWithRain = "func_176224_k"
/** 
 * 
 * 
 * Parent Class: BlockPistonExtension
 */
m.shouldSideBeRendered = "func_176225_a"
/** 
 * Spawn this Block's drops into the World as EntityItems
 * 
 * Parent Class: Block
 */
m.dropBlockAsItem = "func_176226_b"
/** 
 * 
 * 
 * Parent Class: BlockOldLeaf
 */
m.getSaplingDropChance = "func_176232_d"
/** 
 * 
 * 
 * Parent Class: BlockOldLeaf
 */
m.getWoodType = "func_176233_b"
/** 
 * 
 * 
 * Parent Class: BlockOldLeaf
 */
m.dropApple = "func_176234_a"
/** 
 * 
 * 
 * Parent Class: BlockLeaves
 */
m.destroy = "func_176235_d"
m.canConnectTo = {}
/** 
 * 
 * 
 * Parent Class: BlockWall
 */
m.canConnectTo.BlockWall = "func_176253_e"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneWire
 */
m.canConnectTo.BlockRedstoneWire = "func_176343_a"
/** 
 * 
 * 
 * Parent Class: BlockFence
 */
m.canConnectTo.BlockFence = "func_176524_e"

m.checkForDrop = {}
/** 
 * 
 * 
 * Parent Class: BlockTripWireHook
 */
m.checkForDrop.BlockTripWireHook = "func_176261_e"
/** 
 * 
 * 
 * Parent Class: BlockCarpet
 */
m.checkForDrop.BlockCarpet = "func_176328_e"
/** 
 * 
 * 
 * Parent Class: BlockReed
 */
m.checkForDrop.BlockReed = "func_176353_e"
/** 
 * 
 * 
 * Parent Class: BlockButton
 */
m.checkForDrop.BlockButton = "func_176583_e"
/** 
 * 
 * 
 * Parent Class: BlockTorch
 */
m.checkForDrop.BlockTorch = "func_176593_f"

/** 
 * 
 * 
 * Parent Class: BlockVine
 */
m.getPropertyFor = "func_176267_a"
/** 
 * 
 * 
 * Parent Class: BlockVine
 */
m.getNumGrownFaces = "func_176268_d"
/** 
 * 
 * 
 * Parent Class: BlockVine
 */
m.recheckGrownSides = "func_176269_e"
/** 
 * 
 * 
 * Parent Class: BlockTrapDoor
 */
m.getMetaForFacing = "func_176282_a"
/** 
 * 
 * 
 * Parent Class: BlockTripWire
 */
m.notifyHook = "func_176286_e"
/** 
 * 
 * 
 * Parent Class: BlockTripWire
 */
m.isConnectedTo = "func_176287_c"
m.updateState = {}
/** 
 * 
 * 
 * Parent Class: BlockTripWire
 */
m.updateState.BlockTripWire = "func_176288_d"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.updateState.BlockRedstoneDiode = "func_176398_g"
/** 
 * 
 * 
 * Parent Class: BlockHopper
 */
m.updateState.BlockHopper = "func_176427_e"
/** 
 * Updates the pressure plate when stepped on
 * 
 * Parent Class: BlockBasePressurePlate
 */
m.updateState.BlockBasePressurePlate = "func_180666_a"

/** 
 * Check whether there is a stair block at the given position and it has the same properties as the given BlockState
 * 
 * Parent Class: BlockStairs
 */
m.isSameStair = "func_176302_a"
/** 
 * Set the block bounds as the collision bounds for the stairs at the given position
 * 
 * Parent Class: BlockStairs
 */
m.setBaseCollisionBounds = "func_176303_e"
/** 
 * 
 * 
 * Parent Class: BlockSponge
 */
m.tryAbsorb = "func_176311_e"
/** 
 * 
 * 
 * Parent Class: BlockSponge
 */
m.absorb = "func_176312_d"
m.checkAndDropBlock = {}
/** 
 * 
 * 
 * Parent Class: BlockSnow
 */
m.checkAndDropBlock.BlockSnow = "func_176314_e"
/** 
 * 
 * 
 * Parent Class: BlockDoublePlant
 */
m.checkAndDropBlock.BlockDoublePlant = "func_176475_e"

/** 
 * 
 * 
 * Parent Class: BlockPistonBase
 */
m.checkForMove = "func_176316_e"
/** 
 * 
 * 
 * Parent Class: BlockPistonBase
 */
m.shouldBeExtended = "func_176318_b"
/** 
 * 
 * 
 * Parent Class: BlockPistonBase
 */
m.doMove = "func_176319_a"
/** 
 * 
 * 
 * Parent Class: BlockPistonExtension
 */
m.applyCoreBounds = "func_176323_e"
/** 
 * 
 * 
 * Parent Class: BlockPistonExtension
 */
m.applyHeadBounds = "func_176324_d"
m.canBlockStay = {}
/** 
 * 
 * 
 * Parent Class: BlockCarpet
 */
m.canBlockStay.BlockCarpet = "func_176329_d"
/** 
 * 
 * 
 * Parent Class: BlockReed
 */
m.canBlockStay.BlockReed = "func_176354_d"
/** 
 * 
 * 
 * Parent Class: BlockLadder
 */
m.canBlockStay.BlockLadder = "func_176381_b"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.canBlockStay.BlockRedstoneDiode = "func_176409_d"
/** 
 * 
 * 
 * Parent Class: BlockCocoa
 */
m.canBlockStay.BlockCocoa = "func_176499_e"
/** 
 * 
 * 
 * Parent Class: BlockCactus
 */
m.canBlockStay.BlockCactus = "func_176586_d"
/** 
 * 
 * 
 * Parent Class: BlockCake
 */
m.canBlockStay.BlockCake = "func_176588_d"
/** 
 * 
 * 
 * Parent Class: BlockLilyPad
 */
m.canBlockStay.BlockLilyPad = "func_180671_f"

/** 
 * 
 * 
 * Parent Class: BlockRedstoneWire
 */
m.updateSurroundingRedstone = "func_176338_e"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneWire
 */
m.canConnectUpwardsTo = "func_176346_d"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneWire
 */
m.getAttachPosition = "func_176341_c"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneWire
 */
m.getMaxCurrentStrength = "func_176342_a"
/** 
 * "Calls World.notifyNeighborsOfStateChange() for all neighboring blocks
 * 
 * Parent Class: BlockRedstoneWire
 */
m.notifyWireNeighborsOfStateChange = "func_176344_d"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneWire
 */
m.calculateCurrentChanges = "func_176345_a"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneOre
 */
m.activate = "func_176352_d"
/** 
 * 
 * 
 * Parent Class: BlockLever
 */
m.getMetadataForFacing = "func_176357_a"
/** 
 * 
 * 
 * Parent Class: BlockLiquid
 */
m.getFlowingBlock = "func_176361_a"
/** 
 * 
 * 
 * Parent Class: BlockLiquid
 */
m.getStaticBlock = "func_176363_b"
/** 
 * 
 * 
 * Parent Class: BlockLiquid
 */
m.shouldRenderSides = "func_176364_g"
/** 
 * 
 * 
 * Parent Class: BlockLiquid
 */
m.checkForMixing = "func_176365_e"
/** 
 * 
 * 
 * Parent Class: BlockLiquid
 */
m.getEffectiveFlowDecay = "func_176366_f"
/** 
 * 
 * 
 * Parent Class: BlockStaticLiquid
 */
m.getCanBlockBurn = "func_176368_m"
/** 
 * 
 * 
 * Parent Class: BlockStaticLiquid
 */
m.isSurroundingBlockFlammable = "func_176369_e"
/** 
 * 
 * 
 * Parent Class: BlockStaticLiquid
 */
m.updateLiquid = "func_176370_f"
/** 
 * 
 * 
 * Parent Class: BlockDynamicLiquid
 */
m.checkAdjacentBlock = "func_176371_a"
m.isBlocked = {}
/** 
 * 
 * 
 * Parent Class: BlockDynamicLiquid
 */
m.isBlocked.BlockDynamicLiquid = "func_176372_g"
/** 
 * 
 * 
 * Parent Class: BlockChest
 */
m.isBlocked.BlockChest = "func_176457_m"

/** 
 * 
 * 
 * Parent Class: BlockDynamicLiquid
 */
m.canFlowInto = "func_176373_h"
/** 
 * 
 * 
 * Parent Class: BlockDynamicLiquid
 */
m.tryFlowInto = "func_176375_a"
/** 
 * This method returns a Set of EnumFacing
 * 
 * Parent Class: BlockDynamicLiquid
 */
m.getPossibleFlowDirections = "func_176376_e"
/** 
 * 
 * 
 * Parent Class: BlockSilverfish
 */
m.canContainSilverfish = "func_176377_d"
/** 
 * 
 * 
 * Parent Class: BlockPumpkin
 */
m.getGolemPattern = "func_176388_T"
/** 
 * 
 * 
 * Parent Class: BlockPumpkin
 */
m.getGolemBasePattern = "func_176389_S"
m.canDispenserPlace = {}
/** 
 * 
 * 
 * Parent Class: BlockPumpkin
 */
m.canDispenserPlace.BlockPumpkin = "func_176390_d"
/** 
 * 
 * 
 * Parent Class: BlockSkull
 */
m.canDispenserPlace.BlockSkull = "func_176415_b"

/** 
 * 
 * 
 * Parent Class: BlockPumpkin
 */
m.getSnowmanPattern = "func_176391_l"
/** 
 * 
 * 
 * Parent Class: BlockPumpkin
 */
m.getSnowmanBasePattern = "func_176392_j"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.calculateInputStrength = "func_176397_f"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.getTickDelay = "func_176399_m"
m.notifyNeighbors = {}
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.notifyNeighbors.BlockRedstoneDiode = "func_176400_h"
/** 
 * 
 * 
 * Parent Class: BlockButton
 */
m.notifyNeighbors.BlockButton = "func_176582_b"

/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.getPowerOnSide = "func_176401_c"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.isFacingTowardsRepeater = "func_176402_i"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneRepeater
 */
m.getDelay = "func_176403_d"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.shouldBePowered = "func_176404_e"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.isPowered = "func_176406_l"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.getPowerOnSides = "func_176407_c"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneDiode
 */
m.getActiveSignal = "func_176408_a"
/** 
 * 
 * 
 * Parent Class: BlockSkull
 */
m.getWitherBasePattern = "func_176414_j"
/** 
 * 
 * 
 * Parent Class: BlockSkull
 */
m.getWitherPattern = "func_176416_l"
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.newTileEntity = "func_176423_a"
m.getBoundingBox = {}
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.getBoundingBox.BlockPistonMoving = "func_176424_a"
/** 
 * 
 * 
 * Parent Class: StructureComponent
 */
m.getBoundingBox.StructureComponent = "func_74874_b"
/** 
 * 
 * 
 * Parent Class: StructureStart
 */
m.getBoundingBox.StructureStart = "func_75071_a"

/** 
 * 
 * 
 * Parent Class: BlockJukebox
 */
m.insertRecord = "func_176431_a"
/** 
 * 
 * 
 * Parent Class: BlockNote
 */
m.getInstrument = "func_176433_b"
/** 
 * 
 * 
 * Parent Class: BlockDispenser
 */
m.setDefaultDirection = "func_176438_e"
m.dispense = {}
/** 
 * 
 * 
 * Parent Class: BlockDropper
 */
m.dispense.BlockDropper = "func_176439_d"
/** 
 * Dispenses the specified ItemStack from a dispenser.
 * 
 * Parent Class: Bootstrap$12
 */
m.dispense.Bootstrap$12 = "func_82482_a"

/** 
 * 
 * 
 * Parent Class: BlockFurnace
 */
m.setDefaultFacing = "func_176445_e"
m.setState = {}
/** 
 * 
 * 
 * Parent Class: BlockFurnace
 */
m.setState.BlockFurnace = "func_176446_a"
/** 
 * 
 * 
 * Parent Class: CompiledChunk
 */
m.setState.CompiledChunk = "func_178494_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager$BooleanState
 */
m.setState.GlStateManager$BooleanState = "func_179199_a"

/** 
 * 
 * 
 * Parent Class: BlockBeacon
 */
m.updateColorAsync = "func_176450_d"
/** 
 * 
 * 
 * Parent Class: BlockChest
 */
m.isOcelotSittingOnChest = "func_176453_o"
/** 
 * 
 * 
 * Parent Class: BlockChest
 */
m.isDoubleChest = "func_176454_e"
/** 
 * 
 * 
 * Parent Class: BlockChest
 */
m.checkForSurroundingChests = "func_176455_e"
/** 
 * 
 * 
 * Parent Class: BlockChest
 */
m.isBelowSolidBlock = "func_176456_n"
/** 
 * 
 * 
 * Parent Class: BlockChest
 */
m.correctFacing = "func_176458_f"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneComparator
 */
m.calculateOutput = "func_176460_j"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneComparator
 */
m.findItemFrame = "func_176461_a"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneComparator
 */
m.onStateChange = "func_176462_k"
/** 
 * Returns a safe BlockPos to disembark the bed
 * 
 * Parent Class: BlockBed
 */
m.getSafeExitLocation = "func_176468_a"
/** 
 * 
 * 
 * Parent Class: BlockBed
 */
m.hasRoomForPlayer = "func_176469_d"
/** 
 * 
 * 
 * Parent Class: BlockBed
 */
m.getPlayerInBed = "func_176470_e"
/** 
 * Whether this IGrowable can grow
 * 
 * Parent Class: BlockTallGrass
 */
m.canGrow = "func_176473_a"
m.grow = {}
/** 
 * 
 * 
 * Parent Class: BlockTallGrass
 */
m.grow.BlockTallGrass = "func_176474_b"
/** 
 * 
 * 
 * Parent Class: BlockSapling
 */
m.grow.BlockSapling = "func_176478_d"
/** 
 * 
 * 
 * Parent Class: BlockCrops
 */
m.grow.BlockCrops = "func_176487_g"
/** 
 * Increases the number of hash slots
 * 
 * Parent Class: IntHashMap
 */
m.grow.IntHashMap = "func_76047_h"

/** 
 * 
 * 
 * Parent Class: BlockSapling
 */
m.generateTree = "func_176476_e"
/** 
 * Check whether the given BlockPos has a Sapling of the given type
 * 
 * Parent Class: BlockSapling
 */
m.isTypeAt = "func_176477_a"
/** 
 * 
 * 
 * Parent Class: BlockStem
 */
m.getSeedItem = "func_176481_j"
/** 
 * 
 * 
 * Parent Class: BlockStem
 */
m.growStem = "func_176482_g"
/** 
 * 
 * 
 * Parent Class: BlockMushroom
 */
m.generateBigMushroom = "func_176485_d"
/** 
 * 
 * 
 * Parent Class: BlockDoublePlant
 */
m.onHarvest = "func_176489_b"
m.getVariant = {}
/** 
 * 
 * 
 * Parent Class: BlockDoublePlant
 */
m.getVariant.BlockDoublePlant = "func_176490_e"
/** 
 * 
 * 
 * Parent Class: BlockWoodSlab
 */
m.getVariant.BlockWoodSlab = "func_176553_a"
/** 
 * 
 * 
 * Parent Class: ModelResourceLocation
 */
m.getVariant.ModelResourceLocation = "func_177518_c"

/** 
 * 
 * 
 * Parent Class: BlockDoublePlant
 */
m.placeAt = "func_176491_a"
/** 
 * 
 * 
 * Parent Class: BlockFlower
 */
m.getTypeProperty = "func_176494_l"
/** 
 * 
 * 
 * Parent Class: BlockFalling
 */
m.onEndFalling = "func_176502_a_"
/** 
 * 
 * 
 * Parent Class: BlockFalling
 */
m.checkFallable = "func_176503_e"
m.getItem = {}
/** 
 * 
 * 
 * Parent Class: BlockDoor
 */
m.getItem.BlockDoor = "func_176509_j"
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.getItem.BlockPistonMoving = "func_180665_b"
/** 
 * Returns the object corresponding to the stack.
 * 
 * Parent Class: ItemStack
 */
m.getItem.ItemStack = "func_77973_b"

/** 
 * 
 * 
 * Parent Class: BlockDoor
 */
m.removeHalfBit = "func_176510_b"
/** 
 * 
 * 
 * Parent Class: BlockDoor
 */
m.toggleDoor = "func_176512_a"
/** 
 * 
 * 
 * Parent Class: BlockDoor
 */
m.isHingeLeft = "func_176513_j"
/** 
 * 
 * 
 * Parent Class: BlockDoor
 */
m.isOpen = "func_176516_g"
/** 
 * 
 * 
 * Parent Class: BlockDoor
 */
m.combineMetadata = "func_176515_e"
/** 
 * 
 * 
 * Parent Class: BlockDoor
 */
m.isTop = "func_176518_i"
/** 
 * 
 * 
 * Parent Class: BlockFarmland
 */
m.hasCrops = "func_176529_d"
/** 
 * 
 * 
 * Parent Class: BlockFarmland
 */
m.hasWater = "func_176530_e"
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
m.getFlammability = "func_176532_c"
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
m.canNeighborCatchFire = "func_176533_e"
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
m.getEncouragement = "func_176534_d"
/** 
 * Checks if the block can be caught on fire
 * 
 * Parent Class: BlockFire
 */
m.canCatchFire = "func_176535_e"
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
m.catchOnFire = "func_176536_a"
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
m.canDie = "func_176537_d"
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
m.getNeighborEncouragement = "func_176538_m"
/** 
 * 
 * 
 * Parent Class: BlockPortal
 */
m.getMetaForAxis = "func_176549_a"
/** 
 * 
 * 
 * Parent Class: BlockWoodSlab
 */
m.getVariantProperty = "func_176551_l"
/** 
 * 
 * 
 * Parent Class: BlockHalfWoodSlab
 */
m.isDouble = "func_176552_j"
/** 
 * 
 * 
 * Parent Class: BlockRail
 */
m.getShapeProperty = "func_176560_l"
/** 
 * 
 * 
 * Parent Class: BlockRail
 */
m.onNeighborChangedInternal = "func_176561_b"
/** 
 * 
 * 
 * Parent Class: BlockRailBase
 */
m.isRailBlock = "func_176563_d"
/** 
 * 
 * 
 * Parent Class: BlockRailDetector
 */
m.updatePoweredState = "func_176570_e"
/** 
 * 
 * 
 * Parent Class: BlockRailDetector
 */
m.findMinecarts = "func_176571_a"
/** 
 * 
 * 
 * Parent Class: BlockRailDetector
 */
m.getDectectionBox = "func_176572_a"
/** 
 * 
 * 
 * Parent Class: BlockPressurePlateWeighted
 */
m.setRedstoneStrength = "func_176575_a"
/** 
 * 
 * 
 * Parent Class: BlockPressurePlateWeighted
 */
m.getRedstoneStrength = "func_176576_e"
/** 
 * 
 * 
 * Parent Class: BlockBasePressurePlate
 */
m.canBePlacedOn = "func_176577_m"
/** 
 * Notify block and block below of changes
 * 
 * Parent Class: BlockBasePressurePlate
 */
m.updateNeighbors = "func_176578_d"
/** 
 * 
 * 
 * Parent Class: BlockCauldron
 */
m.setWaterLevel = "func_176590_a"
/** 
 * 
 * 
 * Parent Class: BlockTorch
 */
m.onNeighborChangeInternal = "func_176592_e"
/** 
 * 
 * 
 * Parent Class: BlockTorch
 */
m.canPlaceAt = "func_176595_b"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneTorch
 */
m.shouldBeOff = "func_176597_g"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneTorch
 */
m.isBurnedOut = "func_176598_a"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.setLocationNameClock = "func_176602_a"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.setLocationNameCompass = "func_176603_b"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.makeAtlasSprite = "func_176604_a"
/** 
 * "Get this Axis' Plane (VERTICAL for Y
 * 
 * Parent Class: EnumFacing$Axis
 */
m.getPlane = "func_176716_d"
m.byName = {}
/** 
 * Get the axis specified by the given name
 * 
 * Parent Class: EnumFacing$Axis
 */
m.byName.EnumFacing$Axis = "func_176717_a"
/** 
 * Get the facing specified by the given name
 * 
 * Parent Class: EnumFacing
 */
m.byName.EnumFacing = "func_176739_a"
/** 
 * 
 * 
 * Parent Class: S45PacketTitle$Type
 */
m.byName.S45PacketTitle$Type = "func_179969_a"

m.getName2 = {}
/** 
 * Like getName but doesn't override the method from Enum.
 * 
 * Parent Class: EnumFacing$Axis
 */
m.getName2.EnumFacing$Axis = "func_176719_a"
/** 
 * "Same as getName
 * 
 * Parent Class: EnumFacing
 */
m.getName2.EnumFacing = "func_176742_j"

/** 
 * If this Axis is on the vertical plane (Only true for Y)
 * 
 * Parent Class: EnumFacing$Axis
 */
m.isVertical = "func_176720_b"
/** 
 * If this Axis is on the horizontal plane (true for X and Z)
 * 
 * Parent Class: EnumFacing$Axis
 */
m.isHorizontal = "func_176722_c"
/** 
 * Get a normalized Vector that points in the direction of this Facing.
 * 
 * Parent Class: EnumFacing
 */
m.getDirectionVec = "func_176730_m"
/** 
 * Get a Facing by it's horizontal index (0-3). The order is S-W-N-E.
 * 
 * Parent Class: EnumFacing
 */
m.getHorizontal = "func_176731_b"
/** 
 * "Rotate this Facing around the given axis clockwise. If this facing cannot be rotated around the given axis
 * 
 * Parent Class: EnumFacing
 */
m.rotateAround = "func_176732_a"
/** 
 * "Get the Facing corresponding to the given angle (0-360). An angle of 0 is SOUTH
 * 
 * Parent Class: EnumFacing
 */
m.fromAngle = "func_176733_a"
/** 
 * Get the opposite Facing (e.g. DOWN => UP)
 * 
 * Parent Class: EnumFacing
 */
m.getOpposite = "func_176734_d"
/** 
 * Rotate this Facing around the Y axis counter-clockwise (NORTH => WEST => SOUTH => EAST => NORTH)
 * 
 * Parent Class: EnumFacing
 */
m.rotateYCCW = "func_176735_f"
/** 
 * Get the index of this horizontal facing (0-3). The order is S-W-N-E
 * 
 * Parent Class: EnumFacing
 */
m.getHorizontalIndex = "func_176736_b"
/** 
 * 
 * 
 * Parent Class: EnumFacing
 */
m.getFacingFromVector = "func_176737_a"
/** 
 * Rotate this Facing around the Z axis (EAST => DOWN => WEST => UP => EAST)
 * 
 * Parent Class: EnumFacing
 */
m.rotateZ = "func_176738_p"
/** 
 * 
 * 
 * Parent Class: EnumFacing
 */
m.getAxis = "func_176740_k"
m.random = {}
/** 
 * Choose a random Facing using the given Random
 * 
 * Parent Class: EnumFacing
 */
m.random.EnumFacing = "func_176741_a"
/** 
 * Choose a random Facing from this Plane using the given Random
 * 
 * Parent Class: EnumFacing$Plane
 */
m.random.EnumFacing$Plane = "func_179518_a"

/** 
 * Get the AxisDirection of this Facing.
 * 
 * Parent Class: EnumFacing
 */
m.getAxisDirection = "func_176743_c"
/** 
 * Rotate this Facing around the X axis (NORTH => DOWN => SOUTH => UP => NORTH)
 * 
 * Parent Class: EnumFacing
 */
m.rotateX = "func_176744_n"
m.getIndex = {}
/** 
 * Get the Index of this Facing (0-5). The order is D-U-N-S-W-E
 * 
 * Parent Class: EnumFacing
 */
m.getIndex.EnumFacing = "func_176745_a"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement
 */
m.getIndex.VertexFormatElement = "func_177369_e"
/** 
 * 
 * 
 * Parent Class: ItemModelMesher
 */
m.getIndex.ItemModelMesher = "func_178081_c"
/** 
 * 
 * 
 * Parent Class: VisGraph
 */
m.getIndex.VisGraph = "func_178608_c"
/** 
 * Return the index of the next frame in the array
 * 
 * Parent Class: FrameTimer
 */
m.getIndex.FrameTimer = "func_181750_b"

/** 
 * Rotate this Facing around the Y axis clockwise (NORTH => EAST => SOUTH => WEST => NORTH)
 * 
 * Parent Class: EnumFacing
 */
m.rotateY = "func_176746_e"
/** 
 * 
 * 
 * Parent Class: EnumDyeColor
 */
m.byDyeDamage = "func_176766_a"
/** 
 * 
 * 
 * Parent Class: EnumDyeColor
 */
m.getDyeDamage = "func_176767_b"
/** 
 * 
 * 
 * Parent Class: BlockLever$EnumOrientation
 */
m.forFacings = "func_176856_a"
/** 
 * 
 * 
 * Parent Class: BlockLog$EnumAxis
 */
m.fromFacingAxis = "func_176870_a"
/** 
 * 
 * 
 * Parent Class: BlockSilverfish$EnumType
 */
m.forModelBlock = "func_176878_a"
/** 
 * 
 * 
 * Parent Class: BlockSilverfish$EnumType$6
 */
m.getModelBlock = "func_176883_d"
m.getMeta = {}
/** 
 * 
 * 
 * Parent Class: BlockDoublePlant$EnumPlantType
 */
m.getMeta.BlockDoublePlant$EnumPlantType = "func_176936_a"
/** 
 * 
 * 
 * Parent Class: BlockFlower$EnumFlowerType
 */
m.getMeta.BlockFlower$EnumFlowerType = "func_176968_b"
/** 
 * 
 * 
 * Parent Class: BlockTallGrass$EnumType
 */
m.getMeta.BlockTallGrass$EnumType = "func_177044_a"

/** 
 * "Get all FlowerTypes that are applicable for the given Flower block (""yellow""
 * 
 * Parent Class: BlockFlower$EnumFlowerType
 */
m.getTypes = "func_176966_a"
/** 
 * 
 * 
 * Parent Class: BlockRailBase$EnumRailDirection
 */
m.isAscending = "func_177018_c"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.readBufferedImage = "func_177053_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.anaglyphColor = "func_177054_c"
/** 
 * 
 * 
 * Parent Class: ModelBakery$2
 */
m.registerSprites = "func_177059_a"
m.toByteArray = {}
/** 
 * 
 * 
 * Parent Class: ShaderLoader
 */
m.toByteArray.ShaderLoader = "func_177064_a"
/** 
 * Returns the contents of the output stream as a byte array
 * 
 * Parent Class: RConOutputStream
 */
m.toByteArray.RConOutputStream = "func_72672_a"

/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
m.getFramebufferRaw = "func_177066_a"
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
m.renderName = "func_177067_a"
/** 
 * 
 * 
 * Parent Class: RenderPlayer
 */
m.renderOffsetLivingLabel = "func_177069_a"
/** 
 * 
 * 
 * Parent Class: RenderLiving
 */
m.canRenderName = "func_177070_b"
m.shouldRender = {}
/** 
 * 
 * 
 * Parent Class: RenderLiving
 */
m.shouldRender.RenderLiving = "func_177071_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.shouldRender.RenderManager = "func_178635_a"

m.setRenderOutlines = {}
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
m.setRenderOutlines.RendererLivingEntity = "func_177086_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.setRenderOutlines.RenderManager = "func_178632_c"

/** 
 * 
 * 
 * Parent Class: RenderPlayer
 */
m.getMainModel = "func_177087_b"
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
m.setScoreTeamColor = "func_177088_c"
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
m.removeLayer = "func_177089_b"
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
m.setDoRenderBrightness = "func_177090_c"
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
m.unsetBrightness = "func_177091_f"
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
m.setBrightness = "func_177092_a"
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
m.renderLayers = "func_177093_a"
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
m.addLayer = "func_177094_a"
m.setLightmap = {}
/** 
 * 
 * 
 * Parent Class: RenderLiving
 */
m.setLightmap.RenderLiving = "func_177105_a"
/** 
 * 
 * 
 * Parent Class: RenderPainting
 */
m.setLightmap.RenderPainting = "func_77008_a"

/** 
 * 
 * 
 * Parent Class: RenderPlayer
 */
m.setModelVisibilities = "func_177137_d"
m.renderRightArm = {}
/** 
 * 
 * 
 * Parent Class: RenderPlayer
 */
m.renderRightArm.RenderPlayer = "func_177138_b"
/** 
 * 
 * 
 * Parent Class: ModelPlayer
 */
m.renderRightArm.ModelPlayer = "func_178725_a"
/** 
 * 
 * 
 * Parent Class: ItemRenderer
 */
m.renderRightArm.ItemRenderer = "func_180534_a"

m.renderLeftArm = {}
/** 
 * 
 * 
 * Parent Class: RenderPlayer
 */
m.renderLeftArm.RenderPlayer = "func_177139_c"
/** 
 * 
 * 
 * Parent Class: ItemRenderer
 */
m.renderLeftArm.ItemRenderer = "func_178106_b"
/** 
 * 
 * 
 * Parent Class: ModelPlayer
 */
m.renderLeftArm.ModelPlayer = "func_178726_b"

/** 
 * 
 * 
 * Parent Class: LayerWolfCollar
 */
m.doRenderLayer = "func_177141_a"
/** 
 * 
 * 
 * Parent Class: LayerWolfCollar
 */
m.shouldCombineTextures = "func_177142_b"
/** 
 * 
 * 
 * Parent Class: LayerArmorBase
 */
m.getArmorModel = "func_177175_a"
m.getCurrentArmor = {}
/** 
 * 
 * 
 * Parent Class: LayerArmorBase
 */
m.getCurrentArmor.LayerArmorBase = "func_177176_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getCurrentArmor.EntityPlayer = "func_82169_q"

/** 
 * 
 * 
 * Parent Class: LayerVillagerArmor
 */
m.initArmor = "func_177177_a"
/** 
 * 
 * 
 * Parent Class: LayerArmorBase
 */
m.getArmorResource = "func_177181_a"
/** 
 * 
 * 
 * Parent Class: LayerBipedArmor
 */
m.setModelPartVisible = "func_177179_a"
/** 
 * 
 * 
 * Parent Class: LayerArmorBase
 */
m.isSlotForLeggings = "func_177180_b"
/** 
 * 
 * 
 * Parent Class: LayerArmorBase
 */
m.renderLayer = "func_177182_a"
/** 
 * 
 * 
 * Parent Class: LayerArmorBase
 */
m.renderGlint = "func_177183_a"
/** 
 * 
 * 
 * Parent Class: LayerBipedArmor
 */
m.setModelVisible = "func_177194_a"
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
m.isInterpolate = "func_177219_e"
/** 
 * 
 * 
 * Parent Class: EntityMinecartMobSpawner$1
 */
m.getSpawnerPosition = "func_177221_b"
/** 
 * 
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.getMobRotation = "func_177222_d"
/** 
 * 
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.getPrevMobRotation = "func_177223_e"
/** 
 * Get a version of this BlockState with the given Property now set to the given value
 * 
 * Parent Class: BlockState$StateImplementation
 */
m.withProperty = "func_177226_a"
/** 
 * Get the names of all properties defined for this BlockState
 * 
 * Parent Class: BlockState$StateImplementation
 */
m.getPropertyNames = "func_177227_a"
m.getProperties = {}
/** 
 * Get all properties of this BlockState. The returned Map maps from properties (IProperty) to the respective current value.
 * 
 * Parent Class: BlockState$StateImplementation
 */
m.getProperties.BlockState$StateImplementation = "func_177228_b"
/** 
 * 
 * 
 * Parent Class: BlockState
 */
m.getProperties.BlockState = "func_177623_d"

/** 
 * "Create a version of this BlockState with the given property cycled to the next value in order. If the property was at the highest possible value
 * 
 * Parent Class: IBlockState
 */
m.cycleProperty = "func_177231_a"
/** 
 * Helper method for cycleProperty.
 * 
 * Parent Class: BlockStateBase
 */
m.cyclePropertyValue = "func_177232_a"
/** 
 * 
 * 
 * Parent Class: BlockState$StateImplementation
 */
m.buildPropertyValueTable = "func_177235_a"
/** 
 * Create a new version of this.properties with the given property now set to the given value
 * 
 * Parent Class: BlockState$StateImplementation
 */
m.getPropertiesWithValue = "func_177236_b"
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
m.getResourceLocation = "func_177241_a"
/** 
 * Returns an List<BlockPos> of all the blocks that are being destroyed by the piston.
 * 
 * Parent Class: BlockPistonStructureHelper
 */
m.getBlocksToDestroy = "func_177252_d"
/** 
 * 
 * 
 * Parent Class: BlockPistonStructureHelper
 */
m.canMove = "func_177253_a"
/** 
 * Returns a List<BlockPos> of all the blocks that are being moved by the piston.
 * 
 * Parent Class: BlockPistonStructureHelper
 */
m.getBlocksToMove = "func_177254_c"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon$BeamSegment
 */
m.incrementHeight = "func_177262_a"
/** 
 * Returns RGB (0 to 1.0) colors of this beam segment
 * 
 * Parent Class: TileEntityBeacon$BeamSegment
 */
m.getColors = "func_177263_b"
/** 
 * Retrieves the string array which represents the associated crafting recipe for this banner effect. The first object in the array is the top layer while the second is middle and third is last.
 * 
 * Parent Class: TileEntityBanner$EnumBannerPattern
 */
m.getCraftingLayers = "func_177267_c"
/** 
 * Retrieves an instance of a banner pattern by its short string id.
 * 
 * Parent Class: TileEntityBanner$EnumBannerPattern
 */
m.getPatternByID = "func_177268_a"
/** 
 * Checks to see if this pattern has a specific ItemStack associated with it's crafting.
 * 
 * Parent Class: TileEntityBanner$EnumBannerPattern
 */
m.hasCraftingStack = "func_177269_e"
/** 
 * "Checks to see if this pattern has a valid crafting stack
 * 
 * Parent Class: TileEntityBanner$EnumBannerPattern
 */
m.hasValidCrafting = "func_177270_d"
/** 
 * Retrieves the name used to represent this pattern.
 * 
 * Parent Class: TileEntityBanner$EnumBannerPattern
 */
m.getPatternName = "func_177271_a"
/** 
 * Retrieves the ItemStack associated with the crafting of this pattern.
 * 
 * Parent Class: TileEntityBanner$EnumBannerPattern
 */
m.getCraftingStack = "func_177272_f"
/** 
 * Retrieves the short string used to represent this pattern.
 * 
 * Parent Class: TileEntityBanner$EnumBannerPattern
 */
m.getPatternID = "func_177273_b"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
m.setResourcePackInstance = "func_177319_a"
/** 
 * Checks if a players skin model is slim or the default. The Alex model is slime while the Steve model is default.
 * 
 * Parent Class: DefaultPlayerSkin
 */
m.isSlimSkin = "func_177333_c"
/** 
 * Retrieves the default skin for this player. Depending on the model used this will be Alex or Steve.
 * 
 * Parent Class: DefaultPlayerSkin
 */
m.getDefaultSkin = "func_177334_a"
/** 
 * "Returns the default skind for versions prior to 1.8
 * 
 * Parent Class: DefaultPlayerSkin
 */
m.getDefaultSkinLegacy = "func_177335_a"
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.getNextOffset = "func_177338_f"
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.getColorOffset = "func_177340_e"
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.hasPosition = "func_177341_i"
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.getNormalOffset = "func_177342_c"
m.getElements = {}
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.getElements.VertexFormat = "func_177343_g"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.getElements.ModelBlock = "func_178298_a"

/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.getUvOffsetById = "func_177344_b"
m.getElementCount = {}
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.getElementCount.VertexFormat = "func_177345_h"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement
 */
m.getElementCount.VertexFormatElement = "func_177370_d"

m.hasColor = {}
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.hasColor.VertexFormat = "func_177346_d"
/** 
 * Return whether the specified armor ItemStack has a color.
 * 
 * Parent Class: ItemArmor
 */
m.hasColor.ItemArmor = "func_82816_b_"

/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.hasUvOffset = "func_177347_a"
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.getElement = "func_177348_c"
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.hasNormal = "func_177350_b"
/** 
 * 
 * 
 * Parent Class: VertexBuffer
 */
m.drawArrays = "func_177358_a"
/** 
 * 
 * 
 * Parent Class: VertexBuffer
 */
m.bindBuffer = "func_177359_a"
/** 
 * 
 * 
 * Parent Class: VertexBuffer
 */
m.unbindBuffer = "func_177361_b"
/** 
 * 
 * 
 * Parent Class: VertexBuffer
 */
m.deleteGlBuffers = "func_177362_c"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement
 */
m.isPositionElement = "func_177374_g"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement
 */
m.getUsage = "func_177375_c"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement$EnumType
 */
m.getGlConstant = "func_177397_c"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setHasEntities = "func_177409_g"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.isLoaded = "func_177410_o"
/** 
 * Fills the given list of all entities that intersect within the given bounding box that aren't the passed entity.
 * 
 * Parent Class: Chunk
 */
m.getEntitiesWithinAABBForEntity = "func_177414_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setInhabitedTime = "func_177415_c"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getInhabitedTime = "func_177416_w"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setChunkLoaded = "func_177417_c"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.isTerrainPopulated = "func_177419_t"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setHeightMap = "func_177420_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setLightPopulated = "func_177421_e"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.isLightPopulated = "func_177423_u"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setModified = "func_177427_f"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getEntityLists = "func_177429_s"
/** 
 * Gets all entities that can be assigned to the specified class.
 * 
 * Parent Class: Chunk
 */
m.getEntitiesOfTypeWithinAAAB = "func_177430_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setLastSaveTime = "func_177432_b"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getTileEntityMap = "func_177434_r"
/** 
 * Initialize this chunk with new binary data.
 * 
 * Parent Class: Chunk
 */
m.fillChunk = "func_177439_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getLowestHeight = "func_177442_v"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getLightSubtracted = "func_177443_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getHeightMap = "func_177445_q"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setTerrainPopulated = "func_177446_d"
/** 
 * Get's the EntityPlayerMP object representing the player with the UUID.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getPlayerByUUID = "func_177451_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.sendMessageToTeamOrEvryPlayer = "func_177452_b"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.sendMessageToAllTeamMembers = "func_177453_a"
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
m.getPossibleCreatures = "func_177458_a"
/** 
 * "Will return back a chunk
 * 
 * Parent Class: ChunkProviderServer
 */
m.provideChunk = "func_73154_d"
m.populateChunk = {}
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
m.populateChunk.ChunkProviderServer = "func_177460_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.populateChunk.Chunk = "func_76624_a"

/** 
 * 
 * 
 * Parent Class: NibbleArray
 */
m.getNibbleIndex = "func_177478_c"
/** 
 * 
 * 
 * Parent Class: NibbleArray
 */
m.isLowerNibble = "func_177479_b"
/** 
 * 
 * 
 * Parent Class: NibbleArray
 */
m.getFromIndex = "func_177480_a"
m.getData = {}
/** 
 * 
 * 
 * Parent Class: NibbleArray
 */
m.getData.NibbleArray = "func_177481_a"
/** 
 * 
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.getData.ExtendedBlockStorage = "func_177487_g"

/** 
 * 
 * 
 * Parent Class: NibbleArray
 */
m.setIndex = "func_177482_a"
/** 
 * 
 * 
 * Parent Class: NibbleArray
 */
m.getCoordinateIndex = "func_177483_b"
m.setData = {}
/** 
 * 
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.setData.ExtendedBlockStorage = "func_177486_a"
/** 
 * "Assigns the given String id to the given MapDataBase
 * 
 * Parent Class: MapStorage
 */
m.setData.MapStorage = "func_75745_a"

/** 
 * 
 * 
 * Parent Class: WorldProvider
 */
m.getHasNoSky = "func_177495_o"
m.getSpawnCoordinate = {}
/** 
 * 
 * 
 * Parent Class: WorldProviderEnd
 */
m.getSpawnCoordinate.WorldProviderEnd = "func_177496_h"
/** 
 * Returns null for anything other than the End
 * 
 * Parent Class: WorldServer
 */
m.getSpawnCoordinate.WorldServer = "func_180504_m"

/** 
 * 
 * 
 * Parent Class: WorldProvider
 */
m.getLightBrightnessTable = "func_177497_p"
/** 
 * 
 * 
 * Parent Class: WorldProviderEnd
 */
m.getInternalNameSuffix = "func_177498_l"
m.getWorldChunkManager = {}
/** 
 * 
 * 
 * Parent Class: WorldProvider
 */
m.getWorldChunkManager.WorldProvider = "func_177499_m"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getWorldChunkManager.World = "func_72959_q"
/** 
 * 
 * 
 * Parent Class: StructureVillagePieces$Start
 */
m.getWorldChunkManager.StructureVillagePieces$Start = "func_74925_d"

/** 
 * 
 * 
 * Parent Class: WorldProvider
 */
m.doesWaterVaporize = "func_177500_n"
/** 
 * Gets the dimension of the provider
 * 
 * Parent Class: WorldProvider
 */
m.getDimensionId = "func_177502_q"
/** 
 * 
 * 
 * Parent Class: BlockWorldState
 */
m.hasState = "func_177510_a"
/** 
 * "Splits an object name (such as minecraft:apple) into the domain and path parts and returns these as an array of length 2. If no colon is present in the passed value the returned array will contain {null
 * 
 * Parent Class: ResourceLocation
 */
m.splitObjectName = "func_177516_a"
/** 
 * 
 * 
 * Parent Class: ModelResourceLocation
 */
m.parsePathString = "func_177517_b"
m.rotateVertex = {}
/** 
 * 
 * 
 * Parent Class: ModelRotation
 */
m.rotateVertex.ModelRotation = "func_177520_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.rotateVertex.FaceBakery = "func_178415_a"

/** 
 * 
 * 
 * Parent Class: ModelRotation
 */
m.combineXY = "func_177521_b"
/** 
 * 
 * 
 * Parent Class: ModelRotation
 */
m.rotateFace = "func_177523_a"
/** 
 * 
 * 
 * Parent Class: ModelRotation
 */
m.getModelRotation = "func_177524_a"
/** 
 * 
 * 
 * Parent Class: ModelRotation
 */
m.getMatrix4d = "func_177525_a"
/** 
 * 
 * 
 * Parent Class: WeightedBakedModel
 */
m.getGeneralQuads = "func_177550_a"
/** 
 * 
 * 
 * Parent Class: WeightedBakedModel
 */
m.getFaceQuads = "func_177551_a"
/** 
 * 
 * 
 * Parent Class: WeightedBakedModel
 */
m.getItemCameraTransforms = "func_177552_f"
/** 
 * 
 * 
 * Parent Class: WeightedBakedModel
 */
m.isBuiltInRenderer = "func_177553_d"
/** 
 * 
 * 
 * Parent Class: WeightedBakedModel
 */
m.getParticleTexture = "func_177554_e"
m.isAmbientOcclusion = {}
/** 
 * 
 * 
 * Parent Class: WeightedBakedModel
 */
m.isAmbientOcclusion.WeightedBakedModel = "func_177555_b"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.isAmbientOcclusion.ModelBlock = "func_178309_b"

m.isGui3d = {}
/** 
 * 
 * 
 * Parent Class: WeightedBakedModel
 */
m.isGui3d.WeightedBakedModel = "func_177556_c"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.isGui3d.ModelBlock = "func_178311_c"

/** 
 * 
 * 
 * Parent Class: WeightedBakedModel
 */
m.getAlternativeModel = "func_177564_a"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.registerVariant = "func_177569_a"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.setupModelRegistry = "func_177570_a"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.getItemsTextureLocations = "func_177571_k"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.getParentPath = "func_177573_e"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.loadModels = "func_177574_i"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.getVariantsTextureLocations = "func_177575_g"
m.getParentLocation = {}
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.getParentLocation.ModelBakery = "func_177576_f"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.getParentLocation.ModelBlock = "func_178305_e"

/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.loadVariantItemModels = "func_177577_b"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.bakeModel = "func_177578_a"
m.getModelLocation = {}
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.getModelLocation.ModelBakery = "func_177580_d"
/** 
 * 
 * 
 * Parent Class: RenderItem$9
 */
m.getModelLocation.RenderItem$9 = "func_178113_a"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variant
 */
m.getModelLocation.ModelBlockDefinition$Variant = "func_178431_a"

/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.hasItemModel = "func_177581_b"
m.makeItemModel = {}
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.makeItemModel.ModelBakery = "func_177582_d"
/** 
 * 
 * 
 * Parent Class: ItemModelGenerator
 */
m.makeItemModel.ItemModelGenerator = "func_178392_a"

/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.getItemLocation = "func_177583_a"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.getBlockStateLocation = "func_177584_b"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.getTextureLocations = "func_177585_a"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.getModelBlockDefinition = "func_177586_a"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.isCustomRenderer = "func_177587_c"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.bakeBlockModels = "func_177588_f"
m.makeBakedQuad = {}
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.makeBakedQuad.ModelBakery = "func_177589_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.makeBakedQuad.FaceBakery = "func_178414_a"

/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.loadItemModels = "func_177590_d"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.loadVariants = "func_177591_a"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.registerVariantNames = "func_177592_e"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.bakeItemModels = "func_177593_l"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.loadModel = "func_177594_c"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.loadVariantModels = "func_177595_c"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.getVariantNames = "func_177596_a"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
m.loadModelsCheck = "func_177597_h"
/** 
 * 
 * 
 * Parent Class: BlockState
 */
m.getValidStates = "func_177619_a"
m.getAllowedValues = {}
/** 
 * 
 * 
 * Parent Class: BlockState
 */
m.getAllowedValues.BlockState = "func_177620_e"
/** 
 * 
 * 
 * Parent Class: IProperty
 */
m.getAllowedValues.IProperty = "func_177700_c"

/** 
 * 
 * 
 * Parent Class: BlockState
 */
m.getBaseState = "func_177621_b"
m.generateChestContents = {}
/** 
 * 
 * 
 * Parent Class: WeightedRandomChestContent
 */
m.generateChestContents.WeightedRandomChestContent = "func_177630_a"
/** 
 * 
 * 
 * Parent Class: StructureComponent
 */
m.generateChestContents.StructureComponent = "func_180778_a"

/** 
 * 
 * 
 * Parent Class: WeightedBakedModel$MyWeighedRandomItem
 */
m.getCountQuads = "func_177635_a"
m.where = {}
/** 
 * 
 * 
 * Parent Class: BlockStateHelper
 */
m.where.BlockStateHelper = "func_177637_a"
/** 
 * 
 * 
 * Parent Class: FactoryBlockPattern
 */
m.where.FactoryBlockPattern = "func_177662_a"

m.forBlock = {}
/** 
 * 
 * 
 * Parent Class: BlockStateHelper
 */
m.forBlock.BlockStateHelper = "func_177638_a"
/** 
 * 
 * 
 * Parent Class: BlockHelper
 */
m.forBlock.BlockHelper = "func_177642_a"

/** 
 * 
 * 
 * Parent Class: SimpleBakedModel$Builder
 */
m.makeBakedModel = "func_177645_b"
/** 
 * 
 * 
 * Parent Class: SimpleBakedModel$Builder
 */
m.setTexture = "func_177646_a"
/** 
 * 
 * 
 * Parent Class: SimpleBakedModel$Builder
 */
m.addGeneralBreakingFours = "func_177647_a"
/** 
 * 
 * 
 * Parent Class: SimpleBakedModel$Builder
 */
m.addGeneralQuad = "func_177648_a"
/** 
 * 
 * 
 * Parent Class: SimpleBakedModel$Builder
 */
m.addFaceBreakingFours = "func_177649_a"
/** 
 * 
 * 
 * Parent Class: SimpleBakedModel$Builder
 */
m.addFaceQuad = "func_177650_a"
/** 
 * 
 * 
 * Parent Class: FactoryBlockPattern
 */
m.checkMissingPredicates = "func_177657_d"
/** 
 * 
 * 
 * Parent Class: FactoryBlockPattern
 */
m.makePredicateArray = "func_177658_c"
/** 
 * 
 * 
 * Parent Class: FactoryBlockPattern
 */
m.aisle = "func_177659_a"
/** 
 * 
 * 
 * Parent Class: FactoryBlockPattern
 */
m.start = "func_177660_a"
m.build = {}
/** 
 * 
 * 
 * Parent Class: FactoryBlockPattern
 */
m.build.FactoryBlockPattern = "func_177661_b"
/** 
 * 
 * 
 * Parent Class: WeightedBakedModel$Builder
 */
m.build.WeightedBakedModel$Builder = "func_177676_a"
/** 
 * 
 * 
 * Parent Class: StateMap$Builder
 */
m.build.StateMap$Builder = "func_178441_a"

/** 
 * 
 * 
 * Parent Class: BlockPattern$PatternHelper
 */
m.getThumb = "func_177668_c"
/** 
 * 
 * 
 * Parent Class: BlockPattern$PatternHelper
 */
m.getFinger = "func_177669_b"
m.translateOffset = {}
/** 
 * 
 * 
 * Parent Class: BlockPattern$PatternHelper
 */
m.translateOffset.BlockPattern$PatternHelper = "func_177670_a"
/** 
 * "Offsets the position of pos in the direction of finger and thumb facing by offset amounts
 * 
 * Parent Class: BlockPattern
 */
m.translateOffset.BlockPattern = "func_177683_a"

/** 
 * 
 * 
 * Parent Class: WeightedBakedModel$Builder
 */
m.first = "func_177675_b"
m.add = {}
/** 
 * 
 * 
 * Parent Class: WeightedBakedModel$Builder
 */
m.add.WeightedBakedModel$Builder = "func_177677_a"
/** 
 * Add the given coordinates to the coordinates of this BlockPos
 * 
 * Parent Class: BlockPos
 */
m.add.BlockPos = "func_177982_a"
/** 
 * 
 * 
 * Parent Class: Vec3
 */
m.add.Vec3 = "func_178787_e"
/** 
 * Add a key-value pair.
 * 
 * Parent Class: LongHashMap
 */
m.add.LongHashMap = "func_76163_a"

/** 
 * "Calculates whether the given world position matches the pattern. Warning
 * 
 * Parent Class: BlockPattern
 */
m.match = "func_177681_a"
/** 
 * checks that the given pattern & rotation is at the block co-ordinates.
 * 
 * Parent Class: BlockPattern
 */
m.checkPatternAt = "func_177682_a"
/** 
 * 
 * 
 * Parent Class: BlockPattern
 */
m.getPalmLength = "func_177684_c"
/** 
 * 
 * 
 * Parent Class: BlockPattern
 */
m.getThumbLength = "func_177685_b"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager$1
 */
m.onWarningDistanceChanged = "func_177690_b"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager$1
 */
m.onWarningTimeChanged = "func_177691_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager$1
 */
m.onTransitionStarted = "func_177692_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager$1
 */
m.onCenterChanged = "func_177693_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager$1
 */
m.onSizeChanged = "func_177694_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager$1
 */
m.onDamageBufferChanged = "func_177695_c"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager$1
 */
m.onDamageAmountChanged = "func_177696_b"
/** 
 * The class of the values of this property
 * 
 * Parent Class: IProperty
 */
m.getValueClass = "func_177699_b"
/** 
 * 
 * 
 * Parent Class: WorldProviderHell$1
 */
m.getCenterZ = "func_177721_g"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.setWarningTime = "func_177723_b"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.setDamageBuffer = "func_177724_b"
m.setSize = {}
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.setSize.WorldBorder = "func_177725_a"
/** 
 * "Sets the width and height of the entity. Args: width
 * 
 * Parent Class: EntityZombie
 */
m.setSize.EntityZombie = "func_70105_a"

/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.minX = "func_177726_b"
m.getDamageAmount = {}
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getDamageAmount.WorldBorder = "func_177727_n"
/** 
 * 
 * 
 * Parent Class: CombatEntry
 */
m.getDamageAmount.CombatEntry = "func_94561_i"

/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.maxX = "func_177728_d"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getClosestDistance = "func_177745_a"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.contains = "func_177746_a"
/** 
 * 
 * 
 * Parent Class: WorldProviderHell$1
 */
m.getCenterX = "func_177731_f"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getTimeUntilTarget = "func_177732_i"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.maxZ = "func_177733_e"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getListeners = "func_177735_k"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.minZ = "func_177736_c"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.addListener = "func_177737_a"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.setTransition = "func_177750_a"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.setCenter = "func_177739_c"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getWarningTime = "func_177740_p"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getDiameter = "func_177741_h"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getDamageBuffer = "func_177742_m"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.setDamageAmount = "func_177744_c"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.setWarningDistance = "func_177747_c"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getWarningDistance = "func_177748_q"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getResizeSpeed = "func_177749_o"
/** 
 * 
 * 
 * Parent Class: WorldBorder
 */
m.getTargetSize = "func_177751_j"
/** 
 * Gets the name we use to identify the given object.
 * 
 * Parent Class: RegistryNamespaced
 */
m.getNameForObject = "func_177774_c"
/** 
 * validates that this registry's key is non-null
 * 
 * Parent Class: RegistryNamespacedDefaultedByKey
 */
m.validateKey = "func_177776_a"
/** 
 * 
 * 
 * Parent Class: ChunkProviderSettings$Factory
 */
m.jsonToFactory = "func_177865_a"
/** 
 * Calculate squared distance to the given coordinates
 * 
 * Parent Class: Vec3i
 */
m.distanceSq = "func_177954_c"
m.crossProduct = {}
/** 
 * Calculate the cross product of this and the given Vector
 * 
 * Parent Class: Vec3i
 */
m.crossProduct.Vec3i = "func_177955_d"
/** 
 * Returns a new vector with the result of this vector x the specified vector.
 * 
 * Parent Class: Vec3
 */
m.crossProduct.Vec3 = "func_72431_c"

/** 
 * "Compute square of distance from point x
 * 
 * Parent Class: Vec3i
 */
m.distanceSqToCenter = "func_177957_d"
/** 
 * Offset this BlockPos 1 block in northern direction
 * 
 * Parent Class: BlockPos
 */
m.north = "func_177978_c"
/** 
 * Offset this BlockPos 1 block in eastern direction
 * 
 * Parent Class: BlockPos
 */
m.east = "func_177974_f"
m.offset = {}
/** 
 * Offset this BlockPos 1 block in the given direction
 * 
 * Parent Class: BlockPos
 */
m.offset.BlockPos = "func_177972_a"
/** 
 * "Offsets the current bounding box by the specified coordinates. Args: x
 * 
 * Parent Class: AxisAlignedBB
 */
m.offset.AxisAlignedBB = "func_72317_d"
/** 
 * "Offsets the current bounding box by the specified coordinates. Args: x
 * 
 * Parent Class: StructureBoundingBox
 */
m.offset.StructureBoundingBox = "func_78886_a"

/** 
 * Offset this BlockPos n blocks in southern direction
 * 
 * Parent Class: BlockPos
 */
m.south = "func_177970_e"
/** 
 * Create a BlockPos from a serialized long value (created by toLong)
 * 
 * Parent Class: BlockPos
 */
m.fromLong = "func_177969_a"
m.subtract = {}
/** 
 * Subtract the given Vector from this BlockPos
 * 
 * Parent Class: BlockPos
 */
m.subtract.BlockPos = "func_177973_b"
/** 
 * 
 * 
 * Parent Class: Vec3
 */
m.subtract.Vec3 = "func_178788_d"

/** 
 * "Like getAllInBox but reuses a single MutableBlockPos instead. If this method is used
 * 
 * Parent Class: BlockPos
 */
m.getAllInBoxMutable = "func_177975_b"
/** 
 * Offset this BlockPos n blocks in western direction
 * 
 * Parent Class: BlockPos
 */
m.west = "func_177985_f"
/** 
 * Offset this BlockPos n blocks down
 * 
 * Parent Class: BlockPos
 */
m.down = "func_177979_c"
/** 
 * Create an Iterable that returns all positions in the box specified by the given corners
 * 
 * Parent Class: BlockPos
 */
m.getAllInBox = "func_177980_a"
/** 
 * Offset this BlockPos 1 block up
 * 
 * Parent Class: BlockPos
 */
m.up = "func_177984_a"
/** 
 * Serialize this BlockPos into a long value
 * 
 * Parent Class: BlockPos
 */
m.toLong = "func_177986_g"
/** 
 * 
 * 
 * Parent Class: VboRenderList
 */
m.renderChunkLayer = "func_178001_a"
/** 
 * 
 * 
 * Parent Class: ChunkRenderContainer
 */
m.addRenderChunk = "func_178002_a"
/** 
 * 
 * 
 * Parent Class: ChunkRenderContainer
 */
m.preRenderChunk = "func_178003_a"
m.initialize = {}
/** 
 * 
 * 
 * Parent Class: ChunkRenderContainer
 */
m.initialize.ChunkRenderContainer = "func_178004_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.initialize.WorldServer = "func_72963_a"

/** 
 * 
 * 
 * Parent Class: VboRenderList
 */
m.setupArrayPointers = "func_178010_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackListEntry
 */
m.setSelected = "func_178011_a"
/** 
 * 
 * 
 * Parent Class: ServerListEntryNormal
 */
m.drawTextureAt = "func_178012_a"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
m.framebufferRenderExt = "func_178038_a"
/** 
 * 
 * 
 * Parent Class: ItemModelMesher
 */
m.getParticleIcon = "func_178087_a"
m.getModelManager = {}
/** 
 * 
 * 
 * Parent Class: ItemModelMesher
 */
m.getModelManager.ItemModelMesher = "func_178083_a"
/** 
 * 
 * 
 * Parent Class: BlockModelShapes
 */
m.getModelManager.BlockModelShapes = "func_178126_b"

/** 
 * 
 * 
 * Parent Class: ItemModelMesher
 */
m.rebuildCache = "func_178085_b"
/** 
 * 
 * 
 * Parent Class: ItemModelMesher
 */
m.getItemModel = "func_178089_a"
/** 
 * Render the player's arm
 *  
 * @param equipProgress The progress of equiping the item
 * @param swingProgress The swing movement progression
 * 
 * Parent Class: ItemRenderer
 */
m.renderPlayerArm = "func_178095_a"
/** 
 * Performs transformations prior to the rendering of a held item in first person.
 * 
 * Parent Class: ItemRenderer
 */
m.transformFirstPersonItem = "func_178096_b"
/** 
 * 
 * 
 * Parent Class: ItemRenderer
 */
m.renderItemMap = "func_178097_a"
/** 
 * Translate and rotate the render to look like holding a bow
 *  
 * @param partialTicks Partial ticks
 * 
 * Parent Class: ItemRenderer
 */
m.doBowTransformations = "func_178098_a"
m.renderItem = {}
/** 
 * 
 * 
 * Parent Class: ItemRenderer
 */
m.renderItem.ItemRenderer = "func_178099_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.renderItem.RenderItem = "func_181564_a"
/** 
 * 
 * 
 * Parent Class: RenderItemFrame
 */
m.renderItem.RenderItemFrame = "func_82402_b"

/** 
 * Return the angle to render the Map
 *  
 * @param pitch The player's pitch
 * 
 * Parent Class: ItemRenderer
 */
m.getMapAngleFromPitch = "func_178100_c"
/** 
 * Rotate the render around X and Y
 *  
 * @param angleY The angle for the rotation arround Y
 * 
 * Parent Class: ItemRenderer
 */
m.rotateArroundXAndY = "func_178101_a"
/** 
 * 
 * 
 * Parent Class: ItemRenderer
 */
m.renderPlayerArms = "func_178102_b"
/** 
 * Translate and rotate the render for holding a block
 * 
 * Parent Class: ItemRenderer
 */
m.doBlockTransformations = "func_178103_d"
/** 
 * Perform the drinking animation movement
 *  
 * @param partialTicks Partials ticks
 * 
 * Parent Class: ItemRenderer
 */
m.performDrinking = "func_178104_a"
/** 
 * Rotate and translate render to show item consumption
 *  
 * @param swingProgress The swing movement progress
 * 
 * Parent Class: ItemRenderer
 */
m.doItemUsedTransformations = "func_178105_d"
/** 
 * Returns true if given block is translucent
 * 
 * Parent Class: ItemRenderer
 */
m.isBlockTranslucent = "func_178107_a"
/** 
 * Render the block in the player's hand
 *  
 * @param partialTicks Partial ticks
 * @param atlas The TextureAtlasSprite to render
 * 
 * Parent Class: ItemRenderer
 */
m.renderBlockInHand = "func_178108_a"
/** 
 * Set the OpenGL LightMapTextureCoords based on the AbstractClientPlayer
 * 
 * Parent Class: ItemRenderer
 */
m.setLightMapFromPlayer = "func_178109_a"
/** 
 * Rotate the render according to the player's yaw and pitch
 * 
 * Parent Class: ItemRenderer
 */
m.rotateWithPlayerRotations = "func_178110_a"
/** 
 * 
 * 
 * Parent Class: BlockModelShapes
 */
m.registerAllBlocks = "func_178119_d"
/** 
 * 
 * 
 * Parent Class: BlockModelShapes
 */
m.getBlockStateMapper = "func_178120_a"
/** 
 * 
 * 
 * Parent Class: BlockModelShapes
 */
m.registerBlockWithStateMapper = "func_178121_a"
m.registerBuiltInBlocks = {}
/** 
 * 
 * 
 * Parent Class: BlockModelShapes
 */
m.registerBuiltInBlocks.BlockModelShapes = "func_178123_a"
/** 
 * 
 * 
 * Parent Class: BlockStateMapper
 */
m.registerBuiltInBlocks.BlockStateMapper = "func_178448_a"

/** 
 * 
 * 
 * Parent Class: BlockModelShapes
 */
m.reloadModels = "func_178124_c"
/** 
 * 
 * 
 * Parent Class: BlockModelShapes
 */
m.getModelForState = "func_178125_b"
/** 
 * 
 * 
 * Parent Class: IStateMapper
 */
m.putStateModelLocations = "func_178130_a"
/** 
 * 
 * 
 * Parent Class: StateMapperBase
 */
m.getPropertyString = "func_178131_a"
/** 
 * 
 * 
 * Parent Class: StateMap
 */
m.getModelResourceLocation = "func_178132_a"
/** 
 * "Like the version that takes an inventory. If the given TileEntity is not an Inventory
 * 
 * Parent Class: Container
 */
m.calcRedstone = "func_178144_a"
/** 
 * 
 * 
 * Parent Class: ContainerEnchantment
 */
m.getLapisAmount = "func_178147_e"
/** 
 * 
 * 
 * Parent Class: ViewFrustum
 */
m.createRenderChunks = "func_178158_a"
/** 
 * 
 * 
 * Parent Class: ViewFrustum
 */
m.setCountChunksXYZ = "func_178159_a"
m.deleteGlResources = {}
/** 
 * 
 * 
 * Parent Class: ViewFrustum
 */
m.deleteGlResources.ViewFrustum = "func_178160_a"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.deleteGlResources.RenderChunk = "func_178566_a"

m.getRenderChunk = {}
/** 
 * 
 * 
 * Parent Class: ViewFrustum
 */
m.getRenderChunk.ViewFrustum = "func_178161_a"
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.getRenderChunk.ChunkCompileTaskGenerator = "func_178536_b"

m.markBlocksForUpdate = {}
/** 
 * 
 * 
 * Parent Class: ViewFrustum
 */
m.markBlocksForUpdate.ViewFrustum = "func_178162_a"
/** 
 * Marks the blocks in the given range for update
 * 
 * Parent Class: RenderGlobal
 */
m.markBlocksForUpdate.RenderGlobal = "func_72725_b"

/** 
 * 
 * 
 * Parent Class: ViewFrustum
 */
m.updateChunkPositions = "func_178163_a"
m.getItemStackLimit = {}
/** 
 * 
 * 
 * Parent Class: Slot
 */
m.getItemStackLimit.Slot = "func_178170_b"
/** 
 * Returns the maximum size of the stack for a specific item. *Isn't this more a Set than a Get?*
 * 
 * Parent Class: Item
 */
m.getItemStackLimit.Item = "func_77639_j"

/** 
 * 
 * 
 * Parent Class: Slot
 */
m.getSlotTexture = "func_178171_c"
/** 
 * 
 * 
 * Parent Class: SlotFurnaceFuel
 */
m.isBucket = "func_178173_c_"
/** 
 * 
 * 
 * Parent Class: ChestRenderer
 */
m.renderChestBrightness = "func_178175_a"
/** 
 * 
 * 
 * Parent Class: VertexBufferUploader
 */
m.setVertexBuffer = "func_178178_a"
/** 
 * 
 * 
 * Parent Class: Tessellator
 */
m.getWorldRenderer = "func_178180_c"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer$VertexTranslations
 */
m.getVertexTranslations = "func_178184_a"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer$AmbientOcclusionFace
 */
m.getVertexBrightness = "func_178203_a"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer$AmbientOcclusionFace
 */
m.updateVertexBrightness = "func_178204_a"
/** 
 * 
 * 
 * Parent Class: BakedQuad
 */
m.getVertexData = "func_178209_a"
/** 
 * 
 * 
 * Parent Class: BakedQuad
 */
m.getFace = "func_178210_d"
/** 
 * 
 * 
 * Parent Class: BakedQuad
 */
m.getTintIndex = "func_178211_c"
/** 
 * 
 * 
 * Parent Class: BakedQuad
 */
m.hasTintIndex = "func_178212_b"
/** 
 * 
 * 
 * Parent Class: BreakingFour
 */
m.remapVert = "func_178216_a"
/** 
 * 
 * 
 * Parent Class: BreakingFour
 */
m.remapQuad = "func_178217_e"
/** 
 * 
 * 
 * Parent Class: BlockPart
 */
m.setDefaultUvs = "func_178235_a"
/** 
 * 
 * 
 * Parent Class: BlockPart
 */
m.getFaceUvs = "func_178236_a"
/** 
 * 
 * 
 * Parent Class: BlockPart$Deserializer
 */
m.parsePositionTo = "func_178247_d"
/** 
 * 
 * 
 * Parent Class: BlockPart$Deserializer
 */
m.parseEnumFacing = "func_178248_a"
/** 
 * 
 * 
 * Parent Class: BlockPart$Deserializer
 */
m.parsePositionFrom = "func_178249_e"
/** 
 * 
 * 
 * Parent Class: BlockPart$Deserializer
 */
m.parseFacesCheck = "func_178250_a"
/** 
 * 
 * 
 * Parent Class: BlockPart$Deserializer
 */
m.parsePosition = "func_178251_a"
/** 
 * 
 * 
 * Parent Class: BlockPart$Deserializer
 */
m.parseAxis = "func_178252_c"
/** 
 * 
 * 
 * Parent Class: BlockPart$Deserializer
 */
m.parseFaces = "func_178253_b"
/** 
 * 
 * 
 * Parent Class: BlockPart$Deserializer
 */
m.parseAngle = "func_178255_b"
m.parseRotation = {}
/** 
 * 
 * 
 * Parent Class: BlockPart$Deserializer
 */
m.parseRotation.BlockPart$Deserializer = "func_178256_a"
/** 
 * 
 * 
 * Parent Class: BlockFaceUV$Deserializer
 */
m.parseRotation.BlockFaceUV$Deserializer = "func_178291_a"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variant$Deserializer
 */
m.parseRotation.ModelBlockDefinition$Variant$Deserializer = "func_178428_a"

/** 
 * 
 * 
 * Parent Class: BlockModelRenderer
 */
m.renderModelStandard = "func_178258_b"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer
 */
m.renderModelStandardQuads = "func_178260_a"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer
 */
m.fillQuadBounds = "func_178261_a"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer
 */
m.renderModelBrightnessColor = "func_178262_a"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer
 */
m.renderModelAmbientOcclusionQuads = "func_178263_a"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer
 */
m.renderModelBrightnessColorQuads = "func_178264_a"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer
 */
m.renderModelAmbientOcclusion = "func_178265_a"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer
 */
m.renderModelBrightness = "func_178266_a"
/** 
 * 
 * 
 * Parent Class: BlockFluidRenderer
 */
m.initAtlasSprites = "func_178268_a"
/** 
 * 
 * 
 * Parent Class: BlockFluidRenderer
 */
m.getFluidHeight = "func_178269_a"
/** 
 * 
 * 
 * Parent Class: BlockFluidRenderer
 */
m.renderFluid = "func_178270_a"
/** 
 * 
 * 
 * Parent Class: BlockModelRenderer$EnumNeighborInfo
 */
m.getNeighbourInfo = "func_178273_a"
/** 
 * 
 * 
 * Parent Class: BlockFaceUV$Deserializer
 */
m.parseUV = "func_178292_b"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.deserialize = "func_178307_a"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.hasParent = "func_178295_k"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.getParentFromMap = "func_178299_a"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.isTexturePresent = "func_178300_b"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.resolveTextureName = "func_178308_c"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.isResolved = "func_178303_d"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.startsWithHash = "func_178304_d"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.getRootModel = "func_178310_f"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.checkModelHierarchy = "func_178312_b"
/** 
 * 
 * 
 * Parent Class: ModelBlock$Deserializer
 */
m.getModelElements = "func_178325_a"
/** 
 * 
 * 
 * Parent Class: ModelBlock$Deserializer
 */
m.getAmbientOcclusionEnabled = "func_178328_a"
/** 
 * 
 * 
 * Parent Class: ModelBlock$Deserializer
 */
m.getTextures = "func_178329_b"
m.getVariants = {}
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition
 */
m.getVariants.ModelBlockDefinition = "func_178330_b"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variants
 */
m.getVariants.ModelBlockDefinition$Variants = "func_178420_b"

/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition
 */
m.parseFromReader = "func_178331_a"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Deserializer
 */
m.parseVariantsList = "func_178334_a"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Deserializer
 */
m.parseVariants = "func_178335_a"
/** 
 * 
 * 
 * Parent Class: BlockPartFace$Deserializer
 */
m.parseTintIndex = "func_178337_a"
/** 
 * 
 * 
 * Parent Class: BlockPartFace$Deserializer
 */
m.parseCullFace = "func_178339_c"
/** 
 * 
 * 
 * Parent Class: BlockPartFace$Deserializer
 */
m.parseTexture = "func_178340_b"
/** 
 * 
 * 
 * Parent Class: BlockFaceUV
 */
m.setUvs = "func_178349_a"
/** 
 * 
 * 
 * Parent Class: ItemTransformVec3f$Deserializer
 */
m.parseVector3f = "func_178358_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.lockVertexUv = "func_178401_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.fillVertexData = "func_178402_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.getPositionsDiv16 = "func_178403_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.storeVertexData = "func_178404_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.makeQuadVertexData = "func_178405_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.rotateScale = "func_178406_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.rotatePart = "func_178407_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.applyFacing = "func_178408_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.lockUv = "func_178409_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.getFacingFromVertexData = "func_178410_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.getMatrixIdentity = "func_178411_a"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.getFaceBrightness = "func_178412_b"
/** 
 * 
 * 
 * Parent Class: FaceBakery
 */
m.getFaceShadeColor = "func_178413_a"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variant$Deserializer
 */
m.parseModel = "func_178424_b"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variant$Deserializer
 */
m.makeModelLocation = "func_178426_a"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variant$Deserializer
 */
m.parseWeight = "func_178427_c"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variant$Deserializer
 */
m.parseUvLock = "func_178429_d"
m.getRotation = {}
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variant
 */
m.getRotation.ModelBlockDefinition$Variant = "func_178432_b"
/** 
 * Return the rotation of the item currently on this frame.
 * 
 * Parent Class: EntityItemFrame
 */
m.getRotation.EntityItemFrame = "func_82333_j"

/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variant
 */
m.isUvLocked = "func_178433_c"
/** 
 * 
 * 
 * Parent Class: StateMap$Builder
 */
m.withSuffix = "func_178439_a"
/** 
 * 
 * 
 * Parent Class: StateMap$Builder
 */
m.withName = "func_178440_a"
/** 
 * "Add properties that will not be used to compute all possible states of a block
 * 
 * Parent Class: StateMap$Builder
 */
m.ignore = "func_178442_a"
/** 
 * 
 * 
 * Parent Class: BlockStateMapper
 */
m.putAllStateModelLocations = "func_178446_a"
/** 
 * 
 * 
 * Parent Class: BlockStateMapper
 */
m.registerBlockStateMapper = "func_178447_a"
m.cacheActiveRenderInfo = {}
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
m.cacheActiveRenderInfo.TileEntityRendererDispatcher = "func_178470_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.cacheActiveRenderInfo.RenderManager = "func_180597_a"

m.freeRenderBuilder = {}
/** 
 * 
 * 
 * Parent Class: ChunkRenderWorker
 */
m.freeRenderBuilder.ChunkRenderWorker = "func_178473_b"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.freeRenderBuilder.ChunkRenderDispatcher = "func_178512_a"

/** 
 * 
 * 
 * Parent Class: ChunkRenderWorker
 */
m.processTask = "func_178474_a"
m.getRegionRenderCacheBuilder = {}
/** 
 * 
 * 
 * Parent Class: ChunkRenderWorker
 */
m.getRegionRenderCacheBuilder.ChunkRenderWorker = "func_178475_b"
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.getRegionRenderCacheBuilder.ChunkCompileTaskGenerator = "func_178545_d"

/** 
 * 
 * 
 * Parent Class: CompiledChunk
 */
m.getTileEntities = "func_178485_b"
/** 
 * 
 * 
 * Parent Class: CompiledChunk$1
 */
m.setLayerUsed = "func_178486_a"
/** 
 * 
 * 
 * Parent Class: CompiledChunk
 */
m.getState = "func_178487_c"
/** 
 * 
 * 
 * Parent Class: CompiledChunk
 */
m.setVisibility = "func_178488_a"
/** 
 * 
 * 
 * Parent Class: CompiledChunk
 */
m.isLayerEmpty = "func_178491_b"
/** 
 * 
 * 
 * Parent Class: CompiledChunk
 */
m.isLayerStarted = "func_178492_d"
/** 
 * 
 * 
 * Parent Class: CompiledChunk$1
 */
m.setLayerStarted = "func_178493_c"
m.isVisible = {}
/** 
 * 
 * 
 * Parent Class: CompiledChunk$1
 */
m.isVisible.CompiledChunk$1 = "func_178495_a"
/** 
 * 
 * 
 * Parent Class: SetVisibility
 */
m.isVisible.SetVisibility = "func_178621_a"

/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.uploadChunk = "func_178503_a"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.getDebugInfo = "func_178504_a"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.updateChunkNow = "func_178505_b"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.uploadVertexBuffer = "func_178506_a"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.updateChunkLater = "func_178507_a"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.updateTransparencyLater = "func_178509_c"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.uploadDisplayList = "func_178510_a"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.getNextChunkUpdate = "func_178511_d"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.clearChunkUpdates = "func_178513_e"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.allocateRenderBuilder = "func_178515_c"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
m.runChunkUploads = "func_178516_a"
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.setStatus = "func_178535_a"
m.isFinished = {}
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.isFinished.ChunkCompileTaskGenerator = "func_178537_h"
/** 
 * Returns true if this path has reached the end
 * 
 * Parent Class: PathEntity
 */
m.isFinished.PathEntity = "func_75879_b"

/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.addFinishRunnable = "func_178539_a"
m.getLock = {}
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.getLock.ChunkCompileTaskGenerator = "func_178540_f"
/** 
 * 
 * 
 * Parent Class: LockCode
 */
m.getLock.LockCode = "func_180159_b"

/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.setRegionRenderCacheBuilder = "func_178541_a"
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.finish = "func_178542_e"
m.setCompiledChunk = {}
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.setCompiledChunk.ChunkCompileTaskGenerator = "func_178543_a"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.setCompiledChunk.RenderChunk = "func_178580_a"

m.getCompiledChunk = {}
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
m.getCompiledChunk.ChunkCompileTaskGenerator = "func_178544_c"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.getCompiledChunk.RenderChunk = "func_178571_g"

/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.getVertexBufferByLayer = "func_178565_b"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.initModelviewMatrix = "func_178567_n"
m.getPosition = {}
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.getPosition.RenderChunk = "func_178568_j"
/** 
 * 
 * 
 * Parent Class: ActiveRenderInfo
 */
m.getPosition.ActiveRenderInfo = "func_178804_a"
/** 
 * 
 * 
 * Parent Class: C07PacketPlayerDigging
 */
m.getPosition.C07PacketPlayerDigging = "func_179715_a"
/** 
 * 
 * 
 * Parent Class: C12PacketUpdateSign
 */
m.getPosition.C12PacketUpdateSign = "func_179722_a"
/** 
 * 
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
m.getPosition.C08PacketPlayerBlockPlacement = "func_179724_a"
/** 
 * 
 * 
 * Parent Class: S25PacketBlockBreakAnim
 */
m.getPosition.S25PacketBlockBreakAnim = "func_179821_b"
/** 
 * 
 * 
 * Parent Class: S10PacketSpawnPainting
 */
m.getPosition.S10PacketSpawnPainting = "func_179837_b"
/** 
 * 
 * 
 * Parent Class: DestroyBlockProgress
 */
m.getPosition.DestroyBlockProgress = "func_180246_b"
/** 
 * 
 * 
 * Parent Class: BlockEventData
 */
m.getPosition.BlockEventData = "func_180328_a"
/** 
 * "Get the position in the world. <b>{@code null} is not allowed!</b> If you are not an entity in the world
 * 
 * Parent Class: EntityMinecartCommandBlock$1
 */
m.getPosition.EntityMinecartCommandBlock$1 = "func_180425_c"
/** 
 * returns the current PathEntity target node as Vec3D
 * 
 * Parent Class: PathEntity
 */
m.getPosition.PathEntity = "func_75878_a"

/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.isNeedsUpdate = "func_178569_m"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.resortTransparency = "func_178570_a"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.multModelviewMatrix = "func_178572_f"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.preRenderBlocks = "func_178573_a"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.makeCompileTaskChunk = "func_178574_d"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.setNeedsUpdate = "func_178575_a"
m.setPosition = {}
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.setPosition.RenderChunk = "func_178576_a"
/** 
 * "Sets the x
 * 
 * Parent Class: EntityMinecart
 */
m.setPosition.EntityMinecart = "func_70107_b"
/** 
 * 
 * 
 * Parent Class: Frustum
 */
m.setPosition.Frustum = "func_78547_a"

/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.setFrameIndex = "func_178577_a"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.finishCompileTask = "func_178578_b"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.getLockCompileTask = "func_178579_c"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.rebuildChunk = "func_178581_b"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.makeCompileTaskTransparency = "func_178582_e"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.postRenderBlocks = "func_178584_a"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.stopCompileTask = "func_178585_h"
/** 
 * 
 * 
 * Parent Class: ListedRenderChunk
 */
m.getDisplayList = "func_178600_a"
/** 
 * 
 * 
 * Parent Class: VboChunkFactory
 */
m.makeRenderChunk = "func_178602_a"
/** 
 * 
 * 
 * Parent Class: VisGraph
 */
m.computeVisibility = "func_178607_a"
/** 
 * 
 * 
 * Parent Class: SetVisibility
 */
m.setAllVisible = "func_178618_a"
/** 
 * 
 * 
 * Parent Class: SetVisibility
 */
m.setManyVisible = "func_178620_a"
/** 
 * 
 * 
 * Parent Class: ClippingHelper
 */
m.dot = "func_178624_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.isRenderShadow = "func_178627_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.setRenderPosition = "func_178628_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.setDebugBoundingBox = "func_178629_b"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.renderWitherSkull = "func_178630_b"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.setPlayerViewY = "func_178631_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.setRenderShadow = "func_178633_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.isDebugBoundingBox = "func_178634_b"
/** 
 * 
 * 
 * Parent Class: TeleportToTeam$TeamSelectionObject
 */
m.getSpectatorName = "func_178664_z_"
/** 
 * "Copies the angles from one object to another. This is used when objects should stay aligned with each other
 * 
 * Parent Class: ModelBase
 */
m.copyModelAngles = "func_178685_a"
/** 
 * 
 * 
 * Parent Class: ModelBase
 */
m.setModelAttributes = "func_178686_a"
/** 
 * Renders the banner model in.
 * 
 * Parent Class: ModelBanner
 */
m.renderBanner = "func_178687_a"
/** 
 * 
 * 
 * Parent Class: ModelRabbit
 */
m.setRotationOffset = "func_178691_a"
/** 
 * 
 * 
 * Parent Class: ModelPlayer
 */
m.postRenderArm = "func_178718_a"
m.setInvisible = {}
/** 
 * 
 * 
 * Parent Class: ModelPlayer
 */
m.setInvisible.ModelPlayer = "func_178719_a"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.setInvisible.EntityArmorStand = "func_82142_c"

/** 
 * 
 * 
 * Parent Class: ModelPlayer
 */
m.renderDeadmau5Head = "func_178727_b"
/** 
 * 
 * 
 * Parent Class: ModelPlayer
 */
m.renderCape = "func_178728_c"
m.draw = {}
/** 
 * Draw this primitve. This is typically called only once as the generated drawing instructions are saved by the renderer and reused later.
 * 
 * Parent Class: TexturedQuad
 */
m.draw.TexturedQuad = "func_178765_a"
/** 
 * Draw with the WorldRenderer
 *  
 * @param posX X position for the render
 * @param posY Y position for the render
 * @param texU X position for the texture
 * @param texV Y position for the texture
 * @param width Width of the render
 * @param height Height of the render
 * @param red The red component of the render's color
 * @param green The green component of the render's color
 * @param blue The blue component of the render's color
 * @param alpha The alpha component of the render's color
 * 
 * Parent Class: Minecraft
 */
m.draw.Minecraft = "func_181536_a"
/** 
 * Draw with the WorldRenderer
 *  
 * @param renderer The WorldRenderer's instance
 * @param x X position where the render begin
 * @param y Y position where the render begin
 * @param width The width of the render
 * @param height The height of the render
 * @param red Red component of the color
 * @param green Green component of the color
 * @param blue Blue component of the color
 * @param alpha Alpha component of the color
 * 
 * Parent Class: RenderItem
 */
m.draw.RenderItem = "func_181565_a"
/** 
 * 
 * 
 * Parent Class: VertexBufferUploader
 */
m.draw.VertexBufferUploader = "func_181679_a"
/** 
 * Draws the data set up in this tessellator and resets the state to prepare for new drawing.
 * 
 * Parent Class: Tessellator
 */
m.draw.Tessellator = "func_78381_a"

/** 
 * 
 * 
 * Parent Class: ScoreObjective
 */
m.setRenderType = "func_178767_a"
/** 
 * "Creates a textured box. Args: originX
 * 
 * Parent Class: ModelRenderer
 */
m.addBox = "func_78790_a"
m.getNameTagVisibility = {}
/** 
 * 
 * 
 * Parent Class: Team
 */
m.getNameTagVisibility.Team = "func_178770_i"
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
m.getNameTagVisibility.S3EPacketTeams = "func_179814_i"

/** 
 * 
 * 
 * Parent Class: Team
 */
m.getDeathMessageVisibility = "func_178771_j"
/** 
 * 
 * 
 * Parent Class: ScorePlayerTeam
 */
m.setNameTagVisibility = "func_178772_a"
/** 
 * 
 * 
 * Parent Class: ScorePlayerTeam
 */
m.setDeathMessageVisibility = "func_178773_b"
/** 
 * 
 * 
 * Parent Class: ScorePlayerTeam
 */
m.setChatFormat = "func_178774_a"
/** 
 * 
 * 
 * Parent Class: ScorePlayerTeam
 */
m.getChatFormat = "func_178775_l"
/** 
 * Retrieves an instance of the threadedFileIOBase.
 * 
 * Parent Class: ThreadedFileIOBase
 */
m.getThreadedIOInstance = "func_178779_a"
/** 
 * "returns an AABB with corners x1
 * 
 * Parent Class: AxisAlignedBB
 */
m.fromBounds = "func_178781_a"
m.getBlockPos = {}
/** 
 * 
 * 
 * Parent Class: MovingObjectPosition
 */
m.getBlockPos.MovingObjectPosition = "func_178782_a"
/** 
 * 
 * 
 * Parent Class: BlockSourceImpl
 */
m.getBlockPos.BlockSourceImpl = "func_180699_d"

/** 
 * 
 * 
 * Parent Class: Vec3
 */
m.rotateYaw = "func_178785_b"
/** 
 * 
 * 
 * Parent Class: Vec3
 */
m.rotatePitch = "func_178789_a"
/** 
 * 
 * 
 * Parent Class: ActiveRenderInfo
 */
m.getRotationZ = "func_178803_d"
/** 
 * 
 * 
 * Parent Class: ActiveRenderInfo
 */
m.getRotationYZ = "func_178805_e"
/** 
 * 
 * 
 * Parent Class: ActiveRenderInfo
 */
m.projectViewFromEntity = "func_178806_a"
/** 
 * 
 * 
 * Parent Class: ActiveRenderInfo
 */
m.getRotationXY = "func_178807_f"
/** 
 * 
 * 
 * Parent Class: ActiveRenderInfo
 */
m.getRotationX = "func_178808_b"
/** 
 * 
 * 
 * Parent Class: ActiveRenderInfo
 */
m.getRotationXZ = "func_178809_c"
/** 
 * 
 * 
 * Parent Class: Score
 */
m.setLocked = "func_178815_a"
/** 
 * Returns if the entity has the given ScoreObjective
 * 
 * Parent Class: Scoreboard
 */
m.entityHasObjective = "func_178819_b"
/** 
 * 
 * 
 * Parent Class: Scoreboard
 */
m.getDisplaySlotStrings = "func_178821_h"
/** 
 * Remove the given ScoreObjective for the given Entity name.
 * 
 * Parent Class: Scoreboard
 */
m.removeObjectiveFromEntity = "func_178822_d"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.setResponseTime = "func_178838_a"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.loadPlayerTextures = "func_178841_j"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.getPlayerTeam = "func_178850_i"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.getResponseTime = "func_178853_c"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.hasLocationSkin = "func_178856_e"
m.setDisplayName = {}
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
m.setDisplayName.NetworkPlayerInfo = "func_178859_a"
/** 
 * 
 * 
 * Parent Class: ScoreObjective
 */
m.setDisplayName.ScoreObjective = "func_96681_a"

/** 
 * 
 * 
 * Parent Class: GLAllocation
 */
m.deleteDisplayLists = "func_74523_b"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
m.getModelParts = "func_178876_d"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
m.switchModelPartEnabled = "func_178877_a"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
m.setModelPartEnabled = "func_178878_a"
/** 
 * 
 * 
 * Parent Class: PlayerControllerMP
 */
m.isSpectatorMode = "func_178887_k"
/** 
 * Called when a player completes the destruction of a block
 * 
 * Parent Class: PlayerControllerMP
 */
m.onPlayerDestroyBlock = "func_178888_a"
/** 
 * 
 * 
 * Parent Class: PlayerControllerMP
 */
m.getCurrentGameType = "func_178889_l"
/** 
 * 
 * 
 * Parent Class: PlayerControllerMP
 */
m.onPlayerRightClick = "func_178890_a"
/** 
 * 
 * 
 * Parent Class: PlayerControllerMP
 */
m.clickBlockCreative = "func_178891_a"
/** 
 * 
 * 
 * Parent Class: PlayerControllerMP
 */
m.isHittingPosition = "func_178893_a"
/** 
 * Return true when the player rightclick on an entity
 *  
 * @param player The player's instance
 * @param entityIn The entity clicked
 * @param movingObject The object clicked
 * 
 * Parent Class: PlayerControllerMP
 */
m.isPlayerRightClickingOnEntity = "func_178894_a"
/** 
 * 
 * 
 * Parent Class: EntityRainFX$Factory
 */
m.getEntityFX = "func_178902_a"
/** 
 * 
 * 
 * Parent Class: GuiUtilRenderComponents
 */
m.splitText = "func_178908_a"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.updateEffectLayer = "func_178922_a"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.tickParticle = "func_178923_d"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.moveToLayer = "func_178924_a"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.updateEffectAlphaLayer = "func_178925_a"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.emitParticleAtEntity = "func_178926_a"
/** 
 * "Spawns the relevant particle according to the particle id.
 *  
 * @param xCoord X position of the particle
 * @param yCoord Y position of the particle
 * @param zCoord Z position of the particle
 * @param xSpeed X speed of the particle
 * @param ySpeed Y speed of the particle
 * @param zSpeed Z speed of the particle
 * @param parameters Parameters for the particle (color for redstone
 * 
 * Parent Class: EffectRenderer
 */
m.spawnEffectParticle = "func_178927_a"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.moveToAlphaLayer = "func_178928_b"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.registerParticle = "func_178929_a"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.registerVanillaParticles = "func_178930_c"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.moveToNoAlphaLayer = "func_178931_c"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.putBrightness4 = "func_178962_a"
m.reset = {}
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.reset.WorldRenderer = "func_178965_a"
/** 
 * 
 * 
 * Parent Class: MouseFilter
 */
m.reset.MouseFilter = "func_180179_a"
/** 
 * Resets the byte array output.
 * 
 * Parent Class: RConOutputStream
 */
m.reset.RConOutputStream = "func_72669_b"
/** 
 * Resets this trackers list of combat entries
 * 
 * Parent Class: CombatTracker
 */
m.reset.CombatTracker = "func_94549_h"

/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.getByteBuffer = "func_178966_f"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.putColor4 = "func_178968_d"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.setTranslation = "func_178969_c"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.putColorRGBA = "func_178972_a"
m.getVertexFormat = {}
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.getVertexFormat.WorldRenderer = "func_178973_g"
/** 
 * 
 * 
 * Parent Class: WorldRenderer$State
 */
m.getVertexFormat.WorldRenderer$State = "func_179016_d"

/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.putNormal = "func_178975_e"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.finishDrawing = "func_178977_d"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.putColorMultiplier = "func_178978_a"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.getDrawMode = "func_178979_i"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.addVertexData = "func_178981_a"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.putPosition = "func_178987_a"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.putColor = "func_178988_b"
m.getVertexCount = {}
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.getVertexCount.WorldRenderer = "func_178989_h"
/** 
 * 
 * 
 * Parent Class: WorldRenderer$State
 */
m.getVertexCount.WorldRenderer$State = "func_179014_c"

/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.putColorRGB_F4 = "func_178990_f"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.setVertexState = "func_178993_a"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.putColorRGB_F = "func_178994_b"
/** 
 * 
 * 
 * Parent Class: WorldRenderer$State
 */
m.getRawBuffer = "func_179013_a"
/** 
 * 
 * 
 * Parent Class: TileEntityItemStackRenderer
 */
m.renderByItem = "func_179022_a"
/** 
 * 
 * 
 * Parent Class: EnumFaceDirection
 */
m.getVertexInformation = "func_179025_a"
/** 
 * 
 * 
 * Parent Class: RegionRenderCacheBuilder
 */
m.getWorldRendererByLayer = "func_179038_a"
/** 
 * 
 * 
 * Parent Class: RegionRenderCacheBuilder
 */
m.getWorldRendererByLayerId = "func_179039_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.clearColor = "func_179082_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.viewport = "func_179083_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableBlend = "func_179084_k"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableLight = "func_179085_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableTexGenCoord = "func_179087_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enablePolygonOffset = "func_179088_q"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableCull = "func_179089_o"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableTexture2D = "func_179090_x"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableRescaleNormal = "func_179091_B"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.alphaFunc = "func_179092_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.setFog = "func_179093_d"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.pushMatrix = "func_179094_E"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.setFogDensity = "func_179095_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.loadIdentity = "func_179096_D"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableDepth = "func_179097_i"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableTexture2D = "func_179098_w"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.popAttrib = "func_179099_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableTexGenCoord = "func_179100_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableRescaleNormal = "func_179101_C"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.setFogStart = "func_179102_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.shadeModel = "func_179103_j"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.colorMaterial = "func_179104_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.texGen = "func_179149_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableFog = "func_179106_n"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.cullFace = "func_179107_e"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableNormalize = "func_179108_z"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.translate = "func_179137_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.multMatrix = "func_179110_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.blendFunc = "func_179112_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disablePolygonOffset = "func_179113_r"
m.rotate = {}
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.rotate.GlStateManager = "func_179114_b"
/** 
 * 
 * 
 * Parent Class: Stitcher$Holder
 */
m.rotate.Stitcher$Holder = "func_94194_d"

/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableColorLogic = "func_179115_u"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.colorLogicOp = "func_179116_f"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.resetColor = "func_179117_G"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableAlpha = "func_179118_c"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableColorMaterial = "func_179119_h"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.tryBlendFuncSeparate = "func_179120_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.popMatrix = "func_179121_F"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableLight = "func_179122_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.pushAttrib = "func_179123_a"
m.color = {}
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.color.GlStateManager = "func_179131_c"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.color.WorldRenderer = "func_181669_b"

/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.texGenCoord = "func_179125_c"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableDepth = "func_179126_j"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableFog = "func_179127_m"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.matrixMode = "func_179128_n"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableCull = "func_179129_p"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.ortho = "func_179130_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.depthMask = "func_179132_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableNormalize = "func_179133_A"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableColorLogic = "func_179134_v"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.colorMask = "func_179135_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.doPolygonOffset = "func_179136_a"
m.setActiveTexture = {}
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.setActiveTexture.GlStateManager = "func_179138_g"
/** 
 * Sets the current lightmap texture to the specified OpenGL constant
 * 
 * Parent Class: OpenGlHelper
 */
m.setActiveTexture.OpenGlHelper = "func_77473_a"

/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.scale = "func_179152_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.disableLighting = "func_179140_f"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableAlpha = "func_179141_d"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableColorMaterial = "func_179142_g"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.depthFunc = "func_179143_c"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableLighting = "func_179145_e"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.generateTexture = "func_179146_y"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.enableBlend = "func_179147_l"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.callList = "func_179148_o"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.clearDepth = "func_179151_a"
/** 
 * 
 * 
 * Parent Class: GlStateManager
 */
m.setFogEnd = "func_179153_c"
/** 
 * 
 * 
 * Parent Class: GlStateManager$BooleanState
 */
m.setDisabled = "func_179198_a"
/** 
 * Register a default ItemBlock for the given Block.
 * 
 * Parent Class: Item
 */
m.registerItemBlock = "func_179216_c"
/** 
 * Called when an ItemStack with NBT data is read to potentially that ItemStack's NBT data
 * 
 * Parent Class: Item
 */
m.updateItemStackNBT = "func_179215_a"
m.onBlockDestroyed = {}
/** 
 * "Called when a Block is destroyed using this Item. Return true to trigger the ""Use Item"" statistic."
 * 
 * Parent Class: Item
 */
m.onBlockDestroyed.Item = "func_179218_a"
/** 
 * Called when a Block is destroyed using this ItemStack
 * 
 * Parent Class: ItemStack
 */
m.onBlockDestroyed.ItemStack = "func_179548_a"

/** 
 * 
 * 
 * Parent Class: ItemArmorStand
 */
m.applyRandomRotations = "func_179221_a"
/** 
 * 
 * 
 * Parent Class: ItemBlock
 */
m.setTileEntityNBT = "func_179224_a"
/** 
 * 
 * 
 * Parent Class: ItemEditableBook
 */
m.resolveContents = "func_179229_a"
/** 
 * Gets the generation of the book (how many times it has been cloned)
 * 
 * Parent Class: ItemEditableBook
 */
m.getGeneration = "func_179230_h"
/** 
 * 
 * 
 * Parent Class: ItemHoe
 */
m.useHoe = "func_179232_a"
/** 
 * 
 * 
 * Parent Class: ItemHangingEntity
 */
m.createEntity = "func_179233_a"
/** 
 * 
 * 
 * Parent Class: ItemDye
 */
m.applyBonemeal = "func_179234_a"
m.placeDoor = {}
/** 
 * 
 * 
 * Parent Class: ItemDoor
 */
m.placeDoor.ItemDoor = "func_179235_a"
/** 
 * builds a door of the enumerated types (empty opening is a door)
 * 
 * Parent Class: StructureStrongholdPieces$Stronghold
 */
m.placeDoor.StructureStrongholdPieces$Stronghold = "func_74990_a"

/** 
 * "Merges this NBTTagCompound with the given compound. Any sub-compounds are merged using the same methods
 * 
 * Parent Class: NBTTagCompound
 */
m.merge = "func_179237_a"
/** 
 * 
 * 
 * Parent Class: EnumConnectionState
 */
m.registerPacket = "func_179245_a"
/** 
 * 
 * 
 * Parent Class: EnumConnectionState
 */
m.getPacketId = "func_179246_a"
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.writeEnumValue = "func_179249_a"
m.writeByteArray = {}
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.writeByteArray.PacketBuffer = "func_179250_a"
/** 
 * Writes the given byte array to the output stream
 * 
 * Parent Class: RConOutputStream
 */
m.writeByteArray.RConOutputStream = "func_72670_a"

/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.readByteArray = "func_179251_a"
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.writeUuid = "func_179252_a"
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.readUuid = "func_179253_g"
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.writeVarLong = "func_179254_b"
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.writeBlockPos = "func_179255_a"
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.writeChatComponent = "func_179256_a"
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.readEnumValue = "func_179257_a"
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.readChatComponent = "func_179258_d"
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.readBlockPos = "func_179259_c"
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.readVarLong = "func_179260_f"
m.setCompressionTreshold = {}
/** 
 * 
 * 
 * Parent Class: NetworkManager
 */
m.setCompressionTreshold.NetworkManager = "func_179289_a"
/** 
 * 
 * 
 * Parent Class: NettyCompressionEncoder
 */
m.setCompressionTreshold.NettyCompressionEncoder = "func_179299_a"
/** 
 * 
 * 
 * Parent Class: NettyCompressionDecoder
 */
m.setCompressionTreshold.NettyCompressionDecoder = "func_179303_a"

/** 
 * 
 * 
 * Parent Class: NetworkManager
 */
m.hasNoChannel = "func_179291_h"
/** 
 * 
 * 
 * Parent Class: NetworkManager
 */
m.getIsencrypted = "func_179292_f"
/** 
 * 
 * 
 * Parent Class: NetworkManager
 */
m.checkDisconnected = "func_179293_l"
/** 
 * "Like cartesianProduct(Class
 * 
 * Parent Class: Cartesian
 */
m.cartesianProduct = "func_179321_a"
/** 
 * 
 * 
 * Parent Class: Cartesian
 */
m.createArray = "func_179319_b"
/** 
 * Create a new Array of type clazz with the contents of the given Iterable
 * 
 * Parent Class: Cartesian
 */
m.toArray = "func_179322_b"
/** 
 * Convert an Iterable of Arrays (Object[]) to an Iterable of Lists
 * 
 * Parent Class: Cartesian
 */
m.arraysAsLists = "func_179323_b"
/** 
 * 
 * 
 * Parent Class: EnumPlayerModelParts
 */
m.getPartMask = "func_179327_a"
/** 
 * 
 * 
 * Parent Class: EnumPlayerModelParts
 */
m.getPartId = "func_179328_b"
/** 
 * 
 * 
 * Parent Class: EnumPlayerModelParts
 */
m.getPartName = "func_179329_c"
/** 
 * Gets the relative EnumParticleTypes by id.
 * 
 * Parent Class: EnumParticleTypes
 */
m.getParticleFromId = "func_179342_a"
m.hasArguments = {}
/** 
 * 
 * 
 * Parent Class: EnumParticleTypes
 */
m.hasArguments.EnumParticleTypes = "func_179343_f"
/** 
 * Returns whether the given token has any arguments set.
 * 
 * Parent Class: PlayerSelector
 */
m.hasArguments.PlayerSelector = "func_82378_b"

/** 
 * 
 * 
 * Parent Class: EnumParticleTypes
 */
m.getShouldIgnoreRange = "func_179344_e"
/** 
 * 
 * 
 * Parent Class: EnumParticleTypes
 */
m.getArgumentCount = "func_179345_d"
/** 
 * 
 * 
 * Parent Class: EnumParticleTypes
 */
m.getParticleName = "func_179346_b"
/** 
 * 
 * 
 * Parent Class: EnumParticleTypes
 */
m.getParticleID = "func_179348_c"
/** 
 * 
 * 
 * Parent Class: EnumParticleTypes
 */
m.getParticleNames = "func_179349_a"
/** 
 * Populate the given Map with the given keys and values.
 * 
 * Parent Class: MapPopulator
 */
m.populateMap = "func_179399_a"
/** 
 * Create a Map from the given keys and values. This method creates a LinkedHashMap.
 * 
 * Parent Class: MapPopulator
 */
m.createMap = "func_179400_b"
/** 
 * Affects the given MerchantRecipeList to possibly add or remove MerchantRecipes.
 * 
 * Parent Class: EntityVillager$ITradeList
 */
m.modifyMerchantRecipeList = "func_179401_a"
/** 
 * 
 * 
 * Parent Class: EntityVillager$PriceInfo
 */
m.getPrice = "func_179412_a"
/** 
 * Called when no more data is available in this Iterator.
 * 
 * Parent Class: Cartesian$Product$ProductIterator
 */
m.endOfData = "func_179422_b"
/** 
 * Return the max target range of the entiity (16 by default)
 * 
 * Parent Class: EntityAIFindEntityNearestPlayer
 */
m.maxTargetRange = "func_179431_f"
/** 
 * 
 * 
 * Parent Class: EntityAIFindEntityNearest
 */
m.getFollowRange = "func_179438_f"
/** 
 * "A method used to see if an entity is a suitable target through a number of checks. Args : entity
 * 
 * Parent Class: EntityAITarget
 */
m.isSuitableTarget = "func_75296_a"
/** 
 * 
 * 
 * Parent Class: EntityPigZombie$AIHurtByAggressor
 */
m.setEntityAttackTarget = "func_179446_a"
/** 
 * Changes task random possibility for execution
 * 
 * Parent Class: EntityAIWander
 */
m.setExecutionChance = "func_179479_b"
/** 
 * Makes task to bypass chance
 * 
 * Parent Class: EntityAIWander
 */
m.makeUpdate = "func_179480_f"
/** 
 * 
 * 
 * Parent Class: EntityAIMoveToBlock
 */
m.getIsAboveDestination = "func_179487_f"
/** 
 * Return true to set given position as destination
 * 
 * Parent Class: EntityRabbit$AIRaidFarm
 */
m.shouldMoveTo = "func_179488_a"
/** 
 * "Searches and sets new destination block and returns true if a suitable block (specified in {@link net.minecraft.entity.ai.EntityAIMoveToBlock#shouldMoveTo(World
 * 
 * Parent Class: EntityAIMoveToBlock
 */
m.searchForDestination = "func_179489_g"
/** 
 * 
 * 
 * Parent Class: EntityAIDoorInteract
 */
m.getBlockDoor = "func_179506_a"
/** 
 * All EnumFacing values for this Plane
 * 
 * Parent Class: EnumFacing$Plane
 */
m.facings = "func_179516_a"
m.getOffset = {}
/** 
 * "Get the offset for this AxisDirection. 1 for POSITIVE
 * 
 * Parent Class: EnumFacing$AxisDirection
 */
m.getOffset.EnumFacing$AxisDirection = "func_179524_a"
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.getOffset.VertexFormat = "func_181720_d"
/** 
 * "args: x
 * 
 * Parent Class: RegionFile
 */
m.getOffset.RegionFile = "func_76707_e"

/** 
 * 
 * 
 * Parent Class: ShapelessRecipes
 */
m.getRemainingItems = "func_179532_b"
m.addRecipes = {}
/** 
 * Adds the banner recipes to the CraftingManager.
 * 
 * Parent Class: RecipesBanners
 */
m.addRecipes.RecipesBanners = "func_179534_a"
/** 
 * Adds the weapon recipes to the CraftingManager.
 * 
 * Parent Class: RecipesWeapons
 */
m.addRecipes.RecipesWeapons = "func_77583_a"
/** 
 * Adds the tool recipes to the CraftingManager.
 * 
 * Parent Class: RecipesTools
 */
m.addRecipes.RecipesTools = "func_77586_a"
/** 
 * Adds the crafting recipes to the CraftingManager.
 * 
 * Parent Class: RecipesCrafting
 */
m.addRecipes.RecipesCrafting = "func_77589_a"
/** 
 * Adds the ingot recipes to the CraftingManager.
 * 
 * Parent Class: RecipesIngots
 */
m.addRecipes.RecipesIngots = "func_77590_a"
/** 
 * Adds the dye recipes to the CraftingManager.
 * 
 * Parent Class: RecipesDyes
 */
m.addRecipes.RecipesDyes = "func_77607_a"
/** 
 * Adds the food recipes to the CraftingManager.
 * 
 * Parent Class: RecipesFood
 */
m.addRecipes.RecipesFood = "func_77608_a"
/** 
 * Adds the armor recipes to the CraftingManager.
 * 
 * Parent Class: RecipesArmor
 */
m.addRecipes.RecipesArmor = "func_77609_a"

/** 
 * Get an NBTTagCompound from this stack's NBT data.
 * 
 * Parent Class: ItemStack
 */
m.getSubCompound = "func_179543_a"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.canDestroy = "func_179544_c"
/** 
 * Compares Item and damage value of the two stacks
 * 
 * Parent Class: ItemStack
 */
m.areItemsEqual = "func_179545_c"
m.onItemUse = {}
/** 
 * "Called when the player uses this ItemStack on a Block (right-click). Places blocks
 * 
 * Parent Class: ItemStack
 */
m.onItemUse.ItemStack = "func_179546_a"
/** 
 * Called when a Block is right-clicked with this Item
 * 
 * Parent Class: ItemLead
 */
m.onItemUse.ItemLead = "func_180614_a"

/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.getIsItemStackEqual = "func_179549_c"
/** 
 * 
 * 
 * Parent Class: Items
 */
m.getRegisteredItem = "func_179554_a"
/** 
 * Returns the names of all possible Result Types.
 * 
 * Parent Class: CommandResultStats$Type
 */
m.getTypeNames = "func_179634_c"
/** 
 * Retrieves the Type indicated by the supplied name string.
 * 
 * Parent Class: CommandResultStats$Type
 */
m.getTypeByName = "func_179635_a"
/** 
 * Retrieves the integer ID of the result type.
 * 
 * Parent Class: CommandResultStats$Type
 */
m.getTypeID = "func_179636_a"
/** 
 * Retrieves the name of the type.
 * 
 * Parent Class: CommandResultStats$Type
 */
m.getTypeName = "func_179637_b"
/** 
 * 
 * 
 * Parent Class: PlayerSelector
 */
m.getNamePredicates = "func_179647_f"
/** 
 * 
 * 
 * Parent Class: PlayerSelector
 */
m.getXpLevelPredicates = "func_179648_b"
/** 
 * 
 * 
 * Parent Class: PlayerSelector
 */
m.getGamemodePredicates = "func_179649_c"
/** 
 * Returns one entity of the given class that matches the given at-token. Returns null if more than one entity matches.
 * 
 * Parent Class: PlayerSelector
 */
m.matchOneEntity = "func_179652_a"
m.parseIntWithDefault = {}
/** 
 * 
 * 
 * Parent Class: PlayerSelector
 */
m.parseIntWithDefault.PlayerSelector = "func_179653_a"
/** 
 * 
 * 
 * Parent Class: ServerAddress
 */
m.parseIntWithDefault.ServerAddress = "func_78862_a"
/** 
 * parses the string as integer or returns the second parameter if it fails
 * 
 * Parent Class: MathHelper
 */
m.parseIntWithDefault.MathHelper = "func_82715_a"

/** 
 * Returns the worlds to match the entities in for the specified command sender and token. This returns the sender's world if the selector specifies a location or all currently loaded worlds on the server if not.
 * 
 * Parent Class: PlayerSelector
 */
m.getWorlds = "func_179654_a"
/** 
 * Checks to make sure that the specified type is valid
 * 
 * Parent Class: PlayerSelector
 */
m.isEntityTypeValid = "func_179655_b"
/** 
 * Returns all entities of the given class that matches the given at-token in a list.
 * 
 * Parent Class: PlayerSelector
 */
m.matchEntities = "func_179656_b"
/** 
 * 
 * 
 * Parent Class: PlayerSelector
 */
m.getScorePredicates = "func_179657_e"
/** 
 * 
 * 
 * Parent Class: PlayerSelector
 */
m.getTeamPredicates = "func_179659_d"
/** 
 * Filters the results based on the paramaters of the selector
 * 
 * Parent Class: PlayerSelector
 */
m.filterResults = "func_179660_a"
/** 
 * 
 * 
 * Parent Class: PlayerSelector
 */
m.getRotationsPredicates = "func_179662_g"
/** 
 * Set a stat in the scoreboard
 *  
 * @param entityID The username of the player or the UUID of an Entity
 * @param objectiveName The name of the Objective
 * 
 * Parent Class: CommandResultStats
 */
m.setScoreBoardStat = "func_179667_a"
/** 
 * 
 * 
 * Parent Class: CommandResultStats
 */
m.readStatsFromNBT = "func_179668_a"
/** 
 * Remove a stat from the scoreboard
 * 
 * Parent Class: CommandResultStats
 */
m.removeScoreBoardStat = "func_179669_a"
/** 
 * 
 * 
 * Parent Class: CommandResultStats
 */
m.writeStatsToNBT = "func_179670_b"
/** 
 * Add all stats in the CommandResultStats
 * 
 * Parent Class: CommandResultStats
 */
m.addAllStats = "func_179671_a"
/** 
 * Set the score on the ScoreBoard
 *  
 * @param scorePoint The score to set to the score board
 * 
 * Parent Class: CommandResultStats
 */
m.setCommandStatScore = "func_179672_a"
/** 
 * "Checks if entity haven't been moved when last checked and if so
 * 
 * Parent Class: PathNavigate
 */
m.checkForStuck = "func_179677_a"
/** 
 * Sets vertical space requirement for path
 * 
 * Parent Class: PathNavigate
 */
m.setHeightRequirement = "func_179678_a"
/** 
 * 
 * 
 * Parent Class: PathNavigateSwimmer
 */
m.getPathFinder = "func_179679_a"
/** 
 * Returns path to given BlockPos
 * 
 * Parent Class: PathNavigateClimber
 */
m.getPathToPos = "func_179680_a"
/** 
 * "Returns true when an entity could stand at a position
 * 
 * Parent Class: PathNavigateGround
 */
m.isSafeToStandAt = "func_179683_a"
/** 
 * 
 * 
 * Parent Class: PathNavigateGround
 */
m.setAvoidSun = "func_179685_e"
/** 
 * Gets the safe pathing Y position for the entity depending on if it can path swim or not
 * 
 * Parent Class: PathNavigateGround
 */
m.getPathablePosY = "func_179687_p"
/** 
 * Returns true if an entity does not collide with any solid blocks at the position.
 * 
 * Parent Class: PathNavigateGround
 */
m.isPositionClear = "func_179692_b"
m.getOnGround = {}
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
m.getOnGround.S18PacketEntityTeleport = "func_179697_g"
/** 
 * 
 * 
 * Parent Class: S14PacketEntity
 */
m.getOnGround.S14PacketEntity = "func_179742_g"

/** 
 * 
 * 
 * Parent Class: S47PacketPlayerListHeaderFooter
 */
m.getHeader = "func_179700_a"
/** 
 * 
 * 
 * Parent Class: S47PacketPlayerListHeaderFooter
 */
m.getFooter = "func_179701_b"
/** 
 * 
 * 
 * Parent Class: C14PacketTabComplete
 */
m.getTargetBlock = "func_179709_b"
/** 
 * 
 * 
 * Parent Class: C02PacketUseEntity
 */
m.getHitVec = "func_179712_b"
/** 
 * 
 * 
 * Parent Class: S03PacketEnableCompression
 */
m.getCompressionTreshold = "func_179731_a"
/** 
 * Sets new MapData from the packet to given MapData param
 * 
 * Parent Class: S34PacketMaps
 */
m.setMapdataTo = "func_179734_a"
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
m.isReducedDebugInfo = "func_179744_h"
/** 
 * 
 * 
 * Parent Class: S28PacketEffect
 */
m.getSoundPos = "func_179746_d"
/** 
 * Gets the particle arguments. Some particles rely on block and/or item ids and sometimes metadata ids to color or texture the particle.
 * 
 * Parent Class: S2APacketParticles
 */
m.getParticleArgs = "func_179748_k"
m.getParticleType = {}
/** 
 * 
 * 
 * Parent Class: S2APacketParticles
 */
m.getParticleType.S2APacketParticles = "func_179749_a"
/** 
 * 
 * 
 * Parent Class: EntitySlime
 */
m.getParticleType.EntitySlime = "func_180487_n"

/** 
 * 
 * 
 * Parent Class: S2APacketParticles
 */
m.isLongDistance = "func_179750_b"
/** 
 * 
 * 
 * Parent Class: S26PacketMapChunkBulk
 */
m.getChunkSize = "func_179754_d"
/** 
 * 
 * 
 * Parent Class: S21PacketChunkData
 */
m.getExtractedData = "func_179756_a"
/** 
 * 
 * 
 * Parent Class: S46PacketSetCompressionLevel
 */
m.getThreshold = "func_179760_a"
/** 
 * 
 * 
 * Parent Class: S38PacketPlayerListItem
 */
m.getEntries = "func_179767_a"
/** 
 * 
 * 
 * Parent Class: S36PacketSignEditorOpen
 */
m.getSignPosition = "func_179777_a"
/** 
 * 
 * 
 * Parent Class: S48PacketResourcePackSend
 */
m.getURL = "func_179783_a"
m.getHash = {}
/** 
 * 
 * 
 * Parent Class: S48PacketResourcePackSend
 */
m.getHash.S48PacketResourcePackSend = "func_179784_b"
/** 
 * Returns the hash code for this entry
 * 
 * Parent Class: IntHashMap$Entry
 */
m.getHash.IntHashMap$Entry = "func_76031_a"

/** 
 * 
 * 
 * Parent Class: S0APacketUseBed
 */
m.getBedPosition = "func_179798_a"
/** 
 * 
 * 
 * Parent Class: S05PacketSpawnPosition
 */
m.getSpawnPos = "func_179800_a"
/** 
 * 
 * 
 * Parent Class: S45PacketTitle
 */
m.getFadeOutTime = "func_179803_e"
/** 
 * 
 * 
 * Parent Class: S45PacketTitle
 */
m.getDisplayTime = "func_179804_d"
/** 
 * 
 * 
 * Parent Class: S45PacketTitle
 */
m.getFadeInTime = "func_179806_c"
m.getBlockPosition = {}
/** 
 * 
 * 
 * Parent Class: S24PacketBlockAction
 */
m.getBlockPosition.S24PacketBlockAction = "func_179825_a"
/** 
 * 
 * 
 * Parent Class: S23PacketBlockChange
 */
m.getBlockPosition.S23PacketBlockChange = "func_179827_b"

/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
m.getWindowTitle = "func_179840_c"
/** 
 * 
 * 
 * Parent Class: S22PacketMultiBlockChange
 */
m.getChangedBlocks = "func_179844_a"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.getDistanceToInsideBlockSq = "func_179846_b"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.getInsideOffsetX = "func_179847_f"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.getDistanceToDoorBlockSq = "func_179848_a"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.getIsDetachedFromVillageFlag = "func_179851_i"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.getDoorBlockPos = "func_179852_d"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.setIsDetachedFromVillageFlag = "func_179853_a"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.getFaceDirection = "func_179854_a"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.getInsideOffsetZ = "func_179855_g"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.getInsideBlockPos = "func_179856_e"
/** 
 * Returns {@link net.minecraft.village.VillageDoorInfo VillageDoorInfo} from given block position
 * 
 * Parent Class: Village
 */
m.getDoorInfo = "func_179863_c"
/** 
 * "if door not existed in this village
 * 
 * Parent Class: Village
 */
m.getExistedDoor = "func_179864_e"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.getNearestDoor = "func_179865_b"
/** 
 * redirect standard streams to logger
 * 
 * Parent Class: Bootstrap
 */
m.redirectOutputToLog = "func_179868_d"
/** 
 * Is Bootstrap registration already done?
 * 
 * Parent Class: Bootstrap
 */
m.isRegistered = "func_179869_a"
/** 
 * 
 * 
 * Parent Class: Bootstrap
 */
m.printToSYSOUT = "func_179870_a"
/** 
 * 
 * 
 * Parent Class: LoggingPrintStream
 */
m.logString = "func_179882_a"
/** 
 * 
 * 
 * Parent Class: PropertyManager
 */
m.getLongProperty = "func_179885_a"
m.setSpeed = {}
/** 
 * 
 * 
 * Parent Class: EntitySlime$SlimeMoveHelper
 */
m.setSpeed.EntitySlime$SlimeMoveHelper = "func_179921_a"
/** 
 * Sets the speed
 * 
 * Parent Class: PathNavigate
 */
m.setSpeed.PathNavigate = "func_75489_a"

m.isNotColliding = {}
/** 
 * Checks if entity bounding box is not colliding with terrain
 * 
 * Parent Class: EntityGhast$GhastMoveHelper
 */
m.isNotColliding.EntityGhast$GhastMoveHelper = "func_179926_b"
/** 
 * Checks that the entity is not colliding with any blocks / liquids
 * 
 * Parent Class: EntityPigZombie
 */
m.isNotColliding.EntityPigZombie = "func_70058_J"

/** 
 * 
 * 
 * Parent Class: S38PacketPlayerListItem$AddPlayerData
 */
m.getGameMode = "func_179960_c"
/** 
 * 
 * 
 * Parent Class: S38PacketPlayerListItem$AddPlayerData
 */
m.getPing = "func_179963_b"
/** 
 * 
 * 
 * Parent Class: S45PacketTitle$Type
 */
m.getNames = "func_179971_a"
/** 
 * 
 * 
 * Parent Class: ChatComponentProcessor
 */
m.processComponent = "func_179985_a"
/** 
 * Get the text to be inserted into Chat when the component is shift-clicked
 * 
 * Parent Class: ChatStyle$1
 */
m.getInsertion = "func_179986_j"
/** 
 * Set a text to be inserted into Chat when the component is shift-clicked
 * 
 * Parent Class: ChatStyle
 */
m.setInsertion = "func_179989_a"
/** 
 * "Gets the selector of this component
 * 
 * Parent Class: ChatComponentSelector
 */
m.getSelector = "func_179992_g"
m.setValue = {}
/** 
 * Sets the value displayed instead of the real score.
 * 
 * Parent Class: ChatComponentScore
 */
m.setValue.ChatComponentScore = "func_179997_b"
/** 
 * Set this game rule value.
 * 
 * Parent Class: GameRules$Value
 */
m.setValue.GameRules$Value = "func_82757_a"

/** 
 * "Handles pumping inbound packets across threads by checking whether the current thread is actually the main thread for the side in question. If not
 * 
 * Parent Class: PacketThreadUtil
 */
m.checkThreadAndEnqueue = "func_180031_a"
/** 
 * 
 * 
 * Parent Class: EntityMinecart$EnumMinecartType
 */
m.byNetworkID = "func_180038_a"
/** 
 * 
 * 
 * Parent Class: EntityMinecart$EnumMinecartType
 */
m.getNetworkID = "func_180039_a"
/** 
 * 
 * 
 * Parent Class: EntityRabbit$RabbitJumpHelper
 */
m.getIsJumping = "func_180067_c"
m.getSpeed = {}
/** 
 * 
 * 
 * Parent Class: EntityRabbit$EnumMoveType
 */
m.getSpeed.EntityRabbit$EnumMoveType = "func_180072_a"
/** 
 * 
 * 
 * Parent Class: EntityMoveHelper
 */
m.getSpeed.EntityMoveHelper = "func_75638_b"

m.getDuration = {}
/** 
 * 
 * 
 * Parent Class: EntityRabbit$EnumMoveType
 */
m.getDuration.EntityRabbit$EnumMoveType = "func_180075_c"
/** 
 * 
 * 
 * Parent Class: S1DPacketEntityEffect
 */
m.getDuration.S1DPacketEntityEffect = "func_180755_e"
/** 
 * 
 * 
 * Parent Class: PotionEffect
 */
m.getDuration.PotionEffect = "func_76459_b"

/** 
 * 
 * 
 * Parent Class: EntitySpawnPlacementRegistry
 */
m.getPlacementForEntity = "func_180109_a"
/** 
 * 
 * 
 * Parent Class: DataWatcher
 */
m.getWatchableObjectRotations = "func_180115_h"
/** 
 * Returns the ID assigned to it's string representation
 * 
 * Parent Class: EntityList
 */
m.getIDFromString = "func_180122_a"
/** 
 * 
 * 
 * Parent Class: EntityList
 */
m.isStringEntityName = "func_180123_a"
/** 
 * 
 * 
 * Parent Class: EntityList
 */
m.getEntityNameList = "func_180124_b"
/** 
 * 
 * 
 * Parent Class: EntityList
 */
m.isStringValidEntityName = "func_180125_b"
/** 
 * Returns EntityLivingBase assigned for this CombatTracker
 * 
 * Parent Class: CombatTracker
 */
m.getFighter = "func_180135_h"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.isCreativePlayer = "func_180136_u"
/** 
 * Sets this EntityDamageSource as originating from Thorns armor
 * 
 * Parent Class: EntityDamageSource
 */
m.setIsThornsDamage = "func_180138_v"
/** 
 * 
 * 
 * Parent Class: EntityDamageSource
 */
m.getIsThornsDamage = "func_180139_w"
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.getPotionFromResourceLocation = "func_180142_b"
/** 
 * 
 * 
 * Parent Class: PotionEffect
 */
m.getIsShowParticles = "func_180154_f"
m.toNBT = {}
/** 
 * 
 * 
 * Parent Class: LockCode
 */
m.toNBT.LockCode = "func_180157_a"
/** 
 * 
 * 
 * Parent Class: MobSpawnerBaseLogic$WeightedRandomMinecart
 */
m.toNBT.MobSpawnerBaseLogic$WeightedRandomMinecart = "func_98220_a"

/** 
 * 
 * 
 * Parent Class: LockCode
 */
m.fromNBT = "func_180158_b"
/** 
 * "Returns a random choice from the input items
 * 
 * Parent Class: WeightedRandom
 */
m.getRandomItem = "func_76273_a"
/** 
 * 
 * 
 * Parent Class: DifficultyInstance
 */
m.getAdditionalDifficulty = "func_180168_b"
/** 
 * 
 * 
 * Parent Class: DifficultyInstance
 */
m.calculateAdditionalDifficulty = "func_180169_a"
/** 
 * 
 * 
 * Parent Class: DifficultyInstance
 */
m.getClampedAdditionalDifficulty = "func_180170_c"
/** 
 * 
 * 
 * Parent Class: InventoryHelper
 */
m.spawnItemStack = "func_180173_a"
/** 
 * 
 * 
 * Parent Class: InventoryHelper
 */
m.dropInventoryItems = "func_180176_a"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.getRandomUuid = "func_180182_a"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.normalizeAngle = "func_180184_b"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.epsilonEquals = "func_180185_a"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.getPositionRandom = "func_180186_a"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.getCoordinateRandom = "func_180187_c"
m.downloadResourcePack = {}
/** 
 * 
 * 
 * Parent Class: HttpUtil
 */
m.downloadResourcePack.HttpUtil = "func_180192_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
m.downloadResourcePack.ResourcePackRepository = "func_180601_a"

/** 
 * 
 * 
 * Parent Class: JsonUtils
 */
m.isBoolean = "func_180199_c"
/** 
 * 
 * 
 * Parent Class: ClassInheritanceMultiMap
 */
m.createLookup = "func_180213_a"
/** 
 * 
 * 
 * Parent Class: ClassInheritanceMultiMap
 */
m.getByClass = "func_180215_b"
/** 
 * Removes a block and triggers the appropriate events
 * 
 * Parent Class: ItemInWorldManager
 */
m.removeBlock = "func_180235_c"
/** 
 * "Activate the clicked on block
 * 
 * Parent Class: ItemInWorldManager
 */
m.activateBlockOrUseItem = "func_180236_a"
/** 
 * Attempts to harvest a block
 * 
 * Parent Class: ItemInWorldManager
 */
m.tryHarvestBlock = "func_180237_b"
/** 
 * Stops the block breaking process
 * 
 * Parent Class: ItemInWorldManager
 */
m.cancelDestroyingBlock = "func_180238_e"
/** 
 * 
 * 
 * Parent Class: ItemInWorldManager
 */
m.survivalOrAdventure = "func_180239_c"
/** 
 * 
 * 
 * Parent Class: ServerHangWatchdog
 */
m.scheduleHalt = "func_180248_a"
/** 
 * 
 * 
 * Parent Class: GameRules
 */
m.addGameRule = "func_180262_a"
/** 
 * 
 * 
 * Parent Class: GameRules
 */
m.areSameType = "func_180264_a"
/** 
 * 
 * 
 * Parent Class: Teleporter
 */
m.placeInPortal = "func_180266_a"
/** 
 * 
 * 
 * Parent Class: SpawnerAnimals
 */
m.canCreatureTypeSpawnAtLocation = "func_180267_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenBase
 */
m.getBiomeFromBiomeList = "func_180276_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenTaiga
 */
m.createMutatedBiome = "func_180277_d"
m.getColorAtPos = {}
/** 
 * 
 * 
 * Parent Class: BiomeColorHelper$ColorResolver
 */
m.getColorAtPos.BiomeColorHelper$ColorResolver = "func_180283_a"
/** 
 * 
 * 
 * Parent Class: BiomeColorHelper
 */
m.getColorAtPos.BiomeColorHelper = "func_180285_a"

m.getGrassColorAtPos = {}
/** 
 * 
 * 
 * Parent Class: BiomeColorHelper
 */
m.getGrassColorAtPos.BiomeColorHelper = "func_180286_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenSwamp
 */
m.getGrassColorAtPos.BiomeGenSwamp = "func_180627_b"

m.getFoliageColorAtPos = {}
/** 
 * 
 * 
 * Parent Class: BiomeColorHelper
 */
m.getFoliageColorAtPos.BiomeColorHelper = "func_180287_b"
/** 
 * 
 * 
 * Parent Class: BiomeGenSwamp
 */
m.getFoliageColorAtPos.BiomeGenSwamp = "func_180625_c"

/** 
 * 
 * 
 * Parent Class: BiomeColorHelper
 */
m.getWaterColorAtPos = "func_180288_c"
m.decorate = {}
/** 
 * 
 * 
 * Parent Class: BiomeDecorator
 */
m.decorate.BiomeDecorator = "func_180292_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenTaiga
 */
m.decorate.BiomeGenTaiga = "func_180624_a"

m.getBiomeGenerator = {}
/** 
 * 
 * 
 * Parent Class: WorldChunkManager
 */
m.getBiomeGenerator.WorldChunkManager = "func_180300_a"
/** 
 * Returns the biome generator
 * 
 * Parent Class: WorldChunkManagerHell
 */
m.getBiomeGenerator.WorldChunkManagerHell = "func_180631_a"

/** 
 * Adds a shaped recipe to the games recipe list.
 * 
 * Parent Class: CraftingManager
 */
m.addRecipe = "func_92103_a"
/** 
 * Retrieves an enchantment by using its location name.
 * 
 * Parent Class: Enchantment
 */
m.getEnchantmentByLocation = "func_180305_b"
/** 
 * Retrieves an Enchantment from the enchantmentsList
 * 
 * Parent Class: Enchantment
 */
m.getEnchantmentById = "func_180306_c"
/** 
 * Returns the level of the Depth Strider enchantment.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getDepthStriderModifier = "func_180318_b"
/** 
 * Returns the 'Water Breathing' modifier of enchantments on player equipped armors.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getRespiration = "func_180319_a"
/** 
 * 
 * 
 * Parent Class: MerchantRecipe
 */
m.getMaxTradeUses = "func_180320_f"
/** 
 * 
 * 
 * Parent Class: MerchantRecipe
 */
m.getToolUses = "func_180321_e"
/** 
 * 
 * 
 * Parent Class: MerchantRecipe
 */
m.getRewardsExp = "func_180322_j"
/** 
 * Get the last world Z coordinate that belongs to this Chunk
 * 
 * Parent Class: ChunkCoordIntPair
 */
m.getZEnd = "func_180330_f"
/** 
 * Get the last world X coordinate that belongs to this Chunk
 * 
 * Parent Class: ChunkCoordIntPair
 */
m.getXEnd = "func_180332_e"
/** 
 * Get the first world Z coordinate that belongs to this Chunk
 * 
 * Parent Class: ChunkCoordIntPair
 */
m.getZStart = "func_180333_d"
/** 
 * Get the first world X coordinate that belongs to this Chunk
 * 
 * Parent Class: ChunkCoordIntPair
 */
m.getXStart = "func_180334_c"
/** 
 * 
 * 
 * Parent Class: Explosion
 */
m.clearAffectedBlockPositions = "func_180342_d"
/** 
 * 
 * 
 * Parent Class: BlockRailBase$Rail
 */
m.hasRailAt = "func_180359_a"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
m.hasModifier = "func_180374_a"
/** 
 * Returns the Block in the blockRegistry with the specified name.
 *  
 * @param blockName The block's name to register
 * 
 * Parent Class: Blocks
 */
m.getRegisteredBlock = "func_180383_a"
/** 
 * 
 * 
 * Parent Class: EntityLookHelper
 */
m.getLookPosZ = "func_180421_g"
/** 
 * 
 * 
 * Parent Class: EntityLookHelper
 */
m.getLookPosY = "func_180422_f"
/** 
 * 
 * 
 * Parent Class: EntityLookHelper
 */
m.getLookPosX = "func_180423_e"
/** 
 * 
 * 
 * Parent Class: EntityLookHelper
 */
m.getIsLooking = "func_180424_b"
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
m.setPositionAndRotation2 = "func_180426_a"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.isImmuneToExplosions = "func_180427_aV"
/** 
 * 
 * 
 * Parent Class: EntityZombie
 */
m.playStepSound = "func_180429_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.fall = "func_180430_e"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.isEntityInvulnerable = "func_180431_b"
/** 
 * Prepares this entity in new dimension by copying NBT data from entity in old dimension
 * 
 * Parent Class: Entity
 */
m.copyDataFromOld = "func_180432_n"
/** 
 * 
 * 
 * Parent Class: EntityBoat
 */
m.updateFallState = "func_180433_a"
/** 
 * Renders the particle
 * 
 * Parent Class: EntityParticleEmitter
 */
m.renderParticle = "func_180434_a"
/** 
 * Sets the particle's icon.
 * 
 * Parent Class: EntityFX
 */
m.setParticleIcon = "func_180435_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.enableLightmap = "func_180436_i"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.renderCloudsCheck = "func_180437_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.getNightVisionBrightness = "func_180438_a"
/** 
 * 
 * 
 * Parent Class: WorldManager
 */
m.broadcastSound = "func_180440_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.preRenderDamagedBlocks = "func_180443_s"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.renderStars = "func_180444_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.renderCloudsFancy = "func_180445_c"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.renderEntities = "func_180446_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.renderClouds = "func_180447_b"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.renderSkyEnd = "func_180448_r"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.renderWorldBorder = "func_180449_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.renderItemAndEffectIntoGUI = "func_180450_b"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.renderEffect = "func_180451_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
m.setupGuiTransform = "func_180452_a"
/** 
 * Renders the stack size and/or damage bar for the given ItemStack.
 * 
 * Parent Class: RenderItem
 */
m.renderItemOverlayIntoGUI = "func_180453_a"
/** 
 * "Render single line string by setting GL color
 * 
 * Parent Class: FontRenderer
 */
m.renderString = "func_180455_b"
/** 
 * 
 * 
 * Parent Class: EntityMinecartTNT
 */
m.getMinecartType = "func_180456_s"
/** 
 * 
 * 
 * Parent Class: EntityMinecartTNT
 */
m.getDefaultDisplayTile = "func_180457_u"
/** 
 * 
 * 
 * Parent Class: EntityMinecart
 */
m.getMinecart = "func_180458_a"
/** 
 * Moves a minecart that is not attached to a rail
 * 
 * Parent Class: EntityMinecart
 */
m.moveDerailedMinecart = "func_180459_n"
/** 
 * "Returns true if automation can extract the given item in the given slot from the given side. Args: slot
 * 
 * Parent Class: ISidedInventory
 */
m.canExtractItem = "func_180461_b"
/** 
 * "Returns true if automation can insert the given item in the given slot from the given side. Args: slot
 * 
 * Parent Class: ISidedInventory
 */
m.canInsertItem = "func_180462_a"
/** 
 * 
 * 
 * Parent Class: ISidedInventory
 */
m.getSlotsForFace = "func_180463_a"
/** 
 * 
 * 
 * Parent Class: INetHandlerLoginClient
 */
m.handleEnableCompression = "func_180464_a"
/** 
 * 
 * 
 * Parent Class: EntityEnderEye
 */
m.moveTowards = "func_180465_a"
/** 
 * 
 * 
 * Parent Class: EntityMagmaCube
 */
m.handleJumpLava = "func_180466_bG"
/** 
 * Return null if bed is invalid
 * 
 * Parent Class: EntityPlayer
 */
m.getBedSpawnLocation = "func_180467_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.displayGui = "func_180468_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.trySleep = "func_180469_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getBedLocation = "func_180470_cg"
/** 
 * Block hardness will be further counted in net/minecraft/block/Block.getPlayerRelativeBlockHardness
 * 
 * Parent Class: EntityPlayer
 */
m.getToolDigEfficiency = "func_180471_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.displayVillagerTradeGui = "func_180472_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderPortal = "func_180474_b"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderScoreboard = "func_180475_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderPumpkinOverlay = "func_180476_e"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.renderPlayerStats = "func_180477_d"
/** 
 * Renders a Vignette arount the entire screen that changes with light level.
 *  
 * @param lightLevel The current brightness
 * @param scaledRes The current resolution of the game
 * 
 * Parent Class: GuiIngame
 */
m.renderVignette = "func_180480_a"
/** 
 * Gives armor or weapon for entity based on given DifficultyInstance
 * 
 * Parent Class: EntityZombie
 */
m.setEquipmentBasedOnDifficulty = "func_180481_a"
/** 
 * "Called only once on an entity when first time spawned
 * 
 * Parent Class: EntityVillager
 */
m.onInitialSpawn = "func_180482_a"
/** 
 * Enchants Entity's current equipments based on given DifficultyInstance
 * 
 * Parent Class: EntityLiving
 */
m.setEnchantmentBasedOnDifficulty = "func_180483_b"
/** 
 * 
 * 
 * Parent Class: EntitySilverfish
 */
m.getBlockPathWeight = "func_180484_a"
/** 
 * 
 * 
 * Parent Class: EntityCreature
 */
m.isWithinHomeDistanceFromPosition = "func_180485_d"
/** 
 * 
 * 
 * Parent Class: EntityCreature
 */
m.getHomePosition = "func_180486_cf"
m.spawnParticles = {}
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.spawnParticles.EntityVillager = "func_180489_a"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneOre
 */
m.spawnParticles.BlockRedstoneOre = "func_180691_e"

/** 
 * 
 * 
 * Parent Class: ChunkCache
 */
m.getBiomeGenForCoords = "func_180494_b"
/** 
 * 
 * 
 * Parent Class: World
 */
m.notifyBlockOfStateChange = "func_180496_d"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.scheduleBlockUpdate = "func_180497_b"
/** 
 * 
 * 
 * Parent Class: World
 */
m.playAuxSFXAtEntity = "func_180498_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getStrongholdPos = "func_180499_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.checkLightFor = "func_180500_c"
/** 
 * 
 * 
 * Parent Class: World
 */
m.isBlockinHighHumidity = "func_180502_D"
/** 
 * 
 * 
 * Parent Class: WorldClient
 */
m.invalidateRegionAndSetBlock = "func_180503_b"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getTabCompletions = "func_180506_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setResourcePack = "func_180507_a_"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getTwitchDetails = "func_180509_L"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.drawSplashScreen = "func_180510_a"
/** 
 * Called when the player is hitting a block with an item.
 * 
 * Parent Class: PlayerControllerMP
 */
m.clickBlock = "func_180511_b"
/** 
 * 
 * 
 * Parent Class: PlayerControllerMP
 */
m.onPlayerDamageBlock = "func_180512_c"
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
m.getStrongholdGen = "func_180513_a"
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
m.recreateStructures = "func_180514_a"
/** 
 * "Possibly reshapes the biome if appropriate for the biome type
 * 
 * Parent Class: ChunkProviderGenerate
 */
m.replaceBlocksForBiome = "func_180517_a"
/** 
 * "Generates a bare-bones chunk of nothing but stone or ocean blocks
 * 
 * Parent Class: ChunkProviderGenerate
 */
m.setBlocksInChunk = "func_180518_a"
/** 
 * 
 * 
 * Parent Class: CrashReportCategory
 */
m.getCoordinateInfo = "func_85074_a"
/** 
 * Get a list of possible completion options for when the TAB key is pressed. This can be a list of commands if no command is specified or a partial command is specified. It could also be a list of arguments for the command that is specified.
 *  
 * @param sender The command sender who is requesting tab completion results.
 * @param input The input that was passed when the TAB key was pressed.
 * @param pos The block pos that the players mouse is over. <b>Could be null!</b>
 * 
 * Parent Class: ICommandManager
 */
m.getTabCompletionOptions = "func_180524_a"
/** 
 * Return a list of options when the user types TAB
 * 
 * Parent Class: CommandEffect
 */
m.addTabCompletionOptions = "func_180525_a"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.parseBoolean = "func_180527_d"
/** 
 * Builds a string starting at startPos
 * 
 * Parent Class: CommandBase
 */
m.buildString = "func_180529_a"
/** 
 * 
 * 
 * Parent Class: CommandBase
 */
m.join = "func_180530_a"
/** 
 * 
 * 
 * Parent Class: CommandDifficulty
 */
m.getDifficultyFromCommand = "func_180531_e"
/** 
 * Adds block hit particles for the specified block
 * 
 * Parent Class: EffectRenderer
 */
m.addBlockHitEffects = "func_180532_a"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.addBlockDestroyEffects = "func_180533_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySkullRenderer
 */
m.renderSkull = "func_180543_a"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
m.renderTileEntity = "func_180546_a"
m.normalize = {}
/** 
 * 
 * 
 * Parent Class: ClippingHelperImpl
 */
m.normalize.ClippingHelperImpl = "func_180547_a"
/** 
 * Normalizes the vector to a length of 1 (except if it is the zero vector)
 * 
 * Parent Class: Vec3
 */
m.normalize.Vec3 = "func_72432_b"

/** 
 * 
 * 
 * Parent Class: Render
 */
m.bindEntityTexture = "func_180548_c"
/** 
 * 
 * 
 * Parent Class: Render
 */
m.renderShadowBlock = "func_180549_a"
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
m.unsetScoreTeamColor = "func_180565_e"
/** 
 * Draws the ray from the dragon to it's crystal
 * 
 * Parent Class: RenderDragon
 */
m.drawRechargeRay = "func_180574_a"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.loadSprite = "func_180598_a"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.updateAnimationInterpolated = "func_180599_n"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
m.allocateTextureImpl = "func_180600_a"
m.getCenter = {}
/** 
 * 
 * 
 * Parent Class: Village
 */
m.getCenter.Village = "func_180608_a"
/** 
 * 
 * 
 * Parent Class: StructureBoundingBox
 */
m.getCenter.StructureBoundingBox = "func_180717_f"

/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.addDoorsAround = "func_180609_b"
/** 
 * 
 * 
 * Parent Class: Container
 */
m.isValidDragMode = "func_180610_a"
/** 
 * 
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.spawnNewEntity = "func_180613_a"
/** 
 * 
 * 
 * Parent Class: ItemSlab
 */
m.tryPlace = "func_180615_a"
/** 
 * 
 * 
 * Parent Class: ItemBucket
 */
m.tryPlaceContainedLiquid = "func_180616_a"
/** 
 * 
 * 
 * Parent Class: ItemDye
 */
m.spawnBonemealParticles = "func_180617_a"
/** 
 * 
 * 
 * Parent Class: ItemLead
 */
m.attachToFence = "func_180618_a"
/** 
 * Get the coordinates of the Block in the center of this chunk with the given Y coordinate
 * 
 * Parent Class: ChunkCoordIntPair
 */
m.getCenterBlock = "func_180619_a"
/** 
 * 
 * 
 * Parent Class: Teleporter
 */
m.placeInExistingPortal = "func_180620_b"
/** 
 * 
 * 
 * Parent Class: SpawnerAnimals
 */
m.getRandomChunkPosition = "func_180621_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenTaiga
 */
m.genTerrainBlocks = "func_180622_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenSwamp
 */
m.pickRandomFlower = "func_180623_a"
/** 
 * Gets a floating point representation of this biome's temperature
 * 
 * Parent Class: BiomeGenBase
 */
m.getFloatTemperature = "func_180626_a"
/** 
 * "Given x
 * 
 * Parent Class: BiomeGenBase
 */
m.generateBiomeTerrain = "func_180628_b"
/** 
 * 
 * 
 * Parent Class: WorldChunkManagerHell
 */
m.findBiomePosition = "func_180630_a"
/** 
 * 
 * 
 * Parent Class: Block
 */
m.setDefaultState = "func_180632_j"
/** 
 * "Called by ItemBlocks after a block is set in the world
 * 
 * Parent Class: BlockPistonBase
 */
m.onBlockPlacedBy = "func_180633_a"
/** 
 * Spawns the given ItemStack as an EntityItem into the World at the given position
 * 
 * Parent Class: Block
 */
m.spawnAsEntity = "func_180635_a"
/** 
 * Ray traces through the blocks collision from start vector to end vector returning a ray trace hit.
 * 
 * Parent Class: BlockPistonMoving
 */
m.collisionRayTrace = "func_180636_a"
/** 
 * Spawns the given amount of experience into the World as XP orb entities
 * 
 * Parent Class: Block
 */
m.dropXpOnBlockBreak = "func_180637_b"
/** 
 * Add all collision boxes of this Block to the list that intersect with the given mask.
 * 
 * Parent Class: BlockPistonExtension
 */
m.addCollisionBoxesToList = "func_180638_a"
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.onBlockActivated = "func_180639_a"
m.getCollisionBoundingBox = {}
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.getCollisionBoundingBox.BlockPistonMoving = "func_180640_a"
/** 
 * Returns the collision bounding box for this entity
 * 
 * Parent Class: EntityMinecart
 */
m.getCollisionBoundingBox.EntityMinecart = "func_70046_E"

/** 
 * 
 * 
 * Parent Class: BlockJukebox
 */
m.getComparatorInputOverride = "func_180641_l"
/** 
 * "Called by ItemBlocks just before a block is actually set in the world
 * 
 * Parent Class: BlockPistonBase
 */
m.onBlockPlaced = "func_180642_a"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneLight
 */
m.createStackedBlock = "func_180643_i"
/** 
 * 
 * 
 * Parent Class: BlockLilyPad
 */
m.getRenderColor = "func_180644_h"
/** 
 * "Called randomly when setTickRandomly is set to true (used by e.g. crops to grow
 * 
 * Parent Class: BlockTripWireHook
 */
m.randomTick = "func_180645_a"
/** 
 * 
 * 
 * Parent Class: BlockTrapDoor
 */
m.getSelectedBoundingBox = "func_180646_a"
/** 
 * Get the hardness of this Block relative to the ability of the given player
 * 
 * Parent Class: Block
 */
m.getPlayerRelativeBlockHardness = "func_180647_a"
/** 
 * Called on both Client and Server when World#addBlockEvent is called
 * 
 * Parent Class: BlockPistonBase
 */
m.onBlockEventReceived = "func_180648_a"
m.onBlockClicked = {}
/** 
 * 
 * 
 * Parent Class: BlockStairs
 */
m.onBlockClicked.BlockStairs = "func_180649_a"
/** 
 * "If not creative
 * 
 * Parent Class: ItemInWorldManager
 */
m.onBlockClicked.ItemInWorldManager = "func_180784_a"

m.updateTick = {}
/** 
 * 
 * 
 * Parent Class: BlockVine
 */
m.updateTick.BlockVine = "func_180650_b"
/** 
 * The update tick for the ingame UI
 * 
 * Parent Class: GuiIngame
 */
m.updateTick.GuiIngame = "func_73831_a"

/** 
 * Gets the metadata of the item this Block can drop. This method is called when the block gets destroyed. It returns the metadata of the dropped item based on the old metadata of the block.
 * 
 * Parent Class: BlockCarpet
 */
m.damageDropped = "func_180651_a"
/** 
 * Called when this Block is destroyed by an Explosion
 * 
 * Parent Class: BlockTNT
 */
m.onBlockDestroyedByExplosion = "func_180652_a"
/** 
 * Spawns this Block's drops into the World as EntityItems.
 * 
 * Parent Class: BlockPistonMoving
 */
m.dropBlockAsItemWithChance = "func_180653_a"
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.setBlockBoundsBasedOnState = "func_180654_a"
/** 
 * 
 * 
 * Parent Class: BlockTorch
 */
m.randomDisplayTick = "func_180655_c"
/** 
 * 
 * 
 * Parent Class: BlockTripWireHook
 */
m.getWeakPower = "func_180656_a"
/** 
 * 
 * 
 * Parent Class: BlockVine
 */
m.harvestBlock = "func_180657_a"
/** 
 * Block's chance to react to a living entity falling on it.
 * 
 * Parent Class: BlockSlime
 */
m.onFallenUpon = "func_180658_a"
/** 
 * Get the Item that this Block should drop when harvested.
 * 
 * Parent Class: BlockPistonMoving
 */
m.getItemDropped = "func_180660_a"
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.createBlockState = "func_180661_e"
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
m.breakBlock = "func_180663_b"
/** 
 * 
 * 
 * Parent Class: BlockWeb
 */
m.getBlockLayer = "func_180664_k"
/** 
 * Returns the cubic AABB inset by 1/8 on all sides
 * 
 * Parent Class: BlockBasePressurePlate
 */
m.getSensitiveAABB = "func_180667_a"
/** 
 * 
 * 
 * Parent Class: BlockBasePressurePlate
 */
m.setBlockBoundsBasedOnState0 = "func_180668_d"
/** 
 * 
 * 
 * Parent Class: BlockPressurePlateWeighted
 */
m.computeRedstoneStrength = "func_180669_e"
/** 
 * 
 * 
 * Parent Class: BlockTallGrass
 */
m.canUseBonemeal = "func_180670_a"
/** 
 * 
 * 
 * Parent Class: BlockCrops
 */
m.getGrowthChance = "func_180672_a"
/** 
 * 
 * 
 * Parent Class: BlockPumpkin
 */
m.trySpawnGolem = "func_180673_e"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneRepeater
 */
m.getPoweredState = "func_180674_e"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneRepeater
 */
m.getUnpoweredState = "func_180675_k"
/** 
 * 
 * 
 * Parent Class: BlockChest
 */
m.getLockableContainer = "func_180676_d"
/** 
 * 
 * 
 * Parent Class: BlockDaylightDetector
 */
m.updatePower = "func_180677_d"
/** 
 * 
 * 
 * Parent Class: BlockJukebox
 */
m.dropRecord = "func_180678_e"
/** 
 * 
 * 
 * Parent Class: BlockSkull
 */
m.checkWitherSpawn = "func_180679_a"
/** 
 * 
 * 
 * Parent Class: BlockButton
 */
m.checkForArrows = "func_180680_f"
/** 
 * 
 * 
 * Parent Class: BlockButton
 */
m.updateBlockBounds = "func_180681_d"
/** 
 * 
 * 
 * Parent Class: BlockCake
 */
m.eatCake = "func_180682_b"
/** 
 * 
 * 
 * Parent Class: BlockDragonEgg
 */
m.checkFall = "func_180683_d"
/** 
 * 
 * 
 * Parent Class: BlockDragonEgg
 */
m.teleport = "func_180684_e"
/** 
 * 
 * 
 * Parent Class: BlockFalling
 */
m.canFallInto = "func_180685_d"
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
m.setFireInfo = "func_180686_a"
/** 
 * 
 * 
 * Parent Class: BlockLiquid
 */
m.getFlowVector = "func_180687_h"
/** 
 * 
 * 
 * Parent Class: BlockLiquid
 */
m.triggerMixEffects = "func_180688_d"
/** 
 * 
 * 
 * Parent Class: BlockLiquid
 */
m.getFlowDirection = "func_180689_a"
/** 
 * 
 * 
 * Parent Class: BlockDynamicLiquid
 */
m.placeStaticBlock = "func_180690_f"
/** 
 * 
 * 
 * Parent Class: BlockTrapDoor
 */
m.setBounds = "func_180693_d"
/** 
 * 
 * 
 * Parent Class: BlockPistonBase
 */
m.getFacingFromEntity = "func_180695_a"
/** 
 * 
 * 
 * Parent Class: BlockPistonBase
 */
m.canPush = "func_180696_a"
/** 
 * 
 * 
 * Parent Class: BlockRailBase$Rail
 */
m.findRailAt = "func_180697_b"
/** 
 * Recursively called by generate()
 * 
 * Parent Class: MapGenStructure
 */
m.recursiveGenerate = "func_180701_a"
/** 
 * 
 * 
 * Parent Class: MapGenStructure
 */
m.getClosestStrongholdPos = "func_180706_b"
/** 
 * Writes a GameProfile to an NBTTagCompound.
 * 
 * Parent Class: NBTUtil
 */
m.writeGameProfile = "func_180708_a"
/** 
 * 
 * 
 * Parent Class: WorldGenDoublePlant
 */
m.setPlantType = "func_180710_a"
/** 
 * 
 * 
 * Parent Class: JsonToNBT
 */
m.getTagFromJson = "func_180713_a"
m.writeString = {}
/** 
 * 
 * 
 * Parent Class: PacketBuffer
 */
m.writeString.PacketBuffer = "func_180714_a"
/** 
 * Writes the given String to the output stream
 * 
 * Parent Class: RConOutputStream
 */
m.writeString.RConOutputStream = "func_72671_a"

m.getBufferData = {}
/** 
 * 
 * 
 * Parent Class: S3FPacketCustomPayload
 */
m.getBufferData.S3FPacketCustomPayload = "func_180735_b"
/** 
 * 
 * 
 * Parent Class: C17PacketCustomPayload
 */
m.getBufferData.C17PacketCustomPayload = "func_180760_b"

/** 
 * 
 * 
 * Parent Class: S3CPacketUpdateScore
 */
m.getScoreAction = "func_180751_d"
m.getLines = {}
/** 
 * 
 * 
 * Parent Class: S33PacketUpdateSign
 */
m.getLines.S33PacketUpdateSign = "func_180753_b"
/** 
 * 
 * 
 * Parent Class: C12PacketUpdateSign
 */
m.getLines.C12PacketUpdateSign = "func_180768_b"

/** 
 * 
 * 
 * Parent Class: StructureComponent
 */
m.getBoundingBoxCenter = "func_180776_a"
/** 
 * 
 * 
 * Parent Class: StructureComponent
 */
m.randomlyRareFillWithBlocks = "func_180777_a"
/** 
 * 
 * 
 * Parent Class: GenLayer
 */
m.initializeAllBiomeGenerators = "func_180781_a"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.setDifficultyLocked = "func_180783_e"
/** 
 * 
 * 
 * Parent Class: ItemInWorldManager
 */
m.blockRemoving = "func_180785_a"
/** 
 * 
 * 
 * Parent Class: ActiveRenderInfo
 */
m.getBlockAtEntityViewpoint = "func_180786_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackListEntry
 */
m.drawEntry = "func_180790_a"
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.affectEntity = "func_180793_a"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
m.renderDebugInfoLeft = "func_180798_a"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.isInLava = "func_180799_ab"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getTeleportDirection = "func_181012_aH"
/** 
 * Set the render yaw offset
 *  
 * @param offset The render yaw offset
 * 
 * Parent Class: EntityLivingBase
 */
m.setRenderYawOffset = "func_181013_g"
/** 
 * "Marks the entity as being inside a portal
 * 
 * Parent Class: Entity
 */
m.setPortal = "func_181015_d"
/** 
 * 
 * 
 * Parent Class: TileEntityBanner
 */
m.setBaseColorAndPatterns = "func_181020_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.stopUseShader = "func_181022_b"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.updateTileEntities = "func_181023_a"
/** 
 * "Gets whether the armor stand has marker enabled. If true
 * 
 * Parent Class: EntityArmorStand
 */
m.hasMarker = "func_181026_s"
/** 
 * "Marker defines where if true
 * 
 * Parent Class: EntityArmorStand
 */
m.setMarker = "func_181027_m"
/** 
 * Reset the GuiPlayerTabOverlay's message header and footer
 * 
 * Parent Class: GuiIngame
 */
m.resetPlayersOverlayFooterHeader = "func_181029_i"
/** 
 * 
 * 
 * Parent Class: GuiPlayerTabOverlay
 */
m.resetFooterHeader = "func_181030_a"
/** 
 * 
 * 
 * Parent Class: EntityWither
 */
m.canDestroyBlock = "func_181033_a"
/** 
 * Get if RCON command events should be broadcast to ops
 * 
 * Parent Class: MinecraftServer
 */
m.shouldBroadcastRconToOps = "func_181034_q"
/** 
 * Get if native transport should be used. Native transport means linux server performance improvements and optimized packet sending/receiving on linux
 * 
 * Parent Class: MinecraftServer
 */
m.shouldUseNativeTransport = "func_181035_ah"
/** 
 * "Return an ItemStack with the NBTTag of the TileEntity (""Owner"" if the block is a skull)
 *  
 * @param itemIn The item from the block picked
 * @param meta Metadata of the item
 * @param tileEntityIn TileEntity of the block picked"
 * 
 * Parent Class: Minecraft
 */
m.pickBlockWithNBT = "func_181036_a"
/** 
 * Return the player's GameProfile properties
 * 
 * Parent Class: Minecraft
 */
m.getProfileProperties = "func_181037_M"
/** 
 * Return isHittingBlock
 * 
 * Parent Class: PlayerControllerMP
 */
m.getIsHittingBlock = "func_181040_m"
/** 
 * Return true if the server is a LAN server
 * 
 * Parent Class: ServerData
 */
m.isOnLAN = "func_181041_d"
/** 
 * If true the {@link TileEntitySpecialRenderer} will always be rendered while the player is in the render bounding box {@link TileEntity#getRenderBoundingBox()} and his squared distance with the {@link TileEntity} is smaller than {@link TileEntity#getMaxRenderDistanceSquared()}.
 * 
 * Parent Class: TileEntitySpecialRenderer
 */
m.forceTileEntityRender = "func_181055_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getPlayerList = "func_181057_v"
/** 
 * 
 * 
 * Parent Class: EnumFacing
 */
m.getFacingFromAxis = "func_181076_a"
/** 
 * 
 * 
 * Parent Class: BlockContainer
 */
m.isInvalidNeighbor = "func_181086_a"
/** 
 * 
 * 
 * Parent Class: BlockContainer
 */
m.hasInvalidNeighbor = "func_181087_e"
/** 
 * Create a new NetworkManager from the server host and connect it to the server
 *  
 * @param address The address of the server
 * @param serverPort The server port
 * @param useNativeTransport True if the client use the native transport system
 * 
 * Parent Class: NetworkManager
 */
m.createNetworkManagerAndConnect = "func_181124_a"
/** 
 * Return true if the clouds should be rendered
 * 
 * Parent Class: GameSettings
 */
m.shouldRenderClouds = "func_181147_e"
/** 
 * Return true if the client connect to a server using the native transport system
 * 
 * Parent Class: GameSettings
 */
m.isUsingNativeTransport = "func_181148_f"
/** 
 * 
 * 
 * Parent Class: ClassInheritanceMultiMap
 */
m.initializeClassLookup = "func_181157_b"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.atan2 = "func_181159_b"
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.getPotionLocations = "func_181168_c"
/** 
 * Return the musicTicker's instance
 * 
 * Parent Class: Minecraft
 */
m.getMusicTicker = "func_181535_r"
/** 
 * Set if the player is connected to a realms server
 *  
 * @param isConnected The value that set if the player is connected to a realms server or not
 * 
 * Parent Class: Minecraft
 */
m.setConnectedToRealms = "func_181537_a"
/** 
 * Return the current action's name
 * 
 * Parent Class: Minecraft
 */
m.getCurrentAction = "func_181538_aA"
/** 
 * Return the FrameTimer's instance
 * 
 * Parent Class: Minecraft
 */
m.getFrameTimer = "func_181539_aj"
/** 
 * Return true if the player is connected to a realms server
 * 
 * Parent Class: Minecraft
 */
m.isConnectedToRealms = "func_181540_al"
/** 
 * Warning this value may not be respected in all cases as it is still hardcoded in many places.
 * 
 * Parent Class: World
 */
m.setSeaLevel = "func_181544_b"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getSeaLevel = "func_181545_F"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
m.getFrameColor = "func_181552_c"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
m.renderLagometer = "func_181554_e"
/** 
 * Render the given char
 * 
 * Parent Class: FontRenderer
 */
m.renderChar = "func_181559_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.updateCameraAndRender = "func_181560_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.drawSelectionBoundingBox = "func_181561_a"
/** 
 * "Returns RenderChunk offset from given RenderChunk in given direction
 * 
 * Parent Class: RenderGlobal
 */
m.getRenderChunkOffset = "func_181562_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.drawOutlinedBoundingBox = "func_181563_a"
/** 
 * "Run a task and return the result
 * 
 * Parent Class: Util
 */
m.runTask = "func_181617_a"
/** 
 * Return true if an entity can be spawned inside the block (used to get the player's bed spawn location)
 * 
 * Parent Class: BlockSign
 */
m.canSpawnInBlock = "func_181623_g"
/** 
 * 
 * 
 * Parent Class: AxisAlignedBB
 */
m.hasNaN = "func_181656_b"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.pos = "func_181662_b"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.normal = "func_181663_c"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.getBufferSize = "func_181664_j"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.nextVertexFormatIndex = "func_181667_k"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.begin = "func_181668_a"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.growBuffer = "func_181670_b"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.lightmap = "func_181671_a"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.getVertexState = "func_181672_a"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.tex = "func_181673_a"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.sortVertexData = "func_181674_a"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
m.endVertex = "func_181675_d"
m.getTransform = {}
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.getTransform.ModelBlock = "func_181681_a"
/** 
 * 
 * 
 * Parent Class: ItemCameraTransforms
 */
m.getTransform.ItemCameraTransforms = "func_181688_b"

/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
m.getAllTransforms = "func_181682_g"
/** 
 * 
 * 
 * Parent Class: ItemCameraTransforms
 */
m.applyTransform = "func_181689_a"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
m.getBlockPosOffset16 = "func_181701_a"
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.getIntegerSize = "func_181719_f"
/** 
 * 
 * 
 * Parent Class: VertexFormat
 */
m.addElement = "func_181721_a"
/** 
 * 
 * 
 * Parent Class: VertexBuffer
 */
m.bufferData = "func_181722_a"
/** 
 * 
 * 
 * Parent Class: ClassInheritanceMultiMap
 */
m.addForClass = "func_181743_a"
/** 
 * Return the array of frames
 * 
 * Parent Class: FrameTimer
 */
m.getFrames = "func_181746_c"
/** 
 * Add a frame at the next index in the array frames
 *  
 * @param runningTime The game's uptime in nanoseconds
 * 
 * Parent Class: FrameTimer
 */
m.addFrame = "func_181747_a"
/** 
 * Return a value from time and multiplier to display the lagometer
 *  
 * @param time The time corresponding to the frame
 * @param multiplier Use to multiply
 * 
 * Parent Class: FrameTimer
 */
m.getLagometerValue = "func_181748_a"
/** 
 * Return the last index used when 240 frames have been set
 * 
 * Parent Class: FrameTimer
 */
m.getLastIndex = "func_181749_a"
/** 
 * Change 240 to 0
 *  
 * @param rawIndex The index to parse
 * 
 * Parent Class: FrameTimer
 */
m.parseIndex = "func_181751_b"
m.getInteger = {}
/** 
 * "Get an Integer from the cache if it exists
 * 
 * Parent Class: IntegerCache
 */
m.getInteger.IntegerCache = "func_181756_a"
/** 
 * "Retrieves an integer value using the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getInteger.NBTTagCompound = "func_74762_e"

/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.hsvToRGB = "func_181758_c"
/** 
 * Get if console command events should be broadcast to ops
 * 
 * Parent Class: MinecraftServer
 */
m.shouldBroadcastConsoleToOps = "func_183002_r"
/** 
 * Return true if only one scale is negative
 *  
 * @param itemTranformVec The ItemTransformVec3f instance
 * 
 * Parent Class: RenderItem
 */
m.isThereOneNegativeScale = "func_183005_a"
m.bypassesPlayerLimit = {}
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.bypassesPlayerLimit.ServerConfigurationManager = "func_183023_f"
/** 
 * 
 * 
 * Parent Class: UserListOpsEntry
 */
m.bypassesPlayerLimit.UserListOpsEntry = "func_183024_b"
/** 
 * 
 * 
 * Parent Class: UserListOps
 */
m.bypassesPlayerLimit.UserListOps = "func_183026_b"

/** 
 * "Keep only the 10 most recent resources packs
 * 
 * Parent Class: ResourcePackRepository
 */
m.deleteOldServerResourcesPacks = "func_183028_i"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
m.getCpu = "func_183029_j"
/** 
 * Set the gui to the specified width and height
 *  
 * @param w The width of the screen
 * @param h The height of the screen
 * 
 * Parent Class: undefined
 */
m.setGuiSize = "func_183500_a"
/** 
 * 
 * 
 * Parent Class: IPlayerUsage
 */
m.addServerStatsToSnooper = "func_70000_a"
/** 
 * 
 * 
 * Parent Class: IPlayerUsage
 */
m.addServerTypeToSnooper = "func_70001_b"
/** 
 * Returns whether snooping is enabled or not.
 * 
 * Parent Class: IPlayerUsage
 */
m.isSnooperEnabled = "func_70002_Q"
m.canCommandSenderUseCommand = {}
/** 
 * "Returns {@code true} if the CommandSender is allowed to execute the command
 * 
 * Parent Class: Entity
 */
m.canCommandSenderUseCommand.Entity = "func_70003_b"
/** 
 * Returns true if the given command sender is allowed to use this command.
 * 
 * Parent Class: CommandBanPlayer
 */
m.canCommandSenderUseCommand.CommandBanPlayer = "func_71519_b"

/** 
 * Clears the RCon log
 * 
 * Parent Class: RConConsoleSource
 */
m.resetLog = "func_70007_b"
/** 
 * Gets the contents of the RCon log
 * 
 * Parent Class: RConConsoleSource
 */
m.getLogContents = "func_70008_c"
/** 
 * "Gets the distance to the position. Args: x
 * 
 * Parent Class: Entity
 */
m.getDistance = "func_70011_f"
/** 
 * Sets the location and Yaw/Pitch of an entity in the world
 * 
 * Parent Class: EntityPainting
 */
m.setLocationAndAngles = "func_70012_b"
/** 
 * Gets how bright this entity is.
 * 
 * Parent Class: EntityFireworkRocket
 */
m.getBrightness = "func_70013_c"
/** 
 * (abstract) Protected helper method to write subclass entity data to NBT.
 * 
 * Parent Class: EntityPotion
 */
m.writeEntityToNBT = "func_70014_b"
/** 
 * "Sets entity to burn for x amount of seconds
 * 
 * Parent Class: Entity
 */
m.setFire = "func_70015_d"
/** 
 * "Sets the velocity to the args. Args: x
 * 
 * Parent Class: EntityThrowable
 */
m.setVelocity = "func_70016_h"
/** 
 * Sets that this entity has been attacked.
 * 
 * Parent Class: EntityLivingBase
 */
m.setBeenAttacked = "func_70018_K"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
m.setEating = "func_70019_c"
/** 
 * Return the Entity parts making up this Entity (currently only for dragons)
 * 
 * Parent Class: EntityDragon
 */
m.getParts = "func_70021_al"
m.getEntityString = {}
/** 
 * Returns the string that identifies this Entity's class
 * 
 * Parent Class: Entity
 */
m.getEntityString.Entity = "func_70022_Q"
/** 
 * Gets the string representation of a specific entity.
 * 
 * Parent Class: EntityList
 */
m.getEntityString.EntityList = "func_75621_b"

/** 
 * "Adds to the current velocity of the entity. Args: x
 * 
 * Parent Class: EntityHanging
 */
m.addVelocity = "func_70024_g"
/** 
 * Checks if this entity is either in water or on an open air block in rain (used in wolves).
 * 
 * Parent Class: Entity
 */
m.isWet = "func_70026_G"
/** 
 * Returns true if Entity argument is equal to this Entity
 * 
 * Parent Class: EntityDragonPart
 */
m.isEntityEqual = "func_70028_i"
/** 
 * Gets called every tick from main Entity class
 * 
 * Parent Class: EntityWaterMob
 */
m.onEntityUpdate = "func_70030_z"
/** 
 * Set sprinting switch for Entity.
 * 
 * Parent Class: EntityLivingBase
 */
m.setSprinting = "func_70031_b"
/** 
 * Returns the distance to the entity. Args: entity
 * 
 * Parent Class: Entity
 */
m.getDistanceToEntity = "func_70032_d"
/** 
 * Sets the head's yaw rotation of the entity.
 * 
 * Parent Class: EntityLivingBase
 */
m.setRotationYawHead = "func_70034_d"
m.getInventory = {}
/** 
 * returns the inventory of this entity (only used in EntityPlayerMP it seems)
 * 
 * Parent Class: EntityPlayer
 */
m.getInventory.EntityPlayer = "func_70035_c"
/** 
 * "returns a list if itemStacks
 * 
 * Parent Class: Container
 */
m.getInventory.Container = "func_75138_a"

/** 
 * (abstract) Protected helper method to read subclass entity data from NBT.
 * 
 * Parent Class: EntityPotion
 */
m.readEntityFromNBT = "func_70037_a"
/** 
 * "Checks if the offset position from the entity's current position is inside of liquid. Args: x
 * 
 * Parent Class: Entity
 */
m.isOffsetPositionInLiquid = "func_70038_c"
/** 
 * "Either write this entity to the NBT tag given and return true
 * 
 * Parent Class: EntityLeashKnot
 */
m.writeToNBTOptional = "func_70039_c"
/** 
 * returns a (normalized) vector of where this entity is looking
 * 
 * Parent Class: EntityLivingBase
 */
m.getLookVec = "func_70040_Z"
/** 
 * returns if this entity triggers Block.onEntityWalking on the blocks they walk on. used for spiders and wolves to prevent them from trampling crops
 * 
 * Parent Class: EntityArrow
 */
m.canTriggerWalking = "func_70041_e_"
/** 
 * Returns the Y offset from the entity's position for any entity riding this one.
 * 
 * Parent Class: EntitySpider
 */
m.getMountedYOffset = "func_70042_X"
/** 
 * 
 * 
 * Parent Class: EntityBoat
 */
m.updateRiderPosition = "func_70043_V"
/** 
 * Called whenever the entity is walking inside of lava.
 * 
 * Parent Class: Entity
 */
m.setOnFireFromLava = "func_70044_A"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.isImmuneToFire = "func_70045_F"
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
m.getEyeHeight = "func_70047_e"
/** 
 * Returns a new NBTTagList filled with the specified floats
 * 
 * Parent Class: Entity
 */
m.newFloatNBTList = "func_70049_a"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.setAir = "func_70050_g"
/** 
 * Get if the Entity is sprinting.
 * 
 * Parent Class: Entity
 */
m.isSprinting = "func_70051_ag"
/** 
 * "Enable or disable a entity flag
 * 
 * Parent Class: Entity
 */
m.setFlag = "func_70052_a"
/** 
 * Checks if the current block the entity is within of the specified material type
 * 
 * Parent Class: Entity
 */
m.isInsideOfMaterial = "func_70055_a"
/** 
 * Setups the entity to do the hurt animation. Only used by packets in multiplayer.
 * 
 * Parent Class: EntityMinecart
 */
m.performHurtAnimation = "func_70057_ab"
/** 
 * Used in both water and by flying objects
 * 
 * Parent Class: Entity
 */
m.moveFlying = "func_70060_a"
/** 
 * "Sets the held item
 * 
 * Parent Class: EntityPlayer
 */
m.setCurrentItemOrArmor = "func_70062_b"
/** 
 * Keeps moving the entity up so it isn't colliding with blocks and other requirements for this entity to be spawned (only actually used on players though its also on Entity)
 * 
 * Parent Class: EntityPlayer
 */
m.preparePlayerToSpawn = "func_70065_x"
/** 
 * Removes fire from entity.
 * 
 * Parent Class: Entity
 */
m.extinguish = "func_70066_B"
/** 
 * Returns true if other Entities should be prevented from moving through this Entity.
 * 
 * Parent Class: EntityWitherSkull
 */
m.canBeCollidedWith = "func_70067_L"
/** 
 * Returns the squared distance to the entity. Args: entity
 * 
 * Parent Class: Entity
 */
m.getDistanceSqToEntity = "func_70068_e"
/** 
 * 
 * 
 * Parent Class: EntityFireworkRocket
 */
m.getBrightnessForRender = "func_70070_b"
m.onUpdate = {}
/** 
 * Called to update the entity's position/logic.
 * 
 * Parent Class: EntityEnderPearl
 */
m.onUpdate.EntityEnderPearl = "func_70071_h_"
/** 
 * 
 * 
 * Parent Class: PlayerManager$PlayerInstance
 */
m.onUpdate.PlayerManager$PlayerInstance = "func_73254_a"
/** 
 * Handles the food game logic.
 * 
 * Parent Class: FoodStats
 */
m.onUpdate.FoodStats = "func_75118_a"
/** 
 * 
 * 
 * Parent Class: PotionEffect
 */
m.onUpdate.PotionEffect = "func_76455_a"
/** 
 * Called each tick as long the item is on a player inventory. Uses by maps to check if is on a player hand and update it's contents.
 * 
 * Parent Class: Item
 */
m.onUpdate.Item = "func_77663_a"

/** 
 * Returns if this entity is in water and will end up adding the waters velocity to the entity
 * 
 * Parent Class: EntityItem
 */
m.handleWaterMovement = "func_70072_I"
/** 
 * This method gets called when the entity kills another one.
 * 
 * Parent Class: EntityPlayer
 */
m.onKillEntity = "func_70074_a"
/** 
 * "If returns false
 * 
 * Parent Class: EntityFireworkRocket
 */
m.canAttackWithItem = "func_70075_an"
/** 
 * sets the dead flag. Used when you fall off the bottom of the world.
 * 
 * Parent Class: EntityLivingBase
 */
m.kill = "func_70076_C"
/** 
 * Called when a lightning bolt hits the entity.
 * 
 * Parent Class: EntityVillager
 */
m.onStruckByLightning = "func_70077_a"
/** 
 * "Called when a player mounts an entity. e.g. mounts a pig
 * 
 * Parent Class: EntityWither
 */
m.mountEntity = "func_70078_a"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getRotationYawHead = "func_70079_am"
/** 
 * Sets the entity's position and rotation.
 * 
 * Parent Class: Entity
 */
m.setPositionAndRotation = "func_70080_a"
/** 
 * Will deal the specified amount of damage to the entity if the entity isn't immune to fire damage. Args: amountDamage
 * 
 * Parent Class: EntityItem
 */
m.dealFireDamage = "func_70081_e"
/** 
 * Adds 15% to the entity's yaw and subtracts 15% from the pitch. Clamps pitch from -90 to 90. Both arguments in degrees.
 * 
 * Parent Class: Entity
 */
m.setAngles = "func_70082_c"
/** 
 * Returns true if the flag is active for the entity. Known flags: 0) is burning; 1) is sneaking; 2) is riding something; 3) is sprinting; 4) is eating
 * 
 * Parent Class: Entity
 */
m.getFlag = "func_70083_f"
/** 
 * "Adds a value to the player score. Currently not actually used and the entity passed in does nothing. Args: entity
 * 
 * Parent Class: EntityPlayer
 */
m.addToPlayerScore = "func_70084_c"
/** 
 * "Called when a player interacts with a mob. e.g. gets milk from a cow
 * 
 * Parent Class: EntityVillager
 */
m.interact = "func_70085_c"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getAir = "func_70086_ai"
/** 
 * creates a NBT list from the array of doubles passed to this function
 * 
 * Parent Class: Entity
 */
m.newDoubleNBTList = "func_70087_a"
/** 
 * 
 * 
 * Parent Class: EntityWitherSkull
 */
m.entityInit = "func_70088_a"
/** 
 * Checks whether target entity is alive.
 * 
 * Parent Class: EntityLivingBase
 */
m.isEntityAlive = "func_70089_S"
/** 
 * Checks if this entity is inside water (if inWater field is true as a result of handleWaterMovement() returning true)
 * 
 * Parent Class: EntitySquid
 */
m.isInWater = "func_70090_H"
/** 
 * "Tries to moves the entity by the passed in displacement. Args: x
 * 
 * Parent Class: EntityHanging
 */
m.moveEntity = "func_70091_d"
/** 
 * Checks if this entity is inside of an opaque block
 * 
 * Parent Class: EntityPlayer
 */
m.isEntityInsideOpaqueBlock = "func_70094_T"
/** 
 * Sets the sneaking flag.
 * 
 * Parent Class: Entity
 */
m.setSneaking = "func_70095_a"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.getDataWatcher = "func_70096_w"
/** 
 * Called when the entity is attacked.
 * 
 * Parent Class: EntityWitherSkull
 */
m.attackEntityFrom = "func_70097_a"
/** 
 * Handles updating while being ridden by an entity
 * 
 * Parent Class: EntityPlayer
 */
m.updateRidden = "func_70098_U"
/** 
 * Drops an item at the position of the entity.
 * 
 * Parent Class: Entity
 */
m.entityDropItem = "func_70099_a"
/** 
 * Called by a player entity when they collide with an entity
 * 
 * Parent Class: EntityArrow
 */
m.onCollideWithPlayer = "func_70100_b_"
/** 
 * "Sets the rotation of the entity. Args: yaw
 * 
 * Parent Class: Entity
 */
m.setRotation = "func_70101_b"
/** 
 * 
 * 
 * Parent Class: EntityFireworkRocket
 */
m.handleStatusUpdate = "func_70103_a"
/** 
 * Returns true if this entity should push and be pushed by other entities when colliding.
 * 
 * Parent Class: EntityMinecart
 */
m.canBePushed = "func_70104_M"
/** 
 * Will get destroyed next tick.
 * 
 * Parent Class: EntityPlayer
 */
m.setDead = "func_70106_y"
/** 
 * Applies a velocity to each of the entities pushing them away from each other. Args: entity
 * 
 * Parent Class: EntitySlime
 */
m.applyEntityCollision = "func_70108_f"
/** 
 * Sets the Entity inside a web block.
 * 
 * Parent Class: EntityPlayer
 */
m.setInWeb = "func_70110_aj"
/** 
 * 
 * 
 * Parent Class: EntityFireball
 */
m.getCollisionBorderSize = "func_70111_Y"
/** 
 * Checks if the entity is in range to render by using the past in distance and comparing it to its average edge length * 64 * renderDistanceWeight Args: distance
 * 
 * Parent Class: EntityThrowable
 */
m.isInRangeToRenderDist = "func_70112_a"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.isEating = "func_70113_ah"
/** 
 * "Returns a boundingBox used to collide the entity with other entities and blocks. This enables the entity to be pushable on contact
 * 
 * Parent Class: EntityMinecart
 */
m.getCollisionBox = "func_70114_g"
/** 
 * "Returns true if the entity is riding another entity
 * 
 * Parent Class: Entity
 */
m.isRiding = "func_70115_ae"
/** 
 * 
 * 
 * Parent Class: EntityPotion
 */
m.getVelocity = "func_70182_d"
/** 
 * 
 * 
 * Parent Class: EntityPotion
 */
m.getInaccuracy = "func_70183_g"
m.onImpact = {}
/** 
 * Called when this EntityThrowable hits a block or entity.
 * 
 * Parent Class: EntityPotion
 */
m.onImpact.EntityPotion = "func_70184_a"
/** 
 * Called when this EntityFireball hits a block or entity.
 * 
 * Parent Class: EntityWitherSkull
 */
m.onImpact.EntityWitherSkull = "func_70227_a"

/** 
 * Gets the amount of gravity to apply to the thrown entity with each tick.
 * 
 * Parent Class: EntityPotion
 */
m.getGravityVelocity = "func_70185_h"
/** 
 * "Similar to setArrowHeading
 * 
 * Parent Class: EntityThrowable
 */
m.setThrowableHeading = "func_70186_c"
/** 
 * Returns the damage value of the thrown potion that this EntityPotion represents.
 * 
 * Parent Class: EntityPotion
 */
m.getPotionDamage = "func_70196_i"
m.setDamage = {}
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
m.setDamage.EntityArrow = "func_70239_b"
/** 
 * Sets the current amount of damage the minecart has taken. Decreases over time. The cart breaks when this is over 40.
 * 
 * Parent Class: EntityMinecart
 */
m.setDamage.EntityMinecart = "func_70492_c"

/** 
 * Sets the amount of knockback the arrow applies when it hits a mob.
 * 
 * Parent Class: EntityArrow
 */
m.setKnockbackStrength = "func_70240_a"
/** 
 * Whether the arrow has a stream of critical hit particles flying behind it.
 * 
 * Parent Class: EntityArrow
 */
m.getIsCritical = "func_70241_g"
m.getDamage = {}
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
m.getDamage.EntityArrow = "func_70242_d"
/** 
 * Gets the current amount of damage the minecart has taken. Decreases over time. The cart breaks when this is over 40.
 * 
 * Parent Class: EntityMinecart
 */
m.getDamage.EntityMinecart = "func_70491_i"

/** 
 * Whether the arrow has a stream of critical hit particles flying behind it.
 * 
 * Parent Class: EntityArrow
 */
m.setIsCritical = "func_70243_d"
/** 
 * Sets the time to count down from since the last time entity was hit.
 * 
 * Parent Class: EntityBoat
 */
m.setTimeSinceHit = "func_70265_b"
/** 
 * Sets the damage taken from the last hit.
 * 
 * Parent Class: EntityBoat
 */
m.setDamageTaken = "func_70266_a"
/** 
 * Gets the forward direction of the entity.
 * 
 * Parent Class: EntityBoat
 */
m.getForwardDirection = "func_70267_i"
/** 
 * Gets the time since the last hit.
 * 
 * Parent Class: EntityBoat
 */
m.getTimeSinceHit = "func_70268_h"
/** 
 * Sets the forward direction of the entity.
 * 
 * Parent Class: EntityBoat
 */
m.setForwardDirection = "func_70269_c"
/** 
 * true if no player in boat
 * 
 * Parent Class: EntityBoat
 */
m.setIsBoatEmpty = "func_70270_d"
/** 
 * Gets the damage taken from the last hit.
 * 
 * Parent Class: EntityBoat
 */
m.getDamageTaken = "func_70271_g"
/** 
 * sets the age of the item so that it'll despawn one minute after it has been dropped (instead of five). Used when items are dropped from players in creative mode
 * 
 * Parent Class: EntityItem
 */
m.setAgeToCreativeDespawnTime = "func_70288_d"
/** 
 * Tries to merge this item with the item passed as the parameter. Returns true if successful. Either this item or the other item will  be removed from the world.
 * 
 * Parent Class: EntityItem
 */
m.combineItems = "func_70289_a"
/** 
 * "Returns the maximum stack size for a inventory slot. Seems to always be 64
 * 
 * Parent Class: InventoryCraftResult
 */
m.getInventoryStackLimit = "func_70297_j_"
m.decrStackSize = {}
/** 
 * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
 * 
 * Parent Class: InventoryCraftResult
 */
m.decrStackSize.InventoryCraftResult = "func_70298_a"
/** 
 * Decrease the size of the stack in slot (first int arg) by the amount of the second int arg. Returns the new stack.
 * 
 * Parent Class: Slot
 */
m.decrStackSize.Slot = "func_75209_a"

/** 
 * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
 * 
 * Parent Class: InventoryCraftResult
 */
m.setInventorySlotContents = "func_70299_a"
/** 
 * Do not make give this method the name canInteractWith because it clashes with Container
 * 
 * Parent Class: InventoryCraftResult
 */
m.isUseableByPlayer = "func_70300_a"
/** 
 * Returns the stack in the given slot.
 * 
 * Parent Class: InventoryCraftResult
 */
m.getStackInSlot = "func_70301_a"
/** 
 * Returns the number of slots in the inventory.
 * 
 * Parent Class: InventoryCraftResult
 */
m.getSizeInventory = "func_70302_i_"
/** 
 * Removes a stack from the given slot and returns it.
 * 
 * Parent Class: InventoryCraftResult
 */
m.removeStackFromSlot = "func_70304_b"
/** 
 * Decrement the number of animations remaining. Only called on client side. This is used to handle the animation of receiving a block.
 * 
 * Parent Class: InventoryPlayer
 */
m.decrementAnimations = "func_70429_k"
m.getTotalArmorValue = {}
/** 
 * "Based on the damage values and maximum damage values of each armor item
 * 
 * Parent Class: InventoryPlayer
 */
m.getTotalArmorValue.InventoryPlayer = "func_70430_l"
/** 
 * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
 * 
 * Parent Class: EntityPlayer
 */
m.getTotalArmorValue.EntityPlayer = "func_70658_aO"

/** 
 * Returns true if the specified ItemStack exists in the inventory.
 * 
 * Parent Class: InventoryPlayer
 */
m.hasItemStack = "func_70431_c"
/** 
 * stores an itemstack in the users inventory
 * 
 * Parent Class: InventoryPlayer
 */
m.storeItemStack = "func_70432_d"
/** 
 * Drop all armor and main inventory items.
 * 
 * Parent Class: InventoryPlayer
 */
m.dropAllItems = "func_70436_m"
/** 
 * "Set the stack helds by mouse
 * 
 * Parent Class: InventoryPlayer
 */
m.setItemStack = "func_70437_b"
/** 
 * returns a player armor item (as itemstack) contained in specified armor slot.
 *  
 * @param slotIn the slot index requested
 * 
 * Parent Class: InventoryPlayer
 */
m.armorItemInSlot = "func_70440_f"
/** 
 * "Adds the item stack to the inventory
 * 
 * Parent Class: InventoryPlayer
 */
m.addItemStackToInventory = "func_70441_a"
/** 
 * Returns the first item stack that is empty.
 * 
 * Parent Class: InventoryPlayer
 */
m.getFirstEmptyStack = "func_70447_i"
/** 
 * Returns the item stack currently held by the player.
 * 
 * Parent Class: InventoryPlayer
 */
m.getCurrentItem = "func_70448_g"
m.damageArmor = {}
/** 
 * Damages armor in each slot by the specified amount.
 * 
 * Parent Class: InventoryPlayer
 */
m.damageArmor.InventoryPlayer = "func_70449_g"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.damageArmor.EntityPlayer = "func_70675_k"

/** 
 * Get the size of the player hotbar inventory
 * 
 * Parent Class: InventoryPlayer
 */
m.getHotbarSize = "func_70451_h"
/** 
 * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
 * 
 * Parent Class: InventoryPlayer
 */
m.storePartialItemStack = "func_70452_e"
/** 
 * "Switch the current item to the next one or the previous one
 *  
 * @param direction Direction to switch (1
 * 
 * Parent Class: InventoryPlayer
 */
m.changeCurrentItem = "func_70453_c"
/** 
 * Copy the ItemStack contents from another InventoryPlayer instance
 * 
 * Parent Class: InventoryPlayer
 */
m.copyInventory = "func_70455_b"
/** 
 * "Returns the itemstack in the slot specified (Top left is 0
 * 
 * Parent Class: InventoryCrafting
 */
m.getStackInRowAndColumn = "func_70463_b"
/** 
 * 
 * 
 * Parent Class: InventoryMerchant
 */
m.getCurrentRecipe = "func_70468_h"
/** 
 * "if par1 slot has changed
 * 
 * Parent Class: InventoryMerchant
 */
m.inventoryResetNeededOnSlotChange = "func_70469_d"
/** 
 * 
 * 
 * Parent Class: InventoryMerchant
 */
m.resetRecipeAndSlots = "func_70470_g"
m.setCurrentRecipeIndex = {}
/** 
 * 
 * 
 * Parent Class: InventoryMerchant
 */
m.setCurrentRecipeIndex.InventoryMerchant = "func_70471_c"
/** 
 * 
 * 
 * Parent Class: ContainerMerchant
 */
m.setCurrentRecipeIndex.ContainerMerchant = "func_75175_c"

/** 
 * 
 * 
 * Parent Class: InventoryEnderChest
 */
m.loadInventoryFromNBT = "func_70486_a"
/** 
 * 
 * 
 * Parent Class: InventoryEnderChest
 */
m.saveInventoryToNBT = "func_70487_g"
/** 
 * Gets the rolling direction the cart rolls while being attacked. Can be 1 or -1.
 * 
 * Parent Class: EntityMinecart
 */
m.getRollingDirection = "func_70493_k"
/** 
 * Sets the rolling direction the cart rolls while being attacked. Can be 1 or -1.
 * 
 * Parent Class: EntityMinecart
 */
m.setRollingDirection = "func_70494_i"
/** 
 * Gets the rolling amplitude the cart rolls while being attacked.
 * 
 * Parent Class: EntityMinecart
 */
m.getRollingAmplitude = "func_70496_j"
/** 
 * Sets the rolling amplitude the cart rolls while being attacked.
 * 
 * Parent Class: EntityMinecart
 */
m.setRollingAmplitude = "func_70497_h"
/** 
 * checks to make sure painting can be placed there
 * 
 * Parent Class: EntityLeashKnot
 */
m.onValidSurface = "func_70518_d"
/** 
 * Returns the XP value of this XP orb.
 * 
 * Parent Class: EntityXPOrb
 */
m.getXpValue = "func_70526_d"
/** 
 * Get a fragment of the maximum experience points value for the supplied value of experience points value.
 * 
 * Parent Class: EntityXPOrb
 */
m.getXPSplit = "func_70527_a"
/** 
 * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
 * 
 * Parent Class: EntityXPOrb
 */
m.getTextureByXP = "func_70528_g"
/** 
 * 
 * 
 * Parent Class: EntityFX
 */
m.getRedColorF = "func_70534_d"
/** 
 * 
 * 
 * Parent Class: EntityFX
 */
m.getBlueColorF = "func_70535_g"
/** 
 * Public method to set private field particleTextureIndex.
 * 
 * Parent Class: EntityFX
 */
m.setParticleTextureIndex = "func_70536_a"
/** 
 * 
 * 
 * Parent Class: EntityParticleEmitter
 */
m.getFXLayer = "func_70537_b"
/** 
 * 
 * 
 * Parent Class: EntityFX
 */
m.setRBGColorF = "func_70538_b"
/** 
 * 
 * 
 * Parent Class: EntityFX
 */
m.multipleParticleScaleBy = "func_70541_f"
/** 
 * 
 * 
 * Parent Class: EntityFX
 */
m.getGreenColorF = "func_70542_f"
/** 
 * 
 * 
 * Parent Class: EntityFX
 */
m.multiplyVelocity = "func_70543_e"
/** 
 * Sets the base spell texture index
 * 
 * Parent Class: EntitySpellParticleFX
 */
m.setBaseSpellTextureIndex = "func_70589_b"
/** 
 * Checks if the entity's current position is a valid location to spawn this entity.
 * 
 * Parent Class: EntitySlime
 */
m.getCanSpawnHere = "func_70601_bi"
/** 
 * Returns render size modifier
 * 
 * Parent Class: EntityLiving
 */
m.getRenderSizeModifier = "func_70603_bj"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.setRevengeTarget = "func_70604_c"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.getMoveHelper = "func_70605_aq"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.setHealth = "func_70606_j"
/** 
 * Returns whether player is sleeping or not
 * 
 * Parent Class: EntityPlayer
 */
m.isPlayerSleeping = "func_70608_bn"
/** 
 * "handles entity death timer
 * 
 * Parent Class: EntityDragon
 */
m.onDeathUpdate = "func_70609_aI"
/** 
 * Dead and sleeping entities cannot move
 * 
 * Parent Class: EntityPlayer
 */
m.isMovementBlocked = "func_70610_aX"
/** 
 * "Moves the entity based on the specified heading.  Args: strafe
 * 
 * Parent Class: EntityPlayer
 */
m.moveEntityWithHeading = "func_70612_e"
/** 
 * Returns whether the entity is in a server world
 * 
 * Parent Class: EntityArmorStand
 */
m.isServerWorld = "func_70613_aW"
/** 
 * This function applies the benefits of growing back wool and faster growing up to the acting entity. (This function is used in the AIEatGrass)
 * 
 * Parent Class: EntitySheep
 */
m.eatGrassBonus = "func_70615_aA"
/** 
 * "returns true if this entity is by a ladder
 * 
 * Parent Class: EntitySpider
 */
m.isOnLadder = "func_70617_f_"
/** 
 * Remove the speified potion effect from this entity.
 * 
 * Parent Class: EntityLivingBase
 */
m.removePotionEffectClient = "func_70618_n"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.updateAITasks = "func_70619_bc"
/** 
 * Returns the sound this mob makes when it is hurt.
 * 
 * Parent Class: EntityPlayer
 */
m.getHurtSound = "func_70621_aR"
/** 
 * Makes the entity despawn if requirements are reached
 * 
 * Parent Class: EntityWither
 */
m.despawnEntity = "func_70623_bb"
/** 
 * Sets the active target the Task system uses for tracking
 * 
 * Parent Class: EntityWolf
 */
m.setAttackTarget = "func_70624_b"
/** 
 * Changes pitch and yaw so that the entity calling the function is facing the entity provided as an argument.
 * 
 * Parent Class: EntityLiving
 */
m.faceEntity = "func_70625_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.updateEntityActionState = "func_70626_be"
/** 
 * "Get number of ticks
 * 
 * Parent Class: EntityGuardian
 */
m.getTalkInterval = "func_70627_aG"
/** 
 * Drop 0-2 items of this living's type
 *  
 * @param wasRecentlyHit true if this this entity was recently hit by appropriate entity (generally only if player or tameable)
 * @param lootingModifier level of enchanment to be applied to this drop
 * 
 * Parent Class: EntityWitch
 */
m.dropFewItems = "func_70628_a"
/** 
 * "main AI tick function
 * 
 * Parent Class: EntityLivingBase
 */
m.updateAITick = "func_70629_bd"
/** 
 * "If Animal
 * 
 * Parent Class: EntityZombie
 */
m.isChild = "func_70631_g_"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.isBlocking = "func_70632_aY"
/** 
 * Sets the position of the entity and updates the 'last' variables
 * 
 * Parent Class: Entity
 */
m.setPositionAndUpdate = "func_70634_a"
/** 
 * returns the EntitySenses Object for the EntityLiving
 * 
 * Parent Class: EntityLiving
 */
m.getEntitySenses = "func_70635_at"
/** 
 * "Called frequently so the entity can update its state every tick as required. For example
 * 
 * Parent Class: EntityPlayer
 */
m.onLivingUpdate = "func_70636_d"
/** 
 * Gets the active target the Task system uses for tracking
 * 
 * Parent Class: EntityLiving
 */
m.getAttackTarget = "func_70638_az"
/** 
 * Returns the sound this mob makes while it's alive.
 * 
 * Parent Class: EntityVillager
 */
m.getLivingSound = "func_70639_aQ"
/** 
 * Will return how many at most can spawn in a chunk at once.
 * 
 * Parent Class: EntityGhast
 */
m.getMaxSpawnedInChunk = "func_70641_bl"
/** 
 * Plays living's sound at its position
 * 
 * Parent Class: EntityLiving
 */
m.playLivingSound = "func_70642_aH"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getAITarget = "func_70643_av"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.isPotionActive = "func_82165_m"
/** 
 * Called when the mob's health reaches 0.
 * 
 * Parent Class: EntityPlayer
 */
m.onDeath = "func_70645_a"
/** 
 * The speed it takes to move the entityliving's rotationPitch through the faceEntity method. This is only currently use in wolves.
 * 
 * Parent Class: EntitySlime
 */
m.getVerticalFaceSpeed = "func_70646_bf"
/** 
 * Gets the pitch of living sounds in living entities.
 * 
 * Parent Class: EntityBat
 */
m.getSoundPitch = "func_70647_i"
/** 
 * 
 * 
 * Parent Class: EntityWaterMob
 */
m.canBreatheUnderwater = "func_70648_aU"
/** 
 * Returns true if the newer Entity AI code should be run
 * 
 * Parent Class: EntityCreeper
 */
m.isAIEnabled = "func_70650_aV"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getActivePotionEffects = "func_70651_bq"
/** 
 * 
 * 
 * Parent Class: EntityZombie
 */
m.attackEntityAsMob = "func_70652_k"
/** 
 * knocks back this entity
 * 
 * Parent Class: EntityLivingBase
 */
m.knockBack = "func_70653_a"
/** 
 * "Reduces damage
 * 
 * Parent Class: EntityLivingBase
 */
m.applyArmorCalculations = "func_70655_b"
/** 
 * Spawns an explosion particle around the Entity's location
 * 
 * Parent Class: EntityLiving
 */
m.spawnExplosionParticle = "func_70656_aK"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.setMoveForward = "func_70657_f"
/** 
 * set the movespeed used for the new AI system
 * 
 * Parent Class: EntityLiving
 */
m.setAIMoveSpeed = "func_70659_e"
/** 
 * "returns the PotionEffect for the supplied Potion if it is active
 * 
 * Parent Class: EntityLivingBase
 */
m.getActivePotionEffect = "func_70660_b"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.getNavigator = "func_70661_as"
/** 
 * Returns true if this entity is undead.
 * 
 * Parent Class: EntityLivingBase
 */
m.isEntityUndead = "func_70662_br"
m.updateRotation = {}
/** 
 * "Arguments: current rotation
 * 
 * Parent Class: EntityLiving
 */
m.updateRotation.EntityLiving = "func_70663_b"
/** 
 * 
 * 
 * Parent Class: EntityLookHelper
 */
m.updateRotation.EntityLookHelper = "func_75652_a"

/** 
 * Causes this entity to do an upwards motion (jumping).
 * 
 * Parent Class: EntityPlayer
 */
m.jump = "func_70664_aZ"
/** 
 * Deals damage to the entity. If its a EntityPlayer then will take damage from the armor first and then health second with the reduced value. Args: damageAmount
 * 
 * Parent Class: EntityPlayer
 */
m.damageEntity = "func_70665_d"
/** 
 * Get this Entity's EnumCreatureAttribute
 * 
 * Parent Class: EntityZombie
 */
m.getCreatureAttribute = "func_70668_bt"
/** 
 * Renders broken item particles using the given ItemStack
 * 
 * Parent Class: EntityLivingBase
 */
m.renderBrokenItemStack = "func_70669_a"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.onNewPotionEffect = "func_70670_a"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.getLookHelper = "func_70671_ap"
/** 
 * "Reduces damage
 * 
 * Parent Class: EntityWitch
 */
m.applyPotionDamageCalculations = "func_70672_c"
/** 
 * Returns the sound this mob makes on death.
 * 
 * Parent Class: EntityPlayer
 */
m.getDeathSound = "func_70673_aS"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.clearActivePotions = "func_70674_bp"
/** 
 * interpolated look vector
 * 
 * Parent Class: EntityLivingBase
 */
m.getLook = "func_70676_i"
m.getSwingProgress = {}
/** 
 * Returns where in the swing animation the living entity is (from 0 to 1).  Args: partialTickTime
 * 
 * Parent Class: EntityLivingBase
 */
m.getSwingProgress.EntityLivingBase = "func_70678_g"
/** 
 * "Returns where in the swing animation the living entity is (from 0 to 1).  Args : entity
 * 
 * Parent Class: RendererLivingEntity
 */
m.getSwingProgress.RendererLivingEntity = "func_77040_d"

/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.updatePotionEffects = "func_70679_bo"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getRNG = "func_70681_au"
/** 
 * Decrements the entity's air supply when underwater
 * 
 * Parent Class: EntityIronGolem
 */
m.decreaseAirSupply = "func_70682_h"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.getJumpHelper = "func_70683_ar"
/** 
 * Only use is to identify if class is an instance of player for experience dropping
 * 
 * Parent Class: EntityPlayer
 */
m.isPlayer = "func_70684_aJ"
/** 
 * returns true if the entity provided in the argument can be seen. (Raytrace)
 * 
 * Parent Class: EntityLivingBase
 */
m.canEntityBeSeen = "func_70685_l"
/** 
 * Returns true if this entity can attack entities of the specified class.
 * 
 * Parent Class: EntityIronGolem
 */
m.canAttackClass = "func_70686_a"
/** 
 * 
 * 
 * Parent Class: EntitySpider
 */
m.isPotionApplicable = "func_70687_e"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.onFinishedPotionEffect = "func_70688_c"
/** 
 * the movespeed used for the new AI system
 * 
 * Parent Class: EntityPlayer
 */
m.getAIMoveSpeed = "func_70689_ay"
/** 
 * adds a PotionEffect to the entity
 * 
 * Parent Class: EntityWither
 */
m.addPotionEffect = "func_70690_d"
/** 
 * Heal living entity (param: amount of half-hearts)
 * 
 * Parent Class: EntityLivingBase
 */
m.heal = "func_70691_i"
/** 
 * "Determines if an entity can be despawned
 * 
 * Parent Class: EntityVillager
 */
m.canDespawn = "func_70692_ba"
/** 
 * Get the experience points the entity currently has.
 * 
 * Parent Class: EntityPlayer
 */
m.getExperiencePoints = "func_70693_a"
/** 
 * "Returns the item that this EntityLiving is holding
 * 
 * Parent Class: EntityPlayer
 */
m.getHeldItem = "func_70694_bm"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.onChangedPotionEffect = "func_70695_b"
/** 
 * "if the entity got a PathEntity it returns true
 * 
 * Parent Class: EntityCreature
 */
m.hasPath = "func_70781_l"
/** 
 * 
 * 
 * Parent Class: EntitySlime
 */
m.setSlimeSize = "func_70799_a"
/** 
 * Indicates weather the slime is able to damage the player (based upon the slime's size)
 * 
 * Parent Class: EntitySlime
 */
m.canDamagePlayer = "func_70800_m"
/** 
 * 
 * 
 * Parent Class: EntitySlime
 */
m.createInstance = "func_70802_j"
/** 
 * Returns the name of the sound played when the slime jumps.
 * 
 * Parent Class: EntitySlime
 */
m.getJumpSound = "func_70803_o"
/** 
 * Returns true if the slime makes a sound when it lands after a jump (based upon the slime's size)
 * 
 * Parent Class: EntitySlime
 */
m.makesSoundOnLand = "func_70804_p"
/** 
 * "Gets the amount of damage dealt to the player when ""attacked"" by the slime."
 * 
 * Parent Class: EntitySlime
 */
m.getAttackStrength = "func_70805_n"
/** 
 * Gets the amount of time the slime needs to wait between jumps.
 * 
 * Parent Class: EntitySlime
 */
m.getJumpDelay = "func_70806_k"
/** 
 * Returns true if the slime makes a sound when it jumps (based upon the slime's size)
 * 
 * Parent Class: EntitySlime
 */
m.makesSoundOnJump = "func_70807_r"
/** 
 * 
 * 
 * Parent Class: EntitySlime
 */
m.alterSquishAmount = "func_70808_l"
/** 
 * Returns the size of the slime.
 * 
 * Parent Class: EntitySlime
 */
m.getSlimeSize = "func_70809_q"
/** 
 * Checks to make sure the light is not too bright where the mob is spawning
 * 
 * Parent Class: EntitySilverfish
 */
m.isValidLightLevel = "func_70814_o"
/** 
 * Teleport the enderman to another entity
 * 
 * Parent Class: EntityEnderman
 */
m.teleportToEntity = "func_70816_c"
/** 
 * 
 * 
 * Parent Class: EntityEnderman
 */
m.setScreaming = "func_70819_e"
/** 
 * Teleport the enderman to a random nearby position
 * 
 * Parent Class: EntityEnderman
 */
m.teleportRandomly = "func_70820_n"
/** 
 * Checks to see if this enderman should be attacking this player
 * 
 * Parent Class: EntityEnderman
 */
m.shouldAttackPlayer = "func_70821_d"
/** 
 * 
 * 
 * Parent Class: EntityEnderman
 */
m.isScreaming = "func_70823_r"
/** 
 * Teleport the enderman
 * 
 * Parent Class: EntityEnderman
 */
m.teleportTo = "func_70825_j"
/** 
 * "Sets the state of creeper
 * 
 * Parent Class: EntityCreeper
 */
m.setCreeperState = "func_70829_a"
/** 
 * Returns true if the creeper is powered by a lightning bolt.
 * 
 * Parent Class: EntityCreeper
 */
m.getPowered = "func_70830_n"
/** 
 * Params: (Float)Render tick. Returns the intensity of the creeper's flash when it is ignited.
 * 
 * Parent Class: EntityCreeper
 */
m.getCreeperFlashIntensity = "func_70831_j"
/** 
 * "Returns the current state of creeper
 * 
 * Parent Class: EntityCreeper
 */
m.getCreeperState = "func_70832_p"
/** 
 * Causes this PigZombie to become angry at the supplied Entity (which will be a player).
 * 
 * Parent Class: EntityPigZombie
 */
m.becomeAngryAt = "func_70835_c"
/** 
 * "Updates the WatchableObject (Byte) created in entityInit()
 * 
 * Parent Class: EntitySpider
 */
m.setBesideClimbableBlock = "func_70839_e"
/** 
 * Returns true if the WatchableObject (Byte) is 0x01 otherwise returns false. The WatchableObject is updated using setBesideClimableBlock.
 * 
 * Parent Class: EntitySpider
 */
m.isBesideClimbableBlock = "func_70841_p"
/** 
 * 
 * 
 * Parent Class: EntityBlaze
 */
m.setOnFire = "func_70844_e"
/** 
 * 
 * 
 * Parent Class: EntityIronGolem
 */
m.setPlayerCreated = "func_70849_f"
/** 
 * 
 * 
 * Parent Class: EntityIronGolem
 */
m.isPlayerCreated = "func_70850_q"
/** 
 * 
 * 
 * Parent Class: EntityIronGolem
 */
m.setHoldingRose = "func_70851_e"
/** 
 * 
 * 
 * Parent Class: EntityIronGolem
 */
m.getVillage = "func_70852_n"
/** 
 * 
 * 
 * Parent Class: EntityIronGolem
 */
m.getHoldRoseTick = "func_70853_p"
/** 
 * 
 * 
 * Parent Class: EntityIronGolem
 */
m.getAttackTimer = "func_70854_o"
/** 
 * "The age value may be negative or positive or zero. If it's negative
 * 
 * Parent Class: EntityAgeable
 */
m.setGrowingAge = "func_70873_a"
/** 
 * "The age value may be negative or positive or zero. If it's negative
 * 
 * Parent Class: EntityAgeable
 */
m.getGrowingAge = "func_70874_b"
/** 
 * 
 * 
 * Parent Class: EntityAnimal
 */
m.resetInLove = "func_70875_t"
/** 
 * "Checks if the parameter is an item which this animal can be fed to breed it (wheat
 * 
 * Parent Class: EntityWolf
 */
m.isBreedingItem = "func_70877_b"
/** 
 * Returns true if the mob is currently able to mate with the specified mob.
 * 
 * Parent Class: EntityWolf
 */
m.canMateWith = "func_70878_b"
/** 
 * Returns if the entity is currently in 'love mode'.
 * 
 * Parent Class: EntityAnimal
 */
m.isInLove = "func_70880_s"
/** 
 * 
 * 
 * Parent Class: EntitySheep
 */
m.getHeadRotationAngleX = "func_70890_k"
/** 
 * returns true if a sheeps wool has been sheared
 * 
 * Parent Class: EntitySheep
 */
m.getSheared = "func_70892_o"
/** 
 * make a sheep sheared if set to true
 * 
 * Parent Class: EntitySheep
 */
m.setSheared = "func_70893_e"
/** 
 * 
 * 
 * Parent Class: EntitySheep
 */
m.getHeadRotationPointY = "func_70894_j"
/** 
 * Set or remove the saddle of the pig.
 * 
 * Parent Class: EntityPig
 */
m.setSaddled = "func_70900_e"
/** 
 * Returns true if the pig is saddled.
 * 
 * Parent Class: EntityPig
 */
m.getSaddled = "func_70901_n"
/** 
 * 
 * 
 * Parent Class: EntityWolf
 */
m.setTamed = "func_70903_f"
m.setSitting = {}
/** 
 * 
 * 
 * Parent Class: EntityTameable
 */
m.setSitting.EntityTameable = "func_70904_g"
/** 
 * Sets the sitting flag.
 * 
 * Parent Class: EntityAISit
 */
m.setSitting.EntityAISit = "func_75270_a"

/** 
 * 
 * 
 * Parent Class: EntityTameable
 */
m.isSitting = "func_70906_o"
/** 
 * Returns the AITask responsible of the sit logic
 * 
 * Parent Class: EntityTameable
 */
m.getAISit = "func_70907_r"
/** 
 * "Play the taming effect
 * 
 * Parent Class: EntityTameable
 */
m.playTameEffect = "func_70908_e"
/** 
 * 
 * 
 * Parent Class: EntityTameable
 */
m.isTamed = "func_70909_n"
/** 
 * 
 * 
 * Parent Class: EntityOcelot
 */
m.setTameSkin = "func_70912_b"
/** 
 * 
 * 
 * Parent Class: EntityOcelot
 */
m.getTameSkin = "func_70913_u"
/** 
 * Used when calculating the amount of shading to apply while the wolf is wet.
 * 
 * Parent Class: EntityWolf
 */
m.getShadingWhileWet = "func_70915_j"
/** 
 * Sets whether this wolf is angry or not.
 * 
 * Parent Class: EntityWolf
 */
m.setAngry = "func_70916_h"
/** 
 * 
 * 
 * Parent Class: EntityWolf
 */
m.getInterestedAngle = "func_70917_k"
/** 
 * 
 * 
 * Parent Class: EntityWolf
 */
m.setBegging = "func_70918_i"
/** 
 * 
 * 
 * Parent Class: EntityWolf
 */
m.getTailRotation = "func_70920_v"
/** 
 * True if the wolf is wet
 * 
 * Parent Class: EntityWolf
 */
m.isWolfWet = "func_70921_u"
/** 
 * 
 * 
 * Parent Class: EntityWolf
 */
m.isBegging = "func_70922_bv"
/** 
 * 
 * 
 * Parent Class: EntityWolf
 */
m.getShakeAngle = "func_70923_f"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.setRecipes = "func_70930_a"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.getCustomer = "func_70931_l_"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.setCustomer = "func_70932_a_"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.useRecipe = "func_70933_a"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.getRecipes = "func_70934_b"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.setProfession = "func_70938_b"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.setPlaying = "func_70939_f"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.isTrading = "func_70940_q"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.isMating = "func_70941_o"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.isPlaying = "func_70945_p"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.getProfession = "func_70946_n"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.setMating = "func_70947_e"
/** 
 * 
 * 
 * Parent Class: EntityDragon
 */
m.attackEntityFromPart = "func_70965_a"
/** 
 * Sets a new target for the flight AI. It can be a random coordinate or a nearby player.
 * 
 * Parent Class: EntityDragon
 */
m.setNewTarget = "func_70967_k"
/** 
 * Updates the state of the enderdragon's current endercrystal.
 * 
 * Parent Class: EntityDragon
 */
m.updateDragonEnderCrystal = "func_70969_j"
/** 
 * Pushes all entities inside the list away from the enderdragon.
 * 
 * Parent Class: EntityDragon
 */
m.collideWithEntities = "func_70970_a"
/** 
 * "Attacks all entities inside this list
 * 
 * Parent Class: EntityDragon
 */
m.attackEntitiesInList = "func_70971_b"
/** 
 * Destroys all blocks that aren't associated with 'The End' inside the given bounding box.
 * 
 * Parent Class: EntityDragon
 */
m.destroyBlocksInAABB = "func_70972_a"
/** 
 * Simplifies the value of a number by adding/subtracting 180 to the point that the number is between -180 and 180.
 * 
 * Parent Class: EntityDragon
 */
m.simplifyAngle = "func_70973_b"
/** 
 * "Returns a double[3] array with movement offsets
 * 
 * Parent Class: EntityDragon
 */
m.getMovementOffsets = "func_70974_a"
/** 
 * Checks if the player's health is not full and not zero.
 * 
 * Parent Class: EntityPlayer
 */
m.shouldHeal = "func_70996_bM"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.interactWith = "func_70998_m"
/** 
 * Wake up the player if they're sleeping.
 * 
 * Parent Class: EntityPlayer
 */
m.wakeUpPlayer = "func_70999_a"
/** 
 * "Adds a value to a movement statistic field - like run
 * 
 * Parent Class: EntityPlayer
 */
m.addMovementStat = "func_71000_j"
/** 
 * "Called whenever an item is picked up from walking over it. Args: pickedUpEntity
 * 
 * Parent Class: EntityLivingBase
 */
m.onItemPickup = "func_71001_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.respawnPlayer = "func_71004_bE"
/** 
 * Returns the InventoryEnderChest of this player.
 * 
 * Parent Class: EntityPlayer
 */
m.getInventoryEnderChest = "func_71005_bN"
/** 
 * Displays the GUI for interacting with a chest inventory. Args: chestInventory
 * 
 * Parent Class: EntityPlayer
 */
m.displayGUIChest = "func_71007_a"
/** 
 * "sets the itemInUse when the use item button is clicked. Args: itemstack
 * 
 * Parent Class: EntityPlayer
 */
m.setItemInUse = "func_71008_a"
/** 
 * Called when the player performs a critical hit on the Entity. Args: entity that was hit critically
 * 
 * Parent Class: EntityPlayer
 */
m.onCriticalHit = "func_71009_b"
/** 
 * Plays sounds and makes particles for item in use state
 * 
 * Parent Class: EntityPlayer
 */
m.updateItemUse = "func_71010_c"
/** 
 * returns the ItemStack containing the itemInUse
 * 
 * Parent Class: EntityPlayer
 */
m.getItemInUse = "func_71011_bu"
/** 
 * Joins the passed in entity item with the world. Args: entityItem
 * 
 * Parent Class: EntityPlayer
 */
m.joinEntityItemWithWorld = "func_71012_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.removeExperienceLevel = "func_71013_b"
/** 
 * "Adds a value to a mounted movement statistic field - by minecart
 * 
 * Parent Class: EntityPlayer
 */
m.addMountedMovementStat = "func_71015_k"
/** 
 * Sends the player's abilities to the server (if there is one).
 * 
 * Parent Class: EntityPlayer
 */
m.sendPlayerAbilities = "func_71016_p"
/** 
 * "Args: itemstack
 * 
 * Parent Class: EntityPlayer
 */
m.dropPlayerItemWithRandomChoice = "func_71019_a"
m.addExhaustion = {}
/** 
 * increases exhaustion level by supplied amount
 * 
 * Parent Class: EntityPlayer
 */
m.addExhaustion.EntityPlayer = "func_71020_j"
/** 
 * adds input to foodExhaustionLevel to a max of 40
 * 
 * Parent Class: FoodStats
 */
m.addExhaustion.FoodStats = "func_75113_a"

/** 
 * Add experience points to player.
 * 
 * Parent Class: EntityPlayer
 */
m.addExperience = "func_71023_q"
/** 
 * Returns the player's FoodStats object.
 * 
 * Parent Class: EntityPlayer
 */
m.getFoodStats = "func_71024_bL"
/** 
 * Returns whether or not the player is asleep and the screen has fully faded.
 * 
 * Parent Class: EntityPlayer
 */
m.isPlayerFullyAsleep = "func_71026_bH"
/** 
 * Teleports the entity to another dimension. Params: Dimension number to teleport to
 * 
 * Parent Class: EntityMinecartContainer
 */
m.travelToDimension = "func_71027_c"
/** 
 * Destroys the currently equipped item from the player's inventory.
 * 
 * Parent Class: EntityPlayer
 */
m.destroyCurrentEquippedItem = "func_71028_bD"
/** 
 * Will trigger the specified trigger.
 * 
 * Parent Class: EntityPlayer
 */
m.triggerAchievement = "func_71029_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.stopUsingItem = "func_71034_by"
m.onItemUseFinish = {}
/** 
 * "Used for when item use count runs out
 * 
 * Parent Class: EntityPlayer
 */
m.onItemUseFinish.EntityPlayer = "func_71036_o"
/** 
 * Called when the player finishes using this Item (E.g. finishes eating.). Not called when the player stops using the Item before the action is complete.
 * 
 * Parent Class: Item
 */
m.onItemUseFinish.Item = "func_77654_b"
/** 
 * "Called when the item in use count reach 0
 * 
 * Parent Class: ItemStack
 */
m.onItemUseFinish.ItemStack = "func_77950_b"

/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getScore = "func_71037_bA"
/** 
 * Swings the item the player is holding.
 * 
 * Parent Class: EntityLivingBase
 */
m.swingItem = "func_71038_i"
/** 
 * "Checks if the entity is currently using an item (e.g.
 * 
 * Parent Class: EntityPlayer
 */
m.isUsingItem = "func_71039_bw"
/** 
 * Called when player presses the drop item key
 * 
 * Parent Class: EntityPlayer
 */
m.dropOneItem = "func_71040_bB"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.clearItemInUse = "func_71041_bz"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.canEat = "func_71043_e"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.collideWithPlayer = "func_71044_o"
/** 
 * Returns the currently being used item by the player.
 * 
 * Parent Class: EntityPlayer
 */
m.getCurrentEquippedItem = "func_71045_bC"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.onEnchantmentCritical = "func_71047_c"
/** 
 * Displays the GUI for interacting with a book.
 * 
 * Parent Class: EntityPlayer
 */
m.displayGUIBook = "func_71048_c"
/** 
 * Copies the values from the given player into this player if boolean par2 is true. Always clones Ender Chest Inventory.
 * 
 * Parent Class: EntityPlayer
 */
m.clonePlayer = "func_71049_a"
/** 
 * "This method returns the cap amount of experience that the experience bar can hold. With each level
 * 
 * Parent Class: EntityPlayer
 */
m.xpBarCap = "func_71050_bK"
/** 
 * Returns the orientation of the bed in degrees.
 * 
 * Parent Class: EntityPlayer
 */
m.getBedOrientationInDegrees = "func_71051_bG"
/** 
 * Returns the item in use count
 * 
 * Parent Class: EntityPlayer
 */
m.getItemInUseCount = "func_71052_bv"
/** 
 * set current crafting inventory back to the 2x2 square
 * 
 * Parent Class: EntityPlayer
 */
m.closeScreen = "func_71053_j"
/** 
 * gets the duration for how long the current itemInUse has been in use
 * 
 * Parent Class: EntityPlayer
 */
m.getItemInUseDuration = "func_71057_bx"
/** 
 * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
 * 
 * Parent Class: EntityPlayer
 */
m.attackTargetEntityWithCurrentItem = "func_71059_n"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getSleepTimer = "func_71060_bI"
/** 
 * sets the players height back to normal after doing things like sleeping and dieing
 * 
 * Parent Class: EntityPlayer
 */
m.resetHeight = "func_71061_d_"
/** 
 * Adds a value to a statistic field.
 * 
 * Parent Class: EntityPlayer
 */
m.addStat = "func_71064_a"
/** 
 * update the crafting window inventory with the items in the list
 * 
 * Parent Class: ICrafting
 */
m.updateCraftingInventory = "func_71110_a"
/** 
 * "Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot. Args: Container
 * 
 * Parent Class: ICrafting
 */
m.sendSlotContents = "func_71111_a"
/** 
 * "Sends two ints to the client-side Container. Used for furnace burning time
 * 
 * Parent Class: ICrafting
 */
m.sendProgressBarUpdate = "func_71112_a"
/** 
 * updates item held by mouse
 * 
 * Parent Class: EntityPlayerMP
 */
m.updateHeldItem = "func_71113_k"
/** 
 * Gets the player's IP address. Used in /banip.
 * 
 * Parent Class: EntityPlayerMP
 */
m.getPlayerIP = "func_71114_r"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.addSelfToInternalCraftingInventory = "func_71116_b"
/** 
 * get the next window id to use
 * 
 * Parent Class: EntityPlayerMP
 */
m.getNextWindowId = "func_71117_bO"
/** 
 * "this function is called when a players inventory is sent to him
 * 
 * Parent Class: EntityPlayerMP
 */
m.setPlayerHealthUpdated = "func_71118_n"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.sendContainerToPlayer = "func_71120_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.getServerForPlayer = "func_71121_q"
/** 
 * process player falling based on movement packet
 * 
 * Parent Class: EntityPlayerMP
 */
m.handleFalling = "func_71122_b"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.mountEntityAndWakeUp = "func_71123_m"
/** 
 * 0: Tool in Hand; 1-4: Armor
 * 
 * Parent Class: EntityPlayer
 */
m.getEquipmentInSlot = "func_71124_b"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
m.onUpdateEntity = "func_71127_g"
/** 
 * Closes the container the player currently has open.
 * 
 * Parent Class: EntityPlayerMP
 */
m.closeContainer = "func_71128_l"
/** 
 * Updates health locally.
 * 
 * Parent Class: EntityPlayerSP
 */
m.setPlayerSPHealth = "func_71150_b"
/** 
 * "Sets the current XP
 * 
 * Parent Class: EntityPlayerSP
 */
m.setXPStats = "func_71152_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getCommandManager = "func_71187_D"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setAllowPvp = "func_71188_g"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setHostname = "func_71189_e"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.updateTimeLightAndEntities = "func_71190_q"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setBuildLimit = "func_71191_d"
/** 
 * "Typically ""menu.convertingLevel""
 * 
 * Parent Class: MinecraftServer
 */
m.setUserMessage = "func_71192_d"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.allowSpawnMonsters = "func_71193_K"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.canCreateBonusChest = "func_71194_c"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getUserMessage = "func_71195_b_"
/** 
 * Initialises the server and starts it.
 * 
 * Parent Class: MinecraftServer
 */
m.startServer = "func_71197_b"
m.logDebug = {}
/** 
 * "If isDebuggingEnabled()
 * 
 * Parent Class: MinecraftServer
 */
m.logDebug.MinecraftServer = "func_71198_k"
/** 
 * Log debug message
 * 
 * Parent Class: RConThreadBase
 */
m.logDebug.RConThreadBase = "func_72607_a"

/** 
 * Defaults to false.
 * 
 * Parent Class: MinecraftServer
 */
m.isHardcore = "func_71199_h"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.serverIsInRunLoop = "func_71200_ad"
m.logSevere = {}
/** 
 * Logs the error message with a level of SEVERE.
 * 
 * Parent Class: MinecraftServer
 */
m.logSevere.MinecraftServer = "func_71201_j"
/** 
 * Log severe error message
 * 
 * Parent Class: RConThreadBase
 */
m.logSevere.RConThreadBase = "func_72610_d"

/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getConfigurationManager = "func_71203_ab"
/** 
 * Sets whether this is a demo or not.
 * 
 * Parent Class: MinecraftServer
 */
m.setDemo = "func_71204_b"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setMOTD = "func_71205_p"
/** 
 * "On dedicated does nothing. On integrated
 * 
 * Parent Class: MinecraftServer
 */
m.shareToLAN = "func_71206_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getBuildLimit = "func_71207_Z"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setServerPort = "func_71208_b"
m.getFile = {}
/** 
 * Returns a File object from the specified string.
 * 
 * Parent Class: MinecraftServer
 */
m.getFile.MinecraftServer = "func_71209_f"
/** 
 * Gets the file this crash report is saved into.
 * 
 * Parent Class: CrashReport
 */
m.getFile.CrashReport = "func_71497_f"

/** 
 * """getHostname"" is already taken
 * 
 * Parent Class: MinecraftServer
 */
m.getServerHostname = "func_71211_k"
m.getAllUsernames = {}
/** 
 * Returns an array of the usernames of all the connected players.
 * 
 * Parent Class: MinecraftServer
 */
m.getAllUsernames.MinecraftServer = "func_71213_z"
/** 
 * 
 * 
 * Parent Class: CommandXP
 */
m.getAllUsernames.CommandXP = "func_71542_c"
/** 
 * Returns an array of the usernames of all the connected players.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getAllUsernames.ServerConfigurationManager = "func_72369_d"
/** 
 * 
 * 
 * Parent Class: CommandEffect
 */
m.getAllUsernames.CommandEffect = "func_98152_d"

/** 
 * Returns the username of the server owner (for integrated servers)
 * 
 * Parent Class: MinecraftServer
 */
m.getServerOwner = "func_71214_G"
/** 
 * Gets serverPort.
 * 
 * Parent Class: MinecraftServer
 */
m.getServerPort = "func_71215_F"
/** 
 * Used to display a percent remaining given text and the percentage.
 * 
 * Parent Class: MinecraftServer
 */
m.outputPercentRemaining = "func_71216_a_"
/** 
 * Gets the worldServer by the given dimension.
 * 
 * Parent Class: MinecraftServer
 */
m.worldServerForDimension = "func_71218_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.isPVPEnabled = "func_71219_W"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getCanSpawnNPCs = "func_71220_V"
m.getWorldName = {}
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getWorldName.MinecraftServer = "func_71221_J"
/** 
 * Get current world name
 * 
 * Parent Class: WorldInfo
 */
m.getWorldName.WorldInfo = "func_76065_j"
/** 
 * 
 * 
 * Parent Class: WorldSettings
 */
m.getWorldName.WorldSettings = "func_82749_j"

/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.initialWorldChunkLoad = "func_71222_d"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.enableProfiling = "func_71223_ag"
/** 
 * Sets the username of the owner of this server (in the case of an integrated server)
 * 
 * Parent Class: MinecraftServer
 */
m.setServerOwner = "func_71224_l"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.canStructuresSpawn = "func_71225_e"
/** 
 * Called on exit from the main run() loop.
 * 
 * Parent Class: MinecraftServer
 */
m.finalTick = "func_71228_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setOnlineMode = "func_71229_d"
/** 
 * "Adds the server info
 * 
 * Parent Class: MinecraftServer
 */
m.addServerInfoToCrashReport = "func_71230_b"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.isFlightAllowed = "func_71231_X"
m.getCurrentPlayerCount = {}
/** 
 * Returns the number of players currently on the server.
 * 
 * Parent Class: MinecraftServer
 */
m.getCurrentPlayerCount.MinecraftServer = "func_71233_x"
/** 
 * Returns the number of players currently on the server.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getCurrentPlayerCount.ServerConfigurationManager = "func_72394_k"

m.getPort = {}
/** 
 * "Never used
 * 
 * Parent Class: MinecraftServer
 */
m.getPort.MinecraftServer = "func_71234_u"
/** 
 * 
 * 
 * Parent Class: ServerAddress
 */
m.getPort.ServerAddress = "func_78864_b"

/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.convertMapIfNeeded = "func_71237_c"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getDataDirectory = "func_71238_n"
/** 
 * "Returns true if debugging is enabled
 * 
 * Parent Class: MinecraftServer
 */
m.isDebuggingEnabled = "func_71239_B"
/** 
 * "Directly calls System.exit(0)
 * 
 * Parent Class: MinecraftServer
 */
m.systemExitNow = "func_71240_o"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.isServerStopped = "func_71241_aa"
m.isDemo = {}
/** 
 * Gets whether this is a demo or not.
 * 
 * Parent Class: MinecraftServer
 */
m.isDemo.MinecraftServer = "func_71242_L"
/** 
 * Gets whether this is a demo or not.
 * 
 * Parent Class: Minecraft
 */
m.isDemo.Minecraft = "func_71355_q"

/** 
 * Set current task to null and set its percentage to 0.
 * 
 * Parent Class: MinecraftServer
 */
m.clearCurrentTask = "func_71243_i"
m.logInfo = {}
/** 
 * Logs the message with a level of INFO.
 * 
 * Parent Class: MinecraftServer
 */
m.logInfo.MinecraftServer = "func_71244_g"
/** 
 * Log information message
 * 
 * Parent Class: RConThreadBase
 */
m.logInfo.RConThreadBase = "func_72609_b"

/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setAllowFlight = "func_71245_h"
m.setWorldName = {}
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setWorldName.MinecraftServer = "func_71246_n"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.setWorldName.WorldInfo = "func_76062_a"
/** 
 * 
 * 
 * Parent Class: WorldSettings
 */
m.setWorldName.WorldSettings = "func_82750_a"

/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.loadAllWorlds = "func_71247_a"
/** 
 * Returns the server's Minecraft version as string.
 * 
 * Parent Class: MinecraftServer
 */
m.getMinecraftVersion = "func_71249_w"
/** 
 * Gets KeyPair instanced in MinecraftServer.
 * 
 * Parent Class: MinecraftServer
 */
m.getKeyPair = "func_71250_E"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setCanSpawnAnimals = "func_71251_e"
/** 
 * Handle a command received by an RCon instance
 * 
 * Parent Class: DedicatedServer
 */
m.handleRConCommand = "func_71252_i"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setKeyPair = "func_71253_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getActiveAnvilConverter = "func_71254_M"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getAllowNether = "func_71255_r"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.startServerThread = "func_71256_s"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setCanSpawnNPCs = "func_71257_f"
/** 
 * "Used by RCon's Query in the form of ""MajorServerMod 1.2.3: MyPlugin 1.3; AnotherPlugin 2.1; AndSoForth 1.0""."
 * 
 * Parent Class: DedicatedServer
 */
m.getPlugins = "func_71258_A"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getTickCounter = "func_71259_af"
/** 
 * Saves all necessary data as preparation for stopping the server.
 * 
 * Parent Class: MinecraftServer
 */
m.stopServer = "func_71260_j"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.setFolderName = "func_71261_m"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.isDedicatedServer = "func_71262_S"
/** 
 * "Sets the serverRunning variable to false
 * 
 * Parent Class: MinecraftServer
 */
m.initiateShutdown = "func_71263_m"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.isSinglePlayer = "func_71264_H"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.isServerInOnlineMode = "func_71266_T"
/** 
 * par1 indicates if a log message should be output.
 * 
 * Parent Class: MinecraftServer
 */
m.saveAllWorlds = "func_71267_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getCanSpawnAnimals = "func_71268_U"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getFolderName = "func_71270_I"
/** 
 * WARNING : directly calls  getActiveAnvilConverter().deleteWorldDirectory(theWorldServer[0].getSaveHandler().getWorldDirectoryName());
 * 
 * Parent Class: MinecraftServer
 */
m.deleteWorldAndStopServer = "func_71272_O"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getMOTD = "func_71273_Y"
/** 
 * Returns the server's hostname.
 * 
 * Parent Class: MinecraftServer
 */
m.getHostname = "func_71277_t"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.isServerRunning = "func_71278_l"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getGuiEnabled = "func_71279_ae"
m.saveProperties = {}
/** 
 * Saves all of the server properties to the properties file.
 * 
 * Parent Class: DedicatedServer
 */
m.saveProperties.DedicatedServer = "func_71326_a"
/** 
 * Writes the properties to the properties file.
 * 
 * Parent Class: PropertyManager
 */
m.saveProperties.PropertyManager = "func_73668_b"

m.getIntProperty = {}
/** 
 * "Gets an integer property. If it does not exist
 * 
 * Parent Class: DedicatedServer
 */
m.getIntProperty.DedicatedServer = "func_71327_a"
/** 
 * "Gets an integer property. If it does not exist
 * 
 * Parent Class: PropertyManager
 */
m.getIntProperty.PropertyManager = "func_73669_a"

m.setProperty = {}
/** 
 * Saves an Object with the given property name.
 * 
 * Parent Class: DedicatedServer
 */
m.setProperty.DedicatedServer = "func_71328_a"
/** 
 * Saves an Object with the given property name.
 * 
 * Parent Class: PropertyManager
 */
m.setProperty.PropertyManager = "func_73667_a"

/** 
 * Returns the filename where server properties are stored
 * 
 * Parent Class: DedicatedServer
 */
m.getSettingsFilename = "func_71329_c"
m.getStringProperty = {}
/** 
 * "Gets a string property. If it does not exist
 * 
 * Parent Class: DedicatedServer
 */
m.getStringProperty.DedicatedServer = "func_71330_a"
/** 
 * Returns a string property. If the property doesn't exist the default is returned.
 * 
 * Parent Class: PropertyManager
 */
m.getStringProperty.PropertyManager = "func_73671_a"

/** 
 * 
 * 
 * Parent Class: DedicatedServer
 */
m.addPendingCommand = "func_71331_a"
m.getBooleanProperty = {}
/** 
 * "Gets a boolean property. If it does not exist
 * 
 * Parent Class: DedicatedServer
 */
m.getBooleanProperty.DedicatedServer = "func_71332_a"
/** 
 * "Gets a boolean property. If it does not exist
 * 
 * Parent Class: PropertyManager
 */
m.getBooleanProperty.PropertyManager = "func_73670_a"

/** 
 * 
 * 
 * Parent Class: DedicatedServer
 */
m.executePendingCommands = "func_71333_ah"
/** 
 * Returns true if this integrated server is open to LAN
 * 
 * Parent Class: IntegratedServer
 */
m.getPublic = "func_71344_c"
/** 
 * Set the current ServerData instance.
 * 
 * Parent Class: Minecraft
 */
m.setServerData = "func_71351_a"
/** 
 * Toggles fullscreen mode.
 * 
 * Parent Class: Minecraft
 */
m.toggleFullscreen = "func_71352_k"
/** 
 * unloads the current world first
 * 
 * Parent Class: Minecraft
 */
m.loadWorld = "func_71403_a"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.setDimensionAndSpawnPlayer = "func_71354_a"
/** 
 * "Returns true if there is only one player playing
 * 
 * Parent Class: Minecraft
 */
m.isSingleplayer = "func_71356_B"
m.getSaveLoader = {}
/** 
 * Returns the save loader that is currently being used
 * 
 * Parent Class: Minecraft
 */
m.getSaveLoader.Minecraft = "func_71359_d"
/** 
 * Returns back a loader for the specified save directory
 * 
 * Parent Class: ISaveFormat
 */
m.getSaveLoader.ISaveFormat = "func_75804_a"

/** 
 * "Checks for an OpenGL error. If there is one
 * 
 * Parent Class: Minecraft
 */
m.checkGLError = "func_71361_d"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.stopIntegratedServer = "func_71363_D"
/** 
 * "Resets the player keystate
 * 
 * Parent Class: Minecraft
 */
m.setIngameNotInFocus = "func_71364_i"
/** 
 * Parameter appears to be unused
 * 
 * Parent Class: Minecraft
 */
m.displayDebugInfo = "func_71366_a"
/** 
 * Used in the usage snooper.
 * 
 * Parent Class: Minecraft
 */
m.getGLMaximumTextureSize = "func_71369_N"
/** 
 * Called to resize the current screen.
 * 
 * Parent Class: Minecraft
 */
m.resize = "func_71370_a"
/** 
 * "Arguments: World foldername
 * 
 * Parent Class: Minecraft
 */
m.launchIntegratedServer = "func_71371_a"
/** 
 * Returns whether we're in full screen or not.
 * 
 * Parent Class: Minecraft
 */
m.isFullScreen = "func_71372_G"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.isFancyGraphicsEnabled = "func_71375_t"
/** 
 * Wrapper around displayCrashReportInternal
 * 
 * Parent Class: Minecraft
 */
m.displayCrashReport = "func_71377_b"
m.getPlayerUsageSnooper = {}
/** 
 * Returns the PlayerUsageSnooper instance.
 * 
 * Parent Class: Minecraft
 */
m.getPlayerUsageSnooper.Minecraft = "func_71378_E"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.getPlayerUsageSnooper.MinecraftServer = "func_80003_ah"

/** 
 * Returns if ambient occlusion is enabled
 * 
 * Parent Class: Minecraft
 */
m.isAmbientOcclusionEnabled = "func_71379_u"
/** 
 * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
 * 
 * Parent Class: Minecraft
 */
m.setIngameFocus = "func_71381_h"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.isGuiEnabled = "func_71382_s"
/** 
 * Update debugProfilerName in response to number keys in debug screen
 * 
 * Parent Class: Minecraft
 */
m.updateDebugProfilerName = "func_71383_b"
/** 
 * "Starts the game: initializes the canvas
 * 
 * Parent Class: Minecraft
 */
m.startGame = "func_71384_a"
/** 
 * Displays the ingame menu
 * 
 * Parent Class: Minecraft
 */
m.displayInGameMenu = "func_71385_j"
/** 
 * Gets the system time in milliseconds.
 * 
 * Parent Class: Minecraft
 */
m.getSystemTime = "func_71386_F"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.isIntegratedServerRunning = "func_71387_A"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.startTimerHackThread = "func_71389_H"
/** 
 * "adds core server Info (GL version 
 * 
 * Parent Class: Minecraft
 */
m.addGraphicsAndWorldToCrashReport = "func_71396_d"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.freeMemory = "func_71398_f"
/** 
 * Called when the window is closing. Sets 'running' to false which allows the game loop to exit cleanly.
 * 
 * Parent Class: Minecraft
 */
m.shutdown = "func_71400_g"
/** 
 * Returns the currently running integrated server
 * 
 * Parent Class: Minecraft
 */
m.getIntegratedServer = "func_71401_C"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.crashed = "func_71404_a"
/** 
 * "Shuts down the minecraft applet by stopping the resource downloads
 * 
 * Parent Class: Minecraft
 */
m.shutdownMinecraftApplet = "func_71405_e"
/** 
 * Runs the current tick.
 * 
 * Parent Class: Minecraft
 */
m.runTick = "func_71407_l"
/** 
 * Return the singleton Minecraft instance for the game
 * 
 * Parent Class: Minecraft
 */
m.getMinecraft = "func_71410_x"
/** 
 * Called repeatedly from run()
 * 
 * Parent Class: Minecraft
 */
m.runGameLoop = "func_71411_J"
/** 
 * "Gets the stack trace of the Throwable that caused this crash report
 * 
 * Parent Class: CrashReport
 */
m.getCauseStackTraceOrString = "func_71498_d"
/** 
 * Adds a Crashreport section with the given name with the given Throwable
 * 
 * Parent Class: CrashReportCategory
 */
m.addCrashSectionThrowable = "func_71499_a"
/** 
 * Adds a Crashreport section with the given name with the value set to the result of the given Callable;
 * 
 * Parent Class: CrashReportCategory
 */
m.addCrashSectionCallable = "func_71500_a"
/** 
 * "Gets the complete report with headers
 * 
 * Parent Class: CrashReport
 */
m.getCompleteReport = "func_71502_e"
/** 
 * Populates this crash report with initial information about the running server and operating system / java environment
 * 
 * Parent Class: CrashReport
 */
m.populateEnvironment = "func_71504_g"
/** 
 * Returns the Throwable object that is the cause for the crash and Crash Report.
 * 
 * Parent Class: CrashReport
 */
m.getCrashCause = "func_71505_b"
/** 
 * Gets the various sections of the crash report into the given StringBuilder
 * 
 * Parent Class: CrashReport
 */
m.getSectionsInStringBuilder = "func_71506_a"
/** 
 * Adds a Crashreport section with the given name with the given value (convered .toString())
 * 
 * Parent Class: CrashReportCategory
 */
m.addCrashSection = "func_71507_a"
/** 
 * Get a list of aliases for this command. <b>Never return null!</b>
 * 
 * Parent Class: ICommand
 */
m.getCommandAliases = "func_71514_a"
/** 
 * Callback when the command is invoked
 * 
 * Parent Class: CommandEffect
 */
m.processCommand = "func_71515_b"
/** 
 * Gets the name of the command
 * 
 * Parent Class: CommandEffect
 */
m.getCommandName = "func_71517_b"
/** 
 * Gets the usage string for the command.
 * 
 * Parent Class: CommandEffect
 */
m.getCommandUsage = "func_71518_a"
/** 
 * Returns the given ICommandSender as a EntityPlayer or throw an exception.
 * 
 * Parent Class: CommandBase
 */
m.getCommandSenderAsPlayer = "func_71521_c"
/** 
 * Returns true if the given substring is exactly equal to the start of the given string (case insensitive).
 * 
 * Parent Class: CommandBase
 */
m.doesStringStartWith = "func_71523_a"
/** 
 * "Creates a linguistic series joining the input objects together.  Examples: 1) {} --> """"
 * 
 * Parent Class: CommandBase
 */
m.joinNiceString = "func_71527_a"
/** 
 * Sets the static IAdminCommander.
 * 
 * Parent Class: CommandBase
 */
m.setAdminCommander = "func_71529_a"
/** 
 * Returns a sorted list of all possible commands for the given ICommandSender.
 * 
 * Parent Class: CommandHelp
 */
m.getSortedPossibleCommands = "func_71534_d"
m.getCommands = {}
/** 
 * 
 * 
 * Parent Class: CommandHelp
 */
m.getCommands.CommandHelp = "func_71535_c"
/** 
 * Get a Map of all the name to command pairs stored in this command manager.
 * 
 * Parent Class: ICommandManager
 */
m.getCommands.ICommandManager = "func_71555_a"

/** 
 * Returns String array containing all player usernames in the server.
 * 
 * Parent Class: CommandGameMode
 */
m.getListOfPlayerUsernames = "func_71538_c"
/** 
 * Gets the Game Mode specified in the command.
 * 
 * Parent Class: CommandGameMode
 */
m.getGameModeFromCommand = "func_71539_b"
/** 
 * Set the time in the server object.
 * 
 * Parent Class: CommandTime
 */
m.setTime = "func_71552_a"
/** 
 * Adds (or removes) time in the server object.
 * 
 * Parent Class: CommandTime
 */
m.addTime = "func_71553_b"
/** 
 * Toggle rain and enable thundering.
 * 
 * Parent Class: CommandToggleDownfall
 */
m.toggleDownfall = "func_71554_c"
/** 
 * Get a list of commands that the given command sender has access to execute.
 *  
 * @param sender The command sender
 * 
 * Parent Class: ICommandManager
 */
m.getPossibleCommands = "func_71557_a"
/** 
 * creates a new array and sets elements 0..n-2 to be 0..n-1 of the input (n elements)
 * 
 * Parent Class: CommandHandler
 */
m.dropFirstString = "func_71559_a"
/** 
 * adds the command and any aliases it has to the internal map of available commands
 * 
 * Parent Class: CommandHandler
 */
m.registerCommand = "func_71560_a"
/** 
 * Filter string by only keeping those characters for which isAllowedCharacter() returns true.
 * 
 * Parent Class: ChatAllowedCharacters
 */
m.filterAllowedCharacters = "func_71565_a"
/** 
 * 
 * 
 * Parent Class: ChatAllowedCharacters
 */
m.isAllowedCharacter = "func_71566_a"
/** 
 * Gets the CrashReport wrapped by this exception.
 * 
 * Parent Class: ReportedException
 */
m.getCrashReport = "func_71575_a"
/** 
 * "Returns a bounding box expanded by the specified vector (if negative numbers are given it will shrink). Args: x
 * 
 * Parent Class: AxisAlignedBB
 */
m.expand = "func_72314_b"
/** 
 * Checks if the specified vector is within the XZ dimensions of the bounding box. Args: Vec3D
 * 
 * Parent Class: AxisAlignedBB
 */
m.isVecInXZ = "func_72315_c"
/** 
 * "if instance and the argument bounding boxes overlap in the Y and Z dimensions
 * 
 * Parent Class: AxisAlignedBB
 */
m.calculateXOffset = "func_72316_a"
/** 
 * Checks if the specified vector is within the XY dimensions of the bounding box. Args: Vec3D
 * 
 * Parent Class: AxisAlignedBB
 */
m.isVecInXY = "func_72319_d"
/** 
 * Returns the average length of the edges of the bounding box.
 * 
 * Parent Class: AxisAlignedBB
 */
m.getAverageEdgeLength = "func_72320_b"
/** 
 * "Adds the coordinates to the bounding box extending it if the point lies outside the current ranges. Args: x
 * 
 * Parent Class: AxisAlignedBB
 */
m.addCoord = "func_72321_a"
/** 
 * "if instance and the argument bounding boxes overlap in the Y and X dimensions
 * 
 * Parent Class: AxisAlignedBB
 */
m.calculateZOffset = "func_72322_c"
/** 
 * "if instance and the argument bounding boxes overlap in the X and Z dimensions
 * 
 * Parent Class: AxisAlignedBB
 */
m.calculateYOffset = "func_72323_b"
m.intersectsWith = {}
/** 
 * Returns whether the given bounding box intersects with this one. Args: axisAlignedBB
 * 
 * Parent Class: AxisAlignedBB
 */
m.intersectsWith.AxisAlignedBB = "func_72326_a"
/** 
 * Discover if a coordinate is inside the bounding box area.
 * 
 * Parent Class: StructureBoundingBox
 */
m.intersectsWith.StructureBoundingBox = "func_78885_a"

/** 
 * 
 * 
 * Parent Class: AxisAlignedBB
 */
m.calculateIntercept = "func_72327_a"
/** 
 * Returns a bounding box that is inset by the specified amounts
 * 
 * Parent Class: AxisAlignedBB
 */
m.contract = "func_72331_e"
/** 
 * Checks if the specified vector is within the YZ dimensions of the bounding box. Args: Vec3D
 * 
 * Parent Class: AxisAlignedBB
 */
m.isVecInYZ = "func_72333_b"
/** 
 * Updates the time and weather for the given player to those of the given world
 * 
 * Parent Class: ServerConfigurationManager
 */
m.updateTimeAndWeatherForPlayer = "func_72354_b"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.initializeConnectionToPlayer = "func_72355_a"
/** 
 * moves provided player from overworld to nether or vice versa
 * 
 * Parent Class: ServerConfigurationManager
 */
m.transferPlayerToDimension = "func_72356_a"
/** 
 * "using player's dimension
 * 
 * Parent Class: ServerConfigurationManager
 */
m.serverUpdateMountedMovingPlayer = "func_72358_d"
/** 
 * "Either does nothing
 * 
 * Parent Class: ServerConfigurationManager
 */
m.loadWhiteList = "func_72362_j"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getBannedIPs = "func_72363_f"
/** 
 * Sets the NBT manager to the one for the WorldServer given.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.setPlayerManager = "func_72364_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getServerInstance = "func_72365_p"
/** 
 * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.playerLoggedOut = "func_72367_e"
/** 
 * Called on respawn
 * 
 * Parent Class: ServerConfigurationManager
 */
m.recreatePlayerEntity = "func_72368_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.setWhiteListEnabled = "func_72371_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getEntityViewDistance = "func_72372_a"
m.getAvailablePlayerDat = {}
/** 
 * Returns an array of usernames for which player.dat exists for.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getAvailablePlayerDat.ServerConfigurationManager = "func_72373_m"
/** 
 * Returns an array of usernames for which player.dat exists for.
 * 
 * Parent Class: IPlayerFileData
 */
m.getAvailablePlayerDat.IPlayerFileData = "func_75754_f"

/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.preparePlayer = "func_72375_a"
/** 
 * Called when a player successfully logs in. Reads player data from disk and inserts the player into the world.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.playerLoggedIn = "func_72377_c"
/** 
 * "On integrated servers
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getHostPlayerData = "func_72378_q"
/** 
 * called during player login. reads the player information from disk.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.readPlayerDataFromFile = "func_72380_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.setPlayerGameTypeBasedOnOther = "func_72381_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getPlayersMatchingAddress = "func_72382_j"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.isWhiteListEnabled = "func_72383_n"
/** 
 * sends the players inventory to himself
 * 
 * Parent Class: ServerConfigurationManager
 */
m.syncPlayerInventory = "func_72385_f"
/** 
 * Sets whether all players are allowed to use commands (cheats) on the server.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.setCommandsAllowedForAll = "func_72387_b"
/** 
 * Saves all of the players' current states.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.saveAllPlayerData = "func_72389_g"
m.writePlayerData = {}
/** 
 * also stores the NBTTags if this is an intergratedPlayerList
 * 
 * Parent Class: ServerConfigurationManager
 */
m.writePlayerData.ServerConfigurationManager = "func_72391_b"
/** 
 * Writes the player data to disk from the specified PlayerEntityMP.
 * 
 * Parent Class: IPlayerFileData
 */
m.writePlayerData.IPlayerFileData = "func_75753_a"

/** 
 * "Kicks everyone with ""Server closed"" as reason."
 * 
 * Parent Class: ServerConfigurationManager
 */
m.removeAllPlayers = "func_72392_r"
/** 
 * Gets the View Distance.
 * 
 * Parent Class: ServerConfigurationManager
 */
m.getViewDistance = "func_72395_o"
/** 
 * 
 * 
 * Parent Class: DedicatedPlayerList
 */
m.loadOpsList = "func_72417_t"
/** 
 * 
 * 
 * Parent Class: DedicatedPlayerList
 */
m.readWhiteList = "func_72418_v"
/** 
 * 
 * 
 * Parent Class: DedicatedPlayerList
 */
m.saveOpsList = "func_72419_u"
/** 
 * 
 * 
 * Parent Class: DedicatedPlayerList
 */
m.saveWhiteList = "func_72421_w"
/** 
 * "Returns a new vector with x value equal to the second parameter
 * 
 * Parent Class: Vec3
 */
m.getIntermediateWithXValue = "func_72429_b"
/** 
 * 
 * 
 * Parent Class: Vec3
 */
m.dotProduct = "func_72430_b"
/** 
 * Returns the length of the vector.
 * 
 * Parent Class: Vec3
 */
m.lengthVector = "func_72433_c"
/** 
 * "Returns a new vector with z value equal to the second parameter
 * 
 * Parent Class: Vec3
 */
m.getIntermediateWithZValue = "func_72434_d"
/** 
 * "Returns a new vector with y value equal to the second parameter
 * 
 * Parent Class: Vec3
 */
m.getIntermediateWithYValue = "func_72435_c"
/** 
 * The square of the Euclidean distance between this and the specified vector.
 * 
 * Parent Class: Vec3
 */
m.squareDistanceTo = "func_72436_e"
m.distanceTo = {}
/** 
 * "Euclidean distance between this and the specified vector
 * 
 * Parent Class: Vec3
 */
m.distanceTo.Vec3 = "func_72438_d"
/** 
 * Returns the linear distance to another path point
 * 
 * Parent Class: PathPoint
 */
m.distanceTo.PathPoint = "func_75829_a"

/** 
 * "Adds the specified x
 * 
 * Parent Class: Vec3
 */
m.addVector = "func_72441_c"
/** 
 * Returns a new vector with the result of the specified vector minus this.
 * 
 * Parent Class: Vec3
 */
m.subtractReverse = "func_72444_a"
/** 
 * Returns the request ID provided by the client.
 * 
 * Parent Class: RConThreadQuery$Auth
 */
m.getRequestId = "func_72591_c"
/** 
 * Returns the random challenge number assigned to this auth
 * 
 * Parent Class: RConThreadQuery$Auth
 */
m.getRandomChallenge = "func_72592_a"
/** 
 * "Returns true if the auth's creation timestamp is less than the given time
 * 
 * Parent Class: RConThreadQuery$Auth
 */
m.hasExpired = "func_72593_a"
/** 
 * Returns the auth challenge value
 * 
 * Parent Class: RConThreadQuery$Auth
 */
m.getChallengeValue = "func_72594_b"
/** 
 * Registers a DatagramSocket with this thread
 * 
 * Parent Class: RConThreadBase
 */
m.registerSocket = "func_72601_a"
/** 
 * Creates a new Thread object from this class and starts running
 * 
 * Parent Class: RConThreadMain
 */
m.startThread = "func_72602_a"
/** 
 * Returns the number of players on the server
 * 
 * Parent Class: RConThreadBase
 */
m.getNumberOfPlayers = "func_72603_d"
m.closeSocket = {}
/** 
 * Closes the specified DatagramSocket
 * 
 * Parent Class: RConThreadBase
 */
m.closeSocket.RConThreadBase = "func_72604_a"
/** 
 * Closes the client socket
 * 
 * Parent Class: RConThreadClient
 */
m.closeSocket.RConThreadClient = "func_72653_g"

/** 
 * Closes the specified ServerSocket
 * 
 * Parent Class: RConThreadBase
 */
m.closeServerSocket_do = "func_72605_a"
/** 
 * Closes the specified ServerSocket
 * 
 * Parent Class: RConThreadBase
 */
m.closeServerSocket = "func_72608_b"
/** 
 * Closes all of the opened sockets
 * 
 * Parent Class: RConThreadBase
 */
m.closeAllSockets = "func_72611_e"
/** 
 * Closes all of the opened sockets
 * 
 * Parent Class: RConThreadBase
 */
m.closeAllSockets_do = "func_72612_a"
m.isRunning = {}
/** 
 * "Returns true if the Thread is running
 * 
 * Parent Class: RConThreadBase
 */
m.isRunning.RConThreadBase = "func_72613_c"
/** 
 * @see #isRunning
 * 
 * Parent Class: EntityAITempt
 */
m.isRunning.EntityAITempt = "func_75277_f"

/** 
 * Sends a byte array as a DatagramPacket response to the client who sent the given DatagramPacket
 * 
 * Parent Class: RConThreadQuery
 */
m.sendResponsePacket = "func_72620_a"
/** 
 * "Parses an incoming DatagramPacket
 * 
 * Parent Class: RConThreadQuery
 */
m.parseIncomingPacket = "func_72621_a"
/** 
 * Sends an auth challenge DatagramPacket to the client and adds the client to the queryClients map
 * 
 * Parent Class: RConThreadQuery
 */
m.sendAuthChallenge = "func_72622_d"
/** 
 * Stops the query server and reports the given Exception
 * 
 * Parent Class: RConThreadQuery
 */
m.stopWithException = "func_72623_a"
/** 
 * Creates a query response as a byte array for the specified query DatagramPacket
 * 
 * Parent Class: RConThreadQuery
 */
m.createQueryResponse = "func_72624_b"
/** 
 * Returns the request ID provided by the authorized client
 * 
 * Parent Class: RConThreadQuery
 */
m.getRequestID = "func_72625_a"
/** 
 * Initializes the query system by binding it to a port
 * 
 * Parent Class: RConThreadQuery
 */
m.initQuerySystem = "func_72626_g"
/** 
 * "Returns true if the client has a valid auth
 * 
 * Parent Class: RConThreadQuery
 */
m.verifyClientAuth = "func_72627_c"
/** 
 * Removes all clients whose auth is no longer valid
 * 
 * Parent Class: RConThreadQuery
 */
m.cleanQueryClientsMap = "func_72628_f"
/** 
 * Cleans up the clientThreads map by removing client Threads that are not running
 * 
 * Parent Class: RConThreadMain
 */
m.cleanClientThreadsMap = "func_72645_g"
/** 
 * 
 * 
 * Parent Class: RConThreadMain
 */
m.initClientThreadList = "func_72646_f"
/** 
 * Sends the given response message to the client
 * 
 * Parent Class: RConThreadClient
 */
m.sendResponse = "func_72654_a"
/** 
 * Splits the response message into individual packets and sends each one
 * 
 * Parent Class: RConThreadClient
 */
m.sendMultipacketResponse = "func_72655_a"
/** 
 * Sends the standard RCon 'authorization failed' response packet
 * 
 * Parent Class: RConThreadClient
 */
m.sendLoginFailedResponse = "func_72656_f"
/** 
 * Read a null-terminated string from the given byte array
 * 
 * Parent Class: RConUtils
 */
m.getBytesAsString = "func_72661_a"
/** 
 * Read 4 bytes from the
 * 
 * Parent Class: RConUtils
 */
m.getRemainingBytesAsLEInt = "func_72662_b"
/** 
 * Returns a String representation of the byte in hexadecimal format
 * 
 * Parent Class: RConUtils
 */
m.getByteAsHexString = "func_72663_a"
/** 
 * Read 4 bytes from the given array in big-endian format and return them as an int
 * 
 * Parent Class: RConUtils
 */
m.getBytesAsBEint = "func_72664_c"
/** 
 * Read 4 bytes from the given array in little-endian format and return them as an int
 * 
 * Parent Class: RConUtils
 */
m.getBytesAsLEInt = "func_72665_b"
/** 
 * Writes the given int to the output stream
 * 
 * Parent Class: RConOutputStream
 */
m.writeInt = "func_72667_a"
/** 
 * Writes the given short to the output stream
 * 
 * Parent Class: RConOutputStream
 */
m.writeShort = "func_72668_a"
m.addPlayer = {}
/** 
 * Adds an EntityPlayerMP to the PlayerManager and to all player instances within player visibility
 * 
 * Parent Class: PlayerManager
 */
m.addPlayer.PlayerManager = "func_72683_a"
/** 
 * 
 * 
 * Parent Class: PlayerManager$PlayerInstance
 */
m.addPlayer.PlayerManager$PlayerInstance = "func_73255_a"

/** 
 * "Determine if two rectangles centered at the given points overlap for the provided radius. Arguments: x1
 * 
 * Parent Class: PlayerManager
 */
m.overlaps = "func_72684_a"
/** 
 * "update chunks around a player being moved by server logic (e.g. cart
 * 
 * Parent Class: PlayerManager
 */
m.updateMountedMovingPlayer = "func_72685_d"
/** 
 * Get the furthest viewable block given player's view distance
 * 
 * Parent Class: PlayerManager
 */
m.getFurthestViewableBlock = "func_72686_a"
/** 
 * Returns the WorldServer associated with this PlayerManager
 * 
 * Parent Class: PlayerManager
 */
m.getWorldServer = "func_72688_a"
/** 
 * passi n the chunk x and y and a flag as to whether or not the instance should be made if it doesnt exist
 * 
 * Parent Class: PlayerManager
 */
m.getPlayerInstance = "func_72690_a"
/** 
 * Removes all chunks from the given player's chunk load queue that are not in viewing range of the player.
 * 
 * Parent Class: PlayerManager
 */
m.filterChunkLoadQueue = "func_72691_b"
/** 
 * updates all the player instances that need to be updated
 * 
 * Parent Class: PlayerManager
 */
m.updatePlayerInstances = "func_72693_b"
/** 
 * 
 * 
 * Parent Class: PlayerManager
 */
m.isPlayerWatchingChunk = "func_72694_a"
m.removePlayer = {}
/** 
 * Removes an EntityPlayerMP from the PlayerManager.
 * 
 * Parent Class: PlayerManager
 */
m.removePlayer.PlayerManager = "func_72695_c"
/** 
 * 
 * 
 * Parent Class: PlayerManager$PlayerInstance
 */
m.removePlayer.PlayerManager$PlayerInstance = "func_73252_b"

m.onEntityAdded = {}
/** 
 * "Called on all IWorldAccesses when an entity is created or loaded. On client worlds
 * 
 * Parent Class: WorldManager
 */
m.onEntityAdded.WorldManager = "func_72703_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.onEntityAdded.WorldServer = "func_72923_a"

m.onEntityRemoved = {}
/** 
 * "Called on all IWorldAccesses when an entity is unloaded or destroyed. On client worlds
 * 
 * Parent Class: WorldManager
 */
m.onEntityRemoved.WorldManager = "func_72709_b"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.onEntityRemoved.WorldServer = "func_72847_b"

/** 
 * Loads all the renderers and sets up the basic settings usage
 * 
 * Parent Class: RenderGlobal
 */
m.loadRenderers = "func_72712_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.createBindEntityOutlineFbs = "func_72720_a"
/** 
 * Checks if the given position is to be rendered with cloud fog
 * 
 * Parent Class: RenderGlobal
 */
m.hasCloudFog = "func_72721_a"
/** 
 * Gets the entities info for use on the Debug screen
 * 
 * Parent Class: RenderGlobal
 */
m.getDebugInfoEntities = "func_72723_d"
/** 
 * Deletes all display lists
 * 
 * Parent Class: RenderGlobal
 */
m.deleteAllDisplayLists = "func_72728_f"
/** 
 * set null to clear
 * 
 * Parent Class: RenderGlobal
 */
m.setWorldAndLoadRenderers = "func_72732_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
m.updateClouds = "func_72734_e"
/** 
 * Gets the render info for use on the Debug screen
 * 
 * Parent Class: RenderGlobal
 */
m.getDebugInfoRenders = "func_72735_c"
/** 
 * "Args : Entity
 * 
 * Parent Class: EntityTracker
 */
m.addEntityToTracker = "func_72785_a"
/** 
 * 
 * 
 * Parent Class: EntityTracker
 */
m.trackEntity = "func_72791_a"
/** 
 * 
 * 
 * Parent Class: EntityTracker
 */
m.removePlayerFromTrackers = "func_72787_a"
/** 
 * 
 * 
 * Parent Class: EntityTracker
 */
m.updateTrackedEntities = "func_72788_a"
/** 
 * 
 * 
 * Parent Class: EntityTracker
 */
m.untrackEntity = "func_72790_b"
/** 
 * set by !chunk.getAreLevelsEmpty
 * 
 * Parent Class: ChunkCache
 */
m.extendedLevelsInChunkCache = "func_72806_N"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getThunderStrength = "func_72819_i"
/** 
 * "Assigns the given String id to the given MapDataBase using the MapStorage
 * 
 * Parent Class: World
 */
m.setItemData = "func_72823_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.getCloudColour = "func_72824_f"
/** 
 * calls calculateCelestialAngle
 * 
 * Parent Class: World
 */
m.getCelestialAngle = "func_72826_c"
/** 
 * "Returns the name of the current chunk provider
 * 
 * Parent Class: World
 */
m.getProviderName = "func_72827_u"
/** 
 * Returns true if there are any blocks in the region constrained by an AxisAlignedBB
 * 
 * Parent Class: World
 */
m.checkBlockCollision = "func_72829_c"
/** 
 * checks if the given AABB is in the material given. Used while swimming.
 * 
 * Parent Class: World
 */
m.isAABBInMaterial = "func_72830_b"
/** 
 * Calculates the color for the skybox
 * 
 * Parent Class: World
 */
m.getSkyColor = "func_72833_a"
/** 
 * Called when an entity is spawned in the world. This includes players.
 * 
 * Parent Class: WorldClient
 */
m.spawnEntityInWorld = "func_72838_d"
/** 
 * "Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude
 * 
 * Parent Class: World
 */
m.getEntitiesWithinAABBExcludingEntity = "func_72839_b"
m.getUniqueDataId = {}
/** 
 * Returns an unique new data id from the MapStorage for the given prefix and saves the idCounts map to the 'idcounts' file.
 * 
 * Parent Class: World
 */
m.getUniqueDataId.World = "func_72841_b"
/** 
 * Returns an unique new data id for the given prefix and saves the idCounts map to the 'idcounts' file.
 * 
 * Parent Class: MapStorage
 */
m.getUniqueDataId.MapStorage = "func_75743_a"

/** 
 * "Gets the percentage of real blocks within within a bounding box
 * 
 * Parent Class: World
 */
m.getBlockDensity = "func_72842_a"
/** 
 * puts the World Random seed to a specific state dependant on the inputs
 * 
 * Parent Class: World
 */
m.setRandomSeed = "func_72843_D"
/** 
 * Removes a worldAccess from the worldAccesses object
 * 
 * Parent Class: World
 */
m.removeWorldAccess = "func_72848_b"
m.getMoonPhase = {}
/** 
 * 
 * 
 * Parent Class: World
 */
m.getMoonPhase.World = "func_72853_d"
/** 
 * 
 * 
 * Parent Class: WorldProvider
 */
m.getMoonPhase.WorldProvider = "func_76559_b"

/** 
 * Updates the flag that indicates whether or not all players in the world are sleeping.
 * 
 * Parent Class: WorldServer
 */
m.updateAllPlayersSleepingFlag = "func_72854_c"
/** 
 * "Returns true if there are no solid
 * 
 * Parent Class: World
 */
m.checkNoEntityCollision = "func_72917_a"
/** 
 * 
 * 
 * Parent Class: World
 */
m.findNearestEntityWithinAABB = "func_72857_a"
/** 
 * Returns this world's current save handler
 * 
 * Parent Class: World
 */
m.getSaveHandler = "func_72860_G"
/** 
 * gets the world's chunk provider
 * 
 * Parent Class: World
 */
m.getChunkProvider = "func_72863_F"
/** 
 * "Will update the entity in the world if the chunk the entity is in is currently loaded or its forced to update. Args: entity
 * 
 * Parent Class: WorldServer
 */
m.updateEntityWithOptionalForce = "func_72866_a"
/** 
 * Returns rain strength.
 * 
 * Parent Class: World
 */
m.getRainStrength = "func_72867_j"
/** 
 * Will update the entity in the world if the chunk the entity is in is currently loaded. Args: entity
 * 
 * Parent Class: World
 */
m.updateEntity = "func_72870_g"
/** 
 * Returns true if the given bounding box contains the given material
 * 
 * Parent Class: World
 */
m.isMaterialInBB = "func_72875_a"
/** 
 * "Creates an explosion. Args: entity
 * 
 * Parent Class: World
 */
m.createExplosion = "func_72876_a"
m.setWorldTime = {}
/** 
 * Sets the world time.
 * 
 * Parent Class: WorldClient
 */
m.setWorldTime.WorldClient = "func_72877_b"
/** 
 * Set current world time
 * 
 * Parent Class: WorldInfo
 */
m.setWorldTime.WorldInfo = "func_76068_b"

/** 
 * How bright are stars in the sky
 * 
 * Parent Class: World
 */
m.getStarBrightness = "func_72880_h"
/** 
 * "If on MP
 * 
 * Parent Class: WorldClient
 */
m.sendQuittingDisconnectingPacket = "func_72882_A"
/** 
 * returns a new explosion. Does initiation (at time of writing Explosion is not finished)
 * 
 * Parent Class: WorldServer
 */
m.newExplosion = "func_72885_a"
/** 
 * "Gets the closest player to the entity within the specified distance (if distance is less than 0 then ignored). Args: entity
 * 
 * Parent Class: World
 */
m.getClosestPlayerToEntity = "func_72890_a"
/** 
 * first boolean for hostile mobs and second for peaceful mobs
 * 
 * Parent Class: World
 */
m.setAllowedSpawnTypes = "func_72891_a"
/** 
 * Sets the strength of the rain.
 * 
 * Parent Class: World
 */
m.setRainStrength = "func_72894_k"
m.isRaining = {}
/** 
 * Returns true if the current rain strength is greater than 0.2
 * 
 * Parent Class: World
 */
m.isRaining.World = "func_72896_J"
/** 
 * "Returns true if it is raining
 * 
 * Parent Class: WorldInfo
 */
m.isRaining.WorldInfo = "func_76059_o"

/** 
 * spwans an entity and loads surrounding chunks
 * 
 * Parent Class: World
 */
m.joinEntityInSurroundings = "func_72897_h"
/** 
 * 
 * 
 * Parent Class: World
 */
m.setActivePlayerChunksAndCheckLight = "func_72903_x"
m.checkSessionLock = {}
/** 
 * Checks whether the session lock file was modified by another process
 * 
 * Parent Class: World
 */
m.checkSessionLock.World = "func_72906_B"
/** 
 * Checks the session lock to prevent save collisions
 * 
 * Parent Class: SaveHandlerMP
 */
m.checkSessionLock.SaveHandlerMP = "func_75762_c"

/** 
 * Counts how many entities of an entity class exist in the world. Args: entityClass
 * 
 * Parent Class: World
 */
m.countEntities = "func_72907_a"
/** 
 * "Play a sound effect. Many many parameters for this function. Not sure what they do
 * 
 * Parent Class: World
 */
m.playSoundEffect = "func_72908_a"
/** 
 * Accessor for world Loaded Entity List
 * 
 * Parent Class: World
 */
m.getLoadedEntityList = "func_72910_y"
m.isThundering = {}
/** 
 * Returns true if the current thunder strength (weighted with the rain strength) is greater than 0.9
 * 
 * Parent Class: World
 */
m.isThundering.World = "func_72911_I"
/** 
 * "Returns true if it is thundering
 * 
 * Parent Class: WorldInfo
 */
m.isThundering.WorldInfo = "func_76061_m"

m.getWorldInfo = {}
/** 
 * Returns the world's WorldInfo object
 * 
 * Parent Class: World
 */
m.getWorldInfo.World = "func_72912_H"
/** 
 * Returns the world's WorldInfo object
 * 
 * Parent Class: ISaveFormat
 */
m.getWorldInfo.ISaveFormat = "func_75803_c"

/** 
 * Adds some basic stats of the world to the given crash report.
 * 
 * Parent Class: WorldClient
 */
m.addWorldInfoToCrashReport = "func_72914_a"
/** 
 * Returns true if the chunk is located near the spawn point
 * 
 * Parent Class: World
 */
m.isSpawnChunk = "func_72916_c"
/** 
 * handles the acceleration of an object whilst in water. Not sure if it is used elsewhere.
 * 
 * Parent Class: World
 */
m.handleMaterialAcceleration = "func_72918_a"
/** 
 * Returns horizon height for use in rendering the sky.
 * 
 * Parent Class: World
 */
m.getHorizon = "func_72919_O"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.getPendingBlockUpdates = "func_72920_a"
/** 
 * Find a player by name in this world.
 * 
 * Parent Class: World
 */
m.getPlayerEntityByName = "func_72924_a"
/** 
 * Return getCelestialAngle()*2*PI
 * 
 * Parent Class: World
 */
m.getCelestialAngleRadians = "func_72929_e"
/** 
 * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4
 * 
 * Parent Class: World
 */
m.isDaytime = "func_72935_r"
/** 
 * Updates (and cleans up) entities and tile entities
 * 
 * Parent Class: WorldServer
 */
m.updateEntities = "func_72939_s"
/** 
 * Returns current world height.
 * 
 * Parent Class: World
 */
m.getActualHeight = "func_72940_L"
/** 
 * adds a lightning bolt to the list of lightning bolts in this world.
 * 
 * Parent Class: WorldServer
 */
m.addWeatherEffect = "func_72942_c"
/** 
 * "Loads an existing MapDataBase corresponding to the given String id from disk using the MapStorage
 * 
 * Parent Class: World
 */
m.loadItemData = "func_72943_a"
/** 
 * "Returns a list of bounding boxes that collide with aabb excluding the passed in entity's collision. Args: entity
 * 
 * Parent Class: World
 */
m.getCollidingBoundingBoxes = "func_72945_a"
/** 
 * Called from World constructor to set rainingStrength and thunderingStrength
 * 
 * Parent Class: World
 */
m.calculateInitialWeather = "func_72947_a"
m.getFogColor = {}
/** 
 * Returns vector(ish) with R/G/B for fog
 * 
 * Parent Class: World
 */
m.getFogColor.World = "func_72948_g"
/** 
 * Return Vec3D with biome specific fog color
 * 
 * Parent Class: WorldProviderEnd
 */
m.getFogColor.WorldProviderEnd = "func_76562_b"

/** 
 * Returns if any of the blocks within the aabb are liquids. Args: aabb
 * 
 * Parent Class: World
 */
m.isAnyLiquid = "func_72953_d"
/** 
 * Adds a IWorldAccess to the list of worldAccesses
 * 
 * Parent Class: World
 */
m.addWorldAccess = "func_72954_a"
/** 
 * Runs through the list of updates to run and ticks them
 * 
 * Parent Class: WorldServer
 */
m.tickUpdates = "func_72955_a"
/** 
 * "Plays a sound at the entity's position. Args: entity
 * 
 * Parent Class: World
 */
m.playSoundAtEntity = "func_72956_a"
/** 
 * sends a Packet 38 (Entity Status) to all tracked players of that entity
 * 
 * Parent Class: WorldServer
 */
m.setEntityState = "func_72960_a"
/** 
 * "Returns back a chunk looked up by chunk coordinates Args: x
 * 
 * Parent Class: World
 */
m.getChunkFromChunkCoords = "func_72964_e"
/** 
 * Called on construction of the World class to setup the initial skylight values
 * 
 * Parent Class: World
 */
m.calculateInitialSkylight = "func_72966_v"
/** 
 * Returns the amount of skylight subtracted for the current time
 * 
 * Parent Class: World
 */
m.calculateSkylightSubtracted = "func_72967_a"
/** 
 * Creates the chunk provider for this world. Called in the constructor. Retrieves provider from worldProvider?
 * 
 * Parent Class: WorldServer
 */
m.createChunkProvider = "func_72970_h"
/** 
 * "Returns the sun brightness - checks time of day
 * 
 * Parent Class: World
 */
m.getSunBrightness = "func_72971_b"
/** 
 * Do NOT use this method to remove normal entities- use normal removeEntity
 * 
 * Parent Class: World
 */
m.removePlayerEntityDangerously = "func_72973_f"
/** 
 * "Sets a new spawn location by finding an uncovered block at a random (x
 * 
 * Parent Class: WorldServer
 */
m.setInitialSpawnLocation = "func_72974_f"
/** 
 * marks a vertical line of blocks as dirty
 * 
 * Parent Class: World
 */
m.markBlocksDirtyVertical = "func_72975_g"
/** 
 * "Gets the closest player to the point within the specified distance (distance can be set to less than 0 to not limit the distance). Args: x
 * 
 * Parent Class: World
 */
m.getClosestPlayer = "func_72977_a"
/** 
 * Updates all weather states.
 * 
 * Parent Class: WorldServer
 */
m.updateWeather = "func_72979_l"
/** 
 * This string is 'All: (number of loaded entities)' Viewable by press ing F3
 * 
 * Parent Class: World
 */
m.getDebugLoadedEntities = "func_72981_t"
/** 
 * also releases skins.
 * 
 * Parent Class: WorldClient
 */
m.removeAllEntities = "func_73022_a"
/** 
 * 
 * 
 * Parent Class: WorldClient
 */
m.doPreChunk = "func_73025_a"
/** 
 * Add an ID to Entity mapping to entityHashSet
 *  
 * @param entityID The ID to give to the entity to spawn
 * @param entityToSpawn The Entity to spawn in the World
 * 
 * Parent Class: WorldClient
 */
m.addEntityToWorld = "func_73027_a"
/** 
 * 
 * 
 * Parent Class: WorldClient
 */
m.removeEntityFromWorld = "func_73028_b"
/** 
 * 
 * 
 * Parent Class: WorldClient
 */
m.doVoidFogParticles = "func_73029_E"
/** 
 * "Invalidates an AABB region of blocks from the receive queue
 * 
 * Parent Class: WorldClient
 */
m.invalidateBlockReceiveRegion = "func_73031_a"
/** 
 * Gets the EntityTracker
 * 
 * Parent Class: WorldServer
 */
m.getEntityTracker = "func_73039_n"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.getPlayerManager = "func_73040_p"
m.flush = {}
/** 
 * Syncs all changes to disk and wait for completion.
 * 
 * Parent Class: WorldServer
 */
m.flush.WorldServer = "func_73041_k"
/** 
 * "Called to flush all changes to disk
 * 
 * Parent Class: SaveHandlerMP
 */
m.flush.SaveHandlerMP = "func_75759_a"

/** 
 * Saves the chunks to disk.
 * 
 * Parent Class: WorldServer
 */
m.saveLevel = "func_73042_a"
/** 
 * Saves all chunks to disk while updating progress bar.
 * 
 * Parent Class: WorldServer
 */
m.saveAllChunks = "func_73044_a"
/** 
 * "Returns the Entity with the given ID
 * 
 * Parent Class: WorldClient
 */
m.getEntityByID = "func_73045_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.getMinecraftServer = "func_73046_m"
/** 
 * Creates the bonus chest in the world.
 * 
 * Parent Class: WorldServer
 */
m.createBonusChest = "func_73047_i"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.resetRainAndThunder = "func_73051_P"
/** 
 * "creates a spawn position at random within 256 blocks of 0
 * 
 * Parent Class: WorldServer
 */
m.createSpawnPosition = "func_73052_b"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.wakeAllPlayers = "func_73053_d"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.areAllPlayersAsleep = "func_73056_e"
/** 
 * 
 * 
 * Parent Class: ItemInWorldManager
 */
m.updateBlockRemoving = "func_73075_a"
/** 
 * if the gameType is currently NOT_SET then change it to par1
 * 
 * Parent Class: ItemInWorldManager
 */
m.initializeGameType = "func_73077_b"
m.isCreative = {}
/** 
 * Get if we are in creative game mode.
 * 
 * Parent Class: ItemInWorldManager
 */
m.isCreative.ItemInWorldManager = "func_73083_d"
/** 
 * Returns true if this is the CREATIVE game type
 * 
 * Parent Class: WorldSettings$GameType
 */
m.isCreative.WorldSettings$GameType = "func_77145_d"

/** 
 * Attempts to right-click use an item by the given EntityPlayer in the given World
 * 
 * Parent Class: ItemInWorldManager
 */
m.tryUseItem = "func_73085_a"
/** 
 * Sends a message to the player reminding them that this is the demo version
 * 
 * Parent Class: DemoWorldManager
 */
m.sendDemoReminder = "func_73101_e"
/** 
 * 
 * 
 * Parent Class: DestroyBlockProgress
 */
m.getPartialBlockDamage = "func_73106_e"
/** 
 * "inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it
 * 
 * Parent Class: DestroyBlockProgress
 */
m.setPartialBlockDamage = "func_73107_a"
/** 
 * 
 * 
 * Parent Class: EntityTrackerEntry
 */
m.updatePlayerEntity = "func_73117_b"
/** 
 * 
 * 
 * Parent Class: EntityTrackerEntry
 */
m.removeFromTrackedPlayers = "func_73118_a"
/** 
 * 
 * 
 * Parent Class: EntityTrackerEntry
 */
m.sendDestroyEntityPacketToTrackedPlayers = "func_73119_a"
/** 
 * 
 * 
 * Parent Class: EntityTrackerEntry
 */
m.isPlayerWatchingThisChunk = "func_73121_d"
/** 
 * Remove a tracked player from our list and tell the tracked player to destroy us from their world.
 * 
 * Parent Class: EntityTrackerEntry
 */
m.removeTrackedPlayerSymmetric = "func_73123_c"
/** 
 * 
 * 
 * Parent Class: EntityTrackerEntry
 */
m.updatePlayerEntities = "func_73125_b"
/** 
 * Converts the instance data to a readable string.
 * 
 * Parent Class: ChunkProviderServer
 */
m.makeString = "func_73148_d"
/** 
 * "Checks to see if a chunk exists at x
 * 
 * Parent Class: ChunkProviderServer
 */
m.chunkExists = "func_73149_a"
/** 
 * "Two modes of operation: if passed true
 * 
 * Parent Class: ChunkProviderServer
 */
m.saveChunks = "func_73151_a"
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
m.getLoadedChunkCount = "func_73152_e"
/** 
 * Populates chunk with ores etc etc
 * 
 * Parent Class: ChunkProviderServer
 */
m.populate = "func_73153_a"
/** 
 * Unloads chunks that are marked to be unloaded. This is not guaranteed to unload every such chunk.
 * 
 * Parent Class: ChunkProviderServer
 */
m.unloadQueuedChunks = "func_73156_b"
/** 
 * Returns if the IChunkProvider supports saving.
 * 
 * Parent Class: ChunkProviderServer
 */
m.canSave = "func_73157_c"
m.loadChunk = {}
/** 
 * loads or generates the chunk at the chunk location specified
 *  
 * @param chunkX x coord of the chunk to load (block coord >> 4)
 * @param chunkZ z coord of the chunk to load (block coord >> 4)
 * 
 * Parent Class: ChunkProviderServer
 */
m.loadChunk.ChunkProviderServer = "func_73158_c"
/** 
 * Loads the specified(XZ) chunk into the specified world.
 * 
 * Parent Class: AnvilChunkLoader
 */
m.loadChunk.AnvilChunkLoader = "func_75815_a"

m.initializeNoiseField = {}
/** 
 * "generates a subset of the level's terrain data. Takes 7 arguments: the [empty] noise array
 * 
 * Parent Class: ChunkProviderHell
 */
m.initializeNoiseField.ChunkProviderHell = "func_73164_a"
/** 
 * "generates a subset of the level's terrain data. Takes 7 arguments: the [empty] noise array
 * 
 * Parent Class: ChunkProviderEnd
 */
m.initializeNoiseField.ChunkProviderEnd = "func_73187_a"

/** 
 * Unload chunk from ChunkProviderClient's hashmap. Called in response to a Packet50PreChunk with its mode field set to false
 * 
 * Parent Class: ChunkProviderClient
 */
m.unloadChunk = "func_73234_b"
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
m.loadChunkFromFile = "func_73239_e"
/** 
 * "marks all chunks for unload
 * 
 * Parent Class: ChunkProviderServer
 */
m.unloadAllChunks = "func_73240_a"
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
m.dropChunk = "func_73241_b"
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
m.saveChunkExtraData = "func_73243_a"
/** 
 * Returns this PropertyManager's file object used for property saving.
 * 
 * Parent Class: PropertyManager
 */
m.getPropertiesFile = "func_73665_c"
/** 
 * Generates a new properties file.
 * 
 * Parent Class: PropertyManager
 */
m.generateNewProperties = "func_73666_a"
/** 
 * 
 * 
 * Parent Class: BanEntry
 */
m.getBanEndDate = "func_73680_d"
/** 
 * 
 * 
 * Parent Class: UserListEntry
 */
m.hasBanExpired = "func_73682_e"
/** 
 * 
 * 
 * Parent Class: BanEntry
 */
m.getBanReason = "func_73686_f"
/** 
 * Updates the progress bar on the loading screen to the specified amount. Args: loadProgress
 * 
 * Parent Class: IProgressUpdate
 */
m.setLoadingProgress = "func_73718_a"
/** 
 * Displays a string on the loading screen supposed to indicate what is being done currently.
 * 
 * Parent Class: IProgressUpdate
 */
m.displayLoadingString = "func_73719_c"
/** 
 * Shows the 'Saving level' string.
 * 
 * Parent Class: IProgressUpdate
 */
m.displaySavingString = "func_73720_a"
/** 
 * "this string
 * 
 * Parent Class: IProgressUpdate
 */
m.resetProgressAndMessage = "func_73721_b"
/** 
 * 
 * 
 * Parent Class: LoadingScreenRenderer
 */
m.displayString = "func_73722_d"
/** 
 * "Draw a 1 pixel wide vertical line. Args : x
 * 
 * Parent Class: Gui
 */
m.drawVerticalLine = "func_73728_b"
/** 
 * "Draw a 1 pixel wide horizontal line. Args: x1
 * 
 * Parent Class: Gui
 */
m.drawHorizontalLine = "func_73730_a"
/** 
 * "Renders the specified text to the screen
 * 
 * Parent Class: Gui
 */
m.drawCenteredString = "func_73732_a"
/** 
 * "Draws a rectangle with a vertical gradient between the specified colors (ARGB format). Args : x1
 * 
 * Parent Class: GuiScreenRealmsProxy
 */
m.drawGradientRect = "func_73733_a"
/** 
 * "Draws a solid color rectangle with the specified coordinates and color (ARGB format). Args: x1
 * 
 * Parent Class: Gui
 */
m.drawRect = "func_73734_a"
/** 
 * Renders dragon's (boss) health on the HUD
 * 
 * Parent Class: GuiIngame
 */
m.renderBossHealth = "func_73828_d"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.setRecordPlayingMessage = "func_73833_a"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
m.getUpdateCounter = "func_73834_c"
/** 
 * "Adds the buttons (and other controls) to the screen in question. Called when the GUI is displayed and when the window resizes
 * 
 * Parent Class: GuiTwitchUserMode
 */
m.initGui = "func_73866_w_"
/** 
 * Returns true if this GUI should pause the game when it is displayed in single-player
 * 
 * Parent Class: GuiContainer
 */
m.doesGuiPauseGame = "func_73868_f"
/** 
 * "Fired when a key is typed (except F11 which toggles full screen). This is the equivalent of KeyListener.keyTyped(KeyEvent e). Args : character (character on the key)
 * 
 * Parent Class: GuiMultiplayer
 */
m.keyTyped = "func_73869_a"
/** 
 * Called from the main game loop to update the screen.
 * 
 * Parent Class: GuiMultiplayer
 */
m.updateScreen = "func_73876_c"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayClient$3$1
 */
m.confirmClicked = "func_73878_a"
/** 
 * Rotate and blurs the skybox view in the main menu
 * 
 * Parent Class: GuiMainMenu
 */
m.rotateAndBlurSkybox = "func_73968_a"
/** 
 * Adds Singleplayer and Multiplayer buttons on Main Menu for players who have bought the game.
 * 
 * Parent Class: GuiMainMenu
 */
m.addSingleplayerMultiplayerButtons = "func_73969_a"
/** 
 * Draws the main menu panorama
 * 
 * Parent Class: GuiMainMenu
 */
m.drawPanorama = "func_73970_b"
/** 
 * Renders the skybox in the main menu
 * 
 * Parent Class: GuiMainMenu
 */
m.renderSkybox = "func_73971_c"
/** 
 * Adds Demo buttons on Main Menu for players who are playing Demo.
 * 
 * Parent Class: GuiMainMenu
 */
m.addDemoButtons = "func_73972_b"
/** 
 * Updates all fields of the Timer using the current time
 * 
 * Parent Class: Timer
 */
m.updateTimer = "func_74275_a"
/** 
 * "Creates a unique PNG file in the given directory named by a timestamp.  Handles cases where the timestamp alone is not enough to create a uniquely named file
 * 
 * Parent Class: ScreenShotHelper
 */
m.getTimestampedPNGFileForDirectory = "func_74290_a"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
m.getOptionFloatValue = "func_74296_a"
/** 
 * Gets a key binding.
 *  
 * @param settingOption The KeyBinding is generated from this option
 * 
 * Parent Class: GameSettings
 */
m.getKeyBinding = "func_74297_c"
/** 
 * Represents a key or mouse button as a string. Args: key
 *  
 * @param key The key to display
 * 
 * Parent Class: GameSettings
 */
m.getKeyDisplayString = "func_74298_c"
/** 
 * "Returns the translation of the given index in the given String array. If the index is smaller than 0 or greater than/equal to the length of the String array
 * 
 * Parent Class: GameSettings
 */
m.getTranslation = "func_74299_a"
/** 
 * Loads the options from the options file. It appears that this has replaced the previous 'loadOptions'
 * 
 * Parent Class: GameSettings
 */
m.loadOptions = "func_74300_a"
/** 
 * Saves the options to the options file.
 * 
 * Parent Class: GameSettings
 */
m.saveOptions = "func_74303_b"
/** 
 * "If the specified option is controlled by a slider (float value)
 * 
 * Parent Class: GameSettings
 */
m.setOptionFloatValue = "func_74304_a"
/** 
 * Parses a string into a float.
 *  
 * @param str The string to parse
 * 
 * Parent Class: GameSettings
 */
m.parseFloat = "func_74305_a"
/** 
 * "For non-float options. Toggles the option on/off
 * 
 * Parent Class: GameSettings
 */
m.setOptionValue = "func_74306_a"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
m.getOptionOrdinalValue = "func_74308_b"
/** 
 * Grabs the mouse cursor it doesn't move and isn't seen.
 * 
 * Parent Class: MouseHelper
 */
m.grabMouseCursor = "func_74372_a"
/** 
 * Ungrabs the mouse cursor so it can be moved and set it to the center of the screen
 * 
 * Parent Class: MouseHelper
 */
m.ungrabMouseCursor = "func_74373_b"
/** 
 * 
 * 
 * Parent Class: MouseHelper
 */
m.mouseXYChange = "func_74374_c"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.getEnumString = "func_74378_d"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.getEnumOptions = "func_74379_a"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.getEnumFloat = "func_74380_a"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.returnEnumOrdinal = "func_74381_c"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
m.getEnumBoolean = "func_74382_b"
/** 
 * Checks timeouts and processes all packets received
 * 
 * Parent Class: NetworkManager
 */
m.processReceivedPackets = "func_74428_b"
/** 
 * Returns the socket address of the remote side. Server-only.
 * 
 * Parent Class: NetworkManager
 */
m.getRemoteAddress = "func_74430_c"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.unpressKey = "func_74505_d"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.unPressAllKeys = "func_74506_a"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.resetKeyBindingArrayAndHash = "func_74508_b"
/** 
 * 
 * 
 * Parent Class: KeyBinding
 */
m.setKeyBindState = "func_74510_a"
/** 
 * Update and return colorBuffer with the RGBA values passed as arguments
 * 
 * Parent Class: RenderHelper
 */
m.setColorBuffer = "func_74521_a"
/** 
 * Disables the OpenGL lighting properties enabled by enableStandardItemLighting
 * 
 * Parent Class: RenderHelper
 */
m.disableStandardItemLighting = "func_74518_a"
/** 
 * Sets the OpenGL lighting properties to the values used when rendering blocks as items
 * 
 * Parent Class: RenderHelper
 */
m.enableStandardItemLighting = "func_74519_b"
/** 
 * Sets OpenGL lighting for rendering blocks as items inside GUI screens (such as containers).
 * 
 * Parent Class: RenderHelper
 */
m.enableGUIStandardItemLighting = "func_74520_c"
/** 
 * Creates and returns a direct byte buffer with the specified capacity. Applies native ordering to speed up access.
 * 
 * Parent Class: GLAllocation
 */
m.createDirectByteBuffer = "func_74524_c"
/** 
 * Generates the specified number of display lists and returns the first index.
 * 
 * Parent Class: GLAllocation
 */
m.generateDisplayLists = "func_74526_a"
/** 
 * Creates and returns a direct int buffer with the specified capacity. Applies native ordering to speed up access.
 * 
 * Parent Class: GLAllocation
 */
m.createDirectIntBuffer = "func_74527_f"
/** 
 * Creates and returns a direct float buffer with the specified capacity. Applies native ordering to speed up access.
 * 
 * Parent Class: GLAllocation
 */
m.createDirectFloatBuffer = "func_74529_h"
/** 
 * 
 * 
 * Parent Class: ChatLine
 */
m.getChatLineID = "func_74539_c"
/** 
 * 
 * 
 * Parent Class: ChatLine
 */
m.getUpdatedCounter = "func_74540_b"
/** 
 * Updates the current render info and camera location based on entity look angles and 1st/3rd person view mode
 * 
 * Parent Class: ActiveRenderInfo
 */
m.updateRenderInfo = "func_74583_a"
m.write = {}
/** 
 * "Write the actual data contents of the tag
 * 
 * Parent Class: NBTBase
 */
m.write.NBTBase = "func_74734_a"
/** 
 * 
 * 
 * Parent Class: CompressedStreamTools
 */
m.write.CompressedStreamTools = "func_74800_a"
/** 
 * "args: sectorNumber
 * 
 * Parent Class: RegionFile
 */
m.write.RegionFile = "func_76712_a"

m.copy = {}
/** 
 * Creates a clone of the tag.
 * 
 * Parent Class: NBTBase
 */
m.copy.NBTBase = "func_74737_b"
/** 
 * Returns a new stack with the same properties.
 * 
 * Parent Class: ItemStack
 */
m.copy.ItemStack = "func_77946_l"

/** 
 * Adds the provided tag to the end of the list. There is no check to verify this tag is of the same type as any previous tag.
 * 
 * Parent Class: NBTTagList
 */
m.appendTag = "func_74742_a"
m.removeTag = {}
/** 
 * Removes a tag at the given index.
 * 
 * Parent Class: NBTTagList
 */
m.removeTag.NBTTagList = "func_74744_a"
/** 
 * Remove the specified tag.
 * 
 * Parent Class: NBTTagCompound
 */
m.removeTag.NBTTagCompound = "func_82580_o"

/** 
 * Returns the number of tags in the list.
 * 
 * Parent Class: NBTTagList
 */
m.tagCount = "func_74745_c"
/** 
 * "Stores the given boolean value as a NBTTagByte
 * 
 * Parent Class: NBTTagCompound
 */
m.setBoolean = "func_74757_a"
/** 
 * Stores a new NBTTagInt with the given integer value into the map with the given string key.
 * 
 * Parent Class: NBTTagCompound
 */
m.setInteger = "func_74768_a"
/** 
 * Stores a new NBTTagLong with the given long value into the map with the given string key.
 * 
 * Parent Class: NBTTagCompound
 */
m.setLong = "func_74772_a"
/** 
 * Stores a new NBTTagByteArray with the given array as data into the map with the given string key.
 * 
 * Parent Class: NBTTagCompound
 */
m.setByteArray = "func_74773_a"
/** 
 * Stores a new NBTTagByte with the given byte value into the map with the given string key.
 * 
 * Parent Class: NBTTagCompound
 */
m.setByte = "func_74774_a"
/** 
 * "Retrieves a NBTTagCompound subtag matching the specified key
 * 
 * Parent Class: NBTTagCompound
 */
m.getCompoundTag = "func_74775_l"
/** 
 * Stores a new NBTTagFloat with the given float value into the map with the given string key.
 * 
 * Parent Class: NBTTagCompound
 */
m.setFloat = "func_74776_a"
/** 
 * Stores a new NBTTagShort with the given short value into the map with the given string key.
 * 
 * Parent Class: NBTTagCompound
 */
m.setShort = "func_74777_a"
/** 
 * Stores a new NBTTagString with the given string value into the map with the given string key.
 * 
 * Parent Class: NBTTagCompound
 */
m.setString = "func_74778_a"
/** 
 * Stores a new NBTTagDouble with the given double value into the map with the given string key.
 * 
 * Parent Class: NBTTagCompound
 */
m.setDouble = "func_74780_a"
/** 
 * gets a generic tag with the specified name
 * 
 * Parent Class: NBTTagCompound
 */
m.getTag = "func_74781_a"
/** 
 * Stores the given tag into the map with the given string key. This is mostly used to store tag lists.
 * 
 * Parent Class: NBTTagCompound
 */
m.setTag = "func_74782_a"
/** 
 * Stores a new NBTTagIntArray with the given array as data into the map with the given string key.
 * 
 * Parent Class: NBTTagCompound
 */
m.setIntArray = "func_74783_a"
/** 
 * 
 * 
 * Parent Class: CompressedStreamTools
 */
m.safeWrite = "func_74793_a"
/** 
 * Load the gzipped compound from the inputstream.
 * 
 * Parent Class: CompressedStreamTools
 */
m.readCompressed = "func_74796_a"
/** 
 * "Write the compound
 * 
 * Parent Class: CompressedStreamTools
 */
m.writeCompressed = "func_74799_a"
/** 
 * Translate a key to current language applying String.format()
 * 
 * Parent Class: StringTranslate
 */
m.translateKeyFormat = "func_74803_a"
/** 
 * Translate a key to current language.
 * 
 * Parent Class: StringTranslate
 */
m.translateKey = "func_74805_b"
/** 
 * Translates a Stat name with format args
 * 
 * Parent Class: StatCollector
 */
m.translateToLocalFormatted = "func_74837_a"
/** 
 * Translates a Stat name
 * 
 * Parent Class: StatCollector
 */
m.translateToLocal = "func_74838_a"
/** 
 * 
 * 
 * Parent Class: CommandException
 */
m.getErrorObjects = "func_74844_a"
/** 
 * checks the entire StructureBoundingBox for Liquids
 * 
 * Parent Class: StructureComponent
 */
m.isLiquidInStructureBoundingBox = "func_74860_a"
/** 
 * "Initiates construction of the Structure Component picked
 * 
 * Parent Class: StructureVillagePieces$Well
 */
m.buildComponent = "func_74861_a"
/** 
 * 
 * 
 * Parent Class: StructureComponent
 */
m.getYWithOffset = "func_74862_a"
/** 
 * 
 * 
 * Parent Class: StructureComponent
 */
m.getXWithOffset = "func_74865_a"
/** 
 * Deletes all continuous blocks from selected position upwards. Stops at hitting air.
 * 
 * Parent Class: StructureComponent
 */
m.clearCurrentPositionBlocksUpwards = "func_74871_b"
/** 
 * 
 * 
 * Parent Class: StructureComponent
 */
m.getZWithOffset = "func_74873_b"
/** 
 * "second Part of Structure generating
 * 
 * Parent Class: StructureVillagePieces$Well
 */
m.addComponentParts = "func_74875_a"
/** 
 * Returns the component type ID of this component.
 * 
 * Parent Class: StructureComponent
 */
m.getComponentType = "func_74877_c"
/** 
 * "arguments: (World worldObj
 * 
 * Parent Class: StructureComponent
 */
m.fillWithAir = "func_74878_a"
/** 
 * "arguments: World worldObj
 * 
 * Parent Class: StructureComponent
 */
m.fillWithRandomizedBlocks = "func_74882_a"
/** 
 * Discover if bounding box can fit within the current bounding box object.
 * 
 * Parent Class: StructureComponent
 */
m.findIntersecting = "func_74883_a"
m.getAverageGroundLevel = {}
/** 
 * Discover the y coordinate that will serve as the ground level of the supplied BoundingBox. (A median of all the levels in the BB's horizontal rectangle).
 * 
 * Parent Class: StructureVillagePieces$Village
 */
m.getAverageGroundLevel.StructureVillagePieces$Village = "func_74889_b"
/** 
 * 
 * 
 * Parent Class: WorldProviderEnd
 */
m.getAverageGroundLevel.WorldProviderEnd = "func_76557_i"

/** 
 * "Gets the next village component
 * 
 * Parent Class: StructureVillagePieces$Village
 */
m.getNextComponentNN = "func_74891_a"
/** 
 * "Spawns a number of villagers in this component. Parameters: world
 * 
 * Parent Class: StructureVillagePieces$Village
 */
m.spawnVillagers = "func_74893_a"
/** 
 * "Gets the next village component
 * 
 * Parent Class: StructureVillagePieces$Village
 */
m.getNextComponentPP = "func_74894_b"
/** 
 * 
 * 
 * Parent Class: StructureVillagePieces$Village
 */
m.canVillageGoDeeper = "func_74895_a"
m.getTotalWeight = {}
/** 
 * 
 * 
 * Parent Class: StructureNetherBridgePieces$Piece
 */
m.getTotalWeight.StructureNetherBridgePieces$Piece = "func_74960_a"
/** 
 * Returns the total weight of all items in a collection.
 * 
 * Parent Class: WeightedRandom
 */
m.getTotalWeight.WeightedRandom = "func_76272_a"

m.getNextComponentX = {}
/** 
 * Gets the next component in the +/- X direction
 * 
 * Parent Class: StructureNetherBridgePieces$Piece
 */
m.getNextComponentX.StructureNetherBridgePieces$Piece = "func_74961_b"
/** 
 * Gets the next component in the +/- X direction
 * 
 * Parent Class: StructureStrongholdPieces$Stronghold
 */
m.getNextComponentX.StructureStrongholdPieces$Stronghold = "func_74989_b"

m.getNextComponentNormal = {}
/** 
 * Gets the next component in any cardinal direction
 * 
 * Parent Class: StructureNetherBridgePieces$Piece
 */
m.getNextComponentNormal.StructureNetherBridgePieces$Piece = "func_74963_a"
/** 
 * Gets the next component in any cardinal direction
 * 
 * Parent Class: StructureStrongholdPieces$Stronghold
 */
m.getNextComponentNormal.StructureStrongholdPieces$Stronghold = "func_74986_a"

/** 
 * Checks if the bounding box's minY is > 10
 * 
 * Parent Class: StructureNetherBridgePieces$Piece
 */
m.isAboveGround = "func_74964_a"
m.getNextComponentZ = {}
/** 
 * Gets the next component in the +/- Z direction
 * 
 * Parent Class: StructureNetherBridgePieces$Piece
 */
m.getNextComponentZ.StructureNetherBridgePieces$Piece = "func_74965_c"
/** 
 * Gets the next component in the +/- Z direction
 * 
 * Parent Class: StructureStrongholdPieces$Stronghold
 */
m.getNextComponentZ.StructureStrongholdPieces$Stronghold = "func_74987_c"

/** 
 * 
 * 
 * Parent Class: StructureStrongholdPieces$Stronghold
 */
m.getRandomDoor = "func_74988_a"
/** 
 * returns false if the Structure Bounding Box goes below 10
 * 
 * Parent Class: StructureStrongholdPieces$Stronghold
 */
m.canStrongholdGoDeeper = "func_74991_a"
/** 
 * 
 * 
 * Parent Class: MapGenVillage
 */
m.canSpawnStructureAtCoords = "func_75047_a"
/** 
 * "Returns a list of other locations at which the structure generation has been run
 * 
 * Parent Class: MapGenStructure
 */
m.getCoordList = "func_75052_o_"
/** 
 * 
 * 
 * Parent Class: MapGenNetherBridge
 */
m.getSpawnList = "func_75059_a"
/** 
 * picks Block Ids and Metadata (Silverfish)
 * 
 * Parent Class: StructureComponent$BlockSelector
 */
m.selectBlocks = "func_75062_a"
/** 
 * "offsets the structure Bounding Boxes up to a certain height
 * 
 * Parent Class: StructureStart
 */
m.markAvailableHeight = "func_75067_a"
/** 
 * "currently only defined for Villages
 * 
 * Parent Class: MapGenVillage$Start
 */
m.isSizeableStructure = "func_75069_d"
/** 
 * 
 * 
 * Parent Class: StructureStart
 */
m.setRandomHeight = "func_75070_a"
/** 
 * 
 * 
 * Parent Class: StructureStart
 */
m.getComponents = "func_75073_b"
/** 
 * 
 * 
 * Parent Class: StructureVillagePieces
 */
m.getStructureVillageWeightedPieceList = "func_75084_a"
/** 
 * 
 * 
 * Parent Class: StructureVillagePieces$PieceWeight
 */
m.canSpawnMoreVillagePiecesOfType = "func_75085_a"
/** 
 * 
 * 
 * Parent Class: StructureVillagePieces$PieceWeight
 */
m.canSpawnMoreVillagePieces = "func_75086_a"
/** 
 * 
 * 
 * Parent Class: PlayerCapabilities
 */
m.writeCapabilitiesToNBT = "func_75091_a"
/** 
 * 
 * 
 * Parent Class: PlayerCapabilities
 */
m.readCapabilitiesFromNBT = "func_75095_b"
/** 
 * 
 * 
 * Parent Class: FoodStats
 */
m.setFoodLevel = "func_75114_a"
/** 
 * Writes the food data for the player.
 * 
 * Parent Class: FoodStats
 */
m.writeNBT = "func_75117_b"
/** 
 * 
 * 
 * Parent Class: FoodStats
 */
m.setFoodSaturationLevel = "func_75119_b"
/** 
 * 
 * 
 * Parent Class: FoodStats
 */
m.getPrevFoodLevel = "func_75120_b"
/** 
 * Get whether the player must eat food.
 * 
 * Parent Class: FoodStats
 */
m.needFood = "func_75121_c"
/** 
 * sets whether the player can craft in this inventory or not
 * 
 * Parent Class: Container
 */
m.setCanCraft = "func_75128_a"
/** 
 * gets whether or not the player can craft in this inventory or not
 * 
 * Parent Class: Container
 */
m.getCanCraft = "func_75129_b"
/** 
 * Callback for when the crafting matrix is changed.
 * 
 * Parent Class: ContainerMerchant
 */
m.onCraftMatrixChanged = "func_75130_a"
/** 
 * "places itemstacks in first x slots
 * 
 * Parent Class: Container
 */
m.putStacksInSlots = "func_75131_a"
/** 
 * 
 * 
 * Parent Class: ContainerMerchant
 */
m.onCraftGuiOpened = "func_75132_a"
/** 
 * Retries slotClick() in case of failure
 * 
 * Parent Class: Container
 */
m.retrySlotClick = "func_75133_b"
/** 
 * Called when the container is closed.
 * 
 * Parent Class: ContainerMerchant
 */
m.onContainerClosed = "func_75134_a"
/** 
 * "Merges provided ItemStack with the first avaliable one in the container/player inventor between minIndex (included) and maxIndex (excluded). Args : stack
 * 
 * Parent Class: Container
 */
m.mergeItemStack = "func_75135_a"
/** 
 * Gets a unique transaction ID. Parameter is unused.
 * 
 * Parent Class: Container
 */
m.getNextTransactionID = "func_75136_a"
/** 
 * 
 * 
 * Parent Class: ContainerMerchant
 */
m.updateProgressBar = "func_75137_b"
/** 
 * 
 * 
 * Parent Class: Container
 */
m.getSlot = "func_75139_a"
/** 
 * "Handles the given Button-click on the server
 * 
 * Parent Class: ContainerEnchantment
 */
m.enchantItem = "func_75140_a"
/** 
 * "args: slotID
 * 
 * Parent Class: Container
 */
m.putStackInSlot = "func_75141_a"
/** 
 * "Looks for changes made in the container
 * 
 * Parent Class: ContainerMerchant
 */
m.detectAndSendChanges = "func_75142_b"
/** 
 * Handles slot click.
 * 
 * Parent Class: Container
 */
m.slotClick = "func_75144_a"
/** 
 * 
 * 
 * Parent Class: ContainerMerchant
 */
m.canInteractWith = "func_75145_c"
/** 
 * Adds an item slot to this container
 * 
 * Parent Class: Container
 */
m.addSlotToContainer = "func_75146_a"
/** 
 * 
 * 
 * Parent Class: Container
 */
m.getSlotFromInventory = "func_75147_a"
/** 
 * 
 * 
 * Parent Class: ContainerMerchant
 */
m.getMerchantInventory = "func_75174_d"
/** 
 * 
 * 
 * Parent Class: StructureStrongholdPieces$PieceWeight
 */
m.canSpawnMoreStructuresOfType = "func_75189_a"
/** 
 * 
 * 
 * Parent Class: StructureStrongholdPieces$PieceWeight
 */
m.canSpawnMoreStructures = "func_75190_a"
/** 
 * sets up Arrays with the Structure pieces and their weights
 * 
 * Parent Class: StructureStrongholdPieces
 */
m.prepareStructurePieces = "func_75198_a"
/** 
 * 
 * 
 * Parent Class: StructureStrongholdPieces
 */
m.canAddStructurePieces = "func_75202_c"
m.onCrafting = {}
/** 
 * "the itemStack passed in is the output - ie
 * 
 * Parent Class: Slot
 */
m.onCrafting.Slot = "func_75210_a"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.onCrafting.ItemStack = "func_77980_a"

/** 
 * Check if the stack is a valid item for this slot. Always true beside for the armor slots.
 * 
 * Parent Class: Slot
 */
m.isItemValid = "func_75214_a"
/** 
 * Helper method to put a stack in the slot.
 * 
 * Parent Class: Slot
 */
m.putStack = "func_75215_d"
/** 
 * Returns if this slot contains a stack.
 * 
 * Parent Class: Slot
 */
m.getHasStack = "func_75216_d"
/** 
 * returns true if the slot exists in the given inventory and location
 * 
 * Parent Class: Slot
 */
m.isHere = "func_75217_a"
/** 
 * Called when the stack in a Slot changes
 * 
 * Parent Class: Slot
 */
m.onSlotChanged = "func_75218_e"
/** 
 * "Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit()
 * 
 * Parent Class: Slot
 */
m.getSlotStackLimit = "func_75219_a"
/** 
 * "if par2 has more items than par1
 * 
 * Parent Class: Slot
 */
m.onSlotChange = "func_75220_a"
/** 
 * 
 * 
 * Parent Class: SlotMerchantResult
 */
m.doTrade = "func_75230_a"
/** 
 * Returns true if this itemstack can be filled with a potion
 * 
 * Parent Class: ContainerBrewingStand$Potion
 */
m.canHoldPotion = "func_75243_a_"
/** 
 * Updates the task
 * 
 * Parent Class: EntitySlime$AISlimeFaceRandom
 */
m.updateTask = "func_75246_d"
/** 
 * "Get a bitmask telling which other tasks may not run concurrently. The test is a simple bitwise AND - if it yields zero
 * 
 * Parent Class: EntityAIBase
 */
m.getMutexBits = "func_75247_h"
/** 
 * "Sets a bitmask telling which other tasks may not run concurrently. The test is a simple bitwise AND - if it yields zero
 * 
 * Parent Class: EntityAIBase
 */
m.setMutexBits = "func_75248_a"
/** 
 * Execute a one shot task or start executing a continuous task
 * 
 * Parent Class: EntitySlime$AISlimeAttack
 */
m.startExecuting = "func_75249_e"
/** 
 * Returns whether the EntityAIBase should begin execution.
 * 
 * Parent Class: EntitySpider$AISpiderTarget
 */
m.shouldExecute = "func_75250_a"
/** 
 * Resets the task
 * 
 * Parent Class: EntityGuardian$AIGuardianAttack
 */
m.resetTask = "func_75251_c"
/** 
 * Determine if this AI Task is interruptible by a higher (= lower value) priority task. All vanilla AITask have this value set to true.
 * 
 * Parent Class: EntityAIBase
 */
m.isInterruptible = "func_75252_g"
/** 
 * Returns whether an in-progress EntityAIBase should continue executing
 * 
 * Parent Class: EntitySpider$AISpiderAttack
 */
m.continueExecuting = "func_75253_b"
/** 
 * Checks to see if this entity can find a short path to the given target.
 *  
 * @param target the entity to find a path to
 * 
 * Parent Class: EntityAITarget
 */
m.canEasilyReach = "func_75295_a"
/** 
 * 
 * 
 * Parent Class: EntityAIFleeSun
 */
m.findPossibleShelter = "func_75366_f"
/** 
 * Gets if the Player has the Bone in the hand.
 * 
 * Parent Class: EntityAIBeg
 */
m.hasPlayerGotBoneInHand = "func_75382_a"
/** 
 * Spawns a baby animal of the same type.
 * 
 * Parent Class: EntityAIMate
 */
m.spawnBaby = "func_75388_i"
/** 
 * Loops through nearby animals and finds another animal of the same type that can be mated with. Returns the first valid mate found.
 * 
 * Parent Class: EntityAIMate
 */
m.getNearbyMate = "func_75389_f"
/** 
 * 
 * 
 * Parent Class: EntityAIMoveThroughVillage
 */
m.findNearestDoor = "func_75412_a"
/** 
 * 
 * 
 * Parent Class: EntityAIMoveThroughVillage
 */
m.doesDoorListContain = "func_75413_a"
/** 
 * 
 * 
 * Parent Class: EntityAIMoveThroughVillage
 */
m.resizeDoorList = "func_75414_f"
/** 
 * 
 * 
 * Parent Class: EntityAIVillagerMate
 */
m.checkSufficientDoorsPresentForNewVillager = "func_75446_f"
/** 
 * 
 * 
 * Parent Class: EntityAIVillagerMate
 */
m.giveBirth = "func_75447_i"
/** 
 * "finds a random target within par1(x
 * 
 * Parent Class: RandomPositionGenerator
 */
m.findRandomTargetBlockAwayFrom = "func_75461_b"
/** 
 * "searches 10 blocks at random in a within par1(x
 * 
 * Parent Class: RandomPositionGenerator
 */
m.findRandomTargetBlock = "func_75462_c"
/** 
 * "finds a random target within par1(x
 * 
 * Parent Class: RandomPositionGenerator
 */
m.findRandomTarget = "func_75463_a"
/** 
 * "finds a random target within par1(x
 * 
 * Parent Class: RandomPositionGenerator
 */
m.findRandomTargetBlockTowards = "func_75464_a"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.resetDoorOpeningRestrictionCounter = "func_75466_d"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.getDoorOpeningRestrictionCounter = "func_75468_f"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.incrementDoorOpeningRestrictionCounter = "func_75470_e"
/** 
 * 
 * 
 * Parent Class: VillageDoorInfo
 */
m.getInsidePosY = "func_75473_b"
/** 
 * Returns the squared distance between this door and the given coordinate.
 * 
 * Parent Class: VillageDoorInfo
 */
m.getDistanceSquared = "func_75474_b"
/** 
 * "Sets a new path. If it's diferent from the old path. Checks to adjust path for sun avoiding
 * 
 * Parent Class: PathNavigate
 */
m.setPath = "func_75484_a"
/** 
 * If on ground or swimming and can swim
 * 
 * Parent Class: PathNavigateSwimmer
 */
m.canNavigate = "func_75485_k"
/** 
 * Trims path data from the end to the first sun covered block
 * 
 * Parent Class: PathNavigateSwimmer
 */
m.removeSunnyPath = "func_75487_m"
/** 
 * "Returns the path to the given coordinates. Args : x
 * 
 * Parent Class: PathNavigate
 */
m.getPathToXYZ = "func_75488_a"
/** 
 * "Try to find and set a path to XYZ. Returns true if successful. Args : x
 * 
 * Parent Class: PathNavigate
 */
m.tryMoveToXYZ = "func_75492_a"
/** 
 * "Returns true when an entity of specified size could safely walk in a straight line between the two points. Args: pos1
 * 
 * Parent Class: PathNavigateSwimmer
 */
m.isDirectPathBetweenPoints = "func_75493_a"
/** 
 * Returns the path to the given EntityLiving. Args : entity
 * 
 * Parent Class: PathNavigateClimber
 */
m.getPathToEntityLiving = "func_75494_a"
/** 
 * "Try to find and set a path to EntityLiving. Returns true if successful. Args : entity
 * 
 * Parent Class: PathNavigateClimber
 */
m.tryMoveToEntityLiving = "func_75497_a"
/** 
 * sets active PathEntity to null
 * 
 * Parent Class: PathNavigate
 */
m.clearPathEntity = "func_75499_g"
/** 
 * If null path or reached the end
 * 
 * Parent Class: PathNavigate
 */
m.noPath = "func_75500_f"
/** 
 * 
 * 
 * Parent Class: PathNavigateClimber
 */
m.onUpdateNavigation = "func_75501_e"
/** 
 * 
 * 
 * Parent Class: PathNavigateSwimmer
 */
m.getEntityPosition = "func_75502_i"
/** 
 * gets the actively used PathEntity
 * 
 * Parent Class: PathNavigate
 */
m.getPath = "func_75505_d"
/** 
 * "Returns true if the entity is in water or lava
 * 
 * Parent Class: PathNavigate
 */
m.isInLiquid = "func_75506_l"
/** 
 * 
 * 
 * Parent Class: PathNavigateSwimmer
 */
m.pathFollow = "func_75508_h"
/** 
 * "Checks
 * 
 * Parent Class: EntitySenses
 */
m.canSee = "func_75522_a"
/** 
 * Clears canSeeCachePositive and canSeeCacheNegative.
 * 
 * Parent Class: EntitySenses
 */
m.clearSensingCache = "func_75523_a"
/** 
 * 
 * 
 * Parent Class: VillageSiege
 */
m.spawnZombie = "func_75530_c"
/** 
 * Get a list of villages.
 * 
 * Parent Class: VillageCollection
 */
m.getVillageList = "func_75540_b"
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.dropOldestVillagerPosition = "func_75543_d"
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.addNewDoorsToVillageOrCreateVillage = "func_75545_e"
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.removeAnnihilatedVillages = "func_75549_c"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.removeDeadAndOutOfRangeDoors = "func_75557_k"
/** 
 * called only by class EntityAIMoveThroughVillage
 * 
 * Parent Class: Village
 */
m.getVillageDoorInfoList = "func_75558_f"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.getTicksSinceLastDoorAdding = "func_75561_d"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.getNumVillagers = "func_75562_e"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.removeDeadAndOldAgressors = "func_75565_j"
/** 
 * "Returns true
 * 
 * Parent Class: Village
 */
m.isAnnihilated = "func_75566_g"
/** 
 * "Actually get num village door info entries
 * 
 * Parent Class: Village
 */
m.getNumVillageDoors = "func_75567_c"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.getVillageRadius = "func_75568_b"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.findNearestVillageAggressor = "func_75571_b"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.updateNumVillagers = "func_75572_i"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.updateVillageRadiusAndCenter = "func_75573_l"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.addOrRenewAgressor = "func_75575_a"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.addVillageDoorInfo = "func_75576_a"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.updateNumIronGolems = "func_75579_h"
/** 
 * 
 * 
 * Parent Class: EnumCreatureType
 */
m.getCreatureClass = "func_75598_a"
/** 
 * Gets whether or not this creature type is peaceful.
 * 
 * Parent Class: EnumCreatureType
 */
m.getPeacefulCreature = "func_75599_d"
/** 
 * 
 * 
 * Parent Class: EnumCreatureType
 */
m.getMaxNumberOfCreature = "func_75601_b"
/** 
 * create a new instance of an entity from NBT store
 * 
 * Parent Class: EntityList
 */
m.createEntityFromNBT = "func_75615_a"
/** 
 * Create a new instance of an entity in the world by using an entity ID.
 * 
 * Parent Class: EntityList
 */
m.createEntityByID = "func_75616_a"
/** 
 * Finds the class using IDtoClassMapping and classToStringMapping
 * 
 * Parent Class: EntityList
 */
m.getStringFromID = "func_75617_a"
/** 
 * Create a new instance of an entity in the world by using the entity name.
 * 
 * Parent Class: EntityList
 */
m.createEntityByName = "func_75620_a"
/** 
 * Limits the given angle to a upper and lower limit.
 * 
 * Parent Class: EntityMoveHelper
 */
m.limitAngle = "func_75639_a"
/** 
 * 
 * 
 * Parent Class: EntityMoveHelper
 */
m.isUpdating = "func_75640_a"
/** 
 * 
 * 
 * Parent Class: EntitySlime$SlimeMoveHelper
 */
m.onUpdateMoveHelper = "func_75641_c"
/** 
 * Sets the speed and location to move to
 * 
 * Parent Class: EntityMoveHelper
 */
m.setMoveTo = "func_75642_a"
/** 
 * Updates look
 * 
 * Parent Class: EntityLookHelper
 */
m.onUpdateLook = "func_75649_a"
/** 
 * Sets position to look at
 * 
 * Parent Class: EntityLookHelper
 */
m.setLookPosition = "func_75650_a"
/** 
 * Sets position to look at using entity
 * 
 * Parent Class: EntityLookHelper
 */
m.setLookPositionWithEntity = "func_75651_a"
/** 
 * Called to actually make the entity jump if isJumping is true.
 * 
 * Parent Class: EntityRabbit$RabbitJumpHelper
 */
m.doJump = "func_75661_b"
/** 
 * Update the Head and Body rendenring angles
 * 
 * Parent Class: EntityBodyHelper
 */
m.updateRenderAngles = "func_75664_a"
/** 
 * "Return the new angle2 such that the difference between angle1 and angle2 is lower than angleMax. Args : angle1
 * 
 * Parent Class: EntityBodyHelper
 */
m.computeAngleWithBound = "func_75665_a"
m.getObject = {}
/** 
 * 
 * 
 * Parent Class: DataWatcher$WatchableObject
 */
m.getObject.DataWatcher$WatchableObject = "func_75669_b"
/** 
 * 
 * 
 * Parent Class: RegistrySimple
 */
m.getObject.RegistrySimple = "func_82594_a"

/** 
 * 
 * 
 * Parent Class: DataWatcher$WatchableObject
 */
m.isWatched = "func_75670_d"
/** 
 * 
 * 
 * Parent Class: DataWatcher$WatchableObject
 */
m.setWatched = "func_75671_a"
/** 
 * 
 * 
 * Parent Class: DataWatcher$WatchableObject
 */
m.getDataValueId = "func_75672_a"
/** 
 * 
 * 
 * Parent Class: DataWatcher$WatchableObject
 */
m.setObject = "func_75673_a"
/** 
 * 
 * 
 * Parent Class: DataWatcher$WatchableObject
 */
m.getObjectType = "func_75674_c"
/** 
 * gets a watchable object and returns it as a Integer
 * 
 * Parent Class: DataWatcher
 */
m.getWatchableObjectInt = "func_75679_c"
/** 
 * gets a watchable object and returns it as a String
 * 
 * Parent Class: DataWatcher
 */
m.getWatchableObjectString = "func_75681_e"
/** 
 * "adds a new object to dataWatcher to watch
 * 
 * Parent Class: DataWatcher
 */
m.addObject = "func_75682_a"
/** 
 * gets the bytevalue of a watchable object
 * 
 * Parent Class: DataWatcher
 */
m.getWatchableObjectByte = "func_75683_a"
/** 
 * true if one or more object was changed
 * 
 * Parent Class: DataWatcher
 */
m.hasObjectChanged = "func_75684_a"
/** 
 * 
 * 
 * Parent Class: DataWatcher
 */
m.getAllWatched = "func_75685_c"
/** 
 * 
 * 
 * Parent Class: DataWatcher
 */
m.updateWatchedObjectsFromList = "func_75687_a"
/** 
 * 
 * 
 * Parent Class: DataWatcher
 */
m.getChanged = "func_75688_b"
/** 
 * "is threadsafe
 * 
 * Parent Class: DataWatcher
 */
m.getWatchedObject = "func_75691_i"
/** 
 * updates an already existing object
 * 
 * Parent Class: DataWatcher
 */
m.updateObject = "func_75692_b"
/** 
 * 
 * 
 * Parent Class: DataWatcher
 */
m.getWatchableObjectShort = "func_75693_b"
/** 
 * 
 * 
 * Parent Class: ThreadedFileIOBase
 */
m.waitForFinish = "func_75734_a"
/** 
 * threaded io
 * 
 * Parent Class: ThreadedFileIOBase
 */
m.queueIO = "func_75735_a"
/** 
 * Process the items that are in the queue
 * 
 * Parent Class: ThreadedFileIOBase
 */
m.processQueue = "func_75736_b"
/** 
 * "Loads an existing MapDataBase corresponding to the given String id from disk
 * 
 * Parent Class: MapStorage
 */
m.loadData = "func_75742_a"
/** 
 * Saves all dirty loaded MapDataBases to disk.
 * 
 * Parent Class: MapStorage
 */
m.saveAllData = "func_75744_a"
/** 
 * Loads the idCounts Map from the 'idcounts' file.
 * 
 * Parent Class: MapStorage
 */
m.loadIdCounts = "func_75746_b"
/** 
 * Saves the given MapDataBase to disk.
 * 
 * Parent Class: MapStorage
 */
m.saveData = "func_75747_a"
/** 
 * Reads the player data from disk into the specified PlayerEntityMP.
 * 
 * Parent Class: IPlayerFileData
 */
m.readPlayerData = "func_75752_b"
/** 
 * Saves the given World Info with the given NBTTagCompound as the Player.
 * 
 * Parent Class: SaveHandlerMP
 */
m.saveWorldInfoWithPlayer = "func_75755_a"
/** 
 * 
 * 
 * Parent Class: SaveHandlerMP
 */
m.getPlayerNBTManager = "func_75756_e"
/** 
 * Loads and returns the world info
 * 
 * Parent Class: SaveHandlerMP
 */
m.loadWorldInfo = "func_75757_d"
/** 
 * Gets the file location of the given map
 * 
 * Parent Class: SaveHandlerMP
 */
m.getMapFileFromName = "func_75758_b"
/** 
 * Returns the name of the directory where world information is saved.
 * 
 * Parent Class: SaveHandlerMP
 */
m.getWorldDirectoryName = "func_75760_g"
/** 
 * used to update level.dat from old format to MCRegion format
 * 
 * Parent Class: SaveHandlerMP
 */
m.saveWorldInfo = "func_75761_a"
/** 
 * initializes and returns the chunk loader for the specified world provider
 * 
 * Parent Class: SaveHandlerMP
 */
m.getChunkLoader = "func_75763_a"
/** 
 * Gets the File object corresponding to the base directory of this world.
 * 
 * Parent Class: SaveHandlerMP
 */
m.getWorldDirectory = "func_75765_b"
/** 
 * Creates a session lock file for this process
 * 
 * Parent Class: SaveHandler
 */
m.setSessionLock = "func_75766_h"
/** 
 * Determine if a specific AI Task should continue being executed.
 * 
 * Parent Class: EntityAITasks
 */
m.canContinue = "func_75773_a"
/** 
 * 
 * 
 * Parent Class: EntityAITasks
 */
m.onUpdateTasks = "func_75774_a"
/** 
 * "Determine if a specific AI Task can be executed
 * 
 * Parent Class: EntityAITasks
 */
m.canUse = "func_75775_b"
/** 
 * "Add a now AITask. Args : priority
 * 
 * Parent Class: EntityAITasks
 */
m.addTask = "func_75776_a"
/** 
 * Returns whether two EntityAITaskEntries can be executed concurrently
 * 
 * Parent Class: EntityAITasks
 */
m.areTasksCompatible = "func_75777_a"
/** 
 * @return {@code true} if cheats are enabled for this world
 * 
 * Parent Class: SaveFormatComparator
 */
m.getCheatsEnabled = "func_75783_h"
m.getLastTimePlayed = {}
/** 
 * 
 * 
 * Parent Class: SaveFormatComparator
 */
m.getLastTimePlayed.SaveFormatComparator = "func_75784_e"
/** 
 * Return the last time the player was in this world.
 * 
 * Parent Class: WorldInfo
 */
m.getLastTimePlayed.WorldInfo = "func_76057_l"

/** 
 * 
 * 
 * Parent Class: SaveFormatComparator
 */
m.requiresConversion = "func_75785_d"
/** 
 * return the file name
 * 
 * Parent Class: SaveFormatComparator
 */
m.getFileName = "func_75786_a"
m.isHardcoreModeEnabled = {}
/** 
 * 
 * 
 * Parent Class: SaveFormatComparator
 */
m.isHardcoreModeEnabled.SaveFormatComparator = "func_75789_g"
/** 
 * "Returns true if hardcore mode is enabled
 * 
 * Parent Class: WorldInfo
 */
m.isHardcoreModeEnabled.WorldInfo = "func_76093_s"

/** 
 * Gets the EnumGameType.
 * 
 * Parent Class: SaveFormatComparator
 */
m.getEnumGameType = "func_75790_f"
/** 
 * 
 * 
 * Parent Class: ISaveFormat
 */
m.getSaveList = "func_75799_b"
/** 
 * 
 * 
 * Parent Class: ISaveFormat
 */
m.flushCache = "func_75800_d"
/** 
 * gets if the map is old chunk saving (true) or McRegion (false)
 * 
 * Parent Class: ISaveFormat
 */
m.isOldMapFormat = "func_75801_b"
/** 
 * @args: Takes one argument - the name of the directory of the world to delete. @desc: Delete the world by deleting the associated directory recursively.
 *  
 * @param saveName The current save's name
 * 
 * Parent Class: ISaveFormat
 */
m.deleteWorldDirectory = "func_75802_e"
/** 
 * converts the map to mcRegion
 * 
 * Parent Class: ISaveFormat
 */
m.convertMapFormat = "func_75805_a"
/** 
 * Renames the world by storing the new name in level.dat. It does *not* rename the directory containing the world data.
 * 
 * Parent Class: ISaveFormat
 */
m.renameWorld = "func_75806_a"
/** 
 * @args: Takes one argument - the list of files and directories to delete. @desc: Deletes the files and directory listed in the list recursively.
 * 
 * Parent Class: SaveFormatOld
 */
m.deleteFiles = "func_75807_a"
/** 
 * par: filename for the level.dat_mcr backup
 * 
 * Parent Class: AnvilSaveConverter
 */
m.createFile = "func_75809_f"
/** 
 * "filters the files in the par1 directory
 * 
 * Parent Class: AnvilSaveConverter
 */
m.addRegionFilesToCollection = "func_75810_a"
/** 
 * "copies a 32x32 chunk set from par2File to par1File
 * 
 * Parent Class: AnvilSaveConverter
 */
m.convertChunks = "func_75811_a"
m.getSaveVersion = {}
/** 
 * 
 * 
 * Parent Class: AnvilSaveConverter
 */
m.getSaveVersion.AnvilSaveConverter = "func_75812_c"
/** 
 * Returns the save version of this world
 * 
 * Parent Class: WorldInfo
 */
m.getSaveVersion.WorldInfo = "func_76088_k"

/** 
 * 
 * 
 * Parent Class: AnvilSaveConverter
 */
m.convertFile = "func_75813_a"
/** 
 * Returns a boolean stating if the write was unsuccessful.
 * 
 * Parent Class: IThreadedFileIO
 */
m.writeNextIO = "func_75814_c"
/** 
 * 
 * 
 * Parent Class: AnvilChunkLoader
 */
m.saveChunk = "func_75816_a"
/** 
 * Called every World.tick()
 * 
 * Parent Class: AnvilChunkLoader
 */
m.chunkTick = "func_75817_a"
/** 
 * "Save extra data associated with this Chunk not normally saved during autosave
 * 
 * Parent Class: AnvilChunkLoader
 */
m.saveExtraChunkData = "func_75819_b"
/** 
 * "Writes the Chunk passed as an argument to the NBTTagCompound also passed
 * 
 * Parent Class: AnvilChunkLoader
 */
m.writeChunkToNBT = "func_75820_a"
/** 
 * Wraps readChunkFromNBT. Checks the coordinates and several NBT tags.
 * 
 * Parent Class: AnvilChunkLoader
 */
m.checkedReadChunkFromNBT = "func_75822_a"
/** 
 * Reads the data stored in the passed NBTTagCompound and creates a Chunk with that data in the passed World. Returns the created Chunk.
 * 
 * Parent Class: AnvilChunkLoader
 */
m.readChunkFromNBT = "func_75823_a"
/** 
 * 
 * 
 * Parent Class: AnvilChunkLoader
 */
m.addChunkToPending = "func_75824_a"
/** 
 * 
 * 
 * Parent Class: PathPoint
 */
m.makeHash = "func_75830_a"
/** 
 * Returns true if this point has already been assigned to a path
 * 
 * Parent Class: PathPoint
 */
m.isAssigned = "func_75831_a"
/** 
 * Returns the squared distance to another path point
 * 
 * Parent Class: PathPoint
 */
m.distanceToSquared = "func_75832_b"
/** 
 * Returns and removes the first point in the path
 * 
 * Parent Class: Path
 */
m.dequeue = "func_75844_c"
/** 
 * Returns true if this path contains no points
 * 
 * Parent Class: Path
 */
m.isPathEmpty = "func_75845_e"
/** 
 * Sorts a point to the right
 * 
 * Parent Class: Path
 */
m.sortForward = "func_75846_b"
/** 
 * Sorts a point to the left
 * 
 * Parent Class: Path
 */
m.sortBack = "func_75847_a"
/** 
 * Clears the path
 * 
 * Parent Class: Path
 */
m.clearPath = "func_75848_a"
/** 
 * Adds a point to the path
 * 
 * Parent Class: Path
 */
m.addPoint = "func_75849_a"
/** 
 * Changes the provided point's distance to target
 * 
 * Parent Class: Path
 */
m.changeDistance = "func_75850_a"
/** 
 * Returns a new PathEntity for a given start and end point
 * 
 * Parent Class: PathFinder
 */
m.createEntityPath = "func_75853_a"
/** 
 * returns the last PathPoint of the Array
 * 
 * Parent Class: PathEntity
 */
m.getFinalPathPoint = "func_75870_c"
/** 
 * 
 * 
 * Parent Class: PathEntity
 */
m.setCurrentPathLength = "func_75871_b"
/** 
 * 
 * 
 * Parent Class: PathEntity
 */
m.setCurrentPathIndex = "func_75872_c"
/** 
 * 
 * 
 * Parent Class: PathEntity
 */
m.getCurrentPathIndex = "func_75873_e"
/** 
 * 
 * 
 * Parent Class: PathEntity
 */
m.getCurrentPathLength = "func_75874_d"
/** 
 * Directs this path to the next point in its array
 * 
 * Parent Class: PathEntity
 */
m.incrementPathIndex = "func_75875_a"
/** 
 * Returns true if the EntityPath are the same. Non instance related equals.
 * 
 * Parent Class: PathEntity
 */
m.isSamePath = "func_75876_a"
/** 
 * "return the PathPoint located at the specified PathIndex
 * 
 * Parent Class: PathEntity
 */
m.getPathPointFromIndex = "func_75877_a"
/** 
 * Returns true if the final PathPoint in the PathEntity is equal to Vec3D coords.
 * 
 * Parent Class: PathEntity
 */
m.isDestinationSame = "func_75880_b"
/** 
 * Gets the vector of the PathPoint associated with the given index.
 * 
 * Parent Class: PathEntity
 */
m.getVectorFromIndex = "func_75881_a"
/** 
 * Encrypt or decrypt byte[] data using the specified key
 * 
 * Parent Class: CryptManager
 */
m.cipherOperation = "func_75885_a"
/** 
 * Creates the Cipher Instance.
 * 
 * Parent Class: CryptManager
 */
m.createTheCipherInstance = "func_75886_a"
/** 
 * Decrypt shared secret AES key using RSA private key
 * 
 * Parent Class: CryptManager
 */
m.decryptSharedKey = "func_75887_a"
/** 
 * Decrypt byte[] data with RSA private key
 * 
 * Parent Class: CryptManager
 */
m.decryptData = "func_75889_b"
/** 
 * Generate a new shared secret AES key from a secure random source
 * 
 * Parent Class: CryptManager
 */
m.createNewSharedKey = "func_75890_a"
/** 
 * Generates RSA KeyPair
 * 
 * Parent Class: CryptManager
 */
m.generateKeyPair = "func_75891_b"
/** 
 * Compute a message digest on arbitrary byte[] data
 * 
 * Parent Class: CryptManager
 */
m.digestOperation = "func_75893_a"
/** 
 * Encrypt byte[] data with RSA public key
 * 
 * Parent Class: CryptManager
 */
m.encryptData = "func_75894_a"
/** 
 * Compute a serverId hash for use by sendSessionRequest()
 * 
 * Parent Class: CryptManager
 */
m.getServerIdHash = "func_75895_a"
/** 
 * Create a new PublicKey from encoded X.509 data
 * 
 * Parent Class: CryptManager
 */
m.decodePublicKey = "func_75896_a"
/** 
 * "returns a LCG pseudo random number from [0
 * 
 * Parent Class: GenLayer
 */
m.nextInt = "func_75902_a"
/** 
 * "Initialize layer's current chunkSeed based on the local worldGenSeed and the (x
 * 
 * Parent Class: GenLayer
 */
m.initChunkSeed = "func_75903_a"
/** 
 * "Returns a list of integer values generated by this layer. These may be interpreted as temperatures
 * 
 * Parent Class: GenLayerZoom
 */
m.getInts = "func_75904_a"
/** 
 * Initialize layer's local worldGenSeed based on its own baseSeed and the world's global seed (passed in as an argument).
 * 
 * Parent Class: GenLayerRiverMix
 */
m.initWorldGenSeed = "func_75905_a"
/** 
 * "Magnify a layer. Parms are seed adjustment
 * 
 * Parent Class: GenLayerZoom
 */
m.magnify = "func_75915_a"
/** 
 * Initializes statistics related to craftable items. Is only called after both block and item stats have been initialized.
 * 
 * Parent Class: StatList
 */
m.initCraftableStats = "func_75918_d"
/** 
 * Forces all dual blocks to count for each other on the stats list
 * 
 * Parent Class: StatList
 */
m.replaceAllSimilarBlocks = "func_75924_a"
/** 
 * 
 * 
 * Parent Class: StatList
 */
m.initStats = "func_75925_c"
/** 
 * "Initializes the current stat as independent (i.e.
 * 
 * Parent Class: StatBase
 */
m.initIndependentStat = "func_75966_h"
/** 
 * Returns whether or not the StatBase-derived class is a statistic (running counter) or an achievement (one-shot).
 * 
 * Parent Class: StatBase
 */
m.isAchievement = "func_75967_d"
/** 
 * Register the stat into StatList.
 * 
 * Parent Class: StatBase
 */
m.registerStat = "func_75971_g"
/** 
 * "Special achievements have a 'spiked' (on normal texture pack) frame
 * 
 * Parent Class: Achievement
 */
m.getSpecial = "func_75984_f"
/** 
 * "Special achievements have a 'spiked' (on normal texture pack) frame
 * 
 * Parent Class: Achievement
 */
m.setSpecial = "func_75987_b"
/** 
 * Defines a string formatter for the achievement.
 *  
 * @param statStringFormatterIn 1.8.9
 * 
 * Parent Class: Achievement
 */
m.setStatStringFormatter = "func_75988_a"
m.containsItem = {}
/** 
 * Returns true if this hash table contains the specified item.
 * 
 * Parent Class: IntHashMap
 */
m.containsItem.IntHashMap = "func_76037_b"
/** 
 * 
 * 
 * Parent Class: LongHashMap
 */
m.containsItem.LongHashMap = "func_76161_b"

/** 
 * Adds a key and associated value to this map
 * 
 * Parent Class: IntHashMap
 */
m.addKey = "func_76038_a"
/** 
 * Adds an object to a slot
 * 
 * Parent Class: IntHashMap
 */
m.insert = "func_76040_a"
/** 
 * Returns the object associated to a key
 * 
 * Parent Class: IntHashMap
 */
m.lookup = "func_76041_a"
/** 
 * Computes the index of the slot for the hash and slot count passed in.
 * 
 * Parent Class: IntHashMap
 */
m.getSlotIndex = "func_76043_a"
/** 
 * Makes the passed in integer suitable for hashing by a number of shifts
 * 
 * Parent Class: IntHashMap
 */
m.computeHash = "func_76044_g"
/** 
 * Returns the internal entry for a key
 * 
 * Parent Class: IntHashMap
 */
m.lookupEntry = "func_76045_c"
/** 
 * Copies the hash slots to a new array
 * 
 * Parent Class: IntHashMap
 */
m.copyTo = "func_76048_a"
/** 
 * Removes the specified object from the map and returns it
 * 
 * Parent Class: IntHashMap
 */
m.removeObject = "func_76049_d"
/** 
 * Sets the y spawn position
 * 
 * Parent Class: WorldInfo
 */
m.setSpawnY = "func_76056_b"
/** 
 * Set the x spawn position to the passed in value
 * 
 * Parent Class: WorldInfo
 */
m.setSpawnX = "func_76058_a"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.updateTagCompound = "func_76064_a"
m.getTerrainType = {}
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.getTerrainType.WorldInfo = "func_76067_t"
/** 
 * 
 * 
 * Parent Class: WorldSettings
 */
m.getTerrainType.WorldSettings = "func_77165_h"

/** 
 * Sets whether it is thundering or not.
 * 
 * Parent Class: WorldInfo
 */
m.setThundering = "func_76069_a"
/** 
 * Returns true if the World is initialized.
 * 
 * Parent Class: WorldInfo
 */
m.isInitialized = "func_76070_v"
/** 
 * Returns the number of ticks until next thunderbolt.
 * 
 * Parent Class: WorldInfo
 */
m.getThunderTime = "func_76071_n"
/** 
 * Returns the player's NBTTagCompound to be loaded
 * 
 * Parent Class: WorldInfo
 */
m.getPlayerNBTTagCompound = "func_76072_h"
/** 
 * Returns the z spawn position
 * 
 * Parent Class: WorldInfo
 */
m.getSpawnZ = "func_76074_e"
/** 
 * Return the Y axis spawning point of the player.
 * 
 * Parent Class: WorldInfo
 */
m.getSpawnY = "func_76075_d"
/** 
 * Sets the save version of the world
 * 
 * Parent Class: WorldInfo
 */
m.setSaveVersion = "func_76078_e"
/** 
 * Returns the x spawn position
 * 
 * Parent Class: WorldInfo
 */
m.getSpawnX = "func_76079_c"
/** 
 * Sets the number of ticks until rain.
 * 
 * Parent Class: WorldInfo
 */
m.setRainTime = "func_76080_g"
/** 
 * "Creates a new NBTTagCompound for the world
 * 
 * Parent Class: WorldInfo
 */
m.cloneNBTCompound = "func_76082_a"
/** 
 * Return the number of ticks until rain.
 * 
 * Parent Class: WorldInfo
 */
m.getRainTime = "func_76083_p"
/** 
 * Sets whether it is raining or not.
 * 
 * Parent Class: WorldInfo
 */
m.setRaining = "func_76084_b"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.setTerrainType = "func_76085_a"
m.areCommandsAllowed = {}
/** 
 * Returns true if commands are allowed on this World.
 * 
 * Parent Class: WorldInfo
 */
m.areCommandsAllowed.WorldInfo = "func_76086_u"
/** 
 * Returns true if Commands (cheats) are allowed.
 * 
 * Parent Class: WorldSettings
 */
m.areCommandsAllowed.WorldSettings = "func_77163_i"

/** 
 * Set the z spawn position to the passed in value
 * 
 * Parent Class: WorldInfo
 */
m.setSpawnZ = "func_76087_c"
m.isMapFeaturesEnabled = {}
/** 
 * Get whether the map features (e.g. strongholds) generation is enabled or disabled.
 * 
 * Parent Class: WorldInfo
 */
m.isMapFeaturesEnabled.WorldInfo = "func_76089_r"
/** 
 * Get whether the map features (e.g. strongholds) generation is enabled or disabled.
 * 
 * Parent Class: WorldSettings
 */
m.isMapFeaturesEnabled.WorldSettings = "func_77164_g"

/** 
 * Defines the number of ticks until next thunderbolt.
 * 
 * Parent Class: WorldInfo
 */
m.setThunderTime = "func_76090_f"
/** 
 * Sets the initialization status of the World.
 * 
 * Parent Class: WorldInfo
 */
m.setServerInitialized = "func_76091_d"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.ceiling_float_int = "func_76123_f"
/** 
 * Long version of floor_double
 * 
 * Parent Class: MathHelper
 */
m.floor_double_long = "func_76124_d"
/** 
 * "Returns the value of the first parameter
 * 
 * Parent Class: MathHelper
 */
m.clamp_int = "func_76125_a"
/** 
 * sin looked up in a table
 * 
 * Parent Class: MathHelper
 */
m.sin = "func_76126_a"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.average = "func_76127_a"
/** 
 * Returns the greatest integer less than or equal to the double argument
 * 
 * Parent Class: MathHelper
 */
m.floor_double = "func_76128_c"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.sqrt_float = "func_76129_c"
/** 
 * Returns the unsigned value of an int.
 * 
 * Parent Class: MathHelper
 */
m.abs_int = "func_76130_a"
/** 
 * "Returns the value of the first parameter
 * 
 * Parent Class: MathHelper
 */
m.clamp_float = "func_76131_a"
/** 
 * Maximum of the absolute value of two numbers.
 * 
 * Parent Class: MathHelper
 */
m.abs_max = "func_76132_a"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.sqrt_double = "func_76133_a"
/** 
 * cos looked up in the sin table with the appropriate offset
 * 
 * Parent Class: MathHelper
 */
m.cos = "func_76134_b"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.abs = "func_76135_e"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.getRandomIntegerInRange = "func_76136_a"
/** 
 * "Buckets an integer with specifed bucket sizes.  Args: i
 * 
 * Parent Class: MathHelper
 */
m.bucketInt = "func_76137_a"
/** 
 * "the angle is reduced to an angle between -180 and +180 by mod
 * 
 * Parent Class: MathHelper
 */
m.wrapAngleTo180_double = "func_76138_g"
/** 
 * "returns par0 cast as an int
 * 
 * Parent Class: MathHelper
 */
m.truncateDoubleToInt = "func_76140_b"
/** 
 * Returns the greatest integer less than or equal to the float argument
 * 
 * Parent Class: MathHelper
 */
m.floor_float = "func_76141_d"
/** 
 * "the angle is reduced to an angle between -180 and +180 by mod
 * 
 * Parent Class: MathHelper
 */
m.wrapAngleTo180_float = "func_76142_g"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.ceiling_double_int = "func_76143_f"
/** 
 * removes the key from the hash linked list
 * 
 * Parent Class: LongHashMap
 */
m.removeKey = "func_76152_e"
/** 
 * resizes the table
 * 
 * Parent Class: LongHashMap
 */
m.resizeTable = "func_76153_b"
/** 
 * copies the hash table to the specified array
 * 
 * Parent Class: LongHashMap
 */
m.copyHashTableTo = "func_76154_a"
/** 
 * returns the hashed key given the original key
 * 
 * Parent Class: LongHashMap
 */
m.getHashedKey = "func_76155_g"
/** 
 * creates the key in the hash table
 * 
 * Parent Class: LongHashMap
 */
m.createKey = "func_76156_a"
/** 
 * the hash function
 * 
 * Parent Class: LongHashMap
 */
m.hash = "func_76157_a"
/** 
 * gets the index in the hash given the array length and the hashed key
 * 
 * Parent Class: LongHashMap
 */
m.getHashIndex = "func_76158_a"
/** 
 * calls the removeKey method and returns removed object
 * 
 * Parent Class: LongHashMap
 */
m.remove = "func_76159_d"
/** 
 * 
 * 
 * Parent Class: LongHashMap
 */
m.getNumHashElements = "func_76162_a"
/** 
 * get the value from the map given the key
 * 
 * Parent Class: LongHashMap
 */
m.getValueByKey = "func_76164_a"
/** 
 * Builds an encoded HTTP POST content string from a string map
 * 
 * Parent Class: HttpUtil
 */
m.buildPostString = "func_76179_a"
/** 
 * 
 * 
 * Parent Class: HttpUtil
 */
m.getSuitableLanPort = "func_76181_a"
/** 
 * "Sets the dirty state of this MapDataBase
 * 
 * Parent Class: WorldSavedData
 */
m.setDirty = "func_76186_a"
/** 
 * Whether this MapDataBase needs saving to disk.
 * 
 * Parent Class: WorldSavedData
 */
m.isDirty = "func_76188_b"
/** 
 * Adds the player passed to the list of visible players and checks to see which players are visible
 * 
 * Parent Class: MapData
 */
m.updateVisiblePlayers = "func_76191_a"
/** 
 * Returns if the block can burn or not.
 * 
 * Parent Class: Material
 */
m.getCanBurn = "func_76217_h"
/** 
 * Indicate if the material is opaque
 * 
 * Parent Class: Material
 */
m.isOpaque = "func_76218_k"
/** 
 * "This type of material can't be pushed
 * 
 * Parent Class: Material
 */
m.setNoPushMobility = "func_76219_n"
/** 
 * Returns true if the block is a considered solid. This is true by default.
 * 
 * Parent Class: MaterialPortal
 */
m.isSolid = "func_76220_a"
/** 
 * Makes blocks with this material require the correct tool to be harvested.
 * 
 * Parent Class: Material
 */
m.setRequiresTool = "func_76221_f"
/** 
 * Marks the material as translucent
 * 
 * Parent Class: Material
 */
m.setTranslucent = "func_76223_p"
/** 
 * Returns if blocks of these materials are liquids.
 * 
 * Parent Class: Material
 */
m.isLiquid = "func_76224_d"
/** 
 * "This type of material can't be pushed
 * 
 * Parent Class: Material
 */
m.setImmovableMobility = "func_76225_o"
/** 
 * Set the canBurn bool to True and return the current object.
 * 
 * Parent Class: Material
 */
m.setBurning = "func_76226_g"
/** 
 * "Returns the mobility information of the material
 * 
 * Parent Class: Material
 */
m.getMaterialMobility = "func_76227_m"
/** 
 * Will prevent grass from growing on dirt underneath and kill any grass below it if it returns true
 * 
 * Parent Class: MaterialPortal
 */
m.blocksLight = "func_76228_b"
/** 
 * Returns true if the material can be harvested without a tool (or with the wrong tool)
 * 
 * Parent Class: Material
 */
m.isToolNotRequired = "func_76229_l"
/** 
 * Returns if this material is considered solid or not
 * 
 * Parent Class: MaterialPortal
 */
m.blocksMovement = "func_76230_c"
/** 
 * Sets {@link #replaceable} to true.
 * 
 * Parent Class: Material
 */
m.setReplaceable = "func_76231_i"
/** 
 * Bouncer function to the main one with some default arguments.
 * 
 * Parent Class: NoiseGeneratorOctaves
 */
m.generateNoiseOctaves = "func_76305_a"
/** 
 * noiseArray should be xSize*ySize*zSize in size
 * 
 * Parent Class: NoiseGeneratorImproved
 */
m.populateNoiseArray = "func_76308_a"
/** 
 * 
 * 
 * Parent Class: NoiseGeneratorImproved
 */
m.grad = "func_76310_a"
/** 
 * 
 * 
 * Parent Class: NoiseGeneratorImproved
 */
m.lerp = "func_76311_b"
/** 
 * Called by InventoryBasic.onInventoryChanged() on a array that is never filled.
 * 
 * Parent Class: EntityHorse
 */
m.onInventoryChanged = "func_76316_a"
/** 
 * Clear profiling.
 * 
 * Parent Class: Profiler
 */
m.clearProfiling = "func_76317_a"
/** 
 * End current section and start a new section
 * 
 * Parent Class: Profiler
 */
m.endStartSection = "func_76318_c"
/** 
 * End section
 * 
 * Parent Class: Profiler
 */
m.endSection = "func_76319_b"
/** 
 * Start section
 * 
 * Parent Class: Profiler
 */
m.startSection = "func_76320_a"
/** 
 * Get profiling data
 *  
 * @param profilerName The profiler's name
 * 
 * Parent Class: Profiler
 */
m.getProfilingData = "func_76321_b"
/** 
 * 
 * 
 * Parent Class: Profiler
 */
m.getNameOfLastSection = "func_76322_c"
/** 
 * Smooths mouse input
 * 
 * Parent Class: MouseFilter
 */
m.smooth = "func_76333_a"
/** 
 * "Returns the time elapsed for the given number of ticks
 * 
 * Parent Class: StringUtils
 */
m.ticksToElapsedTime = "func_76337_a"
/** 
 * 
 * 
 * Parent Class: StringUtils
 */
m.stripControlCodes = "func_76338_a"
/** 
 * Get the second Object in the Tuple
 * 
 * Parent Class: Tuple
 */
m.getSecond = "func_76340_b"
/** 
 * Get the first Object in the Tuple
 * 
 * Parent Class: Tuple
 */
m.getFirst = "func_76341_a"
/** 
 * How much satiate(food) is consumed by this DamageSource
 * 
 * Parent Class: DamageSource
 */
m.getHungerDamage = "func_76345_d"
/** 
 * Returns true if the damage is fire based.
 * 
 * Parent Class: DamageSource
 */
m.isFireDamage = "func_76347_k"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.setDamageBypassesArmor = "func_76348_h"
/** 
 * Define the damage type as projectile based.
 * 
 * Parent Class: DamageSource
 */
m.setProjectile = "func_76349_b"
/** 
 * Return whether this damage source will have its damage amount scaled based on the current difficulty.
 * 
 * Parent Class: EntityDamageSource
 */
m.isDifficultyScaled = "func_76350_n"
/** 
 * Set whether this damage source will have its damage amount scaled based on the current difficulty.
 * 
 * Parent Class: DamageSource
 */
m.setDifficultyScaled = "func_76351_m"
/** 
 * Returns true if the damage is projectile based.
 * 
 * Parent Class: DamageSource
 */
m.isProjectile = "func_76352_a"
/** 
 * returns EntityDamageSourceIndirect of an arrow
 *  
 * @param indirectEntityIn The entity that shoot the arrow
 * 
 * Parent Class: DamageSource
 */
m.causeArrowDamage = "func_76353_a"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.causeIndirectMagicDamage = "func_76354_b"
/** 
 * Return the name of damage type.
 * 
 * Parent Class: DamageSource
 */
m.getDamageType = "func_76355_l"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.causeThrownDamage = "func_76356_a"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.canHarmInCreative = "func_76357_e"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.causeMobDamage = "func_76358_a"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.setDamageAllowedInCreativeMode = "func_76359_i"
/** 
 * Define the damage type as fire based.
 * 
 * Parent Class: DamageSource
 */
m.setFireDamage = "func_76361_j"
/** 
 * returns EntityDamageSourceIndirect of a fireball
 *  
 * @param indirectEntityIn The entity that shoot the fireball
 * 
 * Parent Class: DamageSource
 */
m.causeFireballDamage = "func_76362_a"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.isUnblockable = "func_76363_c"
/** 
 * 
 * 
 * Parent Class: EntityDamageSourceIndirect
 */
m.getSourceOfDamage = "func_76364_f"
/** 
 * returns an EntityDamageSource of type player
 * 
 * Parent Class: DamageSource
 */
m.causePlayerDamage = "func_76365_a"
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.getEffectiveness = "func_76388_g"
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.getDurationString = "func_76389_a"
/** 
 * Set the potion name.
 * 
 * Parent Class: Potion
 */
m.setPotionName = "func_76390_b"
/** 
 * Returns the index for the icon to display when the potion is active.
 * 
 * Parent Class: Potion
 */
m.getStatusIconIndex = "func_76392_e"
m.performEffect = {}
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.performEffect.Potion = "func_76394_a"
/** 
 * 
 * 
 * Parent Class: PotionEffect
 */
m.performEffect.PotionEffect = "func_76457_b"

/** 
 * 
 * 
 * Parent Class: Potion
 */
m.isUsable = "func_76395_i"
/** 
 * This method returns true if the potion effect is bad - negative - for the entity.
 * 
 * Parent Class: Potion
 */
m.isBadEffect = "func_76398_f"
/** 
 * Sets the index for the icon displayed in the player's inventory when the status is active.
 * 
 * Parent Class: Potion
 */
m.setIconIndex = "func_76399_b"
/** 
 * Returns true if the potion has a associated status icon to display in then inventory when active.
 * 
 * Parent Class: Potion
 */
m.hasStatusIcon = "func_76400_d"
m.getLiquidColor = {}
/** 
 * Returns the color of the potion liquid.
 * 
 * Parent Class: Potion
 */
m.getLiquidColor.Potion = "func_76401_j"
/** 
 * "Given a potion data value
 * 
 * Parent Class: PotionHelper
 */
m.getLiquidColor.PotionHelper = "func_77915_a"

/** 
 * Returns true if the potion has an instant effect instead of a continuous one (eg Harming)
 * 
 * Parent Class: Potion
 */
m.isInstant = "func_76403_b"
/** 
 * 
 * 
 * Parent Class: Potion
 */
m.setEffectiveness = "func_76404_a"
/** 
 * 
 * 
 * Parent Class: IntCache
 */
m.getIntCache = "func_76445_a"
/** 
 * Mark all pre-allocated arrays as available for re-use by moving them to the appropriate free lists.
 * 
 * Parent Class: IntCache
 */
m.resetIntCache = "func_76446_a"
/** 
 * merges the input PotionEffect into this one if this.amplifier <= tomerge.amplifier. The duration in the supplied potion effect is assumed to be greater.
 * 
 * Parent Class: PotionEffect
 */
m.combine = "func_76452_a"
/** 
 * 
 * 
 * Parent Class: PotionEffect
 */
m.getEffectName = "func_76453_d"
/** 
 * 
 * 
 * Parent Class: PotionEffect
 */
m.deincrementDuration = "func_76454_e"
/** 
 * Retrieve the ID of the potion this effect matches.
 * 
 * Parent Class: PotionEffect
 */
m.getPotionID = "func_76456_a"
/** 
 * Note issuing start multiple times is not an error.
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.startSnooper = "func_76463_a"
/** 
 * 
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.getCurrentStats = "func_76465_c"
/** 
 * 
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.addJvmArgsToSnooper = "func_76467_g"
/** 
 * 
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.isSnooperRunning = "func_76468_d"
/** 
 * 
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.stopSnooper = "func_76470_e"
/** 
 * 
 * 
 * Parent Class: PlayerUsageSnooper
 */
m.addMemoryStatsToSnooper = "func_76471_b"
/** 
 * "Generates a list of leaf nodes for the tree
 * 
 * Parent Class: WorldGenBigTree
 */
m.generateLeafNodeList = "func_76489_a"
/** 
 * Gets the rough size of a layer of the tree.
 * 
 * Parent Class: WorldGenBigTree
 */
m.layerSize = "func_76490_a"
/** 
 * Indicates whether or not a leaf node requires additional wood to be added to preserve integrity.
 * 
 * Parent Class: WorldGenBigTree
 */
m.leafNodeNeedsBase = "func_76493_c"
/** 
 * 
 * 
 * Parent Class: WorldGenBigTree
 */
m.leafSize = "func_76495_b"
/** 
 * "Returns a boolean indicating whether or not the current location for the tree
 * 
 * Parent Class: WorldGenBigTree
 */
m.validTreeLocation = "func_76497_e"
/** 
 * Randomly decides which spawner to use in a dungeon
 * 
 * Parent Class: WorldGenDungeons
 */
m.pickMobSpawner = "func_76543_b"
/** 
 * "Returns an input stream for the specified chunk. Args: worldDir
 * 
 * Parent Class: RegionFileCache
 */
m.getChunkInputStream = "func_76549_c"
/** 
 * 
 * 
 * Parent Class: RegionFileCache
 */
m.createOrLoadRegionFile = "func_76550_a"
/** 
 * clears region file references
 * 
 * Parent Class: RegionFileCache
 */
m.clearRegionFileReferences = "func_76551_a"
/** 
 * "Returns an output stream for the specified chunk. Args: worldDir
 * 
 * Parent Class: RegionFileCache
 */
m.getChunkOutputStream = "func_76552_d"
/** 
 * Returns a new chunk provider which generates chunks for this world
 * 
 * Parent Class: WorldProviderEnd
 */
m.createChunkGenerator = "func_76555_c"
/** 
 * Creates the light to brightness table
 * 
 * Parent Class: WorldProviderHell
 */
m.generateLightBrightnessTable = "func_76556_a"
/** 
 * "associate an existing world with a World provider
 * 
 * Parent Class: WorldProvider
 */
m.registerWorld = "func_76558_a"
/** 
 * Returns array with sunrise/sunset colors
 * 
 * Parent Class: WorldProviderEnd
 */
m.calcSunriseSunsetColors = "func_76560_a"
/** 
 * 
 * 
 * Parent Class: WorldProviderEnd
 */
m.isSkyColored = "func_76561_g"
/** 
 * Calculates the angle of sun and moon in the sky relative to a specified time (usually worldTime)
 * 
 * Parent Class: WorldProviderEnd
 */
m.calculateCelestialAngle = "func_76563_a"
/** 
 * "Returns a double value representing the Y value relative to the top of the map at which void fog is at its maximum. The default factor of 0.03125 relative to 256
 * 
 * Parent Class: WorldProvider
 */
m.getVoidFogYFactor = "func_76565_k"
/** 
 * "Will check if the x
 * 
 * Parent Class: WorldProviderEnd
 */
m.canCoordinateBeSpawn = "func_76566_a"
/** 
 * "True if the player can respawn in this dimension (true = overworld
 * 
 * Parent Class: WorldProviderEnd
 */
m.canRespawnHere = "func_76567_e"
/** 
 * "Returns true if the given X
 * 
 * Parent Class: WorldProviderEnd
 */
m.doesXZShowFog = "func_76568_b"
/** 
 * "Returns 'true' if in the ""main surface world""
 * 
 * Parent Class: WorldProviderEnd
 */
m.isSurfaceWorld = "func_76569_d"
/** 
 * 
 * 
 * Parent Class: WorldProvider
 */
m.getProviderForDimension = "func_76570_a"
/** 
 * the y level at which clouds are rendered.
 * 
 * Parent Class: WorldProviderEnd
 */
m.getCloudHeight = "func_76571_f"
/** 
 * creates a new world chunk manager for WorldProvider
 * 
 * Parent Class: WorldProviderEnd
 */
m.registerWorldChunkManager = "func_76572_b"
/** 
 * Returns the ExtendedBlockStorage array for this Chunk.
 * 
 * Parent Class: Chunk
 */
m.getBlockStorageArray = "func_76587_i"
/** 
 * Generates the height map for a chunk from scratch
 * 
 * Parent Class: Chunk
 */
m.generateHeightMap = "func_76590_a"
/** 
 * "Called once-per-chunk-per-tick
 * 
 * Parent Class: Chunk
 */
m.enqueueRelightChecks = "func_76594_o"
/** 
 * Propagates a given sky-visible block's light value downward and upward to neighboring blocks as necessary.
 * 
 * Parent Class: Chunk
 */
m.propagateSkylightOcclusion = "func_76595_e"
/** 
 * Checks the height of a block next to a sky-visible block and schedules a lighting update as necessary.
 * 
 * Parent Class: Chunk
 */
m.checkSkylightNeighborHeight = "func_76599_g"
/** 
 * Checks whether the chunk is at the X/Z location specified
 * 
 * Parent Class: Chunk
 */
m.isAtLocation = "func_76600_a"
/** 
 * Returns true if this Chunk needs to be saved
 * 
 * Parent Class: Chunk
 */
m.needsSaving = "func_76601_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.setStorageArrays = "func_76602_a"
/** 
 * Generates the initial skylight map for the chunk upon generation or load.
 * 
 * Parent Class: Chunk
 */
m.generateSkylightMap = "func_76603_b"
/** 
 * Returns an array containing a 16x16 mapping on the X/Z of block positions in this Chunk to biome IDs.
 * 
 * Parent Class: Chunk
 */
m.getBiomeArray = "func_76605_m"
/** 
 * Returns whether the ExtendedBlockStorages containing levels (in blocks) from arg 1 to arg 2 are fully empty (true) or not (false).
 * 
 * Parent Class: Chunk
 */
m.getAreLevelsEmpty = "func_76606_c"
/** 
 * Removes entity at the specified index from the entity array.
 * 
 * Parent Class: Chunk
 */
m.removeEntityAtIndex = "func_76608_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.updateSkylightNeighborHeight = "func_76609_d"
/** 
 * "Returns the value in the height map at this x
 * 
 * Parent Class: Chunk
 */
m.getHeightValue = "func_76611_b"
/** 
 * Adds an entity to the chunk. Args: entity
 * 
 * Parent Class: Chunk
 */
m.addEntity = "func_76612_a"
/** 
 * Resets the relight check index to 0 for this Chunk.
 * 
 * Parent Class: Chunk
 */
m.resetRelightChecks = "func_76613_n"
/** 
 * Initiates the recalculation of both the block-light and sky-light for a given block inside a chunk.
 * 
 * Parent Class: Chunk
 */
m.relightBlock = "func_76615_h"
/** 
 * Accepts a 256-entry array that contains a 16x16 mapping on the X/Z plane of block positions in this Chunk to biome IDs.
 * 
 * Parent Class: Chunk
 */
m.setBiomeArray = "func_76616_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
m.getRandomWithSeed = "func_76617_a"
/** 
 * Called when this Chunk is unloaded by the ChunkProvider
 * 
 * Parent Class: Chunk
 */
m.onChunkUnload = "func_76623_d"
/** 
 * Returns the topmost ExtendedBlockStorage instance for this Chunk that actually contains a block.
 * 
 * Parent Class: Chunk
 */
m.getTopFilledSegment = "func_76625_h"
/** 
 * Sets the isModified flag for this Chunk
 * 
 * Parent Class: Chunk
 */
m.setChunkModified = "func_76630_e"
/** 
 * Gets a ChunkCoordIntPair representing the Chunk's position.
 * 
 * Parent Class: Chunk
 */
m.getChunkCoordIntPair = "func_76632_l"
/** 
 * Sets the saved Sky-light value in the extended block storage structure.
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.setExtSkylightValue = "func_76657_c"
/** 
 * Sets the NibbleArray instance used for Block-light values in this particular storage block.
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.setBlocklightArray = "func_76659_c"
/** 
 * Returns the NibbleArray instance containing Block-light data.
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.getBlocklightArray = "func_76661_k"
/** 
 * Returns the Y location of this ExtendedBlockStorage.
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.getYLocation = "func_76662_d"
/** 
 * Returns the metadata associated with the block at the given coordinates in this ExtendedBlockStorage.
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.getExtBlockMetadata = "func_76665_b"
/** 
 * Sets the NibbleArray instance used for Sky-light values in this particular storage block.
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.setSkylightArray = "func_76666_d"
/** 
 * Gets the saved Sky-light value in the extended block storage structure.
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.getExtSkylightValue = "func_76670_c"
/** 
 * Returns the NibbleArray instance containing Sky-light data.
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.getSkylightArray = "func_76671_l"
/** 
 * 
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.removeInvalidBlocks = "func_76672_e"
/** 
 * Gets the saved Block-light value in the extended block storage structure.
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.getExtBlocklightValue = "func_76674_d"
/** 
 * "Returns whether or not this block storage's Chunk will require random ticking
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.getNeedsRandomTick = "func_76675_b"
/** 
 * Sets the saved Block-light value in the extended block storage structure.
 * 
 * Parent Class: ExtendedBlockStorage
 */
m.setExtBlocklightValue = "func_76677_d"
/** 
 * 
 * 
 * Parent Class: ChunkLoader
 */
m.convertToAnvilFormat = "func_76690_a"
/** 
 * Returns an uncompressed chunk stream from the region file.
 * 
 * Parent Class: RegionFile
 */
m.getChunkDataInputStream = "func_76704_a"
/** 
 * "args: x
 * 
 * Parent Class: RegionFile
 */
m.outOfBounds = "func_76705_d"
/** 
 * close this RegionFile and prevent further writes
 * 
 * Parent Class: RegionFile
 */
m.close = "func_76708_c"
/** 
 * "args: x
 * 
 * Parent Class: RegionFile
 */
m.isChunkSaved = "func_76709_c"
/** 
 * Returns an output stream used to write chunk data. Data is on disk when the returned stream is closed.
 * 
 * Parent Class: RegionFile
 */
m.getChunkDataOutputStream = "func_76710_b"
/** 
 * "args: x
 * 
 * Parent Class: RegionFile
 */
m.setOffset = "func_76711_a"
/** 
 * "args: x
 * 
 * Parent Class: RegionFile
 */
m.setChunkTimestamp = "func_76713_b"
/** 
 * Gets a floating point representation of this biome's rainfall
 * 
 * Parent Class: BiomeGenBase
 */
m.getFloatRainfall = "func_76727_i"
/** 
 * Allocate a new BiomeDecorator for this BiomeGenBase
 * 
 * Parent Class: BiomeGenBase
 */
m.createBiomeDecorator = "func_76729_a"
/** 
 * Gets a WorldGen appropriate for this biome.
 * 
 * Parent Class: BiomeGenTaiga
 */
m.getRandomWorldGenForGrass = "func_76730_b"
/** 
 * "takes temperature
 * 
 * Parent Class: BiomeGenEnd
 */
m.getSkyColorByTemp = "func_76731_a"
/** 
 * Sets the temperature and rainfall of this biome.
 * 
 * Parent Class: BiomeGenBase
 */
m.setTemperatureRainfall = "func_76732_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenBase
 */
m.setFillerBlockMetadata = "func_76733_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenBase
 */
m.setBiomeName = "func_76735_a"
/** 
 * Checks to see if the rainfall level of the biome is extremely high
 * 
 * Parent Class: BiomeGenBase
 */
m.isHighHumidity = "func_76736_e"
/** 
 * Check if rain can occur in biome
 * 
 * Parent Class: BiomeGenBase
 */
m.canRain = "func_76738_d"
/** 
 * returns the chance a creature has to spawn.
 * 
 * Parent Class: BiomeGenMutated
 */
m.getSpawningChance = "func_76741_f"
/** 
 * sets enableSnow to true during biome initialization. returns BiomeGenBase.
 * 
 * Parent Class: BiomeGenBase
 */
m.setEnableSnow = "func_76742_b"
/** 
 * Gets an integer representation of this biome's rainfall
 * 
 * Parent Class: BiomeGenBase
 */
m.getIntRainfall = "func_76744_g"
/** 
 * Disable the rain for the biome.
 * 
 * Parent Class: BiomeGenBase
 */
m.setDisableRain = "func_76745_m"
/** 
 * Returns true if the biome have snowfall instead a normal rain.
 * 
 * Parent Class: BiomeGenBase
 */
m.getEnableSnow = "func_76746_c"
/** 
 * Returns the correspondent list of the EnumCreatureType informed.
 * 
 * Parent Class: BiomeGenBase
 */
m.getSpawnableList = "func_76747_a"
/** 
 * Standard ore generation helper. Generates Lapis Lazuli.
 * 
 * Parent Class: BiomeDecorator
 */
m.genStandardOre2 = "func_76793_b"
/** 
 * Standard ore generation helper. Generates most ores.
 * 
 * Parent Class: BiomeDecorator
 */
m.genStandardOre1 = "func_76795_a"
/** 
 * Generates ores in the current chunk
 * 
 * Parent Class: BiomeDecorator
 */
m.generateOres = "func_76797_b"
m.cleanupCache = {}
/** 
 * Removes BiomeCacheBlocks from this cache that haven't been accessed in at least 30 seconds.
 * 
 * Parent Class: BiomeCache
 */
m.cleanupCache.BiomeCache = "func_76838_a"
/** 
 * Calls the WorldChunkManager's biomeCache.cleanupCache()
 * 
 * Parent Class: WorldChunkManager
 */
m.cleanupCache.WorldChunkManager = "func_76938_b"

/** 
 * Returns the array of cached biome types in the BiomeCacheBlock at the given location.
 * 
 * Parent Class: BiomeCache
 */
m.getCachedBiomes = "func_76839_e"
/** 
 * Returns a biome cache block at location specified.
 * 
 * Parent Class: BiomeCache
 */
m.getBiomeCacheBlock = "func_76840_a"
m.getBiomeGenAt = {}
/** 
 * "Returns the BiomeGenBase related to the x
 * 
 * Parent Class: BiomeCache$Block
 */
m.getBiomeGenAt.BiomeCache$Block = "func_76885_a"
/** 
 * "Return a list of biomes for the specified blocks. Args: listToReuse
 * 
 * Parent Class: WorldChunkManagerHell
 */
m.getBiomeGenAt.WorldChunkManagerHell = "func_76931_a"

/** 
 * Gets the list of valid biomes for the player to spawn in.
 * 
 * Parent Class: WorldChunkManager
 */
m.getBiomesToSpawnIn = "func_76932_a"
/** 
 * "Returns biomes to use for the blocks and loads the other data like temperature and humidity onto the WorldChunkManager Args: oldBiomeList
 * 
 * Parent Class: WorldChunkManagerHell
 */
m.loadBlockGeneratorData = "func_76933_b"
/** 
 * "Returns a list of rainfall values for the specified blocks. Args: listToReuse
 * 
 * Parent Class: WorldChunkManagerHell
 */
m.getRainfall = "func_76936_a"
/** 
 * Returns an array of biomes for the location input.
 * 
 * Parent Class: WorldChunkManagerHell
 */
m.getBiomesForGeneration = "func_76937_a"
/** 
 * Return an adjusted version of a given temperature based on the y height
 * 
 * Parent Class: WorldChunkManager
 */
m.getTemperatureAtHeight = "func_76939_a"
/** 
 * checks given Chunk's Biomes against List of allowed ones
 * 
 * Parent Class: WorldChunkManagerHell
 */
m.areBiomesViable = "func_76940_a"
/** 
 * "Renders the entity shadows at the position
 * 
 * Parent Class: Render
 */
m.renderShadow = "func_76975_c"
/** 
 * "Renders fire on top of the entity. Args: entity
 * 
 * Parent Class: Render
 */
m.renderEntityOnFire = "func_76977_a"
/** 
 * "Renders a white box with the bounds of the AABB translated by the offset. Args: aabb
 * 
 * Parent Class: Render
 */
m.renderOffsetAABB = "func_76978_a"
/** 
 * "Renders the entity's shadow and fire (if its on fire). Args: entity
 * 
 * Parent Class: Render
 */
m.doRenderShadowAndFire = "func_76979_b"
/** 
 * Returns the render manager's world object
 * 
 * Parent Class: Render
 */
m.getWorldFromRenderManager = "func_76982_b"
/** 
 * Returns the font renderer from the set render manager
 * 
 * Parent Class: Render
 */
m.getFontRendererFromRenderManager = "func_76983_a"
/** 
 * Renders the desired {@code T} type Entity.
 * 
 * Parent Class: RenderPlayer
 */
m.doRender = "func_76986_a"
/** 
 * 
 * 
 * Parent Class: RenderPainting
 */
m.renderPainting = "func_77010_a"
/** 
 * "Returns an ARGB int color back. Args: entityLiving
 * 
 * Parent Class: RendererLivingEntity
 */
m.getColorMultiplier = "func_77030_a"
/** 
 * "Returns a rotation angle that is inbetween two other rotation angles. par1 and par2 are the angles between which to interpolate
 * 
 * Parent Class: RendererLivingEntity
 */
m.interpolateRotation = "func_77034_a"
/** 
 * 
 * 
 * Parent Class: RenderSpider
 */
m.getDeathMaxRotation = "func_77037_a"
/** 
 * Sets a simple glTranslate on a LivingEntity.
 * 
 * Parent Class: RenderPlayer
 */
m.renderLivingAt = "func_77039_a"
/** 
 * "Allows the render to do any OpenGL state modifications necessary before the model is rendered. Args: entityLiving
 * 
 * Parent Class: RenderPlayer
 */
m.preRenderCallback = "func_77041_b"
/** 
 * 
 * 
 * Parent Class: RenderPlayer
 */
m.rotateCorpse = "func_77043_a"
/** 
 * Defines what float the third param in setRotationAngles of ModelBase is
 * 
 * Parent Class: RenderWolf
 */
m.handleRotationFloat = "func_77044_a"
/** 
 * "Sets canBeCreated to the provided value
 * 
 * Parent Class: WorldType
 */
m.setCanBeCreated = "func_77124_a"
/** 
 * Returns true if this world Type has a version associated with it.
 * 
 * Parent Class: WorldType
 */
m.isVersioned = "func_77125_e"
/** 
 * Gets whether this WorldType can be used to generate a new world.
 * 
 * Parent Class: WorldType
 */
m.getCanBeCreated = "func_77126_d"
/** 
 * 
 * 
 * Parent Class: WorldType
 */
m.getWorldTypeName = "func_77127_a"
/** 
 * Gets the translation key for the name of this world type.
 * 
 * Parent Class: WorldType
 */
m.getTranslateName = "func_77128_b"
/** 
 * Flags this world type as having an associated version.
 * 
 * Parent Class: WorldType
 */
m.setVersioned = "func_77129_f"
/** 
 * 
 * 
 * Parent Class: WorldType
 */
m.parseWorldType = "func_77130_a"
/** 
 * Returns generatorVersion.
 * 
 * Parent Class: WorldType
 */
m.getGeneratorVersion = "func_77131_c"
/** 
 * 
 * 
 * Parent Class: WorldType
 */
m.getWorldTypeForGeneratorVersion = "func_77132_a"
/** 
 * "Returns the game type with the specified name
 * 
 * Parent Class: WorldSettings$GameType
 */
m.getByName = "func_77142_a"
/** 
 * Returns true if this is the SURVIVAL or ADVENTURE game type
 * 
 * Parent Class: WorldSettings$GameType
 */
m.isSurvivalOrAdventure = "func_77144_e"
/** 
 * "Returns the game type with the specified ID
 * 
 * Parent Class: WorldSettings$GameType
 */
m.getByID = "func_77146_a"
/** 
 * Configures the player capabilities based on the game type
 * 
 * Parent Class: WorldSettings$GameType
 */
m.configurePlayerCapabilities = "func_77147_a"
/** 
 * "Returns true if hardcore mode is enabled
 * 
 * Parent Class: WorldSettings
 */
m.getHardcoreEnabled = "func_77158_f"
/** 
 * Enables the bonus chest.
 * 
 * Parent Class: WorldSettings
 */
m.enableBonusChest = "func_77159_a"
/** 
 * Gets the GameType by ID
 * 
 * Parent Class: WorldSettings
 */
m.getGameTypeById = "func_77161_a"
/** 
 * Enables Commands (cheats).
 * 
 * Parent Class: WorldSettings
 */
m.enableCommands = "func_77166_b"
/** 
 * Returns true if the Bonus Chest is enabled.
 * 
 * Parent Class: WorldSettings
 */
m.isBonusChestEnabled = "func_77167_c"
/** 
 * Sets the scheduled time for this tick entry
 * 
 * Parent Class: NextTickListEntry
 */
m.setScheduledTime = "func_77176_a"
/** 
 * Called during chunk generation to spawn initial creatures.
 * 
 * Parent Class: SpawnerAnimals
 */
m.performWorldGenSpawning = "func_77191_a"
/** 
 * "adds all chunks within the spawn radius of the players to eligibleChunksForSpawning. pars: the world
 * 
 * Parent Class: SpawnerAnimals
 */
m.findChunksForSpawning = "func_77192_a"
/** 
 * 
 * 
 * Parent Class: MerchantRecipeList
 */
m.readRecipiesFromTags = "func_77201_a"
/** 
 * 
 * 
 * Parent Class: MerchantRecipeList
 */
m.getRecipiesAsTags = "func_77202_a"
/** 
 * "can par1
 * 
 * Parent Class: MerchantRecipeList
 */
m.canRecipeBeUsed = "func_77203_a"
/** 
 * converts a chunk coordinate pair to an integer (suitable for hashing)
 * 
 * Parent Class: ChunkCoordIntPair
 */
m.chunkXZ2Int = "func_77272_a"
/** 
 * 
 * 
 * Parent Class: ChunkCoordIntPair
 */
m.getCenterXPos = "func_77273_a"
/** 
 * 
 * 
 * Parent Class: ChunkCoordIntPair
 */
m.getCenterZPosition = "func_77274_b"
/** 
 * 
 * 
 * Parent Class: Explosion
 */
m.getPlayerKnockbackMap = "func_77277_b"
/** 
 * Does the first part of the explosion (destroy blocks)
 * 
 * Parent Class: Explosion
 */
m.doExplosionA = "func_77278_a"
/** 
 * "Does the second part of the explosion (sound
 * 
 * Parent Class: Explosion
 */
m.doExplosionB = "func_77279_a"
/** 
 * Returns the correct traslated name of the enchantment and the level in roman numbers.
 * 
 * Parent Class: Enchantment
 */
m.getTranslatedName = "func_77316_c"
/** 
 * Returns the maximum value of enchantability nedded on the enchantment level passed.
 * 
 * Parent Class: EnchantmentWaterWorker
 */
m.getMaxEnchantability = "func_77317_b"
/** 
 * Calculates the damage protection of the enchantment based on level and damage source passed.
 * 
 * Parent Class: EnchantmentProtection
 */
m.calcModifierDamage = "func_77318_a"
/** 
 * Returns the minimum level that the enchantment can have.
 * 
 * Parent Class: Enchantment
 */
m.getMinLevel = "func_77319_d"
/** 
 * Returns the minimal value of enchantability needed on the enchantment level passed.
 * 
 * Parent Class: EnchantmentWaterWorker
 */
m.getMinEnchantability = "func_77321_a"
/** 
 * Returns the maximum level that the enchantment can have.
 * 
 * Parent Class: EnchantmentWaterWorker
 */
m.getMaxLevel = "func_77325_b"
/** 
 * Determines if the enchantment passed can be applyied together with this enchantment.
 * 
 * Parent Class: EnchantmentUntouching
 */
m.canApplyTogether = "func_77326_a"
/** 
 * 
 * 
 * Parent Class: MerchantRecipe
 */
m.readFromTags = "func_77390_a"
/** 
 * Gets the itemToBuy.
 * 
 * Parent Class: MerchantRecipe
 */
m.getItemToBuy = "func_77394_a"
/** 
 * 
 * 
 * Parent Class: MerchantRecipe
 */
m.writeToTags = "func_77395_g"
/** 
 * Gets secondItemToBuy.
 * 
 * Parent Class: MerchantRecipe
 */
m.getSecondItemToBuy = "func_77396_b"
/** 
 * Gets itemToSell.
 * 
 * Parent Class: MerchantRecipe
 */
m.getItemToSell = "func_77397_d"
/** 
 * Gets if Villager has secondItemToBuy.
 * 
 * Parent Class: MerchantRecipe
 */
m.hasSecondItemToBuy = "func_77398_c"
/** 
 * 
 * 
 * Parent Class: MerchantRecipe
 */
m.incrementToolUses = "func_77399_f"
/** 
 * "Returns true if the parent has been unlocked
 * 
 * Parent Class: StatFileWriter
 */
m.canUnlockAchievement = "func_77442_b"
/** 
 * Returns true if the achievement has been unlocked.
 * 
 * Parent Class: StatFileWriter
 */
m.hasAchievementUnlocked = "func_77443_a"
/** 
 * Reads the given stat and returns its value as an int.
 * 
 * Parent Class: StatFileWriter
 */
m.readStat = "func_77444_a"
/** 
 * Gets the foliage color for pine type (metadata 1) trees
 * 
 * Parent Class: ColorizerFoliage
 */
m.getFoliageColorPine = "func_77466_a"
/** 
 * 
 * 
 * Parent Class: ColorizerFoliage
 */
m.setFoliageBiomeColorizer = "func_77467_a"
/** 
 * 
 * 
 * Parent Class: ColorizerFoliage
 */
m.getFoliageColorBasic = "func_77468_c"
/** 
 * Gets the foliage color for birch type (metadata 2) trees
 * 
 * Parent Class: ColorizerFoliage
 */
m.getFoliageColorBirch = "func_77469_b"
/** 
 * "Gets foliage color from temperature and humidity. Args: temperature
 * 
 * Parent Class: ColorizerFoliage
 */
m.getFoliageColor = "func_77470_a"
/** 
 * Sets the current lightmap texture to the specified OpenGL constant
 * 
 * Parent Class: OpenGlHelper
 */
m.setClientActiveTexture = "func_77472_b"
/** 
 * Initializes the texture constants to be used when rendering lightmap values
 * 
 * Parent Class: OpenGlHelper
 */
m.initializeTextures = "func_77474_a"
/** 
 * Sets the current coordinates of the given lightmap texture
 * 
 * Parent Class: OpenGlHelper
 */
m.setLightmapTextureCoords = "func_77475_a"
/** 
 * 
 * 
 * Parent Class: ColorizerGrass
 */
m.setGrassBiomeColorizer = "func_77479_a"
/** 
 * "Gets grass color from temperature and humidity. Args: temperature
 * 
 * Parent Class: ColorizerGrass
 */
m.getGrassColor = "func_77480_a"
/** 
 * 
 * 
 * Parent Class: LanServerDetector$LanServer
 */
m.getServerMotd = "func_77487_a"
/** 
 * 
 * 
 * Parent Class: LanServerDetector$LanServer
 */
m.getServerIpPort = "func_77488_b"
/** 
 * Updates the time this LanServer was last seen.
 * 
 * Parent Class: LanServerDetector$LanServer
 */
m.updateLastSeen = "func_77489_c"
/** 
 * Generic method use to calculate modifiers of offensive or defensive enchantment values.
 * 
 * Parent Class: EnchantmentHelper$ModifierDamage
 */
m.calculateModifier = "func_77493_a"
/** 
 * Returns the Knockback modifier of the enchantment on the players held item.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getKnockbackModifier = "func_77501_a"
/** 
 * Returns the silk touch status of enchantments on current equipped item of player.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getSilkTouchModifier = "func_77502_d"
/** 
 * "Adds a random enchantment to the specified item. Args: random
 * 
 * Parent Class: EnchantmentHelper
 */
m.addRandomEnchantment = "func_77504_a"
/** 
 * Creates a 'Map' of EnchantmentData (enchantments) possible to add on the ItemStack and the enchantability level passed.
 * 
 * Parent Class: EnchantmentHelper
 */
m.mapEnchantmentData = "func_77505_b"
/** 
 * Returns the level of enchantment on the ItemStack passed.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getEnchantmentLevel = "func_77506_a"
/** 
 * Returns the modifier of protection enchantments on armors equipped on player.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getEnchantmentModifierDamage = "func_77508_a"
/** 
 * Return the extra efficiency of tools based on enchantments on equipped player item.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getEfficiencyModifier = "func_77509_b"
/** 
 * Returns the aqua affinity status of enchantments on current equipped item of player.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getAquaAffinityModifier = "func_77510_g"
/** 
 * Returns the biggest level of the enchantment on the array of ItemStack passed.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getMaxEnchantmentLevel = "func_77511_a"
/** 
 * "Create a list of random EnchantmentData (enchantments) that can be added together to the ItemStack
 * 
 * Parent Class: EnchantmentHelper
 */
m.buildEnchantmentList = "func_77513_b"
/** 
 * "Returns the enchantability of itemstack
 * 
 * Parent Class: EnchantmentHelper
 */
m.calcItemStackEnchantability = "func_77514_a"
/** 
 * Executes the enchantment modifier on the array of ItemStack passed.
 * 
 * Parent Class: EnchantmentHelper
 */
m.applyEnchantmentModifierArray = "func_77516_a"
/** 
 * Returns the fortune enchantment modifier of the current equipped item of player.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getFortuneModifier = "func_77517_e"
/** 
 * Executes the enchantment modifier on the ItemStack passed.
 * 
 * Parent Class: EnchantmentHelper
 */
m.applyEnchantmentModifier = "func_77518_a"
/** 
 * Returns the looting enchantment modifier of the current equipped item of player.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getLootingModifier = "func_77519_f"
/** 
 * 
 * 
 * Parent Class: ThreadLanServerPing
 */
m.getAdFromPingResponse = "func_77523_b"
/** 
 * 
 * 
 * Parent Class: ThreadLanServerPing
 */
m.getMotdFromPingResponse = "func_77524_a"
/** 
 * 
 * 
 * Parent Class: ThreadLanServerPing
 */
m.getPingResponse = "func_77525_a"
/** 
 * 
 * 
 * Parent Class: LanServerDetector$LanServerList
 */
m.setWasNotUpdated = "func_77552_b"
/** 
 * 
 * 
 * Parent Class: LanServerDetector$LanServerList
 */
m.getWasUpdated = "func_77553_a"
/** 
 * 
 * 
 * Parent Class: LanServerDetector$LanServerList
 */
m.getLanServers = "func_77554_c"
/** 
 * Return true if the item passed can be enchanted by a enchantment of this type.
 * 
 * Parent Class: EnumEnchantmentType
 */
m.canEnchantItem = "func_77557_a"
/** 
 * Used to check if a recipe matches current crafting inventory
 * 
 * Parent Class: ShapelessRecipes
 */
m.matches = "func_77569_a"
/** 
 * Returns the size of the recipe area
 * 
 * Parent Class: ShapelessRecipes
 */
m.getRecipeSize = "func_77570_a"
/** 
 * 
 * 
 * Parent Class: ShapelessRecipes
 */
m.getRecipeOutput = "func_77571_b"
/** 
 * Returns an Item that is the result of this recipe
 * 
 * Parent Class: ShapelessRecipes
 */
m.getCraftingResult = "func_77572_b"
/** 
 * Checks if the region of a crafting inventory is match for the recipe.
 * 
 * Parent Class: ShapedRecipes
 */
m.checkMatch = "func_77573_a"
/** 
 * returns the List<> of all recipes
 * 
 * Parent Class: CraftingManager
 */
m.getRecipeList = "func_77592_b"
/** 
 * Adds a shapeless crafting recipe to the the game.
 * 
 * Parent Class: CraftingManager
 */
m.addShapelessRecipe = "func_77596_b"
/** 
 * 
 * 
 * Parent Class: FurnaceRecipes
 */
m.getSmeltingList = "func_77599_b"
/** 
 * Returns an instance of FurnaceRecipes.
 * 
 * Parent Class: FurnaceRecipes
 */
m.instance = "func_77602_a"
m.getMaxDamage = {}
/** 
 * Returns the maximum damage an item can take.
 * 
 * Parent Class: Item
 */
m.getMaxDamage.Item = "func_77612_l"
/** 
 * Returns the max damage an item in the stack can take.
 * 
 * Parent Class: ItemStack
 */
m.getMaxDamage.ItemStack = "func_77958_k"

m.getRarity = {}
/** 
 * Return an item rarity from EnumRarity
 * 
 * Parent Class: Item
 */
m.getRarity.Item = "func_77613_e"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.getRarity.ItemStack = "func_77953_t"

m.getHasSubtypes = {}
/** 
 * 
 * 
 * Parent Class: Item
 */
m.getHasSubtypes.Item = "func_77614_k"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.getHasSubtypes.ItemStack = "func_77981_g"

m.onPlayerStoppedUsing = {}
/** 
 * Called when the player stops using an Item (stops holding the right mouse button).
 * 
 * Parent Class: Item
 */
m.onPlayerStoppedUsing.Item = "func_77615_a"
/** 
 * "Called when the player releases the use item button. Args: world
 * 
 * Parent Class: ItemStack
 */
m.onPlayerStoppedUsing.ItemStack = "func_77974_b"

/** 
 * Checks isDamagable and if it cannot be stacked
 * 
 * Parent Class: Item
 */
m.isItemTool = "func_77616_k"
/** 
 * "Return the enchantability factor of the item
 * 
 * Parent Class: Item
 */
m.getItemEnchantability = "func_77619_b"
/** 
 * 
 * 
 * Parent Class: ItemPotion
 */
m.getColorFromDamage = "func_77620_a"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.getMovingObjectPositionFromPlayer = "func_77621_a"
/** 
 * Called when item is crafted/smelted. Used only by maps so far.
 * 
 * Parent Class: Item
 */
m.onCreated = "func_77622_d"
/** 
 * allows items to add custom lines of information to the mouseover description
 * 
 * Parent Class: Item
 */
m.addInformation = "func_77624_a"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.setMaxStackSize = "func_77625_d"
m.getMaxItemUseDuration = {}
/** 
 * How long it takes to use or consume an item
 * 
 * Parent Class: Item
 */
m.getMaxItemUseDuration.Item = "func_77626_a"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.getMaxItemUseDuration.ItemStack = "func_77988_m"

/** 
 * 
 * 
 * Parent Class: Item
 */
m.setHasSubtypes = "func_77627_a"
/** 
 * Returns true if this item should be rotated by 180 degrees around the Y axis when being held in an entities hands.
 * 
 * Parent Class: Item
 */
m.shouldRotateAroundWhenRendering = "func_77629_n_"
m.setPotionEffect = {}
/** 
 * Sets the string representing this item's effect on a potion when used as an ingredient.
 * 
 * Parent Class: Item
 */
m.setPotionEffect.Item = "func_77631_c"
/** 
 * "sets a potion effect on the item. Args: int potionId
 * 
 * Parent Class: ItemFood
 */
m.setPotionEffect.ItemFood = "func_77844_a"

/** 
 * True if this Item has a container item (a.k.a. crafting result)
 * 
 * Parent Class: Item
 */
m.hasContainerItem = "func_77634_r"
m.hasEffect = {}
/** 
 * 
 * 
 * Parent Class: Item
 */
m.hasEffect.Item = "func_77636_d"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.hasEffect.ItemStack = "func_77962_s"

/** 
 * gets the CreativeTab this item is displayed on
 * 
 * Parent Class: Item
 */
m.getCreativeTab = "func_77640_w"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.setContainerItem = "func_77642_a"
/** 
 * false for all Items except sub-classes of ItemMapBase
 * 
 * Parent Class: Item
 */
m.isMap = "func_77643_m_"
m.hitEntity = {}
/** 
 * Current implementations of this method in child classes do not use the entry argument beside ev. They just raise the damage on the stack.
 * 
 * Parent Class: Item
 */
m.hitEntity.Item = "func_77644_a"
/** 
 * Calls the corresponding fct in di
 * 
 * Parent Class: ItemStack
 */
m.hitEntity.ItemStack = "func_77961_a"

/** 
 * 
 * 
 * Parent Class: Item
 */
m.isDamageable = "func_77645_m"
/** 
 * "If this function returns true (or the item is damageable)
 * 
 * Parent Class: Item
 */
m.getShareTag = "func_77651_p"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.getItemStackDisplayName = "func_77653_i"
/** 
 * set max damage of an Item
 * 
 * Parent Class: Item
 */
m.setMaxDamage = "func_77656_e"
/** 
 * "Translates the unlocalized name of this item
 * 
 * Parent Class: Item
 */
m.getUnlocalizedNameInefficiently = "func_77657_g"
/** 
 * "Called whenever this item is equipped and the right mouse button is pressed. Args: itemStack
 * 
 * Parent Class: Item
 */
m.onItemRightClick = "func_77659_a"
m.getItemUseAction = {}
/** 
 * returns the action that specifies what animation to play when the items is being used
 * 
 * Parent Class: Item
 */
m.getItemUseAction.Item = "func_77661_b"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.getItemUseAction.ItemStack = "func_77975_n"

/** 
 * Returns True is the item is renderer in full 3D when hold.
 * 
 * Parent Class: Item
 */
m.isFull3D = "func_77662_d"
/** 
 * Sets bFull3D to True and return the object.
 * 
 * Parent Class: Item
 */
m.setFull3D = "func_77664_n"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.getContainerItem = "func_77668_q"
/** 
 * 
 * 
 * Parent Class: ItemEditableBook
 */
m.validBookTagContents = "func_77828_a"
/** 
 * returns wether or not a potion is a throwable splash potion based on damage value
 * 
 * Parent Class: ItemPotion
 */
m.isSplash = "func_77831_g"
/** 
 * Returns a list of effects for the specified potion damage value.
 * 
 * Parent Class: ItemPotion
 */
m.getEffects = "func_77834_f"
/** 
 * 
 * 
 * Parent Class: ItemPotion
 */
m.isEffectInstant = "func_77833_h"
/** 
 * "Spawns the creature specified by the egg's type in the location specified by the last three parameters. Parameters: world
 * 
 * Parent Class: ItemMonsterPlacer
 */
m.spawnCreature = "func_77840_a"
/** 
 * "Returns the name of the material this tool is made from as it is declared in EnumToolMaterial (meaning diamond would return ""EMERALD"")"
 * 
 * Parent Class: ItemHoe
 */
m.getMaterialName = "func_77842_f"
/** 
 * Whether wolves like this food (true for raw and cooked porkchop).
 * 
 * Parent Class: ItemFood
 */
m.isWolfsFavoriteMeat = "func_77845_h"
/** 
 * "Set the field 'alwaysEdible' to true
 * 
 * Parent Class: ItemFood
 */
m.setAlwaysEdible = "func_77848_i"
/** 
 * 
 * 
 * Parent Class: ItemAppleGold
 */
m.onFoodEaten = "func_77849_c"
/** 
 * 
 * 
 * Parent Class: ItemMap
 */
m.getMapData = "func_77873_a"
/** 
 * "Given a potion data value
 * 
 * Parent Class: PotionHelper
 */
m.getPotionPrefix = "func_77905_c"
/** 
 * Manipulates the specified bit of the potion damage value according to the rules passed from applyIngredient.
 * 
 * Parent Class: PotionHelper
 */
m.brewBitOperations = "func_77906_a"
/** 
 * Returns the number of 1 bits in the given integer.
 * 
 * Parent Class: PotionHelper
 */
m.countSetFlags = "func_77907_h"
/** 
 * 
 * 
 * Parent Class: PotionHelper
 */
m.getPotionPrefixIndexFlags = "func_77908_a"
/** 
 * "Given a potion data value
 * 
 * Parent Class: PotionHelper
 */
m.getPotionPrefixIndex = "func_77909_a"
/** 
 * "Returns 1 if the flag is set
 * 
 * Parent Class: PotionHelper
 */
m.isFlagSet = "func_77910_c"
/** 
 * Given a {@link Collection}<{@link PotionEffect}> will return an Integer color.
 * 
 * Parent Class: PotionHelper
 */
m.calcPotionLiquidColor = "func_77911_a"
/** 
 * 
 * 
 * Parent Class: PotionHelper
 */
m.parsePotionEffects = "func_77912_a"
/** 
 * Returns the new potion damage value after the specified ingredient info is applied to the specified potion.
 * 
 * Parent Class: PotionHelper
 */
m.applyIngredient = "func_77913_a"
/** 
 * Checks if the bit at 1 << j is on in i.
 * 
 * Parent Class: PotionHelper
 */
m.checkFlag = "func_77914_a"
/** 
 * "Returns 0 if the flag is set
 * 
 * Parent Class: PotionHelper
 */
m.isFlagUnset = "func_77916_d"
/** 
 * Returns a list of effects for the specified potion damage value.
 * 
 * Parent Class: PotionHelper
 */
m.getPotionEffects = "func_77917_b"
/** 
 * Returns true if the ItemStack has an NBTTagCompound. Currently used to store enchantments.
 * 
 * Parent Class: ItemStack
 */
m.hasTagCompound = "func_77942_o"
/** 
 * "Creates a copy of a ItemStack
 * 
 * Parent Class: ItemStack
 */
m.copyItemStack = "func_77944_b"
m.updateAnimation = {}
/** 
 * Called each tick as long the ItemStack in on player inventory. Used to progress the pickup animation and update maps.
 * 
 * Parent Class: ItemStack
 */
m.updateAnimation.ItemStack = "func_77945_a"
/** 
 * 
 * 
 * Parent Class: TextureCompass
 */
m.updateAnimation.TextureCompass = "func_94219_l"

/** 
 * True if the item has enchantment data
 * 
 * Parent Class: ItemStack
 */
m.isItemEnchanted = "func_77948_v"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.loadItemStackFromNBT = "func_77949_a"
/** 
 * returns true when a damageable item is damaged
 * 
 * Parent Class: ItemStack
 */
m.isItemDamaged = "func_77951_h"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.getItemDamage = "func_77952_i"
/** 
 * True if it is a tool and has no enchantments to begin with
 * 
 * Parent Class: ItemStack
 */
m.isItemEnchantable = "func_77956_u"
/** 
 * "Called whenever this item stack is equipped and right clicked. Returns the new item stack to put in the position where this item is. Args: world
 * 
 * Parent Class: ItemStack
 */
m.useItemRightClick = "func_77957_a"
/** 
 * compares ItemStack argument to the instance ItemStack; returns true if both ItemStacks are equal
 * 
 * Parent Class: ItemStack
 */
m.isItemStackEqual = "func_77959_d"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.setItemDamage = "func_77964_b"
m.addEnchantment = {}
/** 
 * Adds an enchantment with a desired level on the ItemStack.
 * 
 * Parent Class: ItemStack
 */
m.addEnchantment.ItemStack = "func_77966_a"
/** 
 * Adds an stored enchantment to an enchanted book ItemStack
 * 
 * Parent Class: ItemEnchantedBook
 */
m.addEnchantment.ItemEnchantedBook = "func_92115_a"

/** 
 * compares ItemStack argument to the instance ItemStack; returns true if the Items contained in both ItemStacks are equal
 * 
 * Parent Class: ItemStack
 */
m.isItemEqual = "func_77969_a"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.areItemStackTagsEqual = "func_77970_a"
/** 
 * Damages the item in the ItemStack
 * 
 * Parent Class: ItemStack
 */
m.damageItem = "func_77972_a"
/** 
 * Returns maximum size of the stack.
 * 
 * Parent Class: ItemStack
 */
m.getMaxStackSize = "func_77976_d"
/** 
 * Splits off a stack of the given amount of this stack and reduces this stack by the amount.
 * 
 * Parent Class: ItemStack
 */
m.splitStack = "func_77979_a"
/** 
 * "Assigns a NBTTagCompound to the ItemStack
 * 
 * Parent Class: ItemStack
 */
m.setTagCompound = "func_77982_d"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.setTagInfo = "func_77983_a"
/** 
 * true if this itemStack is damageable
 * 
 * Parent Class: ItemStack
 */
m.isItemStackDamageable = "func_77984_f"
/** 
 * Returns true if the ItemStack can hold 2 or more units of the item.
 * 
 * Parent Class: ItemStack
 */
m.isStackable = "func_77985_e"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.getEnchantmentTagList = "func_77986_q"
/** 
 * compares ItemStack argument1 with ItemStack argument2; returns true if both ItemStacks are equal
 * 
 * Parent Class: ItemStack
 */
m.areItemStacksEqual = "func_77989_b"
m.getEnchantability = {}
/** 
 * Return the natural enchantability factor of the material.
 * 
 * Parent Class: Item$ToolMaterial
 */
m.getEnchantability.Item$ToolMaterial = "func_77995_e"
/** 
 * Return the enchantability factor of the material.
 * 
 * Parent Class: ItemArmor$ArmorMaterial
 */
m.getEnchantability.ItemArmor$ArmorMaterial = "func_78045_a"

/** 
 * "The level of material this tool can harvest (3 = DIAMOND
 * 
 * Parent Class: Item$ToolMaterial
 */
m.getHarvestLevel = "func_77996_d"
/** 
 * "The number of uses this material allows. (wood = 59
 * 
 * Parent Class: Item$ToolMaterial
 */
m.getMaxUses = "func_77997_a"
/** 
 * The strength of this tool material against blocks which it is effective against.
 * 
 * Parent Class: Item$ToolMaterial
 */
m.getEfficiencyOnProperMaterial = "func_77998_b"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
m.getTabLabel = "func_78013_b"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
m.setNoTitle = "func_78014_h"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
m.getBackgroundImageName = "func_78015_f"
/** 
 * 
 * 
 * Parent Class: CreativeTabs$9
 */
m.getTabIconItem = "func_78016_d"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
m.shouldHidePlayerInventory = "func_78017_i"
/** 
 * only shows items which have tabToDisplayOn == this
 * 
 * Parent Class: CreativeTabs
 */
m.displayAllReleventItems = "func_78018_a"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
m.drawInForegroundOfTab = "func_78019_g"
/** 
 * returns index % 6
 * 
 * Parent Class: CreativeTabs
 */
m.getTabColumn = "func_78020_k"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
m.getTabIndex = "func_78021_a"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
m.setNoScrollbar = "func_78022_j"
/** 
 * returns tabIndex < 6
 * 
 * Parent Class: CreativeTabs
 */
m.isTabInFirstRow = "func_78023_l"
/** 
 * Gets the translated Label.
 * 
 * Parent Class: CreativeTabs
 */
m.getTranslatedTabLabel = "func_78024_c"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
m.setBackgroundImageName = "func_78025_a"
/** 
 * "Return the damage reduction (each 1 point is a half a shield on gui) of the piece index passed (0 = helmet
 * 
 * Parent Class: ItemArmor$ArmorMaterial
 */
m.getDamageReductionAmount = "func_78044_b"
/** 
 * Returns the durability for a armor slot of for this type.
 * 
 * Parent Class: ItemArmor$ArmorMaterial
 */
m.getDurability = "func_78046_a"
/** 
 * 
 * 
 * Parent Class: ModelBase
 */
m.getTextureOffset = "func_78084_a"
m.setTextureOffset = {}
/** 
 * 
 * 
 * Parent Class: ModelBase
 */
m.setTextureOffset.ModelBase = "func_78085_a"
/** 
 * 
 * 
 * Parent Class: ModelRenderer
 */
m.setTextureOffset.ModelRenderer = "func_78784_a"

/** 
 * Used for easily adding entity-dependent animations. The second and third float params here are the same second and third as in the setRotationAngles method.
 * 
 * Parent Class: ModelDragon
 */
m.setLivingAnimations = "func_78086_a"
/** 
 * "Sets the model's various rotation angles. For bipeds
 * 
 * Parent Class: ModelZombie
 */
m.setRotationAngles = "func_78087_a"
/** 
 * Renders the sign model through TileEntitySignRenderer
 * 
 * Parent Class: ModelSign
 */
m.renderSign = "func_78164_a"
/** 
 * "Updates the rotations in the parameters for rotations greater than 180 degrees or less than -180 degrees. It adds or subtracts 360 degrees
 * 
 * Parent Class: ModelDragon
 */
m.updateRotations = "func_78214_a"
/** 
 * This method renders out all parts of the chest model.
 * 
 * Parent Class: ModelChest
 */
m.renderAll = "func_78231_a"
/** 
 * 
 * 
 * Parent Class: TexturedQuad
 */
m.flipFace = "func_78235_a"
/** 
 * 
 * 
 * Parent Class: PositionTextureVertex
 */
m.setTexturePosition = "func_78240_a"
/** 
 * 
 * 
 * Parent Class: ModelBox
 */
m.setBoxName = "func_78244_a"
/** 
 * "Render a single line string at the current (posX
 * 
 * Parent Class: FontRenderer
 */
m.renderStringAtPos = "func_78255_a"
/** 
 * Returns the width of this string. Equivalent of FontMetrics.stringWidth(String s).
 * 
 * Parent Class: FontRenderer
 */
m.getStringWidth = "func_78256_a"
/** 
 * Load one of the /font/glyph_XX.png into a new GL texture and store the texture ID in glyphTextureName array.
 * 
 * Parent Class: FontRenderer
 */
m.loadGlyphTexture = "func_78257_a"
/** 
 * Determines how many characters from the string will fit into the specified width.
 * 
 * Parent Class: FontRenderer
 */
m.sizeStringToWidth = "func_78259_e"
/** 
 * Get bidiFlag that controls if the Unicode Bidirectional Algorithm should be run before rendering any string
 * 
 * Parent Class: FontRenderer
 */
m.getBidiFlag = "func_78260_a"
/** 
 * Trims a string to fit a specified Width.
 * 
 * Parent Class: FontRenderer
 */
m.trimStringToWidth = "func_78269_a"
/** 
 * Returns the width of this character as rendered.
 * 
 * Parent Class: FontRenderer
 */
m.getCharWidth = "func_78263_a"
/** 
 * Set unicodeFlag controlling whether strings should be rendered with Unicode fonts instead of the default.png font.
 * 
 * Parent Class: FontRenderer
 */
m.setUnicodeFlag = "func_78264_a"
/** 
 * Reset all style flag fields in the class to false; called at the start of string rendering
 * 
 * Parent Class: FontRenderer
 */
m.resetStyles = "func_78265_b"
/** 
 * "Render a single character with the default.png font at current (posX
 * 
 * Parent Class: FontRenderer
 */
m.renderDefaultChar = "func_78266_a"
/** 
 * Returns the width of the wordwrapped String (maximum length is parameter k)
 *  
 * @param str The string to split
 * @param maxLength The maximum length of a word
 * 
 * Parent Class: FontRenderer
 */
m.splitStringWidth = "func_78267_b"
/** 
 * Perform actual work of rendering a multi-line string with wordwrap and with darker drop shadow color if flag is set
 * 
 * Parent Class: FontRenderer
 */
m.renderSplitString = "func_78268_b"
/** 
 * Checks if the char code is O-K...lLrRk-o... used to set special formatting.
 * 
 * Parent Class: FontRenderer
 */
m.isFormatSpecial = "func_78270_c"
/** 
 * Breaks a string into a list of pieces that will fit a specified width.
 * 
 * Parent Class: FontRenderer
 */
m.listFormattedStringToWidth = "func_78271_c"
/** 
 * "Checks if the char code is a hexadecimal character
 * 
 * Parent Class: FontRenderer
 */
m.isFormatColor = "func_78272_b"
/** 
 * Remove all newline characters from the end of the string
 * 
 * Parent Class: FontRenderer
 */
m.trimStringNewline = "func_78273_d"
/** 
 * Render string either left or right aligned depending on bidiFlag
 * 
 * Parent Class: FontRenderer
 */
m.renderStringAligned = "func_78274_b"
/** 
 * Set bidiFlag to control if the Unicode Bidirectional Algorithm should be run before rendering any string.
 * 
 * Parent Class: FontRenderer
 */
m.setBidiFlag = "func_78275_b"
/** 
 * "Render a single Unicode character at current (posX
 * 
 * Parent Class: FontRenderer
 */
m.renderUnicodeChar = "func_78277_a"
/** 
 * Splits and draws a String with wordwrap (maximum length is parameter k)
 * 
 * Parent Class: FontRenderer
 */
m.drawSplitString = "func_78279_b"
/** 
 * Inserts newline and formatting into a string to wrap it within the specified width.
 * 
 * Parent Class: FontRenderer
 */
m.wrapFormattedStringToWidth = "func_78280_d"
/** 
 * Digests a string for nonprinting formatting characters then returns a string containing only that formatting.
 * 
 * Parent Class: FontRenderer
 */
m.getFormatFromString = "func_78282_e"
/** 
 * 
 * 
 * Parent Class: ScaledResolution
 */
m.getScaledHeight_double = "func_78324_d"
/** 
 * 
 * 
 * Parent Class: ScaledResolution
 */
m.getScaleFactor = "func_78325_e"
/** 
 * 
 * 
 * Parent Class: ScaledResolution
 */
m.getScaledWidth = "func_78326_a"
/** 
 * 
 * 
 * Parent Class: ScaledResolution
 */
m.getScaledWidth_double = "func_78327_c"
/** 
 * 
 * 
 * Parent Class: ScaledResolution
 */
m.getScaledHeight = "func_78328_b"
/** 
 * 
 * 
 * Parent Class: SkinManager$2
 */
m.parseUserSkin = "func_78432_a"
/** 
 * Makes the given area of the image opaque
 * 
 * Parent Class: ImageBufferDownload
 */
m.setAreaOpaque = "func_78433_b"
/** 
 * Makes the given area of the image transparent if it was previously completely opaque (used to remove the outer layer of a skin around the head if it was saved all opaque; this would be redundant so it's assumed that the skin maker is just using an image editor without an alpha channel)
 * 
 * Parent Class: ImageBufferDownload
 */
m.setAreaTransparent = "func_78434_a"
/** 
 * Returns true if the given area of the image contains transparent pixels
 * 
 * Parent Class: ImageBufferDownload
 */
m.hasTransparency = "func_78435_c"
/** 
 * Renders the active item in the player's hand when in first person mode. Args: partialTickTime
 * 
 * Parent Class: ItemRenderer
 */
m.renderItemInFirstPerson = "func_78440_a"
/** 
 * 
 * 
 * Parent Class: ItemRenderer
 */
m.updateEquippedItem = "func_78441_a"
/** 
 * Renders the fire on the screen for first person mode. Arg: partialTickTime
 *  
 * @param partialTicks Partial ticks
 * 
 * Parent Class: ItemRenderer
 */
m.renderFireInFirstPerson = "func_78442_d"
/** 
 * Resets equippedProgress
 * 
 * Parent Class: ItemRenderer
 */
m.resetEquippedProgress = "func_78444_b"
/** 
 * Resets equippedProgress
 * 
 * Parent Class: ItemRenderer
 */
m.resetEquippedProgress2 = "func_78445_c"
/** 
 * Renders all the overlays that are in first person mode. Args: partialTickTime
 * 
 * Parent Class: ItemRenderer
 */
m.renderOverlays = "func_78447_b"
/** 
 * Renders a texture that warps around based on the direction the player is looking. Texture needs to be bound before being called. Used for the water overlay. Args: parialTickTime
 *  
 * @param partialTicks Partial ticks
 * 
 * Parent Class: ItemRenderer
 */
m.renderWaterOverlayTexture = "func_78448_c"
/** 
 * Updates the entity renderer
 * 
 * Parent Class: EntityRenderer
 */
m.updateRenderer = "func_78464_a"
/** 
 * calculates fog and calls glClearColor
 * 
 * Parent Class: EntityRenderer
 */
m.updateFogColor = "func_78466_h"
/** 
 * sets up player's eye (or camera in third person mode)
 * 
 * Parent Class: EntityRenderer
 */
m.orientCamera = "func_78467_g"
/** 
 * Sets up the fog to be rendered. If the arg passed in is -1 the fog starts at 0 and goes to 80% of far plane distance and is used for sky rendering.
 *  
 * @param startCoords If is -1 the fog start at 0.0
 * 
 * Parent Class: EntityRenderer
 */
m.setupFog = "func_78468_a"
/** 
 * Update and return fogColorBuffer with the RGBA values passed as arguments
 * 
 * Parent Class: EntityRenderer
 */
m.setFogColorBuffer = "func_78469_a"
/** 
 * Recompute a random value that is applied to block color in updateLightmap()
 * 
 * Parent Class: EntityRenderer
 */
m.updateTorchFlicker = "func_78470_f"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.renderWorld = "func_78471_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.updateLightmap = "func_78472_g"
/** 
 * Finds what block or object the mouse is over at the specified partial tick time. Args: partialTickTime
 * 
 * Parent Class: EntityRenderer
 */
m.getMouseOver = "func_78473_a"
/** 
 * Render rain and snow
 * 
 * Parent Class: EntityRenderer
 */
m.renderRainSnow = "func_78474_d"
/** 
 * Setups all the GL settings for view bobbing. Args: partialTickTime
 * 
 * Parent Class: EntityRenderer
 */
m.setupViewBobbing = "func_78475_f"
/** 
 * Render player hand
 * 
 * Parent Class: EntityRenderer
 */
m.renderHand = "func_78476_b"
/** 
 * Update FOV modifier hand
 * 
 * Parent Class: EntityRenderer
 */
m.updateFovModifierHand = "func_78477_e"
/** 
 * Setup orthogonal projection for rendering GUI screen overlays
 * 
 * Parent Class: EntityRenderer
 */
m.setupOverlayRendering = "func_78478_c"
/** 
 * "sets up projection
 * 
 * Parent Class: EntityRenderer
 */
m.setupCameraTransform = "func_78479_a"
/** 
 * Changes the field of view of the player depending on if they are underwater or not
 *  
 * @param useFOVSetting If true the FOV set in the settings will be use in the calculation
 * 
 * Parent Class: EntityRenderer
 */
m.getFOVModifier = "func_78481_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.hurtCameraEffect = "func_78482_e"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
m.addRainParticles = "func_78484_h"
/** 
 * "Returns true if the bounding box is inside all 6 clipping planes
 * 
 * Parent Class: Frustum
 */
m.isBoundingBoxInFrustum = "func_78546_a"
m.isBoxInFrustum = {}
/** 
 * "Calls the clipping helper. Returns true if the box is inside all 6 clipping planes
 * 
 * Parent Class: Frustum
 */
m.isBoxInFrustum.Frustum = "func_78548_b"
/** 
 * "Returns true if the box is inside all 6 clipping planes
 * 
 * Parent Class: ClippingHelper
 */
m.isBoxInFrustum.ClippingHelper = "func_78553_b"

/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.getEntityRenderObject = "func_78713_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.getDistanceToCamera = "func_78714_a"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
m.getEntityClassRenderObject = "func_78715_a"
/** 
 * Flips the player around.
 * 
 * Parent Class: PlayerControllerMP
 */
m.flipPlayer = "func_78745_b"
/** 
 * Sets player capabilities depending on current gametype. params: player
 *  
 * @param player The player's instance
 * 
 * Parent Class: PlayerControllerMP
 */
m.setPlayerCapabilities = "func_78748_a"
/** 
 * true for hitting entities far away.
 * 
 * Parent Class: PlayerControllerMP
 */
m.extendedReach = "func_78749_i"
/** 
 * Syncs the current player item with the server
 * 
 * Parent Class: PlayerControllerMP
 */
m.syncCurrentPlayItem = "func_78750_j"
/** 
 * Sends a Packet107 to the server to drop the item on the ground
 * 
 * Parent Class: PlayerControllerMP
 */
m.sendPacketDropItem = "func_78752_a"
/** 
 * Handles slot clicks sends a packet to the server.
 * 
 * Parent Class: PlayerControllerMP
 */
m.windowClick = "func_78753_a"
/** 
 * 
 * 
 * Parent Class: PlayerControllerMP
 */
m.shouldDrawHUD = "func_78755_b"
/** 
 * GuiEnchantment uses this during multiplayer to tell PlayerControllerMP to send a packet indicating the enchantment action the player has taken.
 *  
 * @param windowID The ID of the current window
 * @param button The button id (enchantment selected)
 * 
 * Parent Class: PlayerControllerMP
 */
m.sendEnchantPacket = "func_78756_a"
/** 
 * player reach distance = 4F
 * 
 * Parent Class: PlayerControllerMP
 */
m.getBlockReachDistance = "func_78757_d"
/** 
 * returns true if player is in creative mode
 * 
 * Parent Class: PlayerControllerMP
 */
m.isInCreativeMode = "func_78758_h"
/** 
 * Used in PlayerControllerMP to update the server with an ItemStack in a slot.
 * 
 * Parent Class: PlayerControllerMP
 */
m.sendSlotPacket = "func_78761_a"
/** 
 * "Checks if the player is not creative
 * 
 * Parent Class: PlayerControllerMP
 */
m.isNotCreative = "func_78762_g"
/** 
 * 
 * 
 * Parent Class: PlayerControllerMP
 */
m.gameIsSurvivalOrAdventure = "func_78763_f"
/** 
 * Attacks an entity
 * 
 * Parent Class: PlayerControllerMP
 */
m.attackEntity = "func_78764_a"
/** 
 * 
 * 
 * Parent Class: PlayerControllerMP
 */
m.updateController = "func_78765_e"
/** 
 * 
 * 
 * Parent Class: PlayerControllerMP
 */
m.onStoppedUsingItem = "func_78766_c"
/** 
 * Resets current block damage and field_78778_j
 * 
 * Parent Class: PlayerControllerMP
 */
m.resetBlockRemoving = "func_78767_c"
/** 
 * Send packet to server - player is interacting with another entity (left click)
 * 
 * Parent Class: PlayerControllerMP
 */
m.interactWithEntitySendPacket = "func_78768_b"
/** 
 * "Notifies the server of things like consuming food
 * 
 * Parent Class: PlayerControllerMP
 */
m.sendUseItem = "func_78769_a"
/** 
 * Returns the model renderer with the new texture parameters.
 * 
 * Parent Class: ModelRenderer
 */
m.setTextureSize = "func_78787_b"
/** 
 * Compiles a GL display list for this model
 * 
 * Parent Class: ModelRenderer
 */
m.compileDisplayList = "func_78788_d"
/** 
 * 
 * 
 * Parent Class: ModelRenderer
 */
m.renderWithRotation = "func_78791_b"
/** 
 * Sets the current box's rotation points and rotation angles to another box.
 * 
 * Parent Class: ModelRenderer
 */
m.addChild = "func_78792_a"
/** 
 * 
 * 
 * Parent Class: ModelRenderer
 */
m.setRotationPoint = "func_78793_a"
/** 
 * Allows the changing of Angles after a box has been rendered
 * 
 * Parent Class: ModelRenderer
 */
m.postRender = "func_78794_c"
/** 
 * "Returns an NBTTagCompound with the server's name
 * 
 * Parent Class: ServerData
 */
m.getNBTCompound = "func_78836_a"
/** 
 * "Takes an NBTTagCompound with 'name' and 'ip' keys
 * 
 * Parent Class: ServerData
 */
m.getServerDataFromNBTCompound = "func_78837_a"
/** 
 * Adds the given ServerData instance to the list.
 * 
 * Parent Class: ServerList
 */
m.addServerData = "func_78849_a"
/** 
 * Removes the ServerData instance stored for the given index in the list.
 * 
 * Parent Class: ServerList
 */
m.removeServerData = "func_78851_b"
/** 
 * "Loads a list of servers from servers.dat
 * 
 * Parent Class: ServerList
 */
m.loadServerList = "func_78853_a"
/** 
 * "Runs getNBTCompound on each ServerData instance
 * 
 * Parent Class: ServerList
 */
m.saveServerList = "func_78855_b"
/** 
 * Counts the number of ServerData instances in the list.
 * 
 * Parent Class: ServerList
 */
m.countServers = "func_78856_c"
/** 
 * "Takes two list indexes
 * 
 * Parent Class: ServerList
 */
m.swapServers = "func_78857_a"
/** 
 * 
 * 
 * Parent Class: ServerAddress
 */
m.fromString = "func_78860_a"
/** 
 * 
 * 
 * Parent Class: ServerAddress
 */
m.getIP = "func_78861_a"
/** 
 * "Returns a server's address and port for the specified hostname
 * 
 * Parent Class: ServerAddress
 */
m.getServerAddress = "func_78863_b"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.updateEffects = "func_78868_a"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.getStatistics = "func_78869_b"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.clearEffects = "func_78870_a"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.renderLitParticles = "func_78872_b"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
m.addEffect = "func_78873_a"
/** 
 * "Renders all current particles. Args player
 * 
 * Parent Class: EffectRenderer
 */
m.renderParticles = "func_78874_a"
/** 
 * Get dimension of the bounding box in the z direction.
 * 
 * Parent Class: StructureBoundingBox
 */
m.getZSize = "func_78880_d"
/** 
 * Get dimension of the bounding box in the y direction.
 * 
 * Parent Class: StructureBoundingBox
 */
m.getYSize = "func_78882_c"
/** 
 * Get dimension of the bounding box in the x direction.
 * 
 * Parent Class: StructureBoundingBox
 */
m.getXSize = "func_78883_b"
/** 
 * returns a new StructureBoundingBox with MAX values
 * 
 * Parent Class: StructureBoundingBox
 */
m.getNewBoundingBox = "func_78887_a"
/** 
 * Expands a bounding box's dimensions to include the supplied bounding box.
 * 
 * Parent Class: StructureBoundingBox
 */
m.expandTo = "func_78888_b"
/** 
 * 
 * 
 * Parent Class: MovementInputFromOptions
 */
m.updatePlayerMoveState = "func_78898_a"
/** 
 * Disabels color processing.
 * 
 * Parent Class: WorldRenderer
 */
m.noColor = "func_78914_f"
/** 
 * "Returns the dimension's name
 * 
 * Parent Class: WorldProviderEnd
 */
m.getDimensionName = "func_80007_l"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
m.registerTickable = "func_82010_a"
/** 
 * The maximum height from where the entity is alowed to jump (used in pathfinder)
 * 
 * Parent Class: EntityCreeper
 */
m.getMaxFallHeight = "func_82143_as"
/** 
 * Return the amount of time this entity should stay in a portal before being transported.
 * 
 * Parent Class: EntityPlayer
 */
m.getMaxInPortalTime = "func_82145_z"
/** 
 * Return the amount of cooldown before this entity can use a portal again.
 * 
 * Parent Class: EntityPlayer
 */
m.getPortalCooldown = "func_82147_ab"
/** 
 * Sets this entity's location and angles to the location and angles of the passed in entity.
 * 
 * Parent Class: Entity
 */
m.copyLocationAndAnglesFrom = "func_82149_j"
/** 
 * 
 * 
 * Parent Class: Entity
 */
m.isInvisible = "func_82150_aj"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.getArmorPosition = "func_82159_b"
/** 
 * Drop the equipment for this entity.
 *  
 * @param wasRecentlyHit true if this this entity was recently hit by appropriate entity (generally only if player or tameable)
 * @param lootingModifier level of enchanment to be applied to this drop
 * 
 * Parent Class: EntityLiving
 */
m.dropEquipment = "func_82160_b"
/** 
 * Gets the vanilla armor Item that can go in the slot specified for the given tier.
 * 
 * Parent Class: EntityLiving
 */
m.getArmorItemForSlot = "func_82161_a"
/** 
 * Causes this Entity to drop a random item.
 * 
 * Parent Class: EntityZombie
 */
m.addRandomDrop = "func_82164_bB"
/** 
 * "Returns an integer indicating the end point of the swing animation
 * 
 * Parent Class: EntityLivingBase
 */
m.getArmSwingAnimationEnd = "func_82166_i"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.collideWithEntity = "func_82167_n"
/** 
 * Updates the arm swing progress counters and animation progress
 * 
 * Parent Class: EntityLivingBase
 */
m.updateArmSwingProgress = "func_82168_bl"
/** 
 * Remove the specified potion effect from this entity.
 * 
 * Parent Class: EntityLivingBase
 */
m.removePotionEffect = "func_82170_o"
/** 
 * "returns true if all the conditions for steering the entity are met. For pigs
 * 
 * Parent Class: EntityPig
 */
m.canBeSteered = "func_82171_bF"
/** 
 * Return the AI task for player control.
 * 
 * Parent Class: EntityPig
 */
m.getAIControlledByPlayer = "func_82183_n"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.setLookingForHome = "func_82187_q"
/** 
 * Provides a way to cause damage to an ender dragon.
 * 
 * Parent Class: EntityDragon
 */
m.attackDragonFrom = "func_82195_e"
/** 
 * Attack the specified entity using a ranged attack.
 * 
 * Parent Class: EntityWitch
 */
m.attackEntityWithRangedAttack = "func_82196_d"
/** 
 * Set whether this witch is aggressive at an entity.
 * 
 * Parent Class: EntityWitch
 */
m.setAggressive = "func_82197_f"
/** 
 * Return whether this witch is aggressive at an entity.
 * 
 * Parent Class: EntityWitch
 */
m.getAggressive = "func_82198_m"
/** 
 * Set this skeleton's type.
 * 
 * Parent Class: EntitySkeleton
 */
m.setSkeletonType = "func_82201_a"
/** 
 * Return this skeleton's type.
 * 
 * Parent Class: EntitySkeleton
 */
m.getSkeletonType = "func_82202_m"
/** 
 * "Returns the target entity ID if present
 * 
 * Parent Class: EntityWither
 */
m.getWatchedTargetId = "func_82203_t"
/** 
 * Returns whether the wither is armored with its boss armor or not by checking whether its health is below half of its maximum.
 * 
 * Parent Class: EntityWither
 */
m.isArmored = "func_82205_o"
/** 
 * "Launches a Wither skull toward (par2
 * 
 * Parent Class: EntityWither
 */
m.launchWitherSkullToCoords = "func_82209_a"
/** 
 * Updates the target entity ID
 * 
 * Parent Class: EntityWither
 */
m.updateWatchedTargetId = "func_82211_c"
/** 
 * 
 * 
 * Parent Class: EntityWither
 */
m.getInvulTime = "func_82212_n"
/** 
 * 
 * 
 * Parent Class: EntityWither
 */
m.setInvulTime = "func_82215_s"
/** 
 * 
 * 
 * Parent Class: EntityWither
 */
m.launchWitherSkullToEntity = "func_82216_a"
/** 
 * Set whether this zombie is a child.
 * 
 * Parent Class: EntityZombie
 */
m.setChild = "func_82227_f"
/** 
 * Starts converting this zombie into a villager. The zombie converts into a villager after the specified time in ticks.
 * 
 * Parent Class: EntityZombie
 */
m.startConversion = "func_82228_a"
/** 
 * Set whether this zombie is a villager.
 * 
 * Parent Class: EntityZombie
 */
m.setVillager = "func_82229_g"
/** 
 * Returns whether this zombie is in the process of converting to a villager
 * 
 * Parent Class: EntityZombie
 */
m.isConverting = "func_82230_o"
/** 
 * Return whether this zombie is a villager.
 * 
 * Parent Class: EntityZombie
 */
m.isVillager = "func_82231_m"
/** 
 * Convert this zombie into a villager.
 * 
 * Parent Class: EntityZombie
 */
m.convertToVillager = "func_82232_p"
/** 
 * Return the amount of time decremented from conversionTime every tick.
 * 
 * Parent Class: EntityZombie
 */
m.getConversionTimeBoost = "func_82233_q"
/** 
 * 
 * 
 * Parent Class: EntityBat
 */
m.getIsBatHanging = "func_82235_h"
/** 
 * 
 * 
 * Parent Class: EntityBat
 */
m.setIsBatHanging = "func_82236_f"
/** 
 * Add experience levels to this player.
 * 
 * Parent Class: EntityPlayer
 */
m.addExperienceLevel = "func_82242_a"
/** 
 * "When searching for vulnerable players
 * 
 * Parent Class: EntityPlayer
 */
m.getArmorVisibility = "func_82243_bO"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.isSpawnForced = "func_82245_bX"
/** 
 * 
 * 
 * Parent Class: EntityPainting
 */
m.getWidthPixels = "func_82329_d"
/** 
 * 
 * 
 * Parent Class: EntityPainting
 */
m.getHeightPixels = "func_82330_g"
/** 
 * 
 * 
 * Parent Class: EntityItemFrame
 */
m.setDisplayedItem = "func_82334_a"
/** 
 * 
 * 
 * Parent Class: EntityItemFrame
 */
m.getDisplayedItem = "func_82335_i"
/** 
 * 
 * 
 * Parent Class: EntityItemFrame
 */
m.setItemRotation = "func_82336_g"
/** 
 * Sets the particle alpha (float)
 * 
 * Parent Class: EntityFX
 */
m.setAlphaF = "func_82338_g"
/** 
 * Sets the PotionEffect by the given id of the potion effect.
 * 
 * Parent Class: EntityPotion
 */
m.setPotionDamage = "func_82340_a"
/** 
 * Return the motion factor for this projectile. The factor is multiplied by the original motion.
 * 
 * Parent Class: EntityWitherSkull
 */
m.getMotionFactor = "func_82341_c"
/** 
 * Return whether command blocks are enabled.
 * 
 * Parent Class: MinecraftServer
 */
m.isCommandBlockEnabled = "func_82356_Z"
/** 
 * Return the spawn protection area's size.
 * 
 * Parent Class: MinecraftServer
 */
m.getSpawnProtectionSize = "func_82357_ak"
/** 
 * Return whether the specified command parameter index is a username parameter.
 * 
 * Parent Class: CommandEffect
 */
m.isUsernameIndex = "func_82358_a"
/** 
 * Return the required permission level for this command.
 * 
 * Parent Class: CommandEffect
 */
m.getRequiredPermissionLevel = "func_82362_a"
m.getGameRules = {}
/** 
 * Return the game rule set this command should be able to manipulate.
 * 
 * Parent Class: CommandGameRule
 */
m.getGameRules.CommandGameRule = "func_82366_d"
/** 
 * Gets the GameRules instance.
 * 
 * Parent Class: World
 */
m.getGameRules.World = "func_82736_K"

/** 
 * Return a command's first parameter index containing a valid username.
 * 
 * Parent Class: CommandHandler
 */
m.getUsernameIndex = "func_82370_a"
/** 
 * Returns whether the given pattern can match more than one player.
 * 
 * Parent Class: PlayerSelector
 */
m.matchesMultiplePlayers = "func_82377_a"
/** 
 * "Parses the given argument string
 * 
 * Parent Class: PlayerSelector
 */
m.getArgumentMap = "func_82381_h"
/** 
 * Returns the one player that matches the given at-token.  Returns null if more than one player matches.
 * 
 * Parent Class: PlayerSelector
 */
m.matchOnePlayer = "func_82386_a"
/** 
 * 
 * 
 * Parent Class: RenderPlayer
 */
m.transformHeldFull3DItemLayer = "func_82422_c"
/** 
 * Transfers an entity from a world to another world.
 *  
 * @param oldWorldIn The world transfering from
 * @param toWorldIn The world transfering the entity to
 * 
 * Parent Class: ServerConfigurationManager
 */
m.transferEntityToWorld = "func_82448_a"
/** 
 * Play the dispense sound from the specified block.
 * 
 * Parent Class: Bootstrap$8
 */
m.playDispenseSound = "func_82485_a"
/** 
 * 
 * 
 * Parent Class: BehaviorDefaultDispenseItem
 */
m.doDispense = "func_82486_a"
/** 
 * "Dispense the specified stack
 * 
 * Parent Class: ItemArmor$1
 */
m.dispenseStack = "func_82487_b"
/** 
 * Order clients to display dispense particles from the specified block and facing.
 * 
 * Parent Class: BehaviorDefaultDispenseItem
 */
m.spawnDispenseParticles = "func_82489_a"
/** 
 * Return the projectile entity spawned by this dispense behavior.
 * 
 * Parent Class: Bootstrap$9
 */
m.getProjectileEntity = "func_82499_a"
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
m.setWorldsForAll = "func_82566_a"
/** 
 * 
 * 
 * Parent Class: MapData
 */
m.updateDecorations = "func_82567_a"
/** 
 * 
 * 
 * Parent Class: MapData
 */
m.getMapInfo = "func_82568_a"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.getGeneratorOptions = "func_82571_y"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.setWorldTotalTime = "func_82572_b"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
m.getWorldTotalTime = "func_82573_f"
/** 
 * Gets the GameRules class Instance.
 * 
 * Parent Class: WorldInfo
 */
m.getGameRulesInstance = "func_82574_x"
/** 
 * Create a crash report which indicates a NBT read error.
 * 
 * Parent Class: NBTTagCompound
 */
m.createCrashReport = "func_82581_a"
/** 
 * Return whether this compound has no tags.
 * 
 * Parent Class: NBTBase
 */
m.hasNoTags = "func_82582_d"
/** 
 * Register an object on this registry.
 * 
 * Parent Class: RegistrySimple
 */
m.putObject = "func_82595_a"
/** 
 * Returns a offset that addresses the block in front of this facing.
 * 
 * Parent Class: EnumFacing
 */
m.getFrontOffsetZ = "func_82599_e"
/** 
 * Get a Facing by it's index (0-5). The order is D-U-N-S-W-E. Named getFront for legacy reasons.
 * 
 * Parent Class: EnumFacing
 */
m.getFront = "func_82600_a"
/** 
 * Returns a offset that addresses the block in front of this facing.
 * 
 * Parent Class: EnumFacing
 */
m.getFrontOffsetX = "func_82601_c"
/** 
 * Boost the entity's movement speed.
 * 
 * Parent Class: EntityAIControlledByPlayer
 */
m.boostSpeed = "func_82632_g"
/** 
 * Return whether the entity is being controlled by a player.
 * 
 * Parent Class: EntityAIControlledByPlayer
 */
m.isControlledByPlayer = "func_82633_h"
/** 
 * Return whether the entity's speed is boosted.
 * 
 * Parent Class: EntityAIControlledByPlayer
 */
m.isSpeedBoosted = "func_82634_f"
/** 
 * Return the list of world features enabled on this preset.
 * 
 * Parent Class: FlatGeneratorInfo
 */
m.getWorldFeatures = "func_82644_b"
/** 
 * Set the biome used on this preset.
 * 
 * Parent Class: FlatGeneratorInfo
 */
m.setBiome = "func_82647_a"
/** 
 * 
 * 
 * Parent Class: FlatGeneratorInfo
 */
m.getDefaultFlatGenerator = "func_82649_e"
/** 
 * Return the list of layers on this preset.
 * 
 * Parent Class: FlatGeneratorInfo
 */
m.getFlatLayers = "func_82650_c"
/** 
 * 
 * 
 * Parent Class: FlatGeneratorInfo
 */
m.createFlatGeneratorFromString = "func_82651_a"
/** 
 * "Return the minimum Y coordinate for this layer
 * 
 * Parent Class: FlatLayerInfo
 */
m.getMinY = "func_82656_d"
/** 
 * Return the amount of layers for this set of layers.
 * 
 * Parent Class: FlatLayerInfo
 */
m.getLayerCount = "func_82657_a"
/** 
 * Return the block metadata used on this set of layers.
 * 
 * Parent Class: FlatLayerInfo
 */
m.getFillBlockMeta = "func_82658_c"
/** 
 * Set the minimum Y coordinate for this layer.
 * 
 * Parent Class: FlatLayerInfo
 */
m.setMinY = "func_82660_d"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.setDefaultPlayerReputation = "func_82683_b"
/** 
 * Return the village reputation for a player
 * 
 * Parent Class: Village
 */
m.getReputationForPlayer = "func_82684_a"
/** 
 * 
 * 
 * Parent Class: Village
 */
m.getNearestTargetPlayer = "func_82685_c"
/** 
 * Return whether villagers mating refractory period has passed
 * 
 * Parent Class: Village
 */
m.isMatingSeason = "func_82686_i"
/** 
 * Return whether this player has a too low reputation with this village.
 * 
 * Parent Class: Village
 */
m.isPlayerReputationTooLow = "func_82687_d"
/** 
 * Set the village reputation for a player.
 * 
 * Parent Class: Village
 */
m.setReputationForPlayer = "func_82688_a"
/** 
 * Write this village's data to NBT.
 * 
 * Parent Class: Village
 */
m.writeVillageDataToNBT = "func_82689_b"
/** 
 * Read this village's data from NBT.
 * 
 * Parent Class: Village
 */
m.readVillageDataFromNBT = "func_82690_a"
/** 
 * Prevent villager breeding for a fixed interval of time
 * 
 * Parent Class: Village
 */
m.endMatingSeason = "func_82692_h"
/** 
 * Return whether this creature type is an animal.
 * 
 * Parent Class: EnumCreatureType
 */
m.getAnimal = "func_82705_e"
/** 
 * 
 * 
 * Parent Class: DataWatcher
 */
m.setObjectWatched = "func_82708_h"
/** 
 * "Add a new object for the DataWatcher to watch
 * 
 * Parent Class: DataWatcher
 */
m.addObjectByDataType = "func_82709_a"
/** 
 * Get a watchable object as an ItemStack.
 * 
 * Parent Class: DataWatcher
 */
m.getWatchableObjectItemStack = "func_82710_f"
/** 
 * parses the string as double or returns the second parameter if it fails.
 * 
 * Parent Class: MathHelper
 */
m.parseDoubleWithDefault = "func_82712_a"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.parseDoubleWithDefaultAndMax = "func_82713_a"
/** 
 * parses the string as integer or returns the second parameter if it fails. this value is capped to par2
 * 
 * Parent Class: MathHelper
 */
m.parseIntWithDefaultAndMax = "func_82714_a"
/** 
 * 
 * 
 * Parent Class: MathHelper
 */
m.getRandomDoubleInRange = "func_82716_a"
/** 
 * Write a custom potion effect to a potion item's NBT data.
 * 
 * Parent Class: PotionEffect
 */
m.writeCustomPotionEffectToNBT = "func_82719_a"
/** 
 * Gets whether this potion effect originated from a beacon
 * 
 * Parent Class: PotionEffect
 */
m.getIsAmbient = "func_82720_e"
/** 
 * Set whether this potion is a splash potion.
 * 
 * Parent Class: PotionEffect
 */
m.setSplashPotion = "func_82721_a"
/** 
 * Read a custom potion effect from a potion item's NBT data.
 * 
 * Parent Class: PotionEffect
 */
m.readCustomPotionEffectFromNBT = "func_82722_b"
/** 
 * Returns true if the damage is magic based.
 * 
 * Parent Class: DamageSource
 */
m.isMagicDamage = "func_82725_o"
/** 
 * Define the damage type as magic based.
 * 
 * Parent Class: DamageSource
 */
m.setMagicDamage = "func_82726_p"
/** 
 * Gets the lowest height of the chunk where sunlight directly reaches
 * 
 * Parent Class: World
 */
m.getChunksLowestHorizon = "func_82734_g"
/** 
 * 
 * 
 * Parent Class: World
 */
m.setTotalWorldTime = "func_82738_a"
/** 
 * Resets the updateEntityTick field to 0
 * 
 * Parent Class: WorldServer
 */
m.resetUpdateEntityTick = "func_82742_i"
/** 
 * retrieves the 'date' at which the PartiallyDestroyedBlock was created
 * 
 * Parent Class: DestroyBlockProgress
 */
m.getCreationCloudUpdateTick = "func_82743_f"
/** 
 * saves the current Cloud update tick into the PartiallyDestroyedBlock
 * 
 * Parent Class: DestroyBlockProgress
 */
m.setCloudUpdateTick = "func_82744_b"
/** 
 * 
 * 
 * Parent Class: WorldType
 */
m.getWorldTypeID = "func_82747_f"
/** 
 * Returns true if this is the ADVENTURE game type
 * 
 * Parent Class: WorldSettings$GameType
 */
m.isAdventure = "func_82752_c"
/** 
 * 
 * 
 * Parent Class: NextTickListEntry
 */
m.setPriority = "func_82753_a"
/** 
 * Return the defined game rules.
 * 
 * Parent Class: GameRules
 */
m.getRules = "func_82763_b"
/** 
 * 
 * 
 * Parent Class: GameRules
 */
m.setOrCreateGameRule = "func_82764_b"
/** 
 * Return whether the specified game rule is defined.
 * 
 * Parent Class: GameRules
 */
m.hasRule = "func_82765_e"
m.getEnchantments = {}
/** 
 * Return the enchantments for the specified stack.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getEnchantments.EnchantmentHelper = "func_82781_a"
/** 
 * 
 * 
 * Parent Class: ItemEnchantedBook
 */
m.getEnchantments.ItemEnchantedBook = "func_92110_g"

/** 
 * Set the enchantments for the specified stack.
 * 
 * Parent Class: EnchantmentHelper
 */
m.setEnchantments = "func_82782_a"
/** 
 * 
 * 
 * Parent Class: MerchantRecipe
 */
m.increaseMaxTradeUses = "func_82783_a"
/** 
 * 
 * 
 * Parent Class: MerchantRecipe
 */
m.isRecipeDisabled = "func_82784_g"
/** 
 * Compensates {@link net.minecraft.village.MerchantRecipe#toolUses toolUses} with {@link net.minecraft.village.MerchantRecipe#maxTradeUses maxTradeUses}
 * 
 * Parent Class: MerchantRecipe
 */
m.compensateToolUses = "func_82785_h"
/** 
 * Retrieves an ItemStack that has multiple recipes for it.
 * 
 * Parent Class: CraftingManager
 */
m.findMatchingRecipe = "func_82787_a"
/** 
 * "Returns true if players can use this item to affect the world (e.g. placing blocks
 * 
 * Parent Class: Item
 */
m.canItemEditBlocks = "func_82788_x"
/** 
 * Return whether this item is repairable in an anvil.
 * 
 * Parent Class: Item
 */
m.getIsRepairable = "func_82789_a"
/** 
 * 
 * 
 * Parent Class: Item
 */
m.getColorFromItemStack = "func_82790_a"
/** 
 * Return the armor material for this armor item.
 * 
 * Parent Class: ItemArmor
 */
m.getArmorMaterial = "func_82812_d"
/** 
 * Remove the color from the specified armor ItemStack.
 * 
 * Parent Class: ItemArmor
 */
m.removeColor = "func_82815_c"
/** 
 * Check whether a {@link Collection}<{@link PotionEffect}> are all ambient.
 * 
 * Parent Class: PotionHelper
 */
m.getAreAmbient = "func_82817_b"
/** 
 * 
 * 
 * Parent Class: BossStatus
 */
m.setBossStatus = "func_82824_a"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
m.canEditBlocks = "func_82835_x"
/** 
 * Return the item frame this stack is on. Returns null if not on an item frame.
 * 
 * Parent Class: ItemStack
 */
m.getItemFrame = "func_82836_z"
/** 
 * Returns true if the itemstack has a display name
 * 
 * Parent Class: ItemStack
 */
m.hasDisplayName = "func_82837_s"
/** 
 * "Get this stack's repair cost
 * 
 * Parent Class: ItemStack
 */
m.getRepairCost = "func_82838_A"
/** 
 * Return whether this stack is on an item frame.
 * 
 * Parent Class: ItemStack
 */
m.isOnItemFrame = "func_82839_y"
/** 
 * Return a list of strings containing information about the item
 * 
 * Parent Class: ItemStack
 */
m.getTooltip = "func_82840_a"
/** 
 * Set this stack's repair cost.
 * 
 * Parent Class: ItemStack
 */
m.setRepairCost = "func_82841_c"
/** 
 * Set the item frame this stack is on.
 * 
 * Parent Class: ItemStack
 */
m.setItemFrame = "func_82842_a"
/** 
 * Take a stack from the specified inventory slot.
 * 
 * Parent Class: ContainerMerchant
 */
m.transferStackInSlot = "func_82846_b"
/** 
 * Remove the given Listener. Method name is for legacy.
 * 
 * Parent Class: Container
 */
m.removeCraftingFromCrafters = "func_82847_b"
/** 
 * "called when the Anvil Input Slot changes
 * 
 * Parent Class: ContainerRepair
 */
m.updateRepairOutput = "func_82848_d"
/** 
 * used by the Anvil GUI to update the Item Name being typed by the player
 * 
 * Parent Class: ContainerRepair
 */
m.updateItemName = "func_82850_a"
/** 
 * Return whether this slot's stack can be taken from this slot.
 * 
 * Parent Class: Slot
 */
m.canTakeStack = "func_82869_a"
/** 
 * 
 * 
 * Parent Class: Slot
 */
m.onPickupFromSlot = "func_82870_a"
/** 
 * 
 * 
 * Parent Class: PlayerCapabilities
 */
m.setPlayerWalkSpeed = "func_82877_b"
/** 
 * Send a client info packet with settings information to the server
 * 
 * Parent Class: GameSettings
 */
m.sendSettingsToServer = "func_82879_c"
/** 
 * Get unicodeFlag controlling whether strings should be rendered with Unicode fonts instead of the default.png font.
 * 
 * Parent Class: FontRenderer
 */
m.getUnicodeFlag = "func_82883_a"
/** 
 * returns a calendar object containing the current date
 * 
 * Parent Class: World
 */
m.getCurrentDate = "func_83015_S"
/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
m.addEntityCrashInfo = "func_85029_a"
/** 
 * Called when a player attacks an entity. If this returns true the attack will not happen.
 * 
 * Parent Class: EntityHanging
 */
m.hitByEntity = "func_85031_j"
/** 
 * 
 * 
 * Parent Class: EntityArmorStand
 */
m.collideWithNearbyEntities = "func_85033_bc"
/** 
 * sets the amount of arrows stuck in the entity. used for rendering those
 * 
 * Parent Class: EntityLivingBase
 */
m.setArrowCountInEntity = "func_85034_r"
/** 
 * "counts the amount of arrows stuck in the entity. getting hit by arrows increases this
 * 
 * Parent Class: EntityLivingBase
 */
m.getArrowCountInEntity = "func_85035_bI"
/** 
 * sets this entity's combat AI.
 * 
 * Parent Class: EntitySkeleton
 */
m.setCombatTask = "func_85036_m"
/** 
 * Add to player's score
 * 
 * Parent Class: EntityPlayer
 */
m.addScore = "func_85039_t"
m.setScore = {}
/** 
 * Set player's score
 * 
 * Parent Class: EntityPlayer
 */
m.setScore.EntityPlayer = "func_85040_s"
/** 
 * 
 * 
 * Parent Class: IScoreObjectiveCriteria
 */
m.setScore.IScoreObjectiveCriteria = "func_96635_a"

/** 
 * Looks for other itemstacks nearby and tries to stack them together
 * 
 * Parent Class: EntityItem
 */
m.searchForOtherItemsNearby = "func_85054_d"
/** 
 * Creates a crash report for the exception
 * 
 * Parent Class: CrashReport
 */
m.makeCrashReport = "func_85055_a"
/** 
 * Creates a CrashReportCategory for the given stack trace depth
 * 
 * Parent Class: CrashReport
 */
m.makeCategoryDepth = "func_85057_a"
/** 
 * Creates a CrashReportCategory
 * 
 * Parent Class: CrashReport
 */
m.makeCategory = "func_85058_a"
/** 
 * "Do the deepest two elements of our saved stack trace match the given elements
 * 
 * Parent Class: CrashReportCategory
 */
m.firstTwoElementsOfStackTraceMatch = "func_85069_a"
/** 
 * Removes the given number entries from the bottom of the stack trace.
 * 
 * Parent Class: CrashReportCategory
 */
m.trimStackTraceEntriesFromBottom = "func_85070_b"
/** 
 * 
 * 
 * Parent Class: CrashReportCategory
 */
m.appendToStringBuilder = "func_85072_a"
/** 
 * "Resets our stack trace according to the current trace
 * 
 * Parent Class: CrashReportCategory
 */
m.getPrunedStackTrace = "func_85073_a"
/** 
 * Renders the bounding box around an entity when F3+B is pressed
 *  
 * @param x X position where to render the debug bounding box
 * @param y Y position where to render the debug bounding box
 * @param z Z position where to render the debug bounding box
 * @param entityYaw The entity yaw
 * @param partialTicks The partials ticks
 * 
 * Parent Class: RenderManager
 */
m.renderDebugBoundingBox = "func_85094_b"
m.playSoundToNearExcept = {}
/** 
 * Plays sound to all near players except the player reference given
 * 
 * Parent Class: WorldManager
 */
m.playSoundToNearExcept.WorldManager = "func_85102_a"
/** 
 * Plays sound to all near players except the player reference given
 * 
 * Parent Class: World
 */
m.playSoundToNearExcept.World = "func_85173_a"

/** 
 * Adds this WorldInfo instance to the crash report.
 * 
 * Parent Class: WorldInfo
 */
m.addToCrashReport = "func_85118_a"
/** 
 * Gets a human-readable string that indicates the sizes of all the cache fields.  Basically a synchronized static toString.
 * 
 * Parent Class: IntCache
 */
m.getCacheSizes = "func_85144_b"
/** 
 * Return this chest container's lower chest inventory.
 * 
 * Parent Class: ContainerChest
 */
m.getLowerChestInventory = "func_85151_d"
/** 
 * removes the indicated task from the entity's AI tasks.
 * 
 * Parent Class: EntityAITasks
 */
m.removeTask = "func_85156_a"
/** 
 * @see #isAdventureModeExempt()
 * 
 * Parent Class: Material
 */
m.setAdventureModeExempt = "func_85158_p"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
m.getDefaultTeleporter = "func_85176_s"
/** 
 * 
 * 
 * Parent Class: ModelBase
 */
m.getRandomModelBox = "func_85181_a"
/** 
 * 
 * 
 * Parent Class: Teleporter
 */
m.makePortal = "func_85188_a"
/** 
 * called periodically to remove out-of-date portal locations from the cache list. Argument par1 is a WorldServer.getTotalWorldTime() value.
 * 
 * Parent Class: Teleporter
 */
m.removeStalePortalLocations = "func_85189_a"
/** 
 * Return whether the given inventory is part of this large chest.
 * 
 * Parent Class: InventoryLargeChest
 */
m.isPartOfLargeChest = "func_90010_a"
/** 
 * 
 * 
 * Parent Class: EntityVillager
 */
m.createChild = "func_90011_a"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.getLimitFramerate = "func_90020_K"
/** 
 * 
 * 
 * Parent Class: CommandEnchant
 */
m.getListOfPlayers = "func_90022_d"
/** 
 * Return whether the given world can be loaded.
 *  
 * @param saveName The current save's name
 * 
 * Parent Class: ISaveFormat
 */
m.canLoadWorld = "func_90033_f"
/** 
 * Return the class assigned to this entity ID.
 * 
 * Parent Class: EntityList
 */
m.getClassFromID = "func_90035_a"
/** 
 * Returns the fire aspect modifier of the players held item.
 * 
 * Parent Class: EnchantmentHelper
 */
m.getFireAspectModifier = "func_90036_a"
/** 
 * Return whether this entity should be rendered as on fire.
 * 
 * Parent Class: EntityFallingBlock
 */
m.canRenderOnFire = "func_90999_ad"
/** 
 * "Creates a single particle. Args: x
 * 
 * Parent Class: EntityFirework$StarterFX
 */
m.createParticle = "func_92034_a"
/** 
 * "Creates a small ball or large ball type explosion. Args: particle speed
 * 
 * Parent Class: EntityFirework$StarterFX
 */
m.createBall = "func_92035_a"
/** 
 * "Creates a burst type explosion. Args: colours
 * 
 * Parent Class: EntityFirework$StarterFX
 */
m.createBurst = "func_92036_a"
/** 
 * "Creates a creeper-shaped or star-shaped explosion. Args: particle speed
 * 
 * Parent Class: EntityFirework$StarterFX
 */
m.createShaped = "func_92038_a"
/** 
 * 
 * 
 * Parent Class: EntityFirework$SparkFX
 */
m.setTwinkle = "func_92043_f"
/** 
 * 
 * 
 * Parent Class: EntityFirework$SparkFX
 */
m.setColour = "func_92044_a"
/** 
 * 
 * 
 * Parent Class: EntityFirework$SparkFX
 */
m.setTrail = "func_92045_e"
/** 
 * 
 * 
 * Parent Class: EntityFirework$SparkFX
 */
m.setFadeColour = "func_92046_g"
/** 
 * Sets the ItemStack for this entity
 * 
 * Parent Class: EntityItem
 */
m.setEntityItemStack = "func_92058_a"
/** 
 * "Returns the ItemStack corresponding to the Entity (Note: if no item exists
 * 
 * Parent Class: EntityItem
 */
m.getEntityItem = "func_92059_d"
/** 
 * 
 * 
 * Parent Class: DataWatcher
 */
m.getIsBlank = "func_92085_d"
/** 
 * Returns the EntityDamageSource of the Thorns enchantment
 *  
 * @param source The Entity that wears the armor with thorn
 * 
 * Parent Class: DamageSource
 */
m.causeThornsDamage = "func_92087_a"
/** 
 * 
 * 
 * Parent Class: WorldClient
 */
m.makeFireworks = "func_92088_a"
/** 
 * Determines if this enchantment can be applied to a specific ItemStack.
 * 
 * Parent Class: EnchantmentUntouching
 */
m.canApply = "func_92089_a"
/** 
 * "Gets the amount of ticks an entity should be set fire
 * 
 * Parent Class: EnchantmentProtection
 */
m.getFireTimeForEntity = "func_92093_a"
/** 
 * "Used by ItemStack.attemptDamageItem. Randomly determines if a point of damage should be negated using the enchantment level (par1). If the ItemStack is Armor then there is a flat 60% chance for damage to be negated no matter the enchantment level
 * 
 * Parent Class: EnchantmentDurability
 */
m.negateDamage = "func_92097_a"
/** 
 * 
 * 
 * Parent Class: EnchantmentHelper
 */
m.getEnchantedItem = "func_92099_a"
/** 
 * Returns the ItemStack of an enchanted version of this item.
 * 
 * Parent Class: ItemEnchantedBook
 */
m.getEnchantedItemStack = "func_92111_a"
/** 
 * 
 * 
 * Parent Class: ItemEnchantedBook
 */
m.getRandom = "func_92114_b"
/** 
 * 
 * 
 * Parent Class: ItemEnchantedBook
 */
m.getAll = "func_92113_a"
/** 
 * Adds the enchantment books from the supplied EnumEnchantmentType to the given list.
 * 
 * Parent Class: CreativeTabs
 */
m.addEnchantmentBooksToList = "func_92116_a"
/** 
 * Returns true if automation is allowed to insert the given stack (ignoring stack size) into the given slot.
 * 
 * Parent Class: InventoryCraftResult
 */
m.isItemValidForSlot = "func_94041_b"
/** 
 * 
 * 
 * Parent Class: EntityFX
 */
m.nextTextureIndexX = "func_94053_h"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getAlwaysRenderNameTagForRender = "func_94059_bO"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
m.getAttackingEntity = "func_94060_bK"
/** 
 * Set whether this Entity's AI is disabled
 * 
 * Parent Class: EntityLiving
 */
m.setNoAI = "func_94061_f"
/** 
 * returns null or the entityliving it was placed or ignited by
 * 
 * Parent Class: EntityTNTPrimed
 */
m.getTntPlacedBy = "func_94083_c"
/** 
 * 
 * 
 * Parent Class: EntityMinecartHopper
 */
m.getDefaultDisplayTileOffset = "func_94085_r"
/** 
 * 
 * 
 * Parent Class: EntityMinecart
 */
m.setDisplayTileOffset = "func_94086_l"
/** 
 * 
 * 
 * Parent Class: EntityMinecartTNT
 */
m.killMinecart = "func_94095_a"
/** 
 * 
 * 
 * Parent Class: EntityMinecart
 */
m.setHasDisplayTile = "func_94096_e"
/** 
 * 
 * 
 * Parent Class: EntityMinecart
 */
m.getDisplayTileOffset = "func_94099_q"
/** 
 * 
 * 
 * Parent Class: EntityMinecart
 */
m.hasDisplayTile = "func_94100_s"
/** 
 * 
 * 
 * Parent Class: EntityMinecartFurnace
 */
m.applyDrag = "func_94101_h"
/** 
 * Makes the minecart explode.
 * 
 * Parent Class: EntityMinecartTNT
 */
m.explodeCart = "func_94103_c"
/** 
 * Gets the remaining fuse time in ticks.
 * 
 * Parent Class: EntityMinecartTNT
 */
m.getFuseTicks = "func_94104_d"
/** 
 * 
 * 
 * Parent Class: EntityMinecartFurnace
 */
m.setMinecartPowered = "func_94107_f"
/** 
 * 
 * 
 * Parent Class: EntityMinecartFurnace
 */
m.isMinecartPowered = "func_94108_c"
/** 
 * 
 * 
 * Parent Class: Stitcher$Slot
 */
m.addSlot = "func_94182_a"
/** 
 * 
 * 
 * Parent Class: Stitcher$Slot
 */
m.getStitchHolder = "func_94183_a"
/** 
 * Gets the slot and all its subslots
 * 
 * Parent Class: Stitcher$Slot
 */
m.getAllStitchSlots = "func_94184_a"
/** 
 * 
 * 
 * Parent Class: Stitcher$Holder
 */
m.isRotated = "func_94195_e"
/** 
 * 
 * 
 * Parent Class: Stitcher$Holder
 */
m.setNewDimension = "func_94196_a"
/** 
 * Returns the minimum V coordinate to use when rendering with this icon.
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getMinV = "func_94206_g"
/** 
 * Gets a V coordinate on the icon. 0 returns vMin and 16 returns vMax. Other arguments return in-between values.
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getInterpolatedV = "func_94207_b"
/** 
 * Returns the minimum U coordinate to use when rendering with this icon.
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getMinU = "func_94209_e"
/** 
 * Returns the maximum V coordinate to use when rendering with this icon.
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getMaxV = "func_94210_h"
/** 
 * "Returns the width of the icon
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getIconWidth = "func_94211_a"
/** 
 * Returns the maximum U coordinate to use when rendering with this icon.
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getMaxU = "func_94212_f"
/** 
 * Gets a U coordinate on the icon. 0 returns uMin and 16 returns uMax. Other arguments return in-between values.
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getInterpolatedU = "func_94214_a"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getIconName = "func_94215_i"
/** 
 * "Returns the height of the icon
 * 
 * Parent Class: TextureAtlasSprite
 */
m.getIconHeight = "func_94216_b"
/** 
 * "Updates the compass based on the given x
 * 
 * Parent Class: TextureCompass
 */
m.updateCompass = "func_94241_a"
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
m.updateAnimations = "func_94248_c"
/** 
 * 
 * 
 * Parent Class: Stitcher
 */
m.doStitch = "func_94305_f"
/** 
 * 
 * 
 * Parent Class: Stitcher
 */
m.getStichSlots = "func_94309_g"
/** 
 * Attempts to find space for specified tile
 * 
 * Parent Class: Stitcher
 */
m.allocateSlot = "func_94310_b"
/** 
 * Expand stitched texture in order to make space for specified tile
 * 
 * Parent Class: Stitcher
 */
m.expandAndAllocateSlot = "func_94311_c"
/** 
 * Returns true if the passed key is in the translation table.
 * 
 * Parent Class: StringTranslate
 */
m.isKeyTranslated = "func_94520_b"
/** 
 * Determines whether or not translateToLocal will find a translation for the given key.
 * 
 * Parent Class: StatCollector
 */
m.canTranslate = "func_94522_b"
/** 
 * "Compute the new stack size
 * 
 * Parent Class: Container
 */
m.computeStackSize = "func_94525_a"
/** 
 * 
 * 
 * Parent Class: Container
 */
m.calcRedstoneFromInventory = "func_94526_b"
/** 
 * Checks if it's possible to add the given itemstack to the given slot.
 * 
 * Parent Class: Container
 */
m.canAddItemToSlot = "func_94527_a"
/** 
 * "Extracts the drag mode. Args : eventButton. Return (0 : evenly split
 * 
 * Parent Class: Container
 */
m.extractDragMode = "func_94529_b"
/** 
 * Called to determine if the current slot is valid for the stack merging (double-click) code. The stack passed in is null for the initial slot that was double-clicked.
 * 
 * Parent Class: ContainerPlayer
 */
m.canMergeSlot = "func_94530_a"
/** 
 * "Returns true if the player can ""drag-spilt"" items into this slot
 * 
 * Parent Class: Container
 */
m.canDragIntoSlot = "func_94531_b"
/** 
 * "Args : clickedButton
 * 
 * Parent Class: Container
 */
m.getDragEvent = "func_94532_c"
/** 
 * Reset the drag fields
 * 
 * Parent Class: Container
 */
m.resetDrag = "func_94533_d"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.setExplosionSource = "func_94539_a"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.setExplosion = "func_94540_d"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
m.isExplosion = "func_94541_c"
/** 
 * Adds an entry for the combat tracker
 * 
 * Parent Class: CombatTracker
 */
m.trackDamage = "func_94547_a"
/** 
 * Returns true if {@link net.minecraft.util.DamageSource#getEntity() damage source} is a living entity
 * 
 * Parent Class: CombatEntry
 */
m.isLivingDamageSrc = "func_94559_f"
/** 
 * Get the DamageSource of the CombatEntry instance.
 * 
 * Parent Class: CombatEntry
 */
m.getDamageSrc = "func_94560_a"
/** 
 * "Returns either the entity that placed the explosive block
 * 
 * Parent Class: Explosion
 */
m.getExplosivePlacedBy = "func_94613_c"
/** 
 * 
 * 
 * Parent Class: EntityMinecart
 */
m.getCustomNameTag = "func_95999_t"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.isPushedByWater = "func_96092_aw"
/** 
 * Sets the custom name tag for this entity
 * 
 * Parent Class: EntityMinecart
 */
m.setCustomNameTag = "func_96094_a"
/** 
 * "Called every tick the minecart is on an activator rail. Args: x
 * 
 * Parent Class: EntityMinecartTNT
 */
m.onActivatorRailPass = "func_96095_a"
/** 
 * Returns true if the TNT minecart is ignited.
 * 
 * Parent Class: EntityMinecartTNT
 */
m.isIgnited = "func_96096_ay"
/** 
 * Gets the world X position for this hopper entity.
 * 
 * Parent Class: EntityMinecartHopper
 */
m.getXPos = "func_96107_aA"
/** 
 * Gets the world Z position for this hopper entity.
 * 
 * Parent Class: EntityMinecartHopper
 */
m.getZPos = "func_96108_aC"
/** 
 * Gets the world Y position for this hopper entity.
 * 
 * Parent Class: EntityMinecartHopper
 */
m.getYPos = "func_96109_aB"
/** 
 * Set whether this hopper minecart is being blocked by an activator rail.
 * 
 * Parent Class: EntityMinecartHopper
 */
m.setBlocked = "func_96110_f"
/** 
 * Get whether this hopper minecart is being blocked by an activator rail.
 * 
 * Parent Class: EntityMinecartHopper
 */
m.getBlocked = "func_96111_ay"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.setEquipmentDropChance = "func_96120_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.canAttackPlayer = "func_96122_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayer
 */
m.getWorldScoreboard = "func_96123_co"
/** 
 * "Gets all the valid values. Args: @param par0: Whether or not to include color values. @param par1: Whether or not to include fancy-styling values (anything that isn't a color value or the ""reset"" value)."
 * 
 * Parent Class: EnumChatFormatting
 */
m.getValidValues = "func_96296_a"
/** 
 * Gets the friendly name of this value.
 * 
 * Parent Class: EnumChatFormatting
 */
m.getFriendlyName = "func_96297_d"
/** 
 * Gets a value by its friendly name; null if the given name does not map to a defined value.
 * 
 * Parent Class: EnumChatFormatting
 */
m.getValueByName = "func_96300_b"
/** 
 * False if this is just changing the color or resetting; true otherwise.
 * 
 * Parent Class: EnumChatFormatting
 */
m.isFancyStyling = "func_96301_b"
/** 
 * Checks if this is a color code.
 * 
 * Parent Class: EnumChatFormatting
 */
m.isColor = "func_96302_c"
/** 
 * "Creates a linguistic series joining together the elements of the given collection.  Examples: 1) {} --> """"
 * 
 * Parent Class: CommandBase
 */
m.joinNiceStringFromCollection = "func_96333_a"
/** 
 * 
 * 
 * Parent Class: WorldClient
 */
m.setWorldScoreboard = "func_96443_a"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
m.sendScoreboard = "func_96456_a"
/** 
 * 
 * 
 * Parent Class: ScoreboardSaveData
 */
m.readTeams = "func_96498_a"
/** 
 * 
 * 
 * Parent Class: ScoreboardSaveData
 */
m.setScoreboard = "func_96499_a"
/** 
 * 
 * 
 * Parent Class: ScoreboardSaveData
 */
m.readScores = "func_96500_c"
/** 
 * 
 * 
 * Parent Class: ScoreboardSaveData
 */
m.readObjectives = "func_96501_b"
/** 
 * 
 * 
 * Parent Class: ScoreboardSaveData
 */
m.scoresToNbt = "func_96503_e"
/** 
 * 
 * 
 * Parent Class: ScoreboardSaveData
 */
m.readDisplayConfig = "func_96504_c"
/** 
 * 
 * 
 * Parent Class: ScoreboardSaveData
 */
m.objectivesToNbt = "func_96505_b"
/** 
 * Gets the ScorePlayerTeam object for the given username.
 * 
 * Parent Class: Scoreboard
 */
m.getPlayersTeam = "func_96509_i"
/** 
 * Returns all the objectives for the given entity
 * 
 * Parent Class: Scoreboard
 */
m.getObjectivesForEntity = "func_96510_d"
/** 
 * Removes the given username from the given ScorePlayerTeam. If the player is not on the team then an IllegalStateException is thrown.
 * 
 * Parent Class: ServerScoreboard
 */
m.removePlayerFromTeam = "func_96512_b"
/** 
 * 
 * 
 * Parent Class: Scoreboard
 */
m.getScoreObjectives = "func_96514_c"
/** 
 * "Returns 'list' for 0
 * 
 * Parent Class: Scoreboard
 */
m.getObjectiveDisplaySlot = "func_96517_b"
/** 
 * Returns all the objectives for the given criteria
 * 
 * Parent Class: Scoreboard
 */
m.getObjectivesFromCriteria = "func_96520_a"
/** 
 * Called when a score objective is added
 * 
 * Parent Class: ServerScoreboard
 */
m.onScoreObjectiveAdded = "func_96522_a"
/** 
 * "This packet will notify the players that this team is created
 * 
 * Parent Class: ServerScoreboard
 */
m.broadcastTeamCreated = "func_96523_a"
/** 
 * 
 * 
 * Parent Class: Scoreboard
 */
m.removePlayerFromTeams = "func_96524_g"
/** 
 * Retrieve all registered ScorePlayerTeam instances
 * 
 * Parent Class: Scoreboard
 */
m.getTeams = "func_96525_g"
/** 
 * 
 * 
 * Parent Class: Scoreboard
 */
m.getObjectiveNames = "func_96526_d"
/** 
 * 
 * 
 * Parent Class: Scoreboard
 */
m.createTeam = "func_96527_f"
/** 
 * 
 * 
 * Parent Class: Scoreboard
 */
m.getScores = "func_96528_e"
/** 
 * Returns the value of the given objective for the given entity name
 * 
 * Parent Class: Scoreboard
 */
m.getValueFromObjective = "func_96529_a"
/** 
 * "0 is tab menu
 * 
 * Parent Class: ServerScoreboard
 */
m.setObjectiveInDisplaySlot = "func_96530_a"
/** 
 * Retrieve all registered ScorePlayerTeam names
 * 
 * Parent Class: Scoreboard
 */
m.getTeamNames = "func_96531_f"
/** 
 * 
 * 
 * Parent Class: ServerScoreboard
 */
m.onObjectiveDisplayNameChanged = "func_96532_b"
/** 
 * 
 * 
 * Parent Class: ServerScoreboard
 */
m.onScoreObjectiveRemoved = "func_96533_c"
/** 
 * "Returns an array of Score objects
 * 
 * Parent Class: Scoreboard
 */
m.getSortedScores = "func_96534_i"
/** 
 * Create and returns the score objective for the given name and ScoreCriteria
 * 
 * Parent Class: Scoreboard
 */
m.addScoreObjective = "func_96535_a"
/** 
 * "Returns 0 for (case-insensitive) 'list'
 * 
 * Parent Class: Scoreboard
 */
m.getObjectiveDisplaySlotNumber = "func_96537_j"
/** 
 * This packet will notify the players that this team is updated
 * 
 * Parent Class: ServerScoreboard
 */
m.sendTeamUpdate = "func_96538_b"
/** 
 * "0 is tab menu
 * 
 * Parent Class: Scoreboard
 */
m.getObjectiveInDisplaySlot = "func_96539_a"
/** 
 * 
 * 
 * Parent Class: ServerScoreboard
 */
m.sendDisplaySlotRemovalPackets = "func_96546_g"
/** 
 * 
 * 
 * Parent Class: ServerScoreboard
 */
m.markSaveDataDirty = "func_96551_b"
/** 
 * 
 * 
 * Parent Class: EnumFacing
 */
m.getFrontOffsetY = "func_96559_d"
/** 
 * "Attempts to damage the ItemStack with par1 amount of damage
 * 
 * Parent Class: ItemStack
 */
m.attemptDamageItem = "func_96631_a"
/** 
 * 
 * 
 * Parent Class: IScoreObjectiveCriteria
 */
m.isReadOnly = "func_96637_b"
/** 
 * 
 * 
 * Parent Class: Score
 */
m.decreaseScore = "func_96646_b"
/** 
 * 
 * 
 * Parent Class: Score
 */
m.setScorePoints = "func_96647_c"
/** 
 * 
 * 
 * Parent Class: Score
 */
m.increseScore = "func_96649_a"
/** 
 * 
 * 
 * Parent Class: Score
 */
m.getScoreScoreboard = "func_96650_f"
/** 
 * 
 * 
 * Parent Class: Score
 */
m.getScorePoints = "func_96652_c"
/** 
 * 
 * 
 * Parent Class: ScorePlayerTeam
 */
m.setAllowFriendlyFire = "func_96660_a"
/** 
 * Retrieve the name by which this team is registered in the scoreboard
 * 
 * Parent Class: Team
 */
m.getRegisteredName = "func_96661_b"
/** 
 * 
 * 
 * Parent Class: ScorePlayerTeam
 */
m.setNameSuffix = "func_96662_c"
/** 
 * Returns the color suffix for the player's team name
 * 
 * Parent Class: ScorePlayerTeam
 */
m.getColorSuffix = "func_96663_f"
/** 
 * 
 * 
 * Parent Class: ScorePlayerTeam
 */
m.setTeamName = "func_96664_a"
/** 
 * 
 * 
 * Parent Class: Team
 */
m.getAllowFriendlyFire = "func_96665_g"
/** 
 * 
 * 
 * Parent Class: ScorePlayerTeam
 */
m.setNamePrefix = "func_96666_b"
/** 
 * Returns the player name including the color prefixes and suffixes
 * 
 * Parent Class: ScorePlayerTeam
 */
m.formatPlayerName = "func_96667_a"
/** 
 * Returns the color prefix for the player's team name
 * 
 * Parent Class: ScorePlayerTeam
 */
m.getColorPrefix = "func_96668_e"
/** 
 * 
 * 
 * Parent Class: ScorePlayerTeam
 */
m.getTeamName = "func_96669_c"
/** 
 * 
 * 
 * Parent Class: Team
 */
m.getMembershipCollection = "func_96670_d"
/** 
 * "Only used by renderer in EntityLivingBase subclasses.
 * Determines if an entity is visible or not to a specfic player
 * 
 * Parent Class: EntityPlayer
 */
m.isInvisibleToPlayer = "func_98034_c"
/** 
 * Like writeToNBTOptional but does not check if the entity is ridden. Used for saving ridden entities with their riders.
 * 
 * Parent Class: Entity
 */
m.writeMountToNBT = "func_98035_c"
/** 
 * "Sets the transfer ticker
 * 
 * Parent Class: EntityMinecartHopper
 */
m.setTransferTicker = "func_98042_n"
/** 
 * Returns whether the hopper cart can currently transfer an item.
 * 
 * Parent Class: EntityMinecartHopper
 */
m.canTransfer = "func_98043_aE"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.canPickUpLoot = "func_98052_bS"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
m.setCanPickUpLoot = "func_98053_h"
/** 
 * """Sets the scale for an ageable entity according to the boolean parameter
 * 
 * Parent Class: EntityHorse
 */
m.setScaleForAge = "func_98054_a"
/** 
 * 
 * 
 * Parent Class: EntityAgeable
 */
m.setScale = "func_98055_j"
/** 
 * "Sets the delay to minDelay if parameter given is 1
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.setDelayToMin = "func_98268_b"
/** 
 * 
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.getRandomEntity = "func_98269_i"
/** 
 * 
 * 
 * Parent Class: EntityMinecartMobSpawner$1
 */
m.getSpawnerWorld = "func_98271_a"
/** 
 * 
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.setEntityName = "func_98272_a"
/** 
 * 
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.resetTimer = "func_98273_j"
/** 
 * Gets the entity name that should be spawned.
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.getEntityNameToSpawn = "func_98276_e"
/** 
 * 
 * 
 * Parent Class: TileEntityMobSpawner$1
 */
m.setRandomEntity = "func_98277_a"
/** 
 * 
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.updateSpawner = "func_98278_g"
/** 
 * Returns true if there's a player close enough to this mob spawner to activate it.
 * 
 * Parent Class: MobSpawnerBaseLogic
 */
m.isActivated = "func_98279_f"
/** 
 * 
 * 
 * Parent Class: Team
 */
m.getSeeFriendlyInvisiblesEnabled = "func_98297_h"
/** 
 * 
 * 
 * Parent Class: ScorePlayerTeam
 */
m.setSeeFriendlyInvisiblesEnabled = "func_98300_b"
/** 
 * 
 * 
 * Parent Class: FontRenderer
 */
m.readGlyphSizes = "func_98306_d"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
m.run = "func_99999_d"
/** 
 * 
 * 
 * Parent Class: undefined
 */
m.undefined = ""
/** 
 * "True if potion effect duration is at maximum
 * 
 * Parent Class: PotionEffect
 */
f.isPotionDurationMax = "field_100013_f"
/** 
 * 
 * 
 * Parent Class: EntityEnderman
 */
f.isAggressive = "field_104003_g"
/** 
 * Link to the Mojang Support about minimum requirements
 * 
 * Parent Class: GuiMainMenu
 */
f.openGLWarningLink = "field_104024_v"
/** 
 * The Object object utilized as a thread lock when performing non thread-safe operations
 * 
 * Parent Class: GuiMainMenu
 */
f.threadLock = "field_104025_t"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
f.isGamemodeForced = "field_104057_T"
/** 
 * 
 * 
 * Parent Class: EntityFootStepFX
 */
f.FOOTPRINT_TEXTURE = "field_110126_a"
/** 
 * 
 * 
 * Parent Class: EntityLargeExplodeFX
 */
f.EXPLOSION_TEXTURE = "field_110127_a"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
f.lastAttacker = "field_110150_bn"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
f.absorptionAmount = "field_110151_bq"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
f.newPosZ = "field_110152_bk"
/** 
 * Damage taken in the last hit. Mobs are resistant to damage less than this for a short time after taking damage.
 * 
 * Parent Class: EntityLivingBase
 */
f.lastDamage = "field_110153_bc"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
f.onGroundSpeedFactor = "field_110154_aX"
f.attributeMap = {}
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
f.attributeMap.EntityLivingBase = "field_110155_d"
/** 
 * The BaseAttributeMap this attributeInstance can be found in
 * 
 * Parent Class: ModifiableAttributeInstance
 */
f.attributeMap.ModifiableAttributeInstance = "field_111138_a"

/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
f.sprintingSpeedBoostModifierUUID = "field_110156_b"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
f.sprintingSpeedBoostModifier = "field_110157_c"
/** 
 * 
 * 
 * Parent Class: EntityLivingBase
 */
f.swingProgressInt = "field_110158_av"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
f.leashedToEntity = "field_110168_bw"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
f.isLeashed = "field_110169_bv"
/** 
 * 
 * 
 * Parent Class: EntityLiving
 */
f.leashNBTTag = "field_110170_bx"
/** 
 * 
 * 
 * Parent Class: EntityCreature
 */
f.aiBase = "field_110178_bs"
/** 
 * 
 * 
 * Parent Class: EntityCreature
 */
f.FLEEING_SPEED_MODIFIER_UUID = "field_110179_h"
/** 
 * 
 * 
 * Parent Class: EntityCreature
 */
f.isMovementAITaskSet = "field_110180_bt"
/** 
 * 
 * 
 * Parent Class: EntityCreature
 */
f.FLEEING_SPEED_MODIFIER = "field_110181_i"
/** 
 * 
 * 
 * Parent Class: EntityWitch
 */
f.MODIFIER_UUID = "field_110184_bp"
/** 
 * 
 * 
 * Parent Class: EntityWitch
 */
f.MODIFIER = "field_110185_bq"
/** 
 * The attribute which determines the chance that this mob will spawn reinforcements
 * 
 * Parent Class: EntityZombie
 */
f.reinforcementChance = "field_110186_bp"
/** 
 * 
 * 
 * Parent Class: EntityZombie
 */
f.babySpeedBoostUUID = "field_110187_bq"
/** 
 * 
 * 
 * Parent Class: EntityZombie
 */
f.babySpeedBoostModifier = "field_110188_br"
/** 
 * 
 * 
 * Parent Class: EntityPigZombie
 */
f.ATTACK_SPEED_BOOST_MODIFIER_UUID = "field_110189_bq"
/** 
 * 
 * 
 * Parent Class: EntityPigZombie
 */
f.ATTACK_SPEED_BOOST_MODIFIER = "field_110190_br"
/** 
 * 
 * 
 * Parent Class: EntityEnderman
 */
f.attackingSpeedBoostModifierUUID = "field_110192_bp"
/** 
 * 
 * 
 * Parent Class: EntityEnderman
 */
f.attackingSpeedBoostModifier = "field_110193_bq"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.horseTextures = "field_110268_bz"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.HORSE_TEXTURES_ABBR = "field_110269_bA"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.horseArmorTextures = "field_110270_bw"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.horseJumpStrength = "field_110271_bv"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.armorValues = "field_110272_by"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.HORSE_ARMOR_TEXTURES_ABBR = "field_110273_bx"
/** 
 * """The higher this value
 * 
 * Parent Class: EntityHorse
 */
f.temper = "field_110274_bs"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.horseJumping = "field_110275_br"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.horseBreedingSelector = "field_110276_bu"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.jumpPower = "field_110277_bt"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.horseTexturesArray = "field_110280_bR"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.rearingAmount = "field_110281_bL"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.prevRearingAmount = "field_110282_bM"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.headLean = "field_110283_bJ"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.prevHeadLean = "field_110284_bK"
/** 
 * Used to determine the sound that the horse should make when it steps
 * 
 * Parent Class: EntityHorse
 */
f.gallopTime = "field_110285_bP"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.texturePrefix = "field_110286_bQ"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.mouthOpenness = "field_110287_bN"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.prevMouthOpenness = "field_110288_bO"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.eatingHaystackCounter = "field_110289_bD"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.openMouthCounter = "field_110290_bE"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.horseMarkingTextures = "field_110291_bB"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.HORSE_MARKING_TEXTURES_ABBR = "field_110292_bC"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.hasReproduced = "field_110293_bH"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.jumpRearingCounter = "field_110295_bF"
/** 
 * 
 * 
 * Parent Class: EntityHorse
 */
f.horseChest = "field_110296_bG"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
f.horseJumpPowerCounter = "field_110320_a"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
f.horseJumpPower = "field_110321_bQ"
/** 
 * 
 * 
 * Parent Class: Gui
 */
f.statIcons = "field_110323_l"
/** 
 * 
 * 
 * Parent Class: Gui
 */
f.icons = "field_110324_m"
/** 
 * 
 * 
 * Parent Class: Gui
 */
f.optionsBackground = "field_110325_k"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
f.pumpkinBlurTexPath = "field_110328_d"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
f.vignetteTexPath = "field_110329_b"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
f.widgetsTexPath = "field_110330_c"
/** 
 * 
 * 
 * Parent Class: GuiMainMenu
 */
f.backgroundTexture = "field_110351_G"
/** 
 * 
 * 
 * Parent Class: GuiMainMenu
 */
f.minecraftTitleTextures = "field_110352_y"
/** 
 * 
 * 
 * Parent Class: GuiMainMenu
 */
f.splashTexts = "field_110353_x"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.locationMojangPng = "field_110444_H"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.macDisplayModes = "field_110445_I"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.fileAssets = "field_110446_Y"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.launchedVersion = "field_110447_Z"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.mcResourcePackRepository = "field_110448_aq"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.defaultResourcePacks = "field_110449_ao"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.mcDefaultResourcePack = "field_110450_ap"
f.mcResourceManager = {}
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.mcResourceManager.Minecraft = "field_110451_am"
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
f.mcResourceManager.SoundHandler = "field_147695_g"

/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.metadataSerializer_ = "field_110452_an"
f.proxy = {}
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.proxy.Minecraft = "field_110453_aa"
/** 
 * 
 * 
 * Parent Class: GameConfiguration$UserInformation
 */
f.proxy.GameConfiguration$UserInformation = "field_178751_c"

/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
f.serverProxy = "field_110456_c"
/** 
 * 
 * 
 * Parent Class: PackMetadataSection
 */
f.packFormat = "field_110463_b"
/** 
 * 
 * 
 * Parent Class: PackMetadataSection
 */
f.packDescription = "field_110464_a"
/** 
 * 
 * 
 * Parent Class: FontMetadataSection
 */
f.charLefts = "field_110465_b"
/** 
 * 
 * 
 * Parent Class: FontMetadataSection
 */
f.charSpacings = "field_110466_c"
/** 
 * 
 * 
 * Parent Class: FontMetadataSection
 */
f.charWidths = "field_110467_a"
f.frameTime = {}
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
f.frameTime.AnimationMetadataSection = "field_110475_d"
/** 
 * 
 * 
 * Parent Class: AnimationFrame
 */
f.frameTime.AnimationFrame = "field_110498_b"

/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
f.frameWidth = "field_110476_b"
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
f.frameHeight = "field_110477_c"
/** 
 * 
 * 
 * Parent Class: AnimationMetadataSection
 */
f.animationFrames = "field_110478_a"
/** 
 * 
 * 
 * Parent Class: TextureMetadataSection
 */
f.textureClamp = "field_110481_b"
/** 
 * 
 * 
 * Parent Class: TextureMetadataSection
 */
f.textureBlur = "field_110482_a"
f.frameIndex = {}
/** 
 * 
 * 
 * Parent Class: AnimationFrame
 */
f.frameIndex.AnimationFrame = "field_110499_a"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
f.frameIndex.RenderChunk = "field_178595_m"

f.clazz = {}
/** 
 * The class registered
 * 
 * Parent Class: IMetadataSerializer$Registration
 */
f.clazz.IMetadataSerializer$Registration = "field_110500_b"
/** 
 * 
 * 
 * Parent Class: Cartesian$Product
 */
f.clazz.Cartesian$Product = "field_179429_a"

/** 
 * The IMetadataSectionSerializer associated with the class registered
 * 
 * Parent Class: IMetadataSerializer$Registration
 */
f.section = "field_110502_a"
/** 
 * 
 * 
 * Parent Class: IMetadataSerializer
 */
f.gsonBuilder = "field_110506_b"
f.gson = {}
/** 
 * "Cached Gson instance. Set to null when more sections are registered
 * 
 * Parent Class: IMetadataSerializer
 */
f.gson.IMetadataSerializer = "field_110507_c"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
f.gson.GameSettings = "field_151450_ay"
/** 
 * 
 * 
 * Parent Class: PlayerProfileCache
 */
f.gson.PlayerProfileCache = "field_152660_b"
/** 
 * 
 * 
 * Parent Class: UserList
 */
f.gson.UserList = "field_152694_b"

/** 
 * 
 * 
 * Parent Class: IMetadataSerializer
 */
f.metadataSectionSerializerRegistry = "field_110508_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
f.locationTexturePackIcon = "field_110520_f"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
f.rePackMetadataSection = "field_110521_d"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
f.texturePackIcon = "field_110522_e"
f.resourcePackFile = {}
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
f.resourcePackFile.ResourcePackRepository$Entry = "field_110523_b"
/** 
 * 
 * 
 * Parent Class: AbstractResourcePack
 */
f.resourcePackFile.AbstractResourcePack = "field_110597_b"

/** 
 * 
 * 
 * Parent Class: ResourcePackRepository$Entry
 */
f.reResourcePack = "field_110524_c"
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
f.mcmetaJsonChecked = "field_110529_f"
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
f.mcmetaJson = "field_110530_g"
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
f.mcmetaInputStream = "field_110531_d"
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
f.srMetadataSerializer = "field_110532_e"
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
f.srResourceLocation = "field_110533_b"
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
f.resourceInputStream = "field_110534_c"
/** 
 * 
 * 
 * Parent Class: SimpleResource
 */
f.mapMetadataSections = "field_110535_a"
/** 
 * 
 * 
 * Parent Class: FallbackResourceManager
 */
f.frmMetadataSerializer = "field_110539_b"
f.resourcePacks = {}
/** 
 * 
 * 
 * Parent Class: FallbackResourceManager
 */
f.resourcePacks.FallbackResourceManager = "field_110540_a"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
f.resourcePacks.GameSettings = "field_151453_l"

/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
f.reloadListeners = "field_110546_b"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
f.rmMetadataSerializer = "field_110547_c"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
f.domainResourceManagers = "field_110548_a"
/** 
 * 
 * 
 * Parent Class: AbstractTexture
 */
f.glTextureId = "field_110553_a"
/** 
 * 
 * 
 * Parent Class: ThreadDownloadImageData
 */
f.textureUploaded = "field_110559_g"
/** 
 * 
 * 
 * Parent Class: ThreadDownloadImageData
 */
f.bufferedImage = "field_110560_d"
/** 
 * 
 * 
 * Parent Class: ThreadDownloadImageData
 */
f.imageThread = "field_110561_e"
/** 
 * 
 * 
 * Parent Class: ThreadDownloadImageData
 */
f.imageUrl = "field_110562_b"
/** 
 * 
 * 
 * Parent Class: ThreadDownloadImageData
 */
f.imageBuffer = "field_110563_c"
/** 
 * 
 * 
 * Parent Class: DynamicTexture
 */
f.dynamicTextureData = "field_110566_b"
/** 
 * 
 * 
 * Parent Class: LayeredTexture
 */
f.layeredTextureNames = "field_110567_b"
f.textureLocation = {}
/** 
 * 
 * 
 * Parent Class: SimpleTexture
 */
f.textureLocation.SimpleTexture = "field_110568_b"
/** 
 * The location of the texture.
 * 
 * Parent Class: LayeredColorMaskTexture
 */
f.textureLocation.LayeredColorMaskTexture = "field_174948_g"

/** 
 * 
 * 
 * Parent Class: TextureMap
 */
f.mapRegisteredSprites = "field_110574_e"
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
f.locationBlocksTexture = "field_110575_b"
/** 
 * 
 * 
 * Parent Class: TextureManager
 */
f.theResourceManager = "field_110582_d"
/** 
 * 
 * 
 * Parent Class: TextureManager
 */
f.listTickables = "field_110583_b"
/** 
 * 
 * 
 * Parent Class: TextureManager
 */
f.mapTextureCounters = "field_110584_c"
/** 
 * 
 * 
 * Parent Class: TextureManager
 */
f.mapTextureObjects = "field_110585_a"
/** 
 * 
 * 
 * Parent Class: AbstractResourcePack
 */
f.resourceLog = "field_110598_a"
/** 
 * 
 * 
 * Parent Class: FileResourcePack
 */
f.resourcePackZipFile = "field_110600_d"
/** 
 * 
 * 
 * Parent Class: FileResourcePack
 */
f.entryNameSplitter = "field_110601_c"
/** 
 * 
 * 
 * Parent Class: DefaultResourcePack
 */
f.defaultResourceDomains = "field_110608_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
f.repositoryEntries = "field_110617_f"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
f.dirResourcepacks = "field_110618_d"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
f.repositoryEntriesAll = "field_110619_e"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
f.rprDefaultResourcePack = "field_110620_b"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
f.rprMetadataSerializer = "field_110621_c"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
f.resourcePackFilter = "field_110622_a"
/** 
 * 
 * 
 * Parent Class: ResourceLocation
 */
f.resourcePath = "field_110625_b"
/** 
 * 
 * 
 * Parent Class: ResourceLocation
 */
f.resourceDomain = "field_110626_a"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.frontRightLeg = "field_110684_D"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.frontRightShin = "field_110685_E"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.frontRightHoof = "field_110686_F"
/** 
 * The left chest box on the mule model.
 * 
 * Parent Class: ModelHorse
 */
f.muleLeftChest = "field_110687_G"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.frontLeftLeg = "field_110688_A"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.frontLeftShin = "field_110689_B"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.frontLeftHoof = "field_110690_C"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseLeftSaddleRope = "field_110691_L"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseLeftSaddleMetal = "field_110692_M"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseRightSaddleRope = "field_110693_N"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseRightSaddleMetal = "field_110694_O"
/** 
 * The right chest box on the mule model.
 * 
 * Parent Class: ModelHorse
 */
f.muleRightChest = "field_110695_H"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseSaddleBottom = "field_110696_I"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseSaddleFront = "field_110697_J"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseSaddleBack = "field_110698_K"
/** 
 * The right metal connected to the horse's face ropes.
 * 
 * Parent Class: ModelHorse
 */
f.horseRightFaceMetal = "field_110699_Q"
/** 
 * The left metal connected to the horse's face ropes.
 * 
 * Parent Class: ModelHorse
 */
f.horseLeftFaceMetal = "field_110700_P"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseRightRein = "field_110701_S"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseLeftRein = "field_110702_R"
/** 
 * The left ear box for the mule model.
 * 
 * Parent Class: ModelHorse
 */
f.muleLeftEar = "field_110703_f"
/** 
 * The right ear box for the mule model.
 * 
 * Parent Class: ModelHorse
 */
f.muleRightEar = "field_110704_g"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseLeftEar = "field_110705_d"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.horseRightEar = "field_110706_e"
f.head = {}
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.head.ModelHorse = "field_110709_a"
/** 
 * 
 * 
 * Parent Class: ItemCameraTransforms
 */
f.head.ItemCameraTransforms = "field_178353_d"
/** 
 * 
 * 
 * Parent Class: ModelHumanoidHead
 */
f.head.ModelHumanoidHead = "field_178717_b"
/** 
 * 
 * 
 * Parent Class: ModelCreeper
 */
f.head.ModelCreeper = "field_78135_a"
/** 
 * 
 * 
 * Parent Class: ModelChicken
 */
f.head.ModelChicken = "field_78142_a"
/** 
 * 
 * 
 * Parent Class: ModelQuadruped
 */
f.head.ModelQuadruped = "field_78150_a"
/** 
 * 
 * 
 * Parent Class: ModelSnowMan
 */
f.head.ModelSnowMan = "field_78195_c"
/** 
 * The head Model renderer of the dragon
 * 
 * Parent Class: ModelDragon
 */
f.head.ModelDragon = "field_78221_a"

/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.tailTip = "field_110710_n"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.backLeftLeg = "field_110711_o"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.tailBase = "field_110712_l"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.tailMiddle = "field_110713_m"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.mane = "field_110714_j"
f.body = {}
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.body.ModelHorse = "field_110715_k"
/** 
 * 
 * 
 * Parent Class: ModelGhast
 */
f.body.ModelGhast = "field_78128_a"
/** 
 * 
 * 
 * Parent Class: ModelCreeper
 */
f.body.ModelCreeper = "field_78134_c"
/** 
 * 
 * 
 * Parent Class: ModelChicken
 */
f.body.ModelChicken = "field_78140_b"
/** 
 * 
 * 
 * Parent Class: ModelQuadruped
 */
f.body.ModelQuadruped = "field_78148_b"
/** 
 * 
 * 
 * Parent Class: ModelSnowMan
 */
f.body.ModelSnowMan = "field_78196_a"
/** 
 * The body Model renderer of the dragon
 * 
 * Parent Class: ModelDragon
 */
f.body.ModelDragon = "field_78217_d"

/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.neck = "field_110716_h"
/** 
 * The box for the horse's ropes on its face.
 * 
 * Parent Class: ModelHorse
 */
f.horseFaceRopes = "field_110717_i"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.backLeftHoof = "field_110718_w"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.backLeftShin = "field_110719_v"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.backRightHoof = "field_110720_z"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.backRightShin = "field_110721_y"
/** 
 * 
 * 
 * Parent Class: ModelHorse
 */
f.backRightLeg = "field_110722_x"
/** 
 * 
 * 
 * Parent Class: EffectRenderer
 */
f.particleTextures = "field_110737_b"
/** 
 * 
 * 
 * Parent Class: Render
 */
f.shadowTextures = "field_110778_a"
/** 
 * 
 * 
 * Parent Class: RenderArrow
 */
f.arrowTextures = "field_110780_a"
/** 
 * 
 * 
 * Parent Class: RenderBoat
 */
f.boatTextures = "field_110782_f"
/** 
 * 
 * 
 * Parent Class: RenderXPOrb
 */
f.experienceOrbTextures = "field_110785_a"
/** 
 * 
 * 
 * Parent Class: RenderEnderCrystal
 */
f.enderCrystalTextures = "field_110787_a"
/** 
 * 
 * 
 * Parent Class: RenderItemFrame
 */
f.mapBackgroundTextures = "field_110789_a"
/** 
 * 
 * 
 * Parent Class: RenderFish
 */
f.FISH_PARTICLES = "field_110792_a"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
f.RES_ITEM_GLINT = "field_110798_h"
/** 
 * 
 * 
 * Parent Class: RenderLeashKnot
 */
f.leashKnotModel = "field_110801_f"
/** 
 * 
 * 
 * Parent Class: RenderLeashKnot
 */
f.leashKnotTextures = "field_110802_a"
/** 
 * 
 * 
 * Parent Class: RenderMinecart
 */
f.minecartTextures = "field_110804_g"
/** 
 * 
 * 
 * Parent Class: RenderPainting
 */
f.KRISTOFFER_PAINTING_TEXTURE = "field_110807_a"
f.witherTextures = {}
/** 
 * 
 * 
 * Parent Class: RenderWitherSkull
 */
f.witherTextures.RenderWitherSkull = "field_110810_f"
/** 
 * 
 * 
 * Parent Class: RenderWither
 */
f.witherTextures.RenderWither = "field_110912_f"

f.invulnerableWitherTextures = {}
/** 
 * 
 * 
 * Parent Class: RenderWitherSkull
 */
f.invulnerableWitherTextures.RenderWitherSkull = "field_110811_a"
/** 
 * 
 * 
 * Parent Class: RenderWither
 */
f.invulnerableWitherTextures.RenderWither = "field_110913_a"

/** 
 * 
 * 
 * Parent Class: RenderCreeper
 */
f.creeperTextures = "field_110830_f"
/** 
 * 
 * 
 * Parent Class: RenderCow
 */
f.cowTextures = "field_110833_a"
/** 
 * 
 * 
 * Parent Class: RenderBat
 */
f.batTextures = "field_110835_a"
/** 
 * 
 * 
 * Parent Class: RenderBlaze
 */
f.blazeTextures = "field_110837_a"
/** 
 * 
 * 
 * Parent Class: RenderEnderman
 */
f.endermanTextures = "field_110839_f"
/** 
 * 
 * 
 * Parent Class: RenderDragon
 */
f.enderDragonExplodingTextures = "field_110842_f"
/** 
 * 
 * 
 * Parent Class: RenderDragon
 */
f.enderDragonCrystalBeamTextures = "field_110843_g"
/** 
 * 
 * 
 * Parent Class: RenderDragon
 */
f.enderDragonTextures = "field_110844_k"
/** 
 * 
 * 
 * Parent Class: RenderHorse
 */
f.whiteHorseTextures = "field_110850_f"
/** 
 * 
 * 
 * Parent Class: RenderHorse
 */
f.muleTextures = "field_110851_g"
/** 
 * 
 * 
 * Parent Class: RenderHorse
 */
f.skeletonHorseTextures = "field_110853_l"
/** 
 * 
 * 
 * Parent Class: RenderHorse
 */
f.zombieHorseTextures = "field_110854_k"
/** 
 * 
 * 
 * Parent Class: RenderHorse
 */
f.donkeyTextures = "field_110855_h"
/** 
 * 
 * 
 * Parent Class: RenderSkeleton
 */
f.witherSkeletonTextures = "field_110861_l"
/** 
 * 
 * 
 * Parent Class: RenderSkeleton
 */
f.skeletonTextures = "field_110862_k"
/** 
 * 
 * 
 * Parent Class: RenderZombie
 */
f.zombieVillagerTextures = "field_110864_q"
f.zombieTextures = {}
/** 
 * 
 * 
 * Parent Class: RenderZombie
 */
f.zombieTextures.RenderZombie = "field_110865_p"
/** 
 * 
 * 
 * Parent Class: RenderGiantZombie
 */
f.zombieTextures.RenderGiantZombie = "field_110871_a"

/** 
 * 
 * 
 * Parent Class: RenderGhast
 */
f.ghastShootingTextures = "field_110868_f"
/** 
 * 
 * 
 * Parent Class: RenderGhast
 */
f.ghastTextures = "field_110869_a"
/** 
 * 
 * 
 * Parent Class: RenderMagmaCube
 */
f.magmaCubeTextures = "field_110873_a"
/** 
 * 
 * 
 * Parent Class: RenderOcelot
 */
f.ocelotTextures = "field_110875_f"
/** 
 * 
 * 
 * Parent Class: RenderOcelot
 */
f.redOcelotTextures = "field_110876_g"
/** 
 * 
 * 
 * Parent Class: RenderOcelot
 */
f.blackOcelotTextures = "field_110877_a"
/** 
 * 
 * 
 * Parent Class: RenderOcelot
 */
f.siameseOcelotTextures = "field_110878_h"
/** 
 * 
 * 
 * Parent Class: RenderMooshroom
 */
f.mooshroomTextures = "field_110880_a"
/** 
 * 
 * 
 * Parent Class: RenderSilverfish
 */
f.silverfishTextures = "field_110882_a"
/** 
 * 
 * 
 * Parent Class: RenderSheep
 */
f.shearedSheepTextures = "field_110884_f"
/** 
 * 
 * 
 * Parent Class: RenderPig
 */
f.pigTextures = "field_110887_f"
/** 
 * 
 * 
 * Parent Class: RenderSpider
 */
f.spiderTextures = "field_110890_f"
/** 
 * 
 * 
 * Parent Class: RenderCaveSpider
 */
f.caveSpiderTextures = "field_110893_a"
/** 
 * 
 * 
 * Parent Class: RenderSnowMan
 */
f.snowManTextures = "field_110895_a"
/** 
 * 
 * 
 * Parent Class: RenderSlime
 */
f.slimeTextures = "field_110897_a"
/** 
 * 
 * 
 * Parent Class: RenderIronGolem
 */
f.ironGolemTextures = "field_110899_a"
/** 
 * 
 * 
 * Parent Class: RenderSquid
 */
f.squidTextures = "field_110901_a"
/** 
 * 
 * 
 * Parent Class: RenderVillager
 */
f.villagerTextures = "field_110903_f"
/** 
 * 
 * 
 * Parent Class: RenderVillager
 */
f.farmerVillagerTextures = "field_110904_g"
/** 
 * 
 * 
 * Parent Class: RenderVillager
 */
f.smithVillagerTextures = "field_110905_l"
/** 
 * 
 * 
 * Parent Class: RenderVillager
 */
f.butcherVillagerTextures = "field_110906_m"
/** 
 * 
 * 
 * Parent Class: RenderVillager
 */
f.priestVillagerTextures = "field_110907_k"
/** 
 * 
 * 
 * Parent Class: RenderVillager
 */
f.librarianVillagerTextures = "field_110908_h"
/** 
 * 
 * 
 * Parent Class: RenderWitch
 */
f.witchTextures = "field_110910_a"
/** 
 * 
 * 
 * Parent Class: RenderWolf
 */
f.tamedWolfTextures = "field_110915_f"
/** 
 * 
 * 
 * Parent Class: RenderWolf
 */
f.anrgyWolfTextures = "field_110916_g"
/** 
 * 
 * 
 * Parent Class: RenderWolf
 */
f.wolfTextures = "field_110917_a"
/** 
 * 
 * 
 * Parent Class: RenderChicken
 */
f.chickenTextures = "field_110920_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.locationLightMap = "field_110922_T"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.locationSnowPng = "field_110923_r"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.locationRainPng = "field_110924_q"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
f.locationCloudsPng = "field_110925_j"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
f.locationEndSkyPng = "field_110926_k"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
f.locationMoonPhasesPng = "field_110927_h"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
f.locationSunPng = "field_110928_i"
/** 
 * 
 * 
 * Parent Class: ItemRenderer
 */
f.RES_UNDERWATER_OVERLAY = "field_110929_d"
/** 
 * 
 * 
 * Parent Class: ItemRenderer
 */
f.RES_MAP_BACKGROUND = "field_110931_c"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.frameCounter = "field_110973_g"
f.originY = {}
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.originY.TextureAtlasSprite = "field_110974_d"
/** 
 * 
 * 
 * Parent Class: Stitcher$Slot
 */
f.originY.Stitcher$Slot = "field_94190_b"

f.originX = {}
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.originX.TextureAtlasSprite = "field_110975_c"
/** 
 * 
 * 
 * Parent Class: Stitcher$Slot
 */
f.originX.Stitcher$Slot = "field_94192_a"

/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.framesTextureData = "field_110976_a"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.minV = "field_110977_n"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.maxV = "field_110978_o"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.minU = "field_110979_l"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.maxU = "field_110980_m"
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.animationMetadata = "field_110982_k"
f.tickCounter = {}
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.tickCounter.TextureAtlasSprite = "field_110983_h"
/** 
 * 
 * 
 * Parent Class: EntityGuardian$AIGuardianAttack
 */
f.tickCounter.EntityGuardian$AIGuardianAttack = "field_179455_b"
/** 
 * Incremented every tick.
 * 
 * Parent Class: MinecraftServer
 */
f.tickCounter.MinecraftServer = "field_71315_w"
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
f.tickCounter.VillageCollection = "field_75553_e"
/** 
 * 
 * 
 * Parent Class: Village
 */
f.tickCounter.Village = "field_75581_g"

/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.iconName = "field_110984_i"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
f.missingTextureData = "field_110999_b"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
f.dataBuffer = "field_111000_c"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
f.missingTexture = "field_111001_a"
/** 
 * "Pattern that matches numeric variable placeholders in a resource string
 * 
 * Parent Class: StringTranslate
 */
f.numericVariablePattern = "field_111053_a"
/** 
 * 
 * 
 * Parent Class: EntitySpider$GroupData
 */
f.potionEffectId = "field_111105_a"
/** 
 * 
 * 
 * Parent Class: EntityHorse$GroupData
 */
f.horseVariant = "field_111106_b"
/** 
 * 
 * 
 * Parent Class: EntityHorse$GroupData
 */
f.horseType = "field_111107_a"
f.defaultValue = {}
/** 
 * 
 * 
 * Parent Class: BaseAttribute
 */
f.defaultValue.BaseAttribute = "field_111113_b"
/** 
 * "The default value for this registry
 * 
 * Parent Class: RegistryNamespacedDefaultedByKey
 */
f.defaultValue.RegistryNamespacedDefaultedByKey = "field_148761_e"

/** 
 * 
 * 
 * Parent Class: BaseAttribute
 */
f.shouldWatch = "field_111114_c"
f.unlocalizedName = {}
/** 
 * 
 * 
 * Parent Class: BaseAttribute
 */
f.unlocalizedName.BaseAttribute = "field_111115_a"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.unlocalizedName.Block = "field_149770_b"
/** 
 * "The value that this fish type uses to replace ""XYZ"" in: ""fish.XYZ.raw"" / ""fish.XYZ.cooked"" for the unlocalized name and ""fish_XYZ_raw"" / ""fish_XYZ_cooked"" for the icon string."
 * 
 * Parent Class: ItemFishFood$FishType
 */
f.unlocalizedName.ItemFishFood$FishType = "field_150981_g"
/** 
 * 
 * 
 * Parent Class: BlockStoneBrick$EnumType
 */
f.unlocalizedName.BlockStoneBrick$EnumType = "field_176622_h"
/** 
 * 
 * 
 * Parent Class: BlockStoneSlab$EnumType
 */
f.unlocalizedName.BlockStoneSlab$EnumType = "field_176635_l"
/** 
 * 
 * 
 * Parent Class: BlockStone$EnumType
 */
f.unlocalizedName.BlockStone$EnumType = "field_176654_k"
/** 
 * 
 * 
 * Parent Class: BlockWall$EnumType
 */
f.unlocalizedName.BlockWall$EnumType = "field_176661_f"
/** 
 * 
 * 
 * Parent Class: BlockSandStone$EnumType
 */
f.unlocalizedName.BlockSandStone$EnumType = "field_176678_g"
/** 
 * 
 * 
 * Parent Class: BlockSand$EnumType
 */
f.unlocalizedName.BlockSand$EnumType = "field_176691_g"
/** 
 * 
 * 
 * Parent Class: EnumDyeColor
 */
f.unlocalizedName.EnumDyeColor = "field_176785_v"
/** 
 * 
 * 
 * Parent Class: BlockQuartz$EnumType
 */
f.unlocalizedName.BlockQuartz$EnumType = "field_176806_i"
/** 
 * 
 * 
 * Parent Class: BlockPrismarine$EnumType
 */
f.unlocalizedName.BlockPrismarine$EnumType = "field_176812_g"
/** 
 * 
 * 
 * Parent Class: BlockRedSandstone$EnumType
 */
f.unlocalizedName.BlockRedSandstone$EnumType = "field_176830_g"
/** 
 * 
 * 
 * Parent Class: BlockPlanks$EnumType
 */
f.unlocalizedName.BlockPlanks$EnumType = "field_176848_j"
/** 
 * 
 * 
 * Parent Class: BlockSilverfish$EnumType
 */
f.unlocalizedName.BlockSilverfish$EnumType = "field_176891_j"
/** 
 * 
 * 
 * Parent Class: BlockDirt$DirtType
 */
f.unlocalizedName.BlockDirt$DirtType = "field_176929_g"
/** 
 * 
 * 
 * Parent Class: BlockDoublePlant$EnumPlantType
 */
f.unlocalizedName.BlockDoublePlant$EnumPlantType = "field_176947_j"
/** 
 * 
 * 
 * Parent Class: BlockFlower$EnumFlowerType
 */
f.unlocalizedName.BlockFlower$EnumFlowerType = "field_176977_o"
/** 
 * The unlocalized name of this item.
 * 
 * Parent Class: Item
 */
f.unlocalizedName.Item = "field_77774_bZ"

/** 
 * 
 * 
 * Parent Class: RangedAttribute
 */
f.maximumValue = "field_111118_b"
f.description = {}
/** 
 * 
 * 
 * Parent Class: RangedAttribute
 */
f.description.RangedAttribute = "field_111119_c"
/** 
 * 
 * 
 * Parent Class: Metadata
 */
f.description.Metadata = "field_152813_c"
/** 
 * 
 * 
 * Parent Class: EnumFacing$AxisDirection
 */
f.description.EnumFacing$AxisDirection = "field_179525_d"
/** 
 * Description of the crash report.
 * 
 * Parent Class: CrashReport
 */
f.description.CrashReport = "field_71513_a"

/** 
 * 
 * 
 * Parent Class: RangedAttribute
 */
f.minimumValue = "field_111120_a"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
f.baseValue = "field_111132_f"
f.needsUpdate = {}
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
f.needsUpdate.ModifiableAttributeInstance = "field_111133_g"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
f.needsUpdate.RenderChunk = "field_178593_n"

/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
f.mapByName = "field_111134_d"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
f.mapByUUID = "field_111135_e"
/** 
 * The Attribute this is an instance of
 * 
 * Parent Class: ModifiableAttributeInstance
 */
f.genericAttribute = "field_111136_b"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
f.mapByOperation = "field_111137_c"
/** 
 * 
 * 
 * Parent Class: ModifiableAttributeInstance
 */
f.cachedValue = "field_111139_h"
/** 
 * 
 * 
 * Parent Class: BaseAttributeMap
 */
f.attributesByName = "field_111153_b"
f.attributes = {}
/** 
 * 
 * 
 * Parent Class: BaseAttributeMap
 */
f.attributes.BaseAttributeMap = "field_111154_a"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.attributes.ShaderManager = "field_148014_r"

/** 
 * 
 * 
 * Parent Class: ServersideAttributeMap
 */
f.attributeInstanceSet = "field_111162_d"
/** 
 * 
 * 
 * Parent Class: ServersideAttributeMap
 */
f.descriptionToAttributeInstanceMap = "field_111163_c"
f.id = {}
/** 
 * 
 * 
 * Parent Class: AttributeModifier
 */
f.id.AttributeModifier = "field_111170_d"
/** 
 * 
 * 
 * Parent Class: GuiButton
 */
f.id.GuiButton = "field_146127_k"
/** 
 * 
 * 
 * Parent Class: S00PacketKeepAlive
 */
f.id.S00PacketKeepAlive = "field_149136_a"
/** 
 * 
 * 
 * Parent Class: EnumConnectionState
 */
f.id.EnumConnectionState = "field_150762_g"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.id.GuiTextField = "field_175208_g"
/** 
 * 
 * 
 * Parent Class: EnumBorderStatus
 */
f.id.EnumBorderStatus = "field_177767_d"
/** 
 * 
 * 
 * Parent Class: Team$EnumVisible
 */
f.id.Team$EnumVisible = "field_178827_f"
/** 
 * 
 * 
 * Parent Class: C18PacketSpectate
 */
f.id.C18PacketSpectate = "field_179729_a"
/** 
 * The Id of a Potion object.
 * 
 * Parent Class: Potion
 */
f.id.Potion = "field_76415_H"
/** 
 * 
 * 
 * Parent Class: WorldSettings$GameType
 */
f.id.WorldSettings$GameType = "field_77154_e"

/** 
 * "If false
 * 
 * Parent Class: AttributeModifier
 */
f.isSaved = "field_111171_e"
/** 
 * 
 * 
 * Parent Class: AttributeModifier
 */
f.operation = "field_111172_b"
f.name = {}
/** 
 * 
 * 
 * Parent Class: AttributeModifier
 */
f.name.AttributeModifier = "field_111173_c"
/** 
 * 
 * 
 * Parent Class: Language
 */
f.name.Language = "field_135038_c"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
f.name.SoundList$SoundEntry = "field_148569_a"
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
f.name.S3EPacketTeams = "field_149320_a"
/** 
 * 
 * 
 * Parent Class: S3CPacketUpdateScore
 */
f.name.S3CPacketUpdateScore = "field_149329_a"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse$MinecraftProtocolVersionIdentifier
 */
f.name.ServerStatusResponse$MinecraftProtocolVersionIdentifier = "field_151306_a"
/** 
 * 
 * 
 * Parent Class: Metadata
 */
f.name.Metadata = "field_152812_b"
/** 
 * 
 * 
 * Parent Class: GuiSlider
 */
f.name.GuiSlider = "field_175226_q"
/** 
 * The name of this color/formatting
 * 
 * Parent Class: EnumChatFormatting
 */
f.name.EnumChatFormatting = "field_175748_y"
/** 
 * 
 * 
 * Parent Class: BlockStoneBrick$EnumType
 */
f.name.BlockStoneBrick$EnumType = "field_176616_g"
/** 
 * 
 * 
 * Parent Class: BlockStoneSlab$EnumType
 */
f.name.BlockStoneSlab$EnumType = "field_176638_k"
/** 
 * The EnumType's name.
 * 
 * Parent Class: BlockStone$EnumType
 */
f.name.BlockStone$EnumType = "field_176653_j"
/** 
 * 
 * 
 * Parent Class: BlockWall$EnumType
 */
f.name.BlockWall$EnumType = "field_176664_e"
/** 
 * 
 * 
 * Parent Class: BlockTrapDoor$DoorHalf
 */
f.name.BlockTrapDoor$DoorHalf = "field_176671_c"
/** 
 * 
 * 
 * Parent Class: BlockSandStone$EnumType
 */
f.name.BlockSandStone$EnumType = "field_176677_f"
/** 
 * 
 * 
 * Parent Class: BlockSand$EnumType
 */
f.name.BlockSand$EnumType = "field_176693_e"
/** 
 * 
 * 
 * Parent Class: BlockStairs$EnumShape
 */
f.name.BlockStairs$EnumShape = "field_176699_f"
/** 
 * 
 * 
 * Parent Class: BlockStairs$EnumHalf
 */
f.name.BlockStairs$EnumHalf = "field_176709_c"
/** 
 * 
 * 
 * Parent Class: EnumFacing$Axis
 */
f.name.EnumFacing$Axis = "field_176726_e"
/** 
 * 
 * 
 * Parent Class: EnumFacing
 */
f.name.EnumFacing = "field_176757_j"
/** 
 * 
 * 
 * Parent Class: EnumDyeColor
 */
f.name.EnumDyeColor = "field_176786_u"
/** 
 * 
 * 
 * Parent Class: BlockPrismarine$EnumType
 */
f.name.BlockPrismarine$EnumType = "field_176811_f"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneWire$EnumAttachPosition
 */
f.name.BlockRedstoneWire$EnumAttachPosition = "field_176820_d"
/** 
 * 
 * 
 * Parent Class: BlockRedSandstone$EnumType
 */
f.name.BlockRedSandstone$EnumType = "field_176829_f"
/** 
 * 
 * 
 * Parent Class: BlockPlanks$EnumType
 */
f.name.BlockPlanks$EnumType = "field_176851_i"
/** 
 * 
 * 
 * Parent Class: BlockLever$EnumOrientation
 */
f.name.BlockLever$EnumOrientation = "field_176867_k"
/** 
 * 
 * 
 * Parent Class: BlockLog$EnumAxis
 */
f.name.BlockLog$EnumAxis = "field_176874_e"
/** 
 * 
 * 
 * Parent Class: BlockSilverfish$EnumType
 */
f.name.BlockSilverfish$EnumType = "field_176894_i"
/** 
 * 
 * 
 * Parent Class: BlockHugeMushroom$EnumType
 */
f.name.BlockHugeMushroom$EnumType = "field_176914_p"
/** 
 * 
 * 
 * Parent Class: BlockStoneSlabNew$EnumType
 */
f.name.BlockStoneSlabNew$EnumType = "field_176919_d"
/** 
 * 
 * 
 * Parent Class: BlockDirt$DirtType
 */
f.name.BlockDirt$DirtType = "field_176928_f"
/** 
 * 
 * 
 * Parent Class: BlockDoublePlant$EnumPlantType
 */
f.name.BlockDoublePlant$EnumPlantType = "field_176950_i"
/** 
 * 
 * 
 * Parent Class: BlockFlower$EnumFlowerType
 */
f.name.BlockFlower$EnumFlowerType = "field_176976_n"
/** 
 * 
 * 
 * Parent Class: BlockSlab$EnumBlockHalf
 */
f.name.BlockSlab$EnumBlockHalf = "field_176988_c"
/** 
 * 
 * 
 * Parent Class: BlockFlowerPot$EnumFlowerType
 */
f.name.BlockFlowerPot$EnumFlowerType = "field_177006_w"
/** 
 * 
 * 
 * Parent Class: BlockRailBase$EnumRailDirection
 */
f.name.BlockRailBase$EnumRailDirection = "field_177028_m"
/** 
 * 
 * 
 * Parent Class: BlockBed$EnumPartType
 */
f.name.BlockBed$EnumPartType = "field_177036_c"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneComparator$Mode
 */
f.name.BlockRedstoneComparator$Mode = "field_177041_c"
/** 
 * 
 * 
 * Parent Class: BlockTallGrass$EnumType
 */
f.name.BlockTallGrass$EnumType = "field_177046_f"
/** 
 * 
 * 
 * Parent Class: PropertyHelper
 */
f.name.PropertyHelper = "field_177703_b"
/** 
 * 
 * 
 * Parent Class: StateMap
 */
f.name.StateMap = "field_178142_a"
/** 
 * 
 * 
 * Parent Class: ModelBlock
 */
f.name.ModelBlock = "field_178317_b"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variants
 */
f.name.ModelBlockDefinition$Variants = "field_178423_a"
/** 
 * 
 * 
 * Parent Class: StateMap$Builder
 */
f.name.StateMap$Builder = "field_178445_a"
/** 
 * 
 * 
 * Parent Class: ItemArmor$ArmorMaterial
 */
f.name.ItemArmor$ArmorMaterial = "field_179243_f"
/** 
 * 
 * 
 * Parent Class: ChatComponentScore
 */
f.name.ChatComponentScore = "field_179999_b"
/** 
 * 
 * 
 * Parent Class: EntityMinecart$EnumMinecartType
 */
f.name.EntityMinecart$EnumMinecartType = "field_180049_j"
/** 
 * Name of the chest.
 * 
 * Parent Class: InventoryLargeChest
 */
f.name.InventoryLargeChest = "field_70479_a"
/** 
 * The name of the Potion.
 * 
 * Parent Class: Potion
 */
f.name.Potion = "field_76416_I"
/** 
 * 
 * 
 * Parent Class: WorldSettings$GameType
 */
f.name.WorldSettings$GameType = "field_77151_f"
/** 
 * Used in localisation and stats.
 * 
 * Parent Class: Enchantment
 */
f.name.Enchantment = "field_77350_z"
/** 
 * 
 * 
 * Parent Class: CrashReportCategory
 */
f.name.CrashReportCategory = "field_85076_b"
/** 
 * 
 * 
 * Parent Class: ScoreObjective
 */
f.name.ScoreObjective = "field_96684_b"

/** 
 * 
 * 
 * Parent Class: AttributeModifier
 */
f.amount = "field_111174_a"
f.targetY = {}
/** 
 * 
 * 
 * Parent Class: EntityAIRunAroundLikeCrazy
 */
f.targetY.EntityAIRunAroundLikeCrazy = "field_111176_d"
/** 
 * 
 * 
 * Parent Class: EntityAIAttackOnCollide
 */
f.targetY.EntityAIAttackOnCollide = "field_151495_j"
/** 
 * 'y' location the eye should float towards.
 * 
 * Parent Class: EntityEnderEye
 */
f.targetY.EntityEnderEye = "field_70225_c"
/** 
 * 
 * 
 * Parent Class: EntityDragon
 */
f.targetY.EntityDragon = "field_70981_c"
/** 
 * Y position of player tempting this mob
 * 
 * Parent Class: EntityAITempt
 */
f.targetY.EntityAITempt = "field_75280_d"

f.targetZ = {}
/** 
 * 
 * 
 * Parent Class: EntityAIRunAroundLikeCrazy
 */
f.targetZ.EntityAIRunAroundLikeCrazy = "field_111177_e"
/** 
 * 
 * 
 * Parent Class: EntityAIAttackOnCollide
 */
f.targetZ.EntityAIAttackOnCollide = "field_151496_k"
/** 
 * 'z' location the eye should float towards.
 * 
 * Parent Class: EntityEnderEye
 */
f.targetZ.EntityEnderEye = "field_70222_d"
/** 
 * 
 * 
 * Parent Class: EntityDragon
 */
f.targetZ.EntityDragon = "field_70978_d"
/** 
 * Z position of player tempting this mob
 * 
 * Parent Class: EntityAITempt
 */
f.targetZ.EntityAITempt = "field_75281_e"

f.speed = {}
/** 
 * 
 * 
 * Parent Class: EntityAIRunAroundLikeCrazy
 */
f.speed.EntityAIRunAroundLikeCrazy = "field_111178_b"
/** 
 * 
 * 
 * Parent Class: EntityRabbit$EnumMoveType
 */
f.speed.EntityRabbit$EnumMoveType = "field_180076_f"
/** 
 * 
 * 
 * Parent Class: EntityAIPlay
 */
f.speed.EntityAIPlay = "field_75261_c"
/** 
 * 
 * 
 * Parent Class: EntityAIPanic
 */
f.speed.EntityAIPanic = "field_75265_b"
/** 
 * 
 * 
 * Parent Class: EntityAITempt
 */
f.speed.EntityAITempt = "field_75282_b"
/** 
 * 
 * 
 * Parent Class: EntityAIMoveTowardsTarget
 */
f.speed.EntityAIMoveTowardsTarget = "field_75425_f"
/** 
 * 
 * 
 * Parent Class: EntityAIWander
 */
f.speed.EntityAIWander = "field_75454_e"
/** 
 * 
 * 
 * Parent Class: PathNavigate
 */
f.speed.PathNavigate = "field_75511_d"
/** 
 * The speed at which the entity should move
 * 
 * Parent Class: EntityMoveHelper
 */
f.speed.EntityMoveHelper = "field_75645_e"

f.targetX = {}
/** 
 * 
 * 
 * Parent Class: EntityAIRunAroundLikeCrazy
 */
f.targetX.EntityAIRunAroundLikeCrazy = "field_111179_c"
/** 
 * 
 * 
 * Parent Class: EntityAIAttackOnCollide
 */
f.targetX.EntityAIAttackOnCollide = "field_151497_i"
/** 
 * 'x' location the eye should float towards.
 * 
 * Parent Class: EntityEnderEye
 */
f.targetX.EntityEnderEye = "field_70224_b"
/** 
 * 
 * 
 * Parent Class: EntityDragon
 */
f.targetX.EntityDragon = "field_70980_b"
/** 
 * X position of player tempting this mob
 * 
 * Parent Class: EntityAITempt
 */
f.targetX.EntityAITempt = "field_75283_c"

/** 
 * 
 * 
 * Parent Class: EntityAIRunAroundLikeCrazy
 */
f.horseHost = "field_111180_a"
/** 
 * Contains a Map of the AttributeModifiers registered by potions
 * 
 * Parent Class: Potion
 */
f.attributeModifierMap = "field_111188_I"
/** 
 * time what is using to check if InhabitedTime should be calculated
 * 
 * Parent Class: PlayerManager
 */
f.previousTotalWorldTime = "field_111192_g"
/** 
 * This field is using when chunk should be processed (every 8000 ticks)
 * 
 * Parent Class: PlayerManager
 */
f.playerInstanceList = "field_111193_e"
/** 
 * time what is using when chunk InhabitedTime is being calculated
 * 
 * Parent Class: PlayerManager$PlayerInstance
 */
f.previousWorldTime = "field_111198_g"
/** 
 * 
 * 
 * Parent Class: WorldProvider
 */
f.moonPhaseFactors = "field_111203_a"
/** 
 * the cumulative number of ticks players have been in this chunk
 * 
 * Parent Class: Chunk
 */
f.inhabitedTime = "field_111204_q"
/** 
 * 
 * 
 * Parent Class: Item
 */
f.itemModifierUUID = "field_111210_e"
/** 
 * 
 * 
 * Parent Class: CreativeTabs
 */
f.enchantmentTypes = "field_111230_s"
/** 
 * 
 * 
 * Parent Class: ContainerHorseInventory
 */
f.theHorse = "field_111242_f"
f.horseInventory = {}
/** 
 * 
 * 
 * Parent Class: ContainerHorseInventory
 */
f.horseInventory.ContainerHorseInventory = "field_111243_a"
/** 
 * The horse inventory bound to this GUI.
 * 
 * Parent Class: GuiScreenHorseInventory
 */
f.horseInventory.GuiScreenHorseInventory = "field_147029_w"

f.movementSpeed = {}
/** 
 * 
 * 
 * Parent Class: SharedMonsterAttributes
 */
f.movementSpeed.SharedMonsterAttributes = "field_111263_d"
/** 
 * 
 * 
 * Parent Class: EntityAIMoveToBlock
 */
f.movementSpeed.EntityAIMoveToBlock = "field_179492_d"
/** 
 * 
 * 
 * Parent Class: EntityAIFleeSun
 */
f.movementSpeed.EntityAIFleeSun = "field_75369_e"
/** 
 * 
 * 
 * Parent Class: EntityAIMoveThroughVillage
 */
f.movementSpeed.EntityAIMoveThroughVillage = "field_75418_b"
/** 
 * 
 * 
 * Parent Class: EntityAIMoveTowardsRestriction
 */
f.movementSpeed.EntityAIMoveTowardsRestriction = "field_75433_e"

f.attackDamage = {}
/** 
 * 
 * 
 * Parent Class: SharedMonsterAttributes
 */
f.attackDamage.SharedMonsterAttributes = "field_111264_e"
/** 
 * 
 * 
 * Parent Class: ItemSword
 */
f.attackDamage.ItemSword = "field_150934_a"

/** 
 * 
 * 
 * Parent Class: SharedMonsterAttributes
 */
f.followRange = "field_111265_b"
/** 
 * 
 * 
 * Parent Class: SharedMonsterAttributes
 */
f.knockbackResistance = "field_111266_c"
/** 
 * 
 * 
 * Parent Class: SharedMonsterAttributes
 */
f.maxHealth = "field_111267_a"
/** 
 * 
 * 
 * Parent Class: FontRenderer
 */
f.locationFontTexture = "field_111273_g"
/** 
 * 
 * 
 * Parent Class: FontRenderer
 */
f.unicodePageLocations = "field_111274_c"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
f.DECIMALFORMAT = "field_111284_a"
/** 
 * 
 * 
 * Parent Class: PlayerListComponent
 */
f.ticks = "field_120014_b"
f.server = {}
/** 
 * 
 * 
 * Parent Class: PlayerListComponent
 */
f.server.PlayerListComponent = "field_120015_a"
/** 
 * 
 * 
 * Parent Class: MinecraftServerGui
 */
f.server.MinecraftServerGui = "field_120021_b"
/** 
 * 
 * 
 * Parent Class: StatsComponent
 */
f.server.StatsComponent = "field_120037_e"
/** 
 * 
 * 
 * Parent Class: NetHandlerStatusServer
 */
f.server.NetHandlerStatusServer = "field_147314_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.server.NetHandlerLoginServer = "field_147327_f"
/** 
 * 
 * 
 * Parent Class: NetHandlerHandshakeTCP
 */
f.server.NetHandlerHandshakeTCP = "field_147387_a"
/** 
 * 
 * 
 * Parent Class: ServerListEntryNormal
 */
f.server.ServerListEntryNormal = "field_148301_e"
/** 
 * 
 * 
 * Parent Class: ServerHangWatchdog
 */
f.server.ServerHangWatchdog = "field_180249_b"
/** 
 * Reference to the IServer object.
 * 
 * Parent Class: RConThreadBase
 */
f.server.RConThreadBase = "field_72617_b"

/** 
 * "the total health of the player
 * 
 * Parent Class: EntityPlayerMP
 */
f.combinedHealth = "field_130068_bO"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.fileResourcepacks = "field_130070_K"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
f.joinerResourcePacks = "field_130074_a"
/** 
 * 
 * 
 * Parent Class: GrassColorReloadListener
 */
f.LOC_GRASS_PNG = "field_130078_a"
/** 
 * 
 * 
 * Parent Class: FoliageColorReloadListener
 */
f.LOC_FOLIAGE_PNG = "field_130079_a"
f.rotated = {}
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.rotated.TextureAtlasSprite = "field_130222_e"
/** 
 * 
 * 
 * Parent Class: Stitcher$Holder
 */
f.rotated.Stitcher$Holder = "field_94202_e"

f.width = {}
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.width.TextureAtlasSprite = "field_130223_c"
/** 
 * Button width in pixels
 * 
 * Parent Class: GuiButton
 */
f.width.GuiButton = "field_146120_f"
/** 
 * The width of this text field.
 * 
 * Parent Class: GuiTextField
 */
f.width.GuiTextField = "field_146218_h"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
f.width.GuiAchievement = "field_146260_g"
/** 
 * The width of the screen object.
 * 
 * Parent Class: GuiScreen
 */
f.width.GuiScreen = "field_146294_l"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
f.width.GuiSlot = "field_148155_a"
/** 
 * 
 * 
 * Parent Class: GameConfiguration$DisplayInformation
 */
f.width.GameConfiguration$DisplayInformation = "field_178764_a"
/** 
 * How wide this entity is considered to be
 * 
 * Parent Class: Entity
 */
f.width.Entity = "field_70130_N"
/** 
 * 
 * 
 * Parent Class: Stitcher$Slot
 */
f.width.Stitcher$Slot = "field_94191_c"
/** 
 * 
 * 
 * Parent Class: Stitcher$Holder
 */
f.width.Stitcher$Holder = "field_94204_c"
/** 
 * width of this icon in pixels
 * 
 * Parent Class: DynamicTexture
 */
f.width.DynamicTexture = "field_94233_j"

f.height = {}
/** 
 * 
 * 
 * Parent Class: TextureAtlasSprite
 */
f.height.TextureAtlasSprite = "field_130224_d"
/** 
 * Button height in pixels
 * 
 * Parent Class: GuiButton
 */
f.height.GuiButton = "field_146121_g"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.height.GuiTextField = "field_146219_i"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
f.height.GuiAchievement = "field_146267_h"
/** 
 * The height of the screen object.
 * 
 * Parent Class: GuiScreen
 */
f.height.GuiScreen = "field_146295_m"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
f.height.GuiSlot = "field_148158_l"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon$BeamSegment
 */
f.height.TileEntityBeacon$BeamSegment = "field_177265_b"
/** 
 * 
 * 
 * Parent Class: GameConfiguration$DisplayInformation
 */
f.height.GameConfiguration$DisplayInformation = "field_178762_b"
/** 
 * How high this entity is considered to be
 * 
 * Parent Class: Entity
 */
f.height.Entity = "field_70131_O"
/** 
 * 
 * 
 * Parent Class: WorldGenBigTree
 */
f.height.WorldGenBigTree = "field_76501_f"
/** 
 * 
 * 
 * Parent Class: Stitcher$Slot
 */
f.height.Stitcher$Slot = "field_94188_d"
/** 
 * 
 * 
 * Parent Class: Stitcher$Holder
 */
f.height.Stitcher$Holder = "field_94201_d"
/** 
 * height of this icon in pixels
 * 
 * Parent Class: DynamicTexture
 */
f.height.DynamicTexture = "field_94234_k"

/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.mcLanguageManager = "field_135017_as"
/** 
 * 
 * 
 * Parent Class: LanguageMetadataSection
 */
f.languages = "field_135019_a"
/** 
 * 
 * 
 * Parent Class: Locale
 */
f.unicode = "field_135029_d"
/** 
 * "Splits on ""="""
 * 
 * Parent Class: Locale
 */
f.splitter = "field_135030_b"
/** 
 * 
 * 
 * Parent Class: Locale
 */
f.pattern = "field_135031_c"
f.properties = {}
/** 
 * 
 * 
 * Parent Class: Locale
 */
f.properties.Locale = "field_135032_a"
/** 
 * Maps properties to their respective current value
 * 
 * Parent Class: BlockState$StateImplementation
 */
f.properties.BlockState$StateImplementation = "field_177237_b"
/** 
 * 
 * 
 * Parent Class: BlockState
 */
f.properties.BlockState = "field_177624_d"

/** 
 * 
 * 
 * Parent Class: Language
 */
f.bidirectional = "field_135036_d"
/** 
 * 
 * 
 * Parent Class: Language
 */
f.region = "field_135037_b"
/** 
 * 
 * 
 * Parent Class: Language
 */
f.languageCode = "field_135039_a"
f.languageMap = {}
/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
f.languageMap.LanguageManager = "field_135046_d"
/** 
 * The map containing the Locale-Language pairs.
 * 
 * Parent Class: GuiLanguage$List
 */
f.languageMap.GuiLanguage$List = "field_148177_m"

/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
f.theMetadataSerializer = "field_135047_b"
/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
f.currentLanguage = "field_135048_c"
/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
f.currentLocale = "field_135049_a"
/** 
 * 
 * 
 * Parent Class: I18n
 */
f.i18nLocale = "field_135054_a"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
f.setResourceDomains = "field_135057_d"
/** 
 * "A Splitter that splits a string on the first ""="".  For example
 * 
 * Parent Class: StringTranslate
 */
f.equalSignSplitter = "field_135065_b"
/** 
 * Holds the value of ticksExisted when setLastAttacker was last called.
 * 
 * Parent Class: EntityLivingBase
 */
f.lastAttackerTime = "field_142016_bo"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
f.clientBrand = "field_142022_ce"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.isRunningOnMac = "field_142025_a"
/** 
 * 
 * 
 * Parent Class: EntityZombie$GroupData
 */
f.isVillager = "field_142046_b"
f.isChild = {}
/** 
 * 
 * 
 * Parent Class: EntityZombie$GroupData
 */
f.isChild.EntityZombie$GroupData = "field_142048_a"
/** 
 * 
 * 
 * Parent Class: ModelBase
 */
f.isChild.ModelBase = "field_78091_s"

/** 
 * Store the previous revengeTimer value
 * 
 * Parent Class: EntityAIHurtByTarget
 */
f.revengeTimerOld = "field_142052_b"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
f.playerLastActiveTime = "field_143005_bX"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
f.maxPlayerIdleMinutes = "field_143008_E"
/** 
 * 
 * 
 * Parent Class: StructureVillagePieces$Village
 */
f.isDesertVillage = "field_143014_b"
/** 
 * 
 * 
 * Parent Class: StructureStart
 */
f.chunkPosZ = "field_143023_d"
/** 
 * 
 * 
 * Parent Class: StructureStart
 */
f.chunkPosX = "field_143024_c"
/** 
 * 
 * 
 * Parent Class: MapGenStructure
 */
f.structureData = "field_143029_e"
/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
f.componentClassToNameMap = "field_143037_d"
/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
f.startClassToNameMap = "field_143038_b"
/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
f.componentNameToClassMap = "field_143039_c"
/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
f.startNameToClassMap = "field_143040_a"
f.tagCompound = {}
/** 
 * 
 * 
 * Parent Class: MapGenStructureData
 */
f.tagCompound.MapGenStructureData = "field_143044_a"
/** 
 * 
 * 
 * Parent Class: S49PacketUpdateEntityNBT
 */
f.tagCompound.S49PacketUpdateEntityNBT = "field_179765_b"

f.customName = {}
/** 
 * "The custom name of the command block. (defaults to ""@"")"
 * 
 * Parent Class: CommandBlockLogic
 */
f.customName.CommandBlockLogic = "field_145761_f"
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
f.customName.TileEntityHopper = "field_145902_i"
/** 
 * 
 * 
 * Parent Class: TileEntityEnchantmentTable
 */
f.customName.TileEntityEnchantmentTable = "field_145922_s"
/** 
 * 
 * 
 * Parent Class: TileEntityBrewingStand
 */
f.customName.TileEntityBrewingStand = "field_145942_n"
/** 
 * 
 * 
 * Parent Class: TileEntityChest
 */
f.customName.TileEntityChest = "field_145981_s"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon
 */
f.customName.TileEntityBeacon = "field_146008_p"
/** 
 * 
 * 
 * Parent Class: TileEntityDispenser
 */
f.customName.TileEntityDispenser = "field_146020_a"

/** 
 * The previously run command.
 * 
 * Parent Class: CommandBlockLogic
 */
f.lastOutput = "field_145762_d"
/** 
 * The command stored in the command block.
 * 
 * Parent Class: CommandBlockLogic
 */
f.commandStored = "field_145763_e"
/** 
 * The number of successful commands run. (used for redstone output)
 * 
 * Parent Class: CommandBlockLogic
 */
f.successCount = "field_145764_b"
/** 
 * 
 * 
 * Parent Class: CommandBlockLogic
 */
f.trackOutput = "field_145765_c"
/** 
 * The formatting for the timestamp on commands run.
 * 
 * Parent Class: CommandBlockLogic
 */
f.timestampFormat = "field_145766_a"
f.entityId = {}
/** 
 * 
 * 
 * Parent Class: Entity
 */
f.entityId.Entity = "field_145783_c"
/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
f.entityId.S2DPacketOpenWindow = "field_148904_f"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
f.entityId.S0CPacketSpawnPlayer = "field_148957_a"
/** 
 * 
 * 
 * Parent Class: S0BPacketAnimation
 */
f.entityId.S0BPacketAnimation = "field_148981_a"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
f.entityId.S0EPacketSpawnObject = "field_149018_a"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.entityId.S0FPacketSpawnMob = "field_149042_a"
/** 
 * 
 * 
 * Parent Class: S2CPacketSpawnGlobalEntity
 */
f.entityId.S2CPacketSpawnGlobalEntity = "field_149059_a"
/** 
 * 
 * 
 * Parent Class: S14PacketEntity
 */
f.entityId.S14PacketEntity = "field_149074_a"
/** 
 * 
 * 
 * Parent Class: S1EPacketRemoveEntityEffect
 */
f.entityId.S1EPacketRemoveEntityEffect = "field_149079_a"
/** 
 * 
 * 
 * Parent Class: S19PacketEntityStatus
 */
f.entityId.S19PacketEntityStatus = "field_149164_a"
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
f.entityId.S01PacketJoinGame = "field_149206_a"
/** 
 * 
 * 
 * Parent Class: S0DPacketCollectItem
 */
f.entityId.S0DPacketCollectItem = "field_149356_b"
/** 
 * 
 * 
 * Parent Class: S1CPacketEntityMetadata
 */
f.entityId.S1CPacketEntityMetadata = "field_149379_a"
/** 
 * 
 * 
 * Parent Class: S19PacketEntityHeadLook
 */
f.entityId.S19PacketEntityHeadLook = "field_149384_a"
/** 
 * 
 * 
 * Parent Class: S1BPacketEntityAttach
 */
f.entityId.S1BPacketEntityAttach = "field_149406_b"
/** 
 * 
 * 
 * Parent Class: S1DPacketEntityEffect
 */
f.entityId.S1DPacketEntityEffect = "field_149434_a"
/** 
 * 
 * 
 * Parent Class: S20PacketEntityProperties
 */
f.entityId.S20PacketEntityProperties = "field_149445_a"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
f.entityId.S18PacketEntityTeleport = "field_149458_a"
/** 
 * 
 * 
 * Parent Class: C02PacketUseEntity
 */
f.entityId.C02PacketUseEntity = "field_149567_a"
/** 
 * 
 * 
 * Parent Class: S49PacketUpdateEntityNBT
 */
f.entityId.S49PacketUpdateEntityNBT = "field_179766_a"
/** 
 * 
 * 
 * Parent Class: S43PacketCamera
 */
f.entityId.S43PacketCamera = "field_179781_a"

f.yTile = {}
/** 
 * 
 * 
 * Parent Class: EntityThrowable
 */
f.yTile.EntityThrowable = "field_145786_d"
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
f.yTile.EntityArrow = "field_145792_e"
/** 
 * 
 * 
 * Parent Class: EntityFireball
 */
f.yTile.EntityFireball = "field_145793_f"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.yTile.EntityFishHook = "field_146048_h"

f.zTile = {}
/** 
 * 
 * 
 * Parent Class: EntityThrowable
 */
f.zTile.EntityThrowable = "field_145787_e"
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
f.zTile.EntityArrow = "field_145789_f"
/** 
 * 
 * 
 * Parent Class: EntityFireball
 */
f.zTile.EntityFireball = "field_145794_g"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.zTile.EntityFishHook = "field_146050_i"

f.xTile = {}
/** 
 * 
 * 
 * Parent Class: EntityThrowable
 */
f.xTile.EntityThrowable = "field_145788_c"
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
f.xTile.EntityArrow = "field_145791_d"
/** 
 * 
 * 
 * Parent Class: EntityFireball
 */
f.xTile.EntityFireball = "field_145795_e"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.xTile.EntityFishHook = "field_146037_g"

f.inTile = {}
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
f.inTile.EntityArrow = "field_145790_g"
/** 
 * 
 * 
 * Parent Class: EntityFireball
 */
f.inTile.EntityFireball = "field_145796_h"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.inTile.EntityFishHook = "field_146046_j"
/** 
 * 
 * 
 * Parent Class: EntityThrowable
 */
f.inTile.EntityThrowable = "field_174853_f"

f.thrower = {}
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
f.thrower.EntityItem = "field_145801_f"
/** 
 * The entity that threw this throwable item.
 * 
 * Parent Class: EntityThrowable
 */
f.thrower.EntityThrowable = "field_70192_c"

f.owner = {}
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
f.owner.EntityItem = "field_145802_g"
/** 
 * 
 * 
 * Parent Class: ServerSelectionList
 */
f.owner.ServerSelectionList = "field_148200_k"
/** 
 * 
 * 
 * Parent Class: ServerListEntryNormal
 */
f.owner.ServerListEntryNormal = "field_148303_c"
/** 
 * 
 * 
 * Parent Class: DataWatcher
 */
f.owner.DataWatcher = "field_151511_a"

f.logger = {}
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
f.logger.EntityItem = "field_145803_d"
/** 
 * 
 * 
 * Parent Class: TileEntity
 */
f.logger.TileEntity = "field_145852_a"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
f.logger.GuiNewChat = "field_146249_a"
/** 
 * 
 * 
 * Parent Class: GuiScreenDemo
 */
f.logger.GuiScreenDemo = "field_146349_a"
/** 
 * 
 * 
 * Parent Class: GuiConnecting
 */
f.logger.GuiConnecting = "field_146370_f"
/** 
 * 
 * 
 * Parent Class: GuiChat
 */
f.logger.GuiChat = "field_146408_f"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.logger.GuiScreenBook = "field_146473_a"
/** 
 * 
 * 
 * Parent Class: GuiWinGame
 */
f.logger.GuiWinGame = "field_146580_a"
/** 
 * 
 * 
 * Parent Class: GuiSelectWorld
 */
f.logger.GuiSelectWorld = "field_146629_g"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.logger.GuiMultiplayer = "field_146802_a"
/** 
 * 
 * 
 * Parent Class: GuiScreenResourcePacks
 */
f.logger.GuiScreenResourcePacks = "field_146968_a"
/** 
 * 
 * 
 * Parent Class: GuiMainMenu
 */
f.logger.GuiMainMenu = "field_146974_g"
/** 
 * 
 * 
 * Parent Class: GuiBeacon
 */
f.logger.GuiBeacon = "field_147026_u"
/** 
 * 
 * 
 * Parent Class: GuiMerchant
 */
f.logger.GuiMerchant = "field_147039_u"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
f.logger.EntityPlayerMP = "field_147102_bM"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.logger.Minecraft = "field_147123_G"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
f.logger.MinecraftServer = "field_147145_h"
/** 
 * 
 * 
 * Parent Class: IntegratedServer
 */
f.logger.IntegratedServer = "field_147148_h"
/** 
 * 
 * 
 * Parent Class: CrashReport
 */
f.logger.CrashReport = "field_147150_a"
/** 
 * 
 * 
 * Parent Class: CommandHandler
 */
f.logger.CommandHandler = "field_147175_a"
/** 
 * 
 * 
 * Parent Class: CommandDebug
 */
f.logger.CommandDebug = "field_147208_a"
/** 
 * 
 * 
 * Parent Class: OldServerPinger
 */
f.logger.OldServerPinger = "field_147228_b"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayClient
 */
f.logger.NetHandlerPlayClient = "field_147301_d"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.logger.NetHandlerLoginServer = "field_147332_c"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.logger.NetHandlerPlayServer = "field_147370_c"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginClient
 */
f.logger.NetHandlerLoginClient = "field_147396_a"
/** 
 * 
 * 
 * Parent Class: ServerList
 */
f.logger.ServerList = "field_147415_a"
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
f.logger.ChunkProviderServer = "field_147417_b"
/** 
 * 
 * 
 * Parent Class: ChunkProviderClient
 */
f.logger.ChunkProviderClient = "field_147436_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
f.logger.WorldServer = "field_147491_a"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
f.logger.RenderGlobal = "field_147599_m"
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
f.logger.TextureMap = "field_147635_d"
/** 
 * 
 * 
 * Parent Class: LayeredTexture
 */
f.logger.LayeredTexture = "field_147638_c"
/** 
 * 
 * 
 * Parent Class: SimpleTexture
 */
f.logger.SimpleTexture = "field_147639_c"
/** 
 * 
 * 
 * Parent Class: ThreadDownloadImageData
 */
f.logger.ThreadDownloadImageData = "field_147644_c"
/** 
 * 
 * 
 * Parent Class: TextureManager
 */
f.logger.TextureManager = "field_147646_a"
/** 
 * 
 * 
 * Parent Class: LanguageManager
 */
f.logger.LanguageManager = "field_147648_b"
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
f.logger.SoundHandler = "field_147698_b"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.logger.EntityRenderer = "field_147710_q"
/** 
 * 
 * 
 * Parent Class: RendererLivingEntity
 */
f.logger.RendererLivingEntity = "field_147923_a"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
f.logger.TextureUtil = "field_147959_c"
/** 
 * 
 * 
 * Parent Class: SimpleReloadableResourceManager
 */
f.logger.SimpleReloadableResourceManager = "field_147967_a"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.logger.ShaderManager = "field_148003_a"
/** 
 * 
 * 
 * Parent Class: ShaderLinkHelper
 */
f.logger.ShaderLinkHelper = "field_148080_a"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
f.logger.ShaderUniform = "field_148104_a"
/** 
 * 
 * 
 * Parent Class: ScreenShotHelper
 */
f.logger.ScreenShotHelper = "field_148261_a"
/** 
 * 
 * 
 * Parent Class: ServerListEntryNormal
 */
f.logger.ServerListEntryNormal = "field_148304_a"
/** 
 * 
 * 
 * Parent Class: ResourcePackListEntryDefault
 */
f.logger.ResourcePackListEntryDefault = "field_148322_c"
/** 
 * 
 * 
 * Parent Class: ContainerRepair
 */
f.logger.ContainerRepair = "field_148326_f"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
f.logger.ServerConfigurationManager = "field_148546_d"
/** 
 * 
 * 
 * Parent Class: LanServerDetector
 */
f.logger.LanServerDetector = "field_148550_b"
/** 
 * 
 * 
 * Parent Class: SoundManager
 */
f.logger.SoundManager = "field_148621_b"
/** 
 * 
 * 
 * Parent Class: ThreadLanServerPing
 */
f.logger.ThreadLanServerPing = "field_148657_b"
/** 
 * 
 * 
 * Parent Class: RegistrySimple
 */
f.logger.RegistrySimple = "field_148743_a"
/** 
 * 
 * 
 * Parent Class: JsonToNBT
 */
f.logger.JsonToNBT = "field_150317_a"
/** 
 * 
 * 
 * Parent Class: BiomeGenBase
 */
f.logger.BiomeGenBase = "field_150586_aC"
/** 
 * 
 * 
 * Parent Class: NetworkManager
 */
f.logger.NetworkManager = "field_150735_g"
/** 
 * 
 * 
 * Parent Class: MessageSerializer
 */
f.logger.MessageSerializer = "field_150798_a"
/** 
 * 
 * 
 * Parent Class: MessageDeserializer
 */
f.logger.MessageDeserializer = "field_150800_a"
/** 
 * 
 * 
 * Parent Class: Chunk
 */
f.logger.Chunk = "field_150817_t"
/** 
 * 
 * 
 * Parent Class: StatisticsFile
 */
f.logger.StatisticsFile = "field_150889_b"
/** 
 * 
 * 
 * Parent Class: HttpUtil
 */
f.logger.HttpUtil = "field_151227_b"
/** 
 * 
 * 
 * Parent Class: Profiler
 */
f.logger.Profiler = "field_151234_b"
/** 
 * 
 * 
 * Parent Class: EntityTracker
 */
f.logger.EntityTracker = "field_151249_a"
/** 
 * 
 * 
 * Parent Class: PingResponseHandler
 */
f.logger.PingResponseHandler = "field_151258_a"
/** 
 * 
 * 
 * Parent Class: EntityTrackerEntry
 */
f.logger.EntityTrackerEntry = "field_151262_p"
/** 
 * 
 * 
 * Parent Class: NetworkSystem
 */
f.logger.NetworkSystem = "field_151275_b"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
f.logger.GameSettings = "field_151454_ax"
/** 
 * 
 * 
 * Parent Class: SharedMonsterAttributes
 */
f.logger.SharedMonsterAttributes = "field_151476_f"
/** 
 * 
 * 
 * Parent Class: SaveHandler
 */
f.logger.SaveHandler = "field_151478_a"
/** 
 * 
 * 
 * Parent Class: SaveFormatOld
 */
f.logger.SaveFormatOld = "field_151479_b"
/** 
 * 
 * 
 * Parent Class: AnvilSaveConverter
 */
f.logger.AnvilSaveConverter = "field_151480_b"
/** 
 * 
 * 
 * Parent Class: ScoreboardSaveData
 */
f.logger.ScoreboardSaveData = "field_151481_a"
/** 
 * 
 * 
 * Parent Class: AnvilChunkLoader
 */
f.logger.AnvilChunkLoader = "field_151505_a"
/** 
 * 
 * 
 * Parent Class: EntityAITasks
 */
f.logger.EntityAITasks = "field_151506_a"
/** 
 * 
 * 
 * Parent Class: EntityList
 */
f.logger.EntityList = "field_151516_b"
/** 
 * 
 * 
 * Parent Class: GenLayerHills
 */
f.logger.GenLayerHills = "field_151629_c"
/** 
 * 
 * 
 * Parent Class: MapGenStructureIO
 */
f.logger.MapGenStructureIO = "field_151687_a"
/** 
 * 
 * 
 * Parent Class: UserList
 */
f.logger.UserList = "field_152693_a"
/** 
 * 
 * 
 * Parent Class: ResourceIndex
 */
f.logger.ResourceIndex = "field_152783_a"
/** 
 * 
 * 
 * Parent Class: BroadcastController
 */
f.logger.BroadcastController = "field_152861_B"
/** 
 * 
 * 
 * Parent Class: DedicatedServer
 */
f.logger.DedicatedServer = "field_155771_h"
/** 
 * 
 * 
 * Parent Class: FallbackResourceManager
 */
f.logger.FallbackResourceManager = "field_177246_b"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
f.logger.ResourcePackRepository = "field_177320_c"
/** 
 * 
 * 
 * Parent Class: ChunkRenderDispatcher
 */
f.logger.ChunkRenderDispatcher = "field_178523_a"

f.delayBeforeCanPickup = {}
/** 
 * 
 * 
 * Parent Class: EntityItem
 */
f.delayBeforeCanPickup.EntityItem = "field_145804_b"
/** 
 * 
 * 
 * Parent Class: EntityXPOrb
 */
f.delayBeforeCanPickup.EntityXPOrb = "field_70532_c"

/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
f.canSetAsBlock = "field_145808_f"
/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
f.hurtEntities = "field_145809_g"
/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
f.tileEntityData = "field_145810_d"
/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
f.fallTime = "field_145812_b"
/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
f.shouldDropItem = "field_145813_c"
/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
f.fallHurtMax = "field_145815_h"
/** 
 * 
 * 
 * Parent Class: EntityFallingBlock
 */
f.fallHurtAmount = "field_145816_i"
/** 
 * Cooldown before command block logic runs again in ticks
 * 
 * Parent Class: EntityMinecartCommandBlock
 */
f.activatorRailCooldown = "field_145823_b"
f.commandBlockLogic = {}
/** 
 * 
 * 
 * Parent Class: EntityMinecartCommandBlock
 */
f.commandBlockLogic.EntityMinecartCommandBlock = "field_145824_a"
/** 
 * 
 * 
 * Parent Class: TileEntityCommandBlock
 */
f.commandBlockLogic.TileEntityCommandBlock = "field_145994_a"

/** 
 * 
 * 
 * Parent Class: TileEntity
 */
f.tileEntityInvalid = "field_145846_f"
/** 
 * 
 * 
 * Parent Class: TileEntity
 */
f.blockMetadata = "field_145847_g"
f.worldObj = {}
/** 
 * the instance of the world the tile entity is in.
 * 
 * Parent Class: TileEntity
 */
f.worldObj.TileEntity = "field_145850_b"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.worldObj.TileEntityRendererDispatcher = "field_147550_f"
/** 
 * Reference to the World object.
 * 
 * Parent Class: Entity
 */
f.worldObj.Entity = "field_70170_p"
/** 
 * Reference to the World object.
 * 
 * Parent Class: ChunkCache
 */
f.worldObj.ChunkCache = "field_72815_e"
/** 
 * 
 * 
 * Parent Class: ChunkProviderFlat
 */
f.worldObj.ChunkProviderFlat = "field_73163_a"
/** 
 * Is the world that the nether is getting generated.
 * 
 * Parent Class: ChunkProviderHell
 */
f.worldObj.ChunkProviderHell = "field_73175_o"
/** 
 * Reference to the World object.
 * 
 * Parent Class: ChunkProviderGenerate
 */
f.worldObj.ChunkProviderGenerate = "field_73230_p"
/** 
 * Reference to the World object.
 * 
 * Parent Class: ChunkProviderClient
 */
f.worldObj.ChunkProviderClient = "field_73235_d"
/** 
 * 
 * 
 * Parent Class: ChunkProviderServer
 */
f.worldObj.ChunkProviderServer = "field_73251_h"
/** 
 * This world object.
 * 
 * Parent Class: MapGenBase
 */
f.worldObj.MapGenBase = "field_75039_c"
/** 
 * 
 * 
 * Parent Class: ContainerWorkbench
 */
f.worldObj.ContainerWorkbench = "field_75161_g"
/** 
 * 
 * 
 * Parent Class: EntityAIAttackOnCollide
 */
f.worldObj.EntityAIAttackOnCollide = "field_75443_a"
/** 
 * 
 * 
 * Parent Class: EntityAIVillagerMate
 */
f.worldObj.EntityAIVillagerMate = "field_75448_d"
/** 
 * 
 * 
 * Parent Class: PathNavigate
 */
f.worldObj.PathNavigate = "field_75513_b"
/** 
 * 
 * 
 * Parent Class: VillageSiege
 */
f.worldObj.VillageSiege = "field_75537_a"
/** 
 * 
 * 
 * Parent Class: VillageCollection
 */
f.worldObj.VillageCollection = "field_75556_a"
/** 
 * 
 * 
 * Parent Class: Village
 */
f.worldObj.Village = "field_75586_a"
/** 
 * world object being used
 * 
 * Parent Class: WorldProvider
 */
f.worldObj.WorldProvider = "field_76579_a"
/** 
 * Reference to the World object.
 * 
 * Parent Class: Chunk
 */
f.worldObj.Chunk = "field_76637_e"
/** 
 * 
 * 
 * Parent Class: Explosion
 */
f.worldObj.Explosion = "field_77287_j"
/** 
 * Reference to the World object.
 * 
 * Parent Class: RenderManager
 */
f.worldObj.RenderManager = "field_78722_g"
/** 
 * Reference to the World object.
 * 
 * Parent Class: EffectRenderer
 */
f.worldObj.EffectRenderer = "field_78878_a"
/** 
 * 
 * 
 * Parent Class: BlockSourceImpl
 */
f.worldObj.BlockSourceImpl = "field_82627_a"

/** 
 * A HashMap storing the classes and mapping to the string names (reverse of nameToClassMap).
 * 
 * Parent Class: TileEntity
 */
f.classToNameMap = "field_145853_j"
f.blockType = {}
/** 
 * the Block type that this TileEntity is contained within
 * 
 * Parent Class: TileEntity
 */
f.blockType.TileEntity = "field_145854_h"
/** 
 * 
 * 
 * Parent Class: BlockEventData
 */
f.blockType.BlockEventData = "field_151344_d"
/** 
 * 
 * 
 * Parent Class: BlockFlower$EnumFlowerType
 */
f.blockType.BlockFlower$EnumFlowerType = "field_176978_l"

/** 
 * A HashMap storing string names of classes mapping to the actual java.lang.Class type.
 * 
 * Parent Class: TileEntity
 */
f.nameToClassMap = "field_145855_i"
/** 
 * 
 * 
 * Parent Class: BlockJukebox$TileEntityJukebox
 */
f.record = "field_145858_a"
/** 
 * the progress in (de)extending
 * 
 * Parent Class: TileEntityPiston
 */
f.lastProgress = "field_145870_n"
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
f.shouldHeadBeRendered = "field_145872_l"
f.progress = {}
/** 
 * 
 * 
 * Parent Class: TileEntityPiston
 */
f.progress.TileEntityPiston = "field_145873_m"
/** 
 * 
 * 
 * Parent Class: GuiScreenWorking
 */
f.progress.GuiScreenWorking = "field_146590_g"
/** 
 * 
 * 
 * Parent Class: GuiDownloadTerrain
 */
f.progress.GuiDownloadTerrain = "field_146593_f"
/** 
 * 
 * 
 * Parent Class: S25PacketBlockBreakAnim
 */
f.progress.S25PacketBlockBreakAnim = "field_148849_e"

/** 
 * if this piston is extending or not
 * 
 * Parent Class: TileEntityPiston
 */
f.extending = "field_145875_k"
/** 
 * Note to play
 * 
 * Parent Class: TileEntityNote
 */
f.note = "field_145879_a"
/** 
 * stores the latest redstone state
 * 
 * Parent Class: TileEntityNote
 */
f.previousRedstoneState = "field_145880_i"
/** 
 * 
 * 
 * Parent Class: TileEntityMobSpawner
 */
f.spawnerLogic = "field_145882_a"
f.inventory = {}
/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
f.inventory.TileEntityHopper = "field_145900_a"
/** 
 * Inventory of the player
 * 
 * Parent Class: EntityPlayer
 */
f.inventory.EntityPlayer = "field_71071_by"
/** 
 * The inventory we want to extract a slot from.
 * 
 * Parent Class: Slot
 */
f.inventory.Slot = "field_75224_c"

/** 
 * 
 * 
 * Parent Class: TileEntityHopper
 */
f.transferCooldown = "field_145901_j"
/** 
 * 
 * 
 * Parent Class: TileEntitySkull
 */
f.skullType = "field_145908_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySkull
 */
f.skullRotation = "field_145910_i"
/** 
 * 
 * 
 * Parent Class: TileEntitySign
 */
f.signText = "field_145915_a"
/** 
 * 
 * 
 * Parent Class: TileEntitySign
 */
f.isEditable = "field_145916_j"
f.player = {}
/** 
 * 
 * 
 * Parent Class: TileEntitySign
 */
f.player.TileEntitySign = "field_145917_k"
/** 
 * 
 * 
 * Parent Class: MovingSoundMinecartRiding
 */
f.player.MovingSoundMinecartRiding = "field_147672_k"
/** 
 * The player
 * 
 * Parent Class: EntityEnderman$AIFindPlayer
 */
f.player.EntityEnderman$AIFindPlayer = "field_179448_g"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.player.NetHandlerLoginServer = "field_181025_l"
/** 
 * The player whose inventory this is.
 * 
 * Parent Class: InventoryPlayer
 */
f.player.InventoryPlayer = "field_70458_d"
/** 
 * The player that has this container open.
 * 
 * Parent Class: ContainerBrewingStand$Potion
 */
f.player.ContainerBrewingStand$Potion = "field_75244_a"

/** 
 * "The index of the line currently being edited. Only used on client side
 * 
 * Parent Class: TileEntitySign
 */
f.lineBeingEdited = "field_145918_i"
f.rand = {}
/** 
 * 
 * 
 * Parent Class: TileEntityEnchantmentTable
 */
f.rand.TileEntityEnchantmentTable = "field_145923_r"
/** 
 * 
 * 
 * Parent Class: MusicTicker
 */
f.rand.MusicTicker = "field_147679_a"
/** 
 * 
 * 
 * Parent Class: EnchantmentNameParts
 */
f.rand.EnchantmentNameParts = "field_148336_b"
/** 
 * 
 * 
 * Parent Class: BlockDispenser
 */
f.rand.BlockDispenser = "field_149942_b"
/** 
 * 
 * 
 * Parent Class: WorldGenBigTree
 */
f.rand.WorldGenBigTree = "field_175949_k"
/** 
 * 
 * 
 * Parent Class: Entity
 */
f.rand.Entity = "field_70146_Z"
/** 
 * RNG for World.
 * 
 * Parent Class: World
 */
f.rand.World = "field_73012_v"
/** 
 * RNG.
 * 
 * Parent Class: ChunkProviderGenerate
 */
f.rand.ChunkProviderGenerate = "field_73220_k"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
f.rand.GuiIngame = "field_73842_c"
/** 
 * The RNG used by the MapGen classes.
 * 
 * Parent Class: MapGenBase
 */
f.rand.MapGenBase = "field_75038_b"
/** 
 * 
 * 
 * Parent Class: ContainerEnchantment
 */
f.rand.ContainerEnchantment = "field_75169_l"
/** 
 * RNG.
 * 
 * Parent Class: EffectRenderer
 */
f.rand.EffectRenderer = "field_78875_d"

/** 
 * 
 * 
 * Parent Class: TileEntityEnchantmentTable
 */
f.bookRotationPrev = "field_145925_p"
f.tickCount = {}
/** 
 * 
 * 
 * Parent Class: TileEntityEnchantmentTable
 */
f.tickCount.TileEntityEnchantmentTable = "field_145926_a"
/** 
 * 
 * 
 * Parent Class: EntityAITasks
 */
f.tickCount.EntityAITasks = "field_75778_d"

/** 
 * 
 * 
 * Parent Class: TileEntityEnchantmentTable
 */
f.bookSpreadPrev = "field_145927_n"
/** 
 * 
 * 
 * Parent Class: TileEntityEnchantmentTable
 */
f.bookRotation = "field_145928_o"
/** 
 * 
 * 
 * Parent Class: TileEntityEnchantmentTable
 */
f.bookSpread = "field_145930_m"
/** 
 * 
 * 
 * Parent Class: TileEntityEnchantmentTable
 */
f.pageFlipPrev = "field_145931_j"
/** 
 * 
 * 
 * Parent Class: TileEntityEnchantmentTable
 */
f.pageFlip = "field_145933_i"
f.inputSlots = {}
/** 
 * an array of the input slot indices
 * 
 * Parent Class: TileEntityBrewingStand
 */
f.inputSlots.TileEntityBrewingStand = "field_145941_a"
/** 
 * The 2slots where you put your items in that you want to merge and/or rename.
 * 
 * Parent Class: ContainerRepair
 */
f.inputSlots.ContainerRepair = "field_82853_g"

/** 
 * an integer with each bit specifying whether that slot of the stand contains a potion
 * 
 * Parent Class: TileEntityBrewingStand
 */
f.filledSlots = "field_145943_l"
/** 
 * used to check if the current ingredient has been removed from the brewing stand during brewing
 * 
 * Parent Class: TileEntityBrewingStand
 */
f.ingredientID = "field_145944_m"
/** 
 * The ItemStacks currently placed in the slots of the brewing stand
 * 
 * Parent Class: TileEntityBrewingStand
 */
f.brewingItemStacks = "field_145945_j"
f.brewTime = {}
/** 
 * 
 * 
 * Parent Class: TileEntityBrewingStand
 */
f.brewTime.TileEntityBrewingStand = "field_145946_k"
/** 
 * 
 * 
 * Parent Class: ContainerBrewingStand
 */
f.brewTime.ContainerBrewingStand = "field_75187_g"

/** 
 * an array of the output slot indices
 * 
 * Parent Class: TileEntityBrewingStand
 */
f.outputSlots = "field_145947_i"
f.furnaceBurnTime = {}
/** 
 * The number of ticks that the furnace will keep burning
 * 
 * Parent Class: TileEntityFurnace
 */
f.furnaceBurnTime.TileEntityFurnace = "field_145956_a"
/** 
 * 
 * 
 * Parent Class: ContainerFurnace
 */
f.furnaceBurnTime.ContainerFurnace = "field_178154_h"

/** 
 * The ItemStacks that hold the items currently being used in the furnace
 * 
 * Parent Class: TileEntityFurnace
 */
f.furnaceItemStacks = "field_145957_n"
/** 
 * 
 * 
 * Parent Class: TileEntityFurnace
 */
f.furnaceCustomName = "field_145958_o"
/** 
 * 
 * 
 * Parent Class: TileEntityFurnace
 */
f.slotsBottom = "field_145959_l"
/** 
 * 
 * 
 * Parent Class: TileEntityFurnace
 */
f.slotsSides = "field_145960_m"
/** 
 * 
 * 
 * Parent Class: TileEntityFurnace
 */
f.slotsTop = "field_145962_k"
f.currentItemBurnTime = {}
/** 
 * The number of ticks that a fresh copy of the currently-burning item would keep the furnace burning for
 * 
 * Parent Class: TileEntityFurnace
 */
f.currentItemBurnTime.TileEntityFurnace = "field_145963_i"
/** 
 * 
 * 
 * Parent Class: ContainerFurnace
 */
f.currentItemBurnTime.ContainerFurnace = "field_178155_i"

/** 
 * 
 * 
 * Parent Class: TileEntityFlowerPot
 */
f.flowerPotItem = "field_145967_a"
/** 
 * 
 * 
 * Parent Class: TileEntityFlowerPot
 */
f.flowerPotData = "field_145968_i"
f.lidAngle = {}
/** 
 * 
 * 
 * Parent Class: TileEntityEnderChest
 */
f.lidAngle.TileEntityEnderChest = "field_145972_a"
/** 
 * The current angle of the lid (between 0 and 1)
 * 
 * Parent Class: TileEntityChest
 */
f.lidAngle.TileEntityChest = "field_145989_m"

f.numPlayersUsing = {}
/** 
 * 
 * 
 * Parent Class: TileEntityEnderChest
 */
f.numPlayersUsing.TileEntityEnderChest = "field_145973_j"
/** 
 * The number of players currently using this chest
 * 
 * Parent Class: TileEntityChest
 */
f.numPlayersUsing.TileEntityChest = "field_145987_o"

f.ticksSinceSync = {}
/** 
 * 
 * 
 * Parent Class: TileEntityEnderChest
 */
f.ticksSinceSync.TileEntityEnderChest = "field_145974_k"
/** 
 * Server sync counter (once per 20 ticks)
 * 
 * Parent Class: TileEntityChest
 */
f.ticksSinceSync.TileEntityChest = "field_145983_q"

f.prevLidAngle = {}
/** 
 * The angle of the ender chest lid last tick
 * 
 * Parent Class: TileEntityEnderChest
 */
f.prevLidAngle.TileEntityEnderChest = "field_145975_i"
/** 
 * The angle of the lid last tick
 * 
 * Parent Class: TileEntityChest
 */
f.prevLidAngle.TileEntityChest = "field_145986_n"

/** 
 * 
 * 
 * Parent Class: TileEntityChest
 */
f.cachedChestType = "field_145982_r"
/** 
 * Determines if the check for adjacent chests has taken place.
 * 
 * Parent Class: TileEntityChest
 */
f.adjacentChestChecked = "field_145984_a"
/** 
 * 
 * 
 * Parent Class: TileEntityChest
 */
f.chestContents = "field_145985_p"
/** 
 * Contains the chest tile located adjacent to this one (if any)
 * 
 * Parent Class: TileEntityChest
 */
f.adjacentChestZPos = "field_145988_l"
/** 
 * Contains the chest tile located adjacent to this one (if any)
 * 
 * Parent Class: TileEntityChest
 */
f.adjacentChestXPos = "field_145990_j"
/** 
 * Contains the chest tile located adjacent to this one (if any)
 * 
 * Parent Class: TileEntityChest
 */
f.adjacentChestXNeg = "field_145991_k"
/** 
 * Contains the chest tile located adjacent to this one (if any)
 * 
 * Parent Class: TileEntityChest
 */
f.adjacentChestZNeg = "field_145992_i"
/** 
 * 
 * 
 * Parent Class: TileEntityComparator
 */
f.outputSignal = "field_145997_a"
/** 
 * List of effects that Beacon can apply
 * 
 * Parent Class: TileEntityBeacon
 */
f.effectsList = "field_146009_a"
/** 
 * Secondary potion effect given by this beacon.
 * 
 * Parent Class: TileEntityBeacon
 */
f.secondaryEffect = "field_146010_n"
/** 
 * Item given to this beacon as payment.
 * 
 * Parent Class: TileEntityBeacon
 */
f.payment = "field_146011_o"
/** 
 * Level of this beacon's pyramid.
 * 
 * Parent Class: TileEntityBeacon
 */
f.levels = "field_146012_l"
/** 
 * Primary potion effect given by this beacon.
 * 
 * Parent Class: TileEntityBeacon
 */
f.primaryEffect = "field_146013_m"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon
 */
f.isComplete = "field_146015_k"
/** 
 * 
 * 
 * Parent Class: TileEntityBeacon
 */
f.beamRenderCounter = "field_146016_i"
/** 
 * 
 * 
 * Parent Class: TileEntityDispenser
 */
f.stacks = "field_146022_i"
f.partName = {}
/** 
 * 
 * 
 * Parent Class: EntityDragonPart
 */
f.partName.EntityDragonPart = "field_146032_b"
/** 
 * 
 * 
 * Parent Class: EnumPlayerModelParts
 */
f.partName.EnumPlayerModelParts = "field_179338_j"

/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.FISH = "field_146036_f"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.ticksCatchableDelay = "field_146038_az"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.JUNK = "field_146039_d"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.ticksCaughtDelay = "field_146040_ay"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.TREASURE = "field_146041_e"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.angler = "field_146042_b"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.caughtEntity = "field_146043_c"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.shake = "field_146044_a"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.ticksCatchable = "field_146045_ax"
f.ticksInAir = {}
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.ticksInAir.EntityFishHook = "field_146047_aw"
/** 
 * 
 * 
 * Parent Class: EntityThrowable
 */
f.ticksInAir.EntityThrowable = "field_70195_i"
/** 
 * 
 * 
 * Parent Class: EntityFireball
 */
f.ticksInAir.EntityFireball = "field_70234_an"
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
f.ticksInAir.EntityArrow = "field_70257_an"

f.ticksInGround = {}
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.ticksInGround.EntityFishHook = "field_146049_av"
/** 
 * 
 * 
 * Parent Class: EntityThrowable
 */
f.ticksInGround.EntityThrowable = "field_70194_h"
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
f.ticksInGround.EntityArrow = "field_70252_j"

f.inGround = {}
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.inGround.EntityFishHook = "field_146051_au"
/** 
 * 
 * 
 * Parent Class: EntityThrowable
 */
f.inGround.EntityThrowable = "field_174854_a"
/** 
 * 
 * 
 * Parent Class: EntityFireball
 */
f.inGround.EntityFireball = "field_70238_i"
/** 
 * 
 * 
 * Parent Class: EntityArrow
 */
f.inGround.EntityArrow = "field_70254_i"

/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.clientMotionY = "field_146052_aI"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.clientMotionZ = "field_146053_aJ"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.fishApproachAngle = "field_146054_aA"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.fishPosRotationIncrements = "field_146055_aB"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.fishX = "field_146056_aC"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.fishY = "field_146057_aD"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.fishZ = "field_146058_aE"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.fishYaw = "field_146059_aF"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.fishPitch = "field_146060_aG"
/** 
 * 
 * 
 * Parent Class: EntityFishHook
 */
f.clientMotionX = "field_146061_aH"
/** 
 * The height of the the entity.
 * 
 * Parent Class: EntityZombie
 */
f.zombieHeight = "field_146073_bw"
/** 
 * The width of the entity
 * 
 * Parent Class: EntityZombie
 */
f.zombieWidth = "field_146074_bv"
/** 
 * 
 * 
 * Parent Class: EntityZombie
 */
f.breakDoor = "field_146075_bs"
/** 
 * 
 * 
 * Parent Class: EntityZombie
 */
f.isBreakDoorsTaskSet = "field_146076_bu"
/** 
 * 
 * 
 * Parent Class: EntityAnimal
 */
f.playerInLove = "field_146084_br"
/** 
 * 
 * 
 * Parent Class: EntitySheep
 */
f.entityAIEatGrass = "field_146087_bs"
f.gameProfile = {}
/** 
 * The player's unique game profile
 * 
 * Parent Class: EntityPlayer
 */
f.gameProfile.EntityPlayer = "field_146106_i"
/** 
 * The player's GameProfile
 * 
 * Parent Class: PlayerProfileCache$ProfileEntry
 */
f.gameProfile.PlayerProfileCache$ProfileEntry = "field_152672_b"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginClient
 */
f.gameProfile.NetHandlerLoginClient = "field_175091_e"
/** 
 * The GameProfile for the player represented by this NetworkPlayerInfo instance
 * 
 * Parent Class: NetworkPlayerInfo
 */
f.gameProfile.NetworkPlayerInfo = "field_178867_a"

/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
f.statWriter = "field_146108_bO"
f.mc = {}
/** 
 * 
 * 
 * Parent Class: CreativeCrafting
 */
f.mc.CreativeCrafting = "field_146109_a"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
f.mc.GuiNewChat = "field_146247_f"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
f.mc.GuiAchievement = "field_146259_f"
/** 
 * Reference to the Minecraft object.
 * 
 * Parent Class: GuiScreen
 */
f.mc.GuiScreen = "field_146297_k"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginClient
 */
f.mc.NetHandlerLoginClient = "field_147394_b"
/** 
 * 
 * 
 * Parent Class: MusicTicker
 */
f.mc.MusicTicker = "field_147677_b"
/** 
 * 
 * 
 * Parent Class: RenderItemFrame
 */
f.mc.RenderItemFrame = "field_147917_g"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
f.mc.GuiSlot = "field_148161_k"
/** 
 * 
 * 
 * Parent Class: GuiKeyBindingList
 */
f.mc.GuiKeyBindingList = "field_148189_l"
/** 
 * 
 * 
 * Parent Class: GuiResourcePackList
 */
f.mc.GuiResourcePackList = "field_148205_k"
/** 
 * 
 * 
 * Parent Class: ServerListEntryLanScan
 */
f.mc.ServerListEntryLanScan = "field_148288_a"
/** 
 * 
 * 
 * Parent Class: ServerListEntryLanDetected
 */
f.mc.ServerListEntryLanDetected = "field_148293_a"
/** 
 * 
 * 
 * Parent Class: ServerListEntryNormal
 */
f.mc.ServerListEntryNormal = "field_148300_d"
/** 
 * 
 * 
 * Parent Class: ResourcePackListEntry
 */
f.mc.ResourcePackListEntry = "field_148317_a"
/** 
 * 
 * 
 * Parent Class: GuiStreamIndicator
 */
f.mc.GuiStreamIndicator = "field_152442_b"
/** 
 * the minecraft instance
 * 
 * Parent Class: TwitchStream
 */
f.mc.TwitchStream = "field_152953_e"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
f.mc.GuiOverlayDebug = "field_175242_a"
/** 
 * 
 * 
 * Parent Class: GuiPlayerTabOverlay
 */
f.mc.GuiPlayerTabOverlay = "field_175250_f"
/** 
 * 
 * 
 * Parent Class: EntityPlayerSP
 */
f.mc.EntityPlayerSP = "field_71159_c"
/** 
 * The Minecraft instance.
 * 
 * Parent Class: IntegratedServer
 */
f.mc.IntegratedServer = "field_71349_l"
/** 
 * A reference to the Minecraft object.
 * 
 * Parent Class: RenderGlobal
 */
f.mc.RenderGlobal = "field_72777_q"
/** 
 * 
 * 
 * Parent Class: WorldClient
 */
f.mc.WorldClient = "field_73037_M"
/** 
 * A reference to the Minecraft object.
 * 
 * Parent Class: LoadingScreenRenderer
 */
f.mc.LoadingScreenRenderer = "field_73725_b"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
f.mc.GuiIngame = "field_73839_d"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
f.mc.GameSettings = "field_74317_L"
/** 
 * A reference to the Minecraft object.
 * 
 * Parent Class: ItemRenderer
 */
f.mc.ItemRenderer = "field_78455_a"
/** 
 * A reference to the Minecraft object.
 * 
 * Parent Class: EntityRenderer
 */
f.mc.EntityRenderer = "field_78531_r"
/** 
 * The Minecraft instance.
 * 
 * Parent Class: PlayerControllerMP
 */
f.mc.PlayerControllerMP = "field_78776_a"
/** 
 * The Minecraft instance.
 * 
 * Parent Class: ServerList
 */
f.mc.ServerList = "field_78859_a"

/** 
 * 
 * 
 * Parent Class: GuiButton
 */
f.buttonTextures = "field_146122_a"
/** 
 * 
 * 
 * Parent Class: GuiButton
 */
f.hovered = "field_146123_n"
f.enabled = {}
/** 
 * "True if this control is enabled
 * 
 * Parent Class: GuiButton
 */
f.enabled.GuiButton = "field_146124_l"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
f.enabled.GuiSlot = "field_148164_v"

f.visible = {}
/** 
 * Hides the button completely if false.
 * 
 * Parent Class: GuiButton
 */
f.visible.GuiButton = "field_146125_m"
/** 
 * 
 * 
 * Parent Class: GuiLabel
 */
f.visible.GuiLabel = "field_146172_j"
/** 
 * True if this textbox is visible
 * 
 * Parent Class: GuiTextField
 */
f.visible.GuiTextField = "field_146220_v"

/** 
 * The string displayed on this control.
 * 
 * Parent Class: GuiButton
 */
f.displayString = "field_146126_j"
f.xPosition = {}
/** 
 * The x position of this control.
 * 
 * Parent Class: GuiButton
 */
f.xPosition.GuiButton = "field_146128_h"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.xPosition.GuiTextField = "field_146209_f"
/** 
 * 
 * 
 * Parent Class: EntityAIWander
 */
f.xPosition.EntityAIWander = "field_75455_b"
/** 
 * The x coordinate of the chunk.
 * 
 * Parent Class: Chunk
 */
f.xPosition.Chunk = "field_76635_g"
/** 
 * The x coordinate of the BiomeCacheBlock.
 * 
 * Parent Class: BiomeCache$Block
 */
f.xPosition.BiomeCache$Block = "field_76888_d"
/** 
 * 
 * 
 * Parent Class: Frustum
 */
f.xPosition.Frustum = "field_78550_b"

f.yPosition = {}
/** 
 * The y position of this control.
 * 
 * Parent Class: GuiButton
 */
f.yPosition.GuiButton = "field_146129_i"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.yPosition.GuiTextField = "field_146210_g"
/** 
 * 
 * 
 * Parent Class: EntityAIWander
 */
f.yPosition.EntityAIWander = "field_75456_c"
/** 
 * 
 * 
 * Parent Class: Frustum
 */
f.yPosition.Frustum = "field_78551_c"

f.options = {}
/** 
 * 
 * 
 * Parent Class: GuiOptionSlider
 */
f.options.GuiOptionSlider = "field_146133_q"
/** 
 * Reference to the GameSettings object.
 * 
 * Parent Class: GuiControls
 */
f.options.GuiControls = "field_146497_i"
/** 
 * Reference to the GameSettings object.
 * 
 * Parent Class: SoundManager
 */
f.options.SoundManager = "field_148619_d"
/** 
 * Reference to the GameSettings object.
 * 
 * Parent Class: RenderManager
 */
f.options.RenderManager = "field_78733_k"

/** 
 * 
 * 
 * Parent Class: GuiOptionSlider
 */
f.sliderValue = "field_146134_p"
/** 
 * 
 * 
 * Parent Class: GuiOptionSlider
 */
f.dragging = "field_146135_o"
/** 
 * 
 * 
 * Parent Class: GuiOptionButton
 */
f.enumOptions = "field_146137_o"
f.fontRenderer = {}
/** 
 * 
 * 
 * Parent Class: GuiLabel
 */
f.fontRenderer.GuiLabel = "field_146164_r"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.fontRenderer.TileEntityRendererDispatcher = "field_147557_n"
/** 
 * 
 * 
 * Parent Class: GuiOverlayDebug
 */
f.fontRenderer.GuiOverlayDebug = "field_175241_f"

/** 
 * 
 * 
 * Parent Class: GuiLabel
 */
f.centered = "field_146170_l"
/** 
 * 
 * 
 * Parent Class: GuiLabel
 */
f.labelBgEnabled = "field_146171_m"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.fontRendererInstance = "field_146211_a"
/** 
 * if true the textbox can lose focus by clicking elsewhere on the screen
 * 
 * Parent Class: GuiTextField
 */
f.canLoseFocus = "field_146212_n"
/** 
 * "If this value is true along with isEnabled
 * 
 * Parent Class: GuiTextField
 */
f.isFocused = "field_146213_o"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.cursorCounter = "field_146214_l"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.enableBackgroundDrawing = "field_146215_m"
f.text = {}
/** 
 * Has the current text being edited on the textbox.
 * 
 * Parent Class: GuiTextField
 */
f.text.GuiTextField = "field_146216_j"
/** 
 * 
 * 
 * Parent Class: ChatComponentText
 */
f.text.ChatComponentText = "field_150267_b"

/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.maxStringLength = "field_146217_k"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.disabledColor = "field_146221_u"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.enabledColor = "field_146222_t"
/** 
 * "other selection position
 * 
 * Parent Class: GuiTextField
 */
f.selectionEnd = "field_146223_s"
/** 
 * 
 * 
 * Parent Class: GuiTextField
 */
f.cursorPosition = "field_146224_r"
/** 
 * The current character index that should be used as start of the rendered text.
 * 
 * Parent Class: GuiTextField
 */
f.lineScrollOffset = "field_146225_q"
/** 
 * "If this value is true along with isFocused
 * 
 * Parent Class: GuiTextField
 */
f.isEnabled = "field_146226_p"
/** 
 * A list of messages previously sent through the chat GUI
 * 
 * Parent Class: GuiNewChat
 */
f.sentMessages = "field_146248_g"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
f.scrollPos = "field_146250_j"
/** 
 * 
 * 
 * Parent Class: GuiNewChat
 */
f.isScrolled = "field_146251_k"
/** 
 * Chat lines to be displayed in the chat box
 * 
 * Parent Class: GuiNewChat
 */
f.chatLines = "field_146252_h"
/** 
 * List of the ChatLines currently drawn
 * 
 * Parent Class: GuiNewChat
 */
f.drawnChatLines = "field_146253_i"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
f.achievementBg = "field_146261_a"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
f.permanentNotification = "field_146262_n"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
f.notificationTime = "field_146263_l"
f.renderItem = {}
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
f.renderItem.GuiAchievement = "field_146264_m"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.renderItem.Minecraft = "field_175621_X"

f.achievementDescription = {}
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
f.achievementDescription.GuiAchievement = "field_146265_j"
/** 
 * "Holds the description of the achievement
 * 
 * Parent Class: Achievement
 */
f.achievementDescription.Achievement = "field_75996_k"

/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
f.theAchievement = "field_146266_k"
/** 
 * 
 * 
 * Parent Class: GuiAchievement
 */
f.achievementTitle = "field_146268_i"
/** 
 * 
 * 
 * Parent Class: GuiScreen
 */
f.eventButton = "field_146287_f"
/** 
 * 
 * 
 * Parent Class: GuiScreen
 */
f.lastMouseEvent = "field_146288_g"
f.fontRendererObj = {}
/** 
 * The FontRenderer used by GuiScreen
 * 
 * Parent Class: GuiScreen
 */
f.fontRendererObj.GuiScreen = "field_146289_q"
/** 
 * The font renderer used for displaying and measuring text
 * 
 * Parent Class: Minecraft
 */
f.fontRendererObj.Minecraft = "field_71466_p"

/** 
 * The button that was just pressed.
 * 
 * Parent Class: GuiScreen
 */
f.selectedButton = "field_146290_a"
/** 
 * 
 * 
 * Parent Class: GuiScreen
 */
f.allowUserInput = "field_146291_p"
/** 
 * A list of all the buttons in this container.
 * 
 * Parent Class: GuiScreen
 */
f.buttonList = "field_146292_n"
/** 
 * A list of all the labels in this container.
 * 
 * Parent Class: GuiScreen
 */
f.labelList = "field_146293_o"
/** 
 * "Holds a instance of RenderItem
 * 
 * Parent Class: GuiScreen
 */
f.itemRender = "field_146296_j"
/** 
 * Tracks the number of fingers currently on the screen. Prevents subsequent fingers registering as clicks.
 * 
 * Parent Class: GuiScreen
 */
f.touchValue = "field_146298_h"
f.message = {}
/** 
 * 
 * 
 * Parent Class: GuiDisconnected
 */
f.message.GuiDisconnected = "field_146304_f"
/** 
 * 
 * 
 * Parent Class: C14PacketTabComplete
 */
f.message.C14PacketTabComplete = "field_149420_a"
/** 
 * 
 * 
 * Parent Class: C01PacketChatMessage
 */
f.message.C01PacketChatMessage = "field_149440_a"
/** 
 * 
 * 
 * Parent Class: FallbackResourceManager$InputStreamLeakedResourceLogger
 */
f.message.FallbackResourceManager$InputStreamLeakedResourceLogger = "field_177328_b"
/** 
 * 
 * 
 * Parent Class: S45PacketTitle
 */
f.message.S45PacketTitle = "field_179810_b"
/** 
 * 
 * 
 * Parent Class: LoadingScreenRenderer
 */
f.message.LoadingScreenRenderer = "field_73727_a"

/** 
 * 
 * 
 * Parent Class: GuiDisconnected
 */
f.multilineMessage = "field_146305_g"
f.reason = {}
/** 
 * 
 * 
 * Parent Class: GuiDisconnected
 */
f.reason.GuiDisconnected = "field_146306_a"
/** 
 * 
 * 
 * Parent Class: S40PacketDisconnect
 */
f.reason.S40PacketDisconnect = "field_149167_a"
/** 
 * 
 * 
 * Parent Class: S00PacketDisconnect
 */
f.reason.S00PacketDisconnect = "field_149605_a"
/** 
 * 
 * 
 * Parent Class: BanEntry
 */
f.reason.BanEntry = "field_73693_g"

f.parentScreen = {}
/** 
 * 
 * 
 * Parent Class: GuiDisconnected
 */
f.parentScreen.GuiDisconnected = "field_146307_h"
/** 
 * 
 * 
 * Parent Class: GuiScreenAddServer
 */
f.parentScreen.GuiScreenAddServer = "field_146310_a"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.parentScreen.GuiCreateWorld = "field_146332_f"
/** 
 * A reference to the screen object that created this. Used for navigating between screens.
 * 
 * Parent Class: GuiYesNo
 */
f.parentScreen.GuiYesNo = "field_146355_a"
/** 
 * 
 * 
 * Parent Class: ScreenChatOptions
 */
f.parentScreen.ScreenChatOptions = "field_146396_g"
/** 
 * The parent GUI
 * 
 * Parent Class: GuiFlatPresets
 */
f.parentScreen.GuiFlatPresets = "field_146432_g"
/** 
 * The parent Gui screen
 * 
 * Parent Class: GuiLanguage
 */
f.parentScreen.GuiLanguage = "field_146453_a"
/** 
 * A reference to the screen object that created this. Used for navigating between screens.
 * 
 * Parent Class: GuiControls
 */
f.parentScreen.GuiControls = "field_146496_h"
/** 
 * 
 * 
 * Parent Class: GuiStats
 */
f.parentScreen.GuiStats = "field_146549_a"
/** 
 * 
 * 
 * Parent Class: GuiAchievements
 */
f.parentScreen.GuiAchievements = "field_146562_a"
/** 
 * 
 * 
 * Parent Class: GuiRenameWorld
 */
f.parentScreen.GuiRenameWorld = "field_146585_a"
/** 
 * 
 * 
 * Parent Class: GuiSelectWorld
 */
f.parentScreen.GuiSelectWorld = "field_146632_a"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.parentScreen.GuiMultiplayer = "field_146798_g"
/** 
 * 
 * 
 * Parent Class: GuiScreenResourcePacks
 */
f.parentScreen.GuiScreenResourcePacks = "field_146965_f"
/** 
 * 
 * 
 * Parent Class: GuiStreamOptions
 */
f.parentScreen.GuiStreamOptions = "field_152317_g"
/** 
 * 
 * 
 * Parent Class: GuiStreamUnavailable
 */
f.parentScreen.GuiStreamUnavailable = "field_152325_g"
/** 
 * The parent GUI for this GUI
 * 
 * Parent Class: GuiCustomizeSkin
 */
f.parentScreen.GuiCustomizeSkin = "field_175361_a"

/** 
 * 
 * 
 * Parent Class: GuiScreenAddServer
 */
f.serverIPField = "field_146308_f"
/** 
 * 
 * 
 * Parent Class: GuiScreenAddServer
 */
f.serverNameField = "field_146309_g"
/** 
 * 
 * 
 * Parent Class: GuiScreenAddServer
 */
f.serverData = "field_146311_h"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.btnMapType = "field_146320_D"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.btnAllowCommands = "field_146321_E"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.btnCustomizeType = "field_146322_F"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.gameModeDesc1 = "field_146323_G"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.btnMoreOptions = "field_146324_A"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.btnMapFeatures = "field_146325_B"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.btnBonusItems = "field_146326_C"
/** 
 * These filenames are known to be restricted on one or more OS's.
 * 
 * Parent Class: GuiCreateWorld
 */
f.disallowedFilenames = "field_146327_L"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.gameModeDesc2 = "field_146328_H"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.worldSeed = "field_146329_I"
f.worldName = {}
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.worldName.GuiCreateWorld = "field_146330_J"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
f.worldName.MinecraftServer = "field_71287_L"
/** 
 * The name of the currently loaded world
 * 
 * Parent Class: RConThreadQuery
 */
f.worldName.RConThreadQuery = "field_72632_l"
/** 
 * 
 * 
 * Parent Class: WorldSettings
 */
f.worldName.WorldSettings = "field_82751_h"

f.selectedIndex = {}
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.selectedIndex.GuiCreateWorld = "field_146331_K"
/** 
 * The list index of the currently-selected world
 * 
 * Parent Class: GuiSelectWorld
 */
f.selectedIndex.GuiSelectWorld = "field_146640_r"

/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.worldNameField = "field_146333_g"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.chunkProviderSettingsJson = "field_146334_a"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.worldSeedField = "field_146335_h"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.saveDirName = "field_146336_i"
/** 
 * "Set to true when ""hardcore"" is the currently-selected gamemode"
 * 
 * Parent Class: GuiCreateWorld
 */
f.hardCoreMode = "field_146337_w"
f.bonusChestEnabled = {}
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.bonusChestEnabled.GuiCreateWorld = "field_146338_v"
/** 
 * True if the Bonus Chest is enabled.
 * 
 * Parent Class: WorldSettings
 */
f.bonusChestEnabled.WorldSettings = "field_77169_g"

/** 
 * "User explicitly clicked ""Allow Cheats"" at some point
 * Prevents value changes due to changing game mode"
 * 
 * Parent Class: GuiCreateWorld
 */
f.allowCheatsWasSetByUser = "field_146339_u"
/** 
 * If cheats are allowed
 * 
 * Parent Class: GuiCreateWorld
 */
f.allowCheats = "field_146340_t"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.generateStructuresEnabled = "field_146341_s"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.gameMode = "field_146342_r"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.btnGameMode = "field_146343_z"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.inMoreWorldOptionsDisplay = "field_146344_y"
/** 
 * 
 * 
 * Parent Class: GuiCreateWorld
 */
f.alreadyGenerated = "field_146345_x"
/** 
 * The integer value containing the number of ticks that have passed since the player's death
 * 
 * Parent Class: GuiGameOver
 */
f.enableButtonsTimer = "field_146347_a"
/** 
 * 
 * 
 * Parent Class: GuiYesNo
 */
f.messageLine1 = "field_146351_f"
/** 
 * The text shown for the first button in GuiYesNo
 * 
 * Parent Class: GuiYesNo
 */
f.confirmButtonText = "field_146352_g"
/** 
 * 
 * 
 * Parent Class: GuiYesNo
 */
f.ticksUntilEnable = "field_146353_s"
/** 
 * 
 * 
 * Parent Class: GuiYesNo
 */
f.messageLine2 = "field_146354_r"
/** 
 * The text shown for the second button in GuiYesNo
 * 
 * Parent Class: GuiYesNo
 */
f.cancelButtonText = "field_146356_h"
/** 
 * 
 * 
 * Parent Class: GuiYesNo
 */
f.parentButtonClickedId = "field_146357_i"
/** 
 * 
 * 
 * Parent Class: GuiConfirmOpenLink
 */
f.showSecurityWarning = "field_146360_u"
/** 
 * 
 * 
 * Parent Class: GuiConfirmOpenLink
 */
f.linkText = "field_146361_t"
/** 
 * Label for the Copy to Clipboard button.
 * 
 * Parent Class: GuiConfirmOpenLink
 */
f.copyLinkButtonText = "field_146362_s"
/** 
 * Text to warn players from opening unsafe links.
 * 
 * Parent Class: GuiConfirmOpenLink
 */
f.openLinkWarning = "field_146363_r"
f.networkManager = {}
/** 
 * 
 * 
 * Parent Class: GuiConnecting
 */
f.networkManager.GuiConnecting = "field_146371_g"
/** 
 * 
 * 
 * Parent Class: NetHandlerStatusServer
 */
f.networkManager.NetHandlerStatusServer = "field_147313_b"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.networkManager.NetHandlerLoginServer = "field_147333_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerHandshakeMemory
 */
f.networkManager.NetHandlerHandshakeMemory = "field_147384_b"
/** 
 * 
 * 
 * Parent Class: NetHandlerHandshakeTCP
 */
f.networkManager.NetHandlerHandshakeTCP = "field_147386_b"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginClient
 */
f.networkManager.NetHandlerLoginClient = "field_147393_d"

/** 
 * 
 * 
 * Parent Class: GuiConnecting
 */
f.CONNECTION_ID = "field_146372_a"
/** 
 * 
 * 
 * Parent Class: GuiConnecting
 */
f.cancel = "field_146373_h"
f.previousGuiScreen = {}
/** 
 * 
 * 
 * Parent Class: GuiConnecting
 */
f.previousGuiScreen.GuiConnecting = "field_146374_i"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginClient
 */
f.previousGuiScreen.NetHandlerLoginClient = "field_147395_c"

/** 
 * 
 * 
 * Parent Class: GuiCreateFlatWorld
 */
f.createWorldGui = "field_146385_f"
/** 
 * 
 * 
 * Parent Class: GuiCreateFlatWorld
 */
f.theFlatGeneratorInfo = "field_146387_g"
/** 
 * 
 * 
 * Parent Class: GuiCreateFlatWorld
 */
f.createFlatWorldListSlotGui = "field_146390_s"
/** 
 * The title given to the flat world currently in creation
 * 
 * Parent Class: GuiCreateFlatWorld
 */
f.flatWorldTitle = "field_146393_h"
/** 
 * 
 * 
 * Parent Class: ScreenChatOptions
 */
f.game_settings = "field_146400_h"
/** 
 * is the text that appears when you press the chat key and the input box appears pre-filled
 * 
 * Parent Class: GuiChat
 */
f.defaultInputFieldText = "field_146409_v"
/** 
 * 
 * 
 * Parent Class: GuiChat
 */
f.historyBuffer = "field_146410_g"
/** 
 * 
 * 
 * Parent Class: GuiChat
 */
f.foundPlayerNames = "field_146412_t"
/** 
 * 
 * 
 * Parent Class: GuiChat
 */
f.autocompleteIndex = "field_146413_s"
/** 
 * 
 * 
 * Parent Class: GuiChat
 */
f.waitingOnAutocomplete = "field_146414_r"
/** 
 * Chat entry field
 * 
 * Parent Class: GuiChat
 */
f.inputField = "field_146415_a"
/** 
 * "keeps position of which chat message you will select when you press up
 * 
 * Parent Class: GuiChat
 */
f.sentHistoryCursor = "field_146416_h"
/** 
 * 
 * 
 * Parent Class: GuiChat
 */
f.playerNamesFound = "field_146417_i"
/** 
 * 
 * 
 * Parent Class: GuiFlatPresets
 */
f.FLAT_WORLD_PRESETS = "field_146431_f"
/** 
 * 
 * 
 * Parent Class: GuiFlatPresets
 */
f.presetsTitle = "field_146438_h"
/** 
 * 
 * 
 * Parent Class: GuiFlatPresets
 */
f.presetsShare = "field_146439_i"
/** 
 * Reference to the GameSettings object.
 * 
 * Parent Class: GuiOptions
 */
f.game_settings_1 = "field_146443_h"
/** 
 * The List GuiSlot object reference.
 * 
 * Parent Class: GuiLanguage
 */
f.list = "field_146450_f"
/** 
 * Reference to the GameSettings object.
 * 
 * Parent Class: GuiLanguage
 */
f.game_settings_3 = "field_146451_g"
/** 
 * The button to confirm the current settings.
 * 
 * Parent Class: GuiLanguage
 */
f.confirmSettingsBtn = "field_146452_r"
/** 
 * Reference to the LanguageManager object.
 * 
 * Parent Class: GuiLanguage
 */
f.languageManager = "field_146454_h"
/** 
 * A button which allows the user to determine if the Unicode font should be forced.
 * 
 * Parent Class: GuiLanguage
 */
f.forceUnicodeFontBtn = "field_146455_i"
/** 
 * The GuiButton to sign this book.
 * 
 * Parent Class: GuiScreenBook
 */
f.buttonSign = "field_146465_D"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.bookGuiTextures = "field_146466_f"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.buttonFinalize = "field_146467_E"
/** 
 * The player editing the book
 * 
 * Parent Class: GuiScreenBook
 */
f.editingPlayer = "field_146468_g"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.buttonCancel = "field_146469_F"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.buttonNextPage = "field_146470_A"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.buttonPreviousPage = "field_146471_B"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.buttonDone = "field_146472_C"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.bookObj = "field_146474_h"
/** 
 * Whether the book is signed or can still be edited
 * 
 * Parent Class: GuiScreenBook
 */
f.bookIsUnsigned = "field_146475_i"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.bookTotalPages = "field_146476_w"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.bookImageHeight = "field_146477_v"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.bookImageWidth = "field_146478_u"
/** 
 * Update ticks since the gui was opened
 * 
 * Parent Class: GuiScreenBook
 */
f.updateCount = "field_146479_t"
/** 
 * Determines if the signing screen is open
 * 
 * Parent Class: GuiScreenBook
 */
f.bookGettingSigned = "field_146480_s"
/** 
 * Whether the book's title or contents has been modified since being opened
 * 
 * Parent Class: GuiScreenBook
 */
f.bookIsModified = "field_146481_r"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.bookTitle = "field_146482_z"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.bookPages = "field_146483_y"
/** 
 * 
 * 
 * Parent Class: GuiScreenBook
 */
f.currPage = "field_146484_x"
/** 
 * Text field containing the command block's command.
 * 
 * Parent Class: GuiCommandBlock
 */
f.commandTextField = "field_146485_f"
/** 
 * 
 * 
 * Parent Class: GuiCommandBlock
 */
f.previousOutputTextField = "field_146486_g"
/** 
 * 
 * 
 * Parent Class: GuiCommandBlock
 */
f.cancelBtn = "field_146487_r"
/** 
 * Command block being edited.
 * 
 * Parent Class: GuiCommandBlock
 */
f.localCommandBlock = "field_146489_h"
f.doneBtn = {}
/** 
 * """Done"" button for the GUI."
 * 
 * Parent Class: GuiCommandBlock
 */
f.doneBtn.GuiCommandBlock = "field_146490_i"
/** 
 * """Done"" button for the GUI."
 * 
 * Parent Class: GuiEditSign
 */
f.doneBtn.GuiEditSign = "field_146852_i"

/** 
 * The ID of the button that has been pressed.
 * 
 * Parent Class: GuiControls
 */
f.buttonId = "field_146491_f"
/** 
 * 
 * 
 * Parent Class: GuiControls
 */
f.optionsArr = "field_146492_g"
/** 
 * 
 * 
 * Parent Class: GuiControls
 */
f.buttonReset = "field_146493_s"
/** 
 * 
 * 
 * Parent Class: GuiControls
 */
f.keyBindingList = "field_146494_r"
f.screenTitle = {}
/** 
 * 
 * 
 * Parent Class: GuiControls
 */
f.screenTitle.GuiControls = "field_146495_a"
/** 
 * 
 * 
 * Parent Class: GuiVideoSettings
 */
f.screenTitle.GuiVideoSettings = "field_146500_a"
/** 
 * 
 * 
 * Parent Class: GuiStats
 */
f.screenTitle.GuiStats = "field_146542_f"
/** 
 * 
 * 
 * Parent Class: GuiSelectWorld
 */
f.screenTitle.GuiSelectWorld = "field_146628_f"

/** 
 * 
 * 
 * Parent Class: GuiVideoSettings
 */
f.parentGuiScreen = "field_146498_f"
/** 
 * 
 * 
 * Parent Class: GuiVideoSettings
 */
f.guiGameSettings = "field_146499_g"
/** 
 * 
 * 
 * Parent Class: GuiVideoSettings
 */
f.optionsRowList = "field_146501_h"
/** 
 * An array of all of GameSettings.Options's video options.
 * 
 * Parent Class: GuiVideoSettings
 */
f.videoOptions = "field_146502_i"
/** 
 * Reference to the GameSettings object.
 * 
 * Parent Class: GuiScreenOptionsSounds
 */
f.game_settings_4 = "field_146506_g"
/** 
 * 
 * 
 * Parent Class: IProgressMeter
 */
f.lanSearchStates = "field_146510_b_"
/** 
 * "When true
 * 
 * Parent Class: GuiStats
 */
f.doesGuiPauseGame = "field_146543_v"
/** 
 * 
 * 
 * Parent Class: GuiStats
 */
f.displaySlot = "field_146545_u"
/** 
 * 
 * 
 * Parent Class: GuiStats
 */
f.mobStats = "field_146547_s"
/** 
 * 
 * 
 * Parent Class: GuiStats
 */
f.blockStats = "field_146548_r"
f.generalStats = {}
/** 
 * 
 * 
 * Parent Class: GuiStats
 */
f.generalStats.GuiStats = "field_146550_h"
/** 
 * 
 * 
 * Parent Class: StatList
 */
f.generalStats.StatList = "field_75941_c"

f.itemStats = {}
/** 
 * 
 * 
 * Parent Class: GuiStats
 */
f.itemStats.GuiStats = "field_146551_i"
/** 
 * 
 * 
 * Parent Class: StatList
 */
f.itemStats.StatList = "field_75938_d"

/** 
 * 
 * 
 * Parent Class: GuiAchievements
 */
f.statFileWriter = "field_146556_E"
/** 
 * 
 * 
 * Parent Class: GuiAchievements
 */
f.loadingAchievements = "field_146558_F"
/** 
 * 
 * 
 * Parent Class: GuiAchievements
 */
f.ACHIEVEMENT_BACKGROUND = "field_146561_C"
/** 
 * 
 * 
 * Parent Class: GuiWinGame
 */
f.MINECRAFT_LOGO = "field_146576_f"
/** 
 * 
 * 
 * Parent Class: GuiWinGame
 */
f.VIGNETTE_TEXTURE = "field_146577_g"
/** 
 * 
 * 
 * Parent Class: GuiRenameWorld
 */
f.saveName = "field_146584_g"
/** 
 * 
 * 
 * Parent Class: LoadingScreenRenderer
 */
f.scaledResolution = "field_146587_f"
f.framebuffer = {}
/** 
 * 
 * 
 * Parent Class: LoadingScreenRenderer
 */
f.framebuffer.LoadingScreenRenderer = "field_146588_g"
/** 
 * 
 * 
 * Parent Class: TwitchStream
 */
f.framebuffer.TwitchStream = "field_152956_h"

/** 
 * 
 * 
 * Parent Class: GuiScreenWorking
 */
f.doneWorking = "field_146592_h"
/** 
 * 
 * 
 * Parent Class: GuiDownloadTerrain
 */
f.netHandlerPlayClient = "field_146594_a"
/** 
 * Reference to the GameSettings object.
 * 
 * Parent Class: GuiSnooper
 */
f.game_settings_2 = "field_146603_f"
/** 
 * 
 * 
 * Parent Class: GuiSelectWorld
 */
f.renameButton = "field_146630_A"
/** 
 * 
 * 
 * Parent Class: GuiSelectWorld
 */
f.recreateButton = "field_146631_B"
/** 
 * 
 * 
 * Parent Class: GuiSelectWorld
 */
f.availableWorlds = "field_146638_t"
/** 
 * 
 * 
 * Parent Class: GuiSelectWorld
 */
f.selectButton = "field_146641_z"
/** 
 * 
 * 
 * Parent Class: GuiSelectWorld
 */
f.deleteButton = "field_146642_y"
/** 
 * 
 * 
 * Parent Class: GuiSelectWorld
 */
f.confirmingDelete = "field_146643_x"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.oldServerPinger = "field_146797_f"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.lanServerList = "field_146799_A"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.lanServerDetector = "field_146800_B"
f.initialized = {}
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.initialized.GuiMultiplayer = "field_146801_C"
/** 
 * 
 * 
 * Parent Class: ChunkRenderContainer
 */
f.initialized.ChunkRenderContainer = "field_178007_b"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
f.initialized.WorldInfo = "field_76109_u"

/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.serverListSelector = "field_146803_h"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.savedServerList = "field_146804_i"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.editingServer = "field_146805_w"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.addingServer = "field_146806_v"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.deletingServer = "field_146807_u"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.btnDeleteServer = "field_146808_t"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.btnSelectServer = "field_146809_s"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.btnEditServer = "field_146810_r"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.selectedServer = "field_146811_z"
/** 
 * The text to be displayed when the player's cursor hovers over a server listing.
 * 
 * Parent Class: GuiMultiplayer
 */
f.hoveringText = "field_146812_y"
/** 
 * 
 * 
 * Parent Class: GuiMultiplayer
 */
f.directConnect = "field_146813_x"
/** 
 * Reference to the sign object.
 * 
 * Parent Class: GuiEditSign
 */
f.tileSign = "field_146848_f"
f.updateCounter = {}
/** 
 * Counts the number of screen updates.
 * 
 * Parent Class: GuiEditSign
 */
f.updateCounter.GuiEditSign = "field_146849_g"
/** 
 * 
 * 
 * Parent Class: EntityTrackerEntry
 */
f.updateCounter.EntityTrackerEntry = "field_73136_m"
/** 
 * 
 * 
 * Parent Class: GuiIngame
 */
f.updateCounter.GuiIngame = "field_73837_f"
/** 
 * Counts the number of screen updates.
 * 
 * Parent Class: GuiMainMenu
 */
f.updateCounter.GuiMainMenu = "field_73974_b"

/** 
 * The index of the line that is being edited.
 * 
 * Parent Class: GuiEditSign
 */
f.editLine = "field_146851_h"
/** 
 * List of available resource packs
 * 
 * Parent Class: GuiScreenResourcePacks
 */
f.availableResourcePacks = "field_146966_g"
/** 
 * List component that contains the selected resource packs
 * 
 * Parent Class: GuiScreenResourcePacks
 */
f.selectedResourcePacksList = "field_146967_r"
/** 
 * List of selected resource packs
 * 
 * Parent Class: GuiScreenResourcePacks
 */
f.selectedResourcePacks = "field_146969_h"
/** 
 * List component that contains the available resource packs
 * 
 * Parent Class: GuiScreenResourcePacks
 */
f.availableResourcePacksList = "field_146970_i"
/** 
 * OpenGL graphics card warning.
 * 
 * Parent Class: GuiMainMenu
 */
f.openGLWarning2 = "field_146972_A"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.currentDragTargetSlot = "field_146985_D"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.dragItemDropDelay = "field_146986_E"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.dragSplittingLimit = "field_146987_F"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.dragSplittingButton = "field_146988_G"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.returningStackDestSlot = "field_146989_A"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.returningStackTime = "field_146990_B"
/** 
 * Used when touchscreen is enabled
 * 
 * Parent Class: GuiContainer
 */
f.returningStack = "field_146991_C"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.lastClickButton = "field_146992_L"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.doubleClick = "field_146993_M"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.shiftClickedSlot = "field_146994_N"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.ignoreMouseUp = "field_146995_H"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.dragSplittingRemnant = "field_146996_I"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.lastClickTime = "field_146997_J"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.lastClickSlot = "field_146998_K"
/** 
 * The X size of the inventory window in pixels.
 * 
 * Parent Class: GuiContainer
 */
f.xSize = "field_146999_f"
/** 
 * The Y size of the inventory window in pixels.
 * 
 * Parent Class: GuiContainer
 */
f.ySize = "field_147000_g"
/** 
 * The location of the inventory background texture
 * 
 * Parent Class: GuiContainer
 */
f.inventoryBackground = "field_147001_a"
f.inventorySlots = {}
/** 
 * A list of the players inventory slots
 * 
 * Parent Class: GuiContainer
 */
f.inventorySlots.GuiContainer = "field_147002_h"
/** 
 * the list of all slots in the inventory
 * 
 * Parent Class: Container
 */
f.inventorySlots.Container = "field_75151_b"

/** 
 * Starting X position for the Gui. Inconsistent use for Gui backgrounds.
 * 
 * Parent Class: GuiContainer
 */
f.guiLeft = "field_147003_i"
/** 
 * Used when touchscreen is enabled.
 * 
 * Parent Class: GuiContainer
 */
f.isRightMouseClick = "field_147004_w"
/** 
 * Used when touchscreen is enabled.
 * 
 * Parent Class: GuiContainer
 */
f.clickedSlot = "field_147005_v"
f.theSlot = {}
/** 
 * holds the slot currently hovered
 * 
 * Parent Class: GuiContainer
 */
f.theSlot.GuiContainer = "field_147006_u"
/** 
 * Instance of Slot.
 * 
 * Parent Class: ContainerBrewingStand
 */
f.theSlot.ContainerBrewingStand = "field_75186_f"

/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.dragSplitting = "field_147007_t"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.dragSplittingSlots = "field_147008_s"
/** 
 * Starting Y position for the Gui. Inconsistent use for Gui backgrounds.
 * 
 * Parent Class: GuiContainer
 */
f.guiTop = "field_147009_r"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.touchUpY = "field_147010_z"
/** 
 * 
 * 
 * Parent Class: GuiContainer
 */
f.touchUpX = "field_147011_y"
/** 
 * Used when touchscreen is enabled
 * 
 * Parent Class: GuiContainer
 */
f.draggedStack = "field_147012_x"
f.tileBrewingStand = {}
/** 
 * 
 * 
 * Parent Class: GuiBrewingStand
 */
f.tileBrewingStand.GuiBrewingStand = "field_147013_v"
/** 
 * 
 * 
 * Parent Class: ContainerBrewingStand
 */
f.tileBrewingStand.ContainerBrewingStand = "field_75188_e"

/** 
 * 
 * 
 * Parent Class: GuiBrewingStand
 */
f.brewingStandGuiTextures = "field_147014_u"
f.lowerChestInventory = {}
/** 
 * 
 * 
 * Parent Class: GuiChest
 */
f.lowerChestInventory.GuiChest = "field_147015_w"
/** 
 * 
 * 
 * Parent Class: ContainerChest
 */
f.lowerChestInventory.ContainerChest = "field_75155_e"

/** 
 * 
 * 
 * Parent Class: GuiChest
 */
f.upperChestInventory = "field_147016_v"
/** 
 * The ResourceLocation containing the chest GUI texture.
 * 
 * Parent Class: GuiChest
 */
f.CHEST_GUI_TEXTURE = "field_147017_u"
/** 
 * "window height is calculated with these values; the more rows
 * 
 * Parent Class: GuiChest
 */
f.inventoryRows = "field_147018_x"
/** 
 * 
 * 
 * Parent Class: GuiCrafting
 */
f.craftingTableGuiTextures = "field_147019_u"
f.tileBeacon = {}
/** 
 * 
 * 
 * Parent Class: GuiBeacon
 */
f.tileBeacon.GuiBeacon = "field_147024_w"
/** 
 * 
 * 
 * Parent Class: ContainerBeacon
 */
f.tileBeacon.ContainerBeacon = "field_82866_e"

/** 
 * 
 * 
 * Parent Class: GuiBeacon
 */
f.beaconGuiTextures = "field_147025_v"
/** 
 * 
 * 
 * Parent Class: GuiBeacon
 */
f.buttonsNotDrawn = "field_147027_y"
/** 
 * 
 * 
 * Parent Class: GuiBeacon
 */
f.beaconConfirmButton = "field_147028_x"
f.playerInventory = {}
/** 
 * The player inventory bound to this GUI.
 * 
 * Parent Class: GuiScreenHorseInventory
 */
f.playerInventory.GuiScreenHorseInventory = "field_147030_v"
/** 
 * The player inventory currently bound to this GUI instance
 * 
 * Parent Class: GuiHopper
 */
f.playerInventory.GuiHopper = "field_147084_v"
/** 
 * 
 * 
 * Parent Class: GuiRepair
 */
f.playerInventory.GuiRepair = "field_147094_x"
/** 
 * The player inventory bound to this GUI.
 * 
 * Parent Class: GuiDispenser
 */
f.playerInventory.GuiDispenser = "field_175376_w"
/** 
 * The player inventory currently bound to this GuiEnchantment instance.
 * 
 * Parent Class: GuiEnchantment
 */
f.playerInventory.GuiEnchantment = "field_175379_F"
/** 
 * The player inventory bound to this GUI.
 * 
 * Parent Class: GuiFurnace
 */
f.playerInventory.GuiFurnace = "field_175383_v"
/** 
 * The player inventory bound to this GUI.
 * 
 * Parent Class: GuiBrewingStand
 */
f.playerInventory.GuiBrewingStand = "field_175384_v"

/** 
 * 
 * 
 * Parent Class: GuiScreenHorseInventory
 */
f.horseGuiTextures = "field_147031_u"
/** 
 * The mouse y-position recorded during the last renderered frame.
 * 
 * Parent Class: GuiScreenHorseInventory
 */
f.mousePosY = "field_147032_z"
/** 
 * The mouse x-position recorded during the last rendered frame.
 * 
 * Parent Class: GuiScreenHorseInventory
 */
f.mousePosx = "field_147033_y"
/** 
 * The EntityHorse whose inventory is currently being accessed.
 * 
 * Parent Class: GuiScreenHorseInventory
 */
f.horseEntity = "field_147034_x"
/** 
 * The current IMerchant instance in use for this specific merchant.
 * 
 * Parent Class: GuiMerchant
 */
f.merchant = "field_147037_w"
/** 
 * The GUI texture for the villager merchant GUI.
 * 
 * Parent Class: GuiMerchant
 */
f.MERCHANT_GUI_TEXTURE = "field_147038_v"
f.chatComponent = {}
/** 
 * The chat component utilized by this GuiMerchant instance.
 * 
 * Parent Class: GuiMerchant
 */
f.chatComponent.GuiMerchant = "field_147040_A"
/** 
 * 
 * 
 * Parent Class: S02PacketChat
 */
f.chatComponent.S02PacketChat = "field_148919_a"

/** 
 * The integer value corresponding to the currently selected merchant recipe.
 * 
 * Parent Class: GuiMerchant
 */
f.selectedMerchantRecipe = "field_147041_z"
/** 
 * Returns to the previous Merchant recipe if one is applicable.
 * 
 * Parent Class: GuiMerchant
 */
f.previousButton = "field_147042_y"
/** 
 * The button which proceeds to the next available merchant recipe.
 * 
 * Parent Class: GuiMerchant
 */
f.nextButton = "field_147043_x"
/** 
 * True if there is some potion effect to display
 * 
 * Parent Class: InventoryEffectRenderer
 */
f.hasActivePotionEffects = "field_147045_u"
/** 
 * The old y position of the mouse pointer
 * 
 * Parent Class: GuiInventory
 */
f.oldMouseY = "field_147047_v"
/** 
 * The old x position of the mouse pointer
 * 
 * Parent Class: GuiInventory
 */
f.oldMouseX = "field_147048_u"
/** 
 * Currently selected creative inventory tab index.
 * 
 * Parent Class: GuiContainerCreative
 */
f.selectedTabIndex = "field_147058_w"
/** 
 * The location of the creative inventory tabs texture
 * 
 * Parent Class: GuiContainerCreative
 */
f.creativeInventoryTabs = "field_147061_u"
/** 
 * 
 * 
 * Parent Class: GuiContainerCreative
 */
f.searchField = "field_147062_A"
/** 
 * True if the left mouse button was held down last time drawScreen was called.
 * 
 * Parent Class: GuiContainerCreative
 */
f.wasClicking = "field_147065_z"
/** 
 * True if the scrollbar is being dragged
 * 
 * Parent Class: GuiContainerCreative
 */
f.isScrolling = "field_147066_y"
/** 
 * "Amount scrolled in Creative mode inventory (0 = top
 * 
 * Parent Class: GuiContainerCreative
 */
f.currentScroll = "field_147067_x"
/** 
 * The ResourceLocation containing the texture for the Book rendered above the enchantment table
 * 
 * Parent Class: GuiEnchantment
 */
f.ENCHANTMENT_TABLE_BOOK_TEXTURE = "field_147070_D"
/** 
 * The ModelBook instance used for rendering the book on the Enchantment table
 * 
 * Parent Class: GuiEnchantment
 */
f.MODEL_BOOK = "field_147072_E"
f.random = {}
/** 
 * A Random instance for use with the enchantment gui
 * 
 * Parent Class: GuiEnchantment
 */
f.random.GuiEnchantment = "field_147074_F"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
f.random.MinecraftServer = "field_147146_q"
/** 
 * A Random instance for this world customization
 * 
 * Parent Class: GuiCustomizeWorldScreen
 */
f.random.GuiCustomizeWorldScreen = "field_175337_G"
/** 
 * 
 * 
 * Parent Class: ChunkProviderFlat
 */
f.random.ChunkProviderFlat = "field_73161_b"
/** 
 * A private Random() function in Teleporter
 * 
 * Parent Class: Teleporter
 */
f.random.Teleporter = "field_77187_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.random.EntityRenderer = "field_78537_ab"

/** 
 * 
 * 
 * Parent Class: GuiEnchantment
 */
f.container = "field_147075_G"
/** 
 * The ResourceLocation containing the Enchantment GUI texture location
 * 
 * Parent Class: GuiEnchantment
 */
f.ENCHANTMENT_TABLE_GUI_TEXTURE = "field_147078_C"
f.hopperInventory = {}
/** 
 * The hopper inventory bound to this GUI instance
 * 
 * Parent Class: GuiHopper
 */
f.hopperInventory.GuiHopper = "field_147083_w"
/** 
 * 
 * 
 * Parent Class: ContainerHopper
 */
f.hopperInventory.ContainerHopper = "field_94538_a"

/** 
 * The ResourceLocation containing the gui texture for the hopper
 * 
 * Parent Class: GuiHopper
 */
f.HOPPER_GUI_TEXTURE = "field_147085_u"
f.tileFurnace = {}
/** 
 * 
 * 
 * Parent Class: GuiFurnace
 */
f.tileFurnace.GuiFurnace = "field_147086_v"
/** 
 * 
 * 
 * Parent Class: ContainerFurnace
 */
f.tileFurnace.ContainerFurnace = "field_75158_e"

/** 
 * 
 * 
 * Parent Class: GuiFurnace
 */
f.furnaceGuiTextures = "field_147087_u"
/** 
 * 
 * 
 * Parent Class: GuiDispenser
 */
f.dispenserGuiTextures = "field_147088_v"
/** 
 * 
 * 
 * Parent Class: GuiRepair
 */
f.nameField = "field_147091_w"
f.anvil = {}
/** 
 * 
 * 
 * Parent Class: GuiRepair
 */
f.anvil.GuiRepair = "field_147092_v"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.anvil.Blocks = "field_150467_bQ"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.anvil.Material = "field_151574_g"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
f.anvil.DamageSource = "field_82728_o"

/** 
 * 
 * 
 * Parent Class: GuiRepair
 */
f.anvilResource = "field_147093_u"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
f.respawnInvulnerabilityTicks = "field_147101_bU"
f.statsFile = {}
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
f.statsFile.EntityPlayerMP = "field_147103_bO"
/** 
 * 
 * 
 * Parent Class: StatisticsFile
 */
f.statsFile.StatisticsFile = "field_150887_d"

/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.framebufferMc = "field_147124_at"
f.pointedEntity = {}
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.pointedEntity.Minecraft = "field_147125_j"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
f.pointedEntity.RenderManager = "field_147941_i"
/** 
 * Pointed entity
 * 
 * Parent Class: EntityRenderer
 */
f.pointedEntity.EntityRenderer = "field_78528_u"

/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.mcMusicTicker = "field_147126_aw"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.mcSoundHandler = "field_147127_av"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.textureMapBlocks = "field_147128_au"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.jvm64bit = "field_147129_ai"
/** 
 * The texture pack for the server
 * 
 * Parent Class: MinecraftServer
 */
f.resourcePackUrl = "field_147141_M"
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
f.nanoTimeSinceStatusRefresh = "field_147142_T"
f.sessionService = {}
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
f.sessionService.MinecraftServer = "field_147143_S"
/** 
 * 
 * 
 * Parent Class: Minecraft
 */
f.sessionService.Minecraft = "field_152355_az"
/** 
 * 
 * 
 * Parent Class: SkinManager
 */
f.sessionService.SkinManager = "field_152797_e"

f.networkSystem = {}
/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
f.networkSystem.MinecraftServer = "field_147144_o"
/** 
 * 
 * 
 * Parent Class: PingResponseHandler
 */
f.networkSystem.PingResponseHandler = "field_151257_b"

/** 
 * 
 * 
 * Parent Class: MinecraftServer
 */
f.statusResponse = "field_147147_p"
/** 
 * 
 * 
 * Parent Class: SoundCategory
 */
f.categoryName = "field_147166_l"
/** 
 * 
 * 
 * Parent Class: SoundCategory
 */
f.categoryId = "field_147167_m"
/** 
 * 
 * 
 * Parent Class: SoundCategory
 */
f.NAME_CATEGORY_MAP = "field_147168_j"
/** 
 * 
 * 
 * Parent Class: SoundCategory
 */
f.ID_CATEGORY_MAP = "field_147169_k"
/** 
 * The time (in milliseconds) that profiling was started
 * 
 * Parent Class: CommandDebug
 */
f.profileStartTime = "field_147206_b"
/** 
 * The tick number that profiling was started on
 * 
 * Parent Class: CommandDebug
 */
f.profileStartTick = "field_147207_c"
/** 
 * A list of NetworkManagers that have pending pings
 * 
 * Parent Class: OldServerPinger
 */
f.pingDestinations = "field_147229_c"
/** 
 * 
 * 
 * Parent Class: OldServerPinger
 */
f.PING_RESPONSE_SPLITTER = "field_147230_a"
/** 
 * "Reference to the Minecraft instance
 * 
 * Parent Class: NetHandlerPlayClient
 */
f.gameController = "field_147299_f"
/** 
 * "Reference to the current ClientWorld instance
 * 
 * Parent Class: NetHandlerPlayClient
 */
f.clientWorldController = "field_147300_g"
f.netManager = {}
/** 
 * The NetworkManager instance used to communicate with the server (used only by handlePlayerPosLook to update positioning and handleJoinGame to inform the server of the client distribution/mods)
 * 
 * Parent Class: NetHandlerPlayClient
 */
f.netManager.NetHandlerPlayClient = "field_147302_e"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.netManager.NetHandlerPlayServer = "field_147371_a"

/** 
 * 
 * 
 * Parent Class: NetHandlerPlayClient
 */
f.currentServerMaxPlayers = "field_147304_c"
/** 
 * "Just an ordinary random number generator
 * 
 * Parent Class: NetHandlerPlayClient
 */
f.avRandomizer = "field_147306_l"
/** 
 * Seems to be either null (integrated server) or an instance of either GuiMultiplayer (when connecting to a server) or GuiScreenReamlsTOS (when connecting to MCO server)
 * 
 * Parent Class: NetHandlerPlayClient
 */
f.guiScreenServer = "field_147307_j"
/** 
 * "True if the client has finished downloading terrain and may spawn. Set upon receipt of S08PacketPlayerPosLook
 * 
 * Parent Class: NetHandlerPlayClient
 */
f.doneLoadingTerrain = "field_147309_h"
/** 
 * A mapping from player names to their respective GuiPlayerInfo (specifies the clients response time to the server)
 * 
 * Parent Class: NetHandlerPlayClient
 */
f.playerInfoMap = "field_147310_i"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.currentLoginState = "field_147328_g"
f.RANDOM = {}
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.RANDOM.NetHandlerLoginServer = "field_147329_d"
/** 
 * 
 * 
 * Parent Class: EntitySpellParticleFX
 */
f.RANDOM.EntitySpellParticleFX = "field_174848_a"
/** 
 * 
 * 
 * Parent Class: GuiMainMenu
 */
f.RANDOM.GuiMainMenu = "field_175374_h"
/** 
 * 
 * 
 * Parent Class: InventoryHelper
 */
f.RANDOM.InventoryHelper = "field_180177_a"

f.verifyToken = {}
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.verifyToken.NetHandlerLoginServer = "field_147330_e"
/** 
 * 
 * 
 * Parent Class: S01PacketEncryptionRequest
 */
f.verifyToken.S01PacketEncryptionRequest = "field_149611_c"

/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.AUTHENTICATOR_THREAD_ID = "field_147331_b"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.serverId = "field_147334_j"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.secretKey = "field_147335_k"
/** 
 * How long has player been trying to login into the server.
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.connectionTimer = "field_147336_h"
/** 
 * 
 * 
 * Parent Class: NetHandlerLoginServer
 */
f.loginGameProfile = "field_147337_i"
/** 
 * Used to keep track of how the player is floating while gamerules should prevent that. Surpassing 80 ticks means kick
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.floatingTickCount = "field_147365_f"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.serverController = "field_147367_d"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.networkTickCount = "field_147368_e"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.playerEntity = "field_147369_b"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.lastPosX = "field_147373_o"
/** 
 * "Incremented by 20 each time a user sends a chat message
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.chatSpamThresholdCount = "field_147374_l"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.itemDropThreshold = "field_147375_m"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.lastSentPingPacket = "field_147377_k"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.lastPingTime = "field_147379_i"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.hasMoved = "field_147380_r"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.lastPosZ = "field_147381_q"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayServer
 */
f.lastPosY = "field_147382_p"
f.mcServer = {}
/** 
 * 
 * 
 * Parent Class: NetHandlerHandshakeMemory
 */
f.mcServer.NetHandlerHandshakeMemory = "field_147385_a"
/** 
 * 
 * 
 * Parent Class: StatisticsFile
 */
f.mcServer.StatisticsFile = "field_150890_c"
/** 
 * Reference to the MinecraftServer object.
 * 
 * Parent Class: NetworkSystem
 */
f.mcServer.NetworkSystem = "field_151273_d"
/** 
 * 
 * 
 * Parent Class: PlayerProfileCache
 */
f.mcServer.PlayerProfileCache = "field_152664_f"
/** 
 * Reference to the MinecraftServer object.
 * 
 * Parent Class: EntityPlayerMP
 */
f.mcServer.EntityPlayerMP = "field_71133_b"
/** 
 * Instance of Minecraft Server.
 * 
 * Parent Class: MinecraftServer
 */
f.mcServer.MinecraftServer = "field_71309_l"
/** 
 * Reference to the MinecraftServer object.
 * 
 * Parent Class: ServerConfigurationManager
 */
f.mcServer.ServerConfigurationManager = "field_72400_f"
/** 
 * Reference to the MinecraftServer object.
 * 
 * Parent Class: WorldManager
 */
f.mcServer.WorldManager = "field_72783_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
f.mcServer.WorldServer = "field_73061_a"

f.serverIcon = {}
/** 
 * 
 * 
 * Parent Class: ServerData
 */
f.serverIcon.ServerData = "field_147411_m"
/** 
 * 
 * 
 * Parent Class: ServerListEntryNormal
 */
f.serverIcon.ServerListEntryNormal = "field_148306_i"

f.playerList = {}
/** 
 * 
 * 
 * Parent Class: ServerData
 */
f.playerList.ServerData = "field_147412_i"
/** 
 * 
 * 
 * Parent Class: Container
 */
f.playerList.Container = "field_75148_f"

/** 
 * 
 * 
 * Parent Class: ChunkProviderGenerate
 */
f.upperLimitNoiseArray = "field_147425_f"
/** 
 * 
 * 
 * Parent Class: ChunkProviderGenerate
 */
f.depthNoiseArray = "field_147426_g"
/** 
 * 
 * 
 * Parent Class: ChunkProviderGenerate
 */
f.mainNoiseArray = "field_147427_d"
/** 
 * 
 * 
 * Parent Class: ChunkProviderGenerate
 */
f.lowerLimitNoiseArray = "field_147428_e"
/** 
 * 
 * 
 * Parent Class: ChunkProviderGenerate
 */
f.parabolicField = "field_147433_r"
/** 
 * 
 * 
 * Parent Class: World
 */
f.processingLoadedTiles = "field_147481_N"
/** 
 * A list of the loaded tile entities in the world
 * 
 * Parent Class: World
 */
f.loadedTileEntityList = "field_147482_g"
/** 
 * 
 * 
 * Parent Class: World
 */
f.tileEntitiesToBeRemoved = "field_147483_b"
/** 
 * 
 * 
 * Parent Class: World
 */
f.addedTileEntityList = "field_147484_a"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
f.blockEventCacheIndex = "field_147489_T"
/** 
 * 
 * 
 * Parent Class: WorldServer
 */
f.blockEventQueue = "field_147490_S"
/** 
 * 
 * 
 * Parent Class: TileEntitySpecialRenderer
 */
f.rendererDispatcher = "field_147501_a"
/** 
 * 
 * 
 * Parent Class: TileEntityChestRenderer
 */
f.textureChristmas = "field_147503_f"
/** 
 * 
 * 
 * Parent Class: TileEntityChestRenderer
 */
f.textureNormal = "field_147504_g"
/** 
 * 
 * 
 * Parent Class: TileEntityChestRenderer
 */
f.textureNormalDouble = "field_147505_d"
/** 
 * 
 * 
 * Parent Class: TileEntityChestRenderer
 */
f.textureTrapped = "field_147506_e"
/** 
 * 
 * 
 * Parent Class: TileEntityChestRenderer
 */
f.textureTrappedDouble = "field_147507_b"
/** 
 * 
 * 
 * Parent Class: TileEntityChestRenderer
 */
f.textureChristmasDouble = "field_147508_c"
/** 
 * 
 * 
 * Parent Class: TileEntityChestRenderer
 */
f.isChristmas = "field_147509_j"
/** 
 * 
 * 
 * Parent Class: TileEntityChestRenderer
 */
f.simpleChest = "field_147510_h"
/** 
 * 
 * 
 * Parent Class: TileEntityChestRenderer
 */
f.largeChest = "field_147511_i"
/** 
 * 
 * 
 * Parent Class: TileEntitySignRenderer
 */
f.SIGN_TEXTURE = "field_147513_b"
f.model = {}
/** 
 * The ModelSign instance for use in this renderer
 * 
 * Parent Class: TileEntitySignRenderer
 */
f.model.TileEntitySignRenderer = "field_147514_c"
/** 
 * 
 * 
 * Parent Class: WeightedBakedModel$MyWeighedRandomItem
 */
f.model.WeightedBakedModel$MyWeighedRandomItem = "field_177636_b"
/** 
 * 
 * 
 * Parent Class: ModelBlock$Bookkeep
 */
f.model.ModelBlock$Bookkeep = "field_178324_a"

/** 
 * 
 * 
 * Parent Class: TileEntityEnderChestRenderer
 */
f.ENDER_CHEST_TEXTURE = "field_147520_b"
/** 
 * 
 * 
 * Parent Class: TileEntityBeaconRenderer
 */
f.beaconBeam = "field_147523_b"
/** 
 * 
 * 
 * Parent Class: TileEntityEndPortalRenderer
 */
f.END_PORTAL_TEXTURE = "field_147526_d"
/** 
 * 
 * 
 * Parent Class: TileEntityEndPortalRenderer
 */
f.END_SKY_TEXTURE = "field_147529_c"
/** 
 * 
 * 
 * Parent Class: TileEntitySkullRenderer
 */
f.CREEPER_TEXTURES = "field_147532_f"
/** 
 * 
 * 
 * Parent Class: TileEntitySkullRenderer
 */
f.WITHER_SKELETON_TEXTURES = "field_147534_d"
/** 
 * 
 * 
 * Parent Class: TileEntitySkullRenderer
 */
f.ZOMBIE_TEXTURES = "field_147535_e"
f.instance = {}
/** 
 * 
 * 
 * Parent Class: TileEntitySkullRenderer
 */
f.instance.TileEntitySkullRenderer = "field_147536_b"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.instance.TileEntityRendererDispatcher = "field_147556_a"
/** 
 * 
 * 
 * Parent Class: TileEntityItemStackRenderer
 */
f.instance.TileEntityItemStackRenderer = "field_147719_a"
/** 
 * 
 * 
 * Parent Class: EnchantmentNameParts
 */
f.instance.EnchantmentNameParts = "field_148338_a"
/** 
 * Single instance of RConConsoleSource
 * 
 * Parent Class: RConConsoleSource
 */
f.instance.RConConsoleSource = "field_70010_a"
/** 
 * Is the private singleton instance of StringTranslate.
 * 
 * Parent Class: StringTranslate
 */
f.instance.StringTranslate = "field_74817_a"
/** 
 * The static instance of this class
 * 
 * Parent Class: CraftingManager
 */
f.instance.CraftingManager = "field_77598_a"
/** 
 * The static instance of the Tessellator.
 * 
 * Parent Class: Tessellator
 */
f.instance.Tessellator = "field_78398_a"
/** 
 * 
 * 
 * Parent Class: ClippingHelperImpl
 */
f.instance.ClippingHelperImpl = "field_78563_e"

/** 
 * 
 * 
 * Parent Class: TileEntitySkullRenderer
 */
f.SKELETON_TEXTURES = "field_147537_c"
/** 
 * The texture for the book above the enchantment table.
 * 
 * Parent Class: TileEntityEnchantmentTableRenderer
 */
f.TEXTURE_BOOK = "field_147540_b"
f.entity = {}
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.entity.TileEntityRendererDispatcher = "field_147551_g"
/** 
 * 
 * 
 * Parent Class: MobAppearance
 */
f.entity.MobAppearance = "field_174844_a"
/** 
 * 
 * 
 * Parent Class: EntityAIWander
 */
f.entity.EntityAIWander = "field_75457_a"
/** 
 * The EntityLiving that is being moved
 * 
 * Parent Class: EntityMoveHelper
 */
f.entity.EntityMoveHelper = "field_75648_a"
/** 
 * 
 * 
 * Parent Class: EntityLookHelper
 */
f.entity.EntityLookHelper = "field_75659_a"
/** 
 * 
 * 
 * Parent Class: EntityJumpHelper
 */
f.entity.EntityJumpHelper = "field_75663_a"

/** 
 * The player's current Z position (same as playerZ)
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.staticPlayerZ = "field_147552_d"
f.renderEngine = {}
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.renderEngine.TileEntityRendererDispatcher = "field_147553_e"
/** 
 * The RenderEngine instance used by Minecraft
 * 
 * Parent Class: Minecraft
 */
f.renderEngine.Minecraft = "field_71446_o"
/** 
 * The RenderEngine instance used by RenderGlobal
 * 
 * Parent Class: RenderGlobal
 */
f.renderEngine.RenderGlobal = "field_72770_i"
/** 
 * The RenderEngine used to load and setup glyph textures.
 * 
 * Parent Class: FontRenderer
 */
f.renderEngine.FontRenderer = "field_78298_i"
/** 
 * 
 * 
 * Parent Class: RenderManager
 */
f.renderEngine.RenderManager = "field_78724_e"

/** 
 * The player's current X position (same as playerX)
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.staticPlayerX = "field_147554_b"
/** 
 * The player's current Y position (same as playerY)
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.staticPlayerY = "field_147555_c"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.entityZ = "field_147558_l"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.mapSpecialRenderers = "field_147559_m"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.entityX = "field_147560_j"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.entityY = "field_147561_k"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.entityYaw = "field_147562_h"
/** 
 * 
 * 
 * Parent Class: TileEntityRendererDispatcher
 */
f.entityPitch = "field_147563_i"
/** 
 * "Currently playing sounds.  Type:  HashMap<ChunkCoordinates
 * 
 * Parent Class: RenderGlobal
 */
f.mapSoundPositions = "field_147593_P"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
f.displayListEntitiesDirty = "field_147595_R"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
f.prevRenderSortX = "field_147596_f"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
f.prevRenderSortY = "field_147597_g"
/** 
 * 
 * 
 * Parent Class: RenderGlobal
 */
f.prevRenderSortZ = "field_147602_h"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
f.framebufferObject = "field_147616_f"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
f.framebufferTexture = "field_147617_g"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
f.framebufferHeight = "field_147618_d"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
f.useDepth = "field_147619_e"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
f.framebufferTextureHeight = "field_147620_b"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
f.framebufferWidth = "field_147621_c"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
f.framebufferTextureWidth = "field_147622_a"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
f.framebufferFilter = "field_147623_j"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
f.depthBuffer = "field_147624_h"
/** 
 * 
 * 
 * Parent Class: Framebuffer
 */
f.framebufferColor = "field_147625_i"
f.mipmapLevels = {}
/** 
 * 
 * 
 * Parent Class: TextureMap
 */
f.mipmapLevels.TextureMap = "field_147636_j"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
f.mipmapLevels.GameSettings = "field_151442_I"

/** 
 * 
 * 
 * Parent Class: ThreadDownloadImageData
 */
f.threadDownloadCounter = "field_147643_d"
/** 
 * 
 * 
 * Parent Class: PositionedSound
 */
f.zPosF = "field_147658_f"
/** 
 * 
 * 
 * Parent Class: PositionedSound
 */
f.repeat = "field_147659_g"
/** 
 * 
 * 
 * Parent Class: PositionedSound
 */
f.xPosF = "field_147660_d"
/** 
 * 
 * 
 * Parent Class: PositionedSound
 */
f.yPosF = "field_147661_e"
f.volume = {}
/** 
 * 
 * 
 * Parent Class: PositionedSound
 */
f.volume.PositionedSound = "field_147662_b"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
f.volume.SoundList$SoundEntry = "field_148567_b"
/** 
 * 
 * 
 * Parent Class: SoundPoolEntry
 */
f.volume.SoundPoolEntry = "field_148653_d"
/** 
 * 
 * 
 * Parent Class: Block$SoundType
 */
f.volume.Block$SoundType = "field_150499_b"

f.pitch = {}
/** 
 * 
 * 
 * Parent Class: PositionedSound
 */
f.pitch.PositionedSound = "field_147663_c"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
f.pitch.SoundList$SoundEntry = "field_148568_c"
/** 
 * 
 * 
 * Parent Class: SoundPoolEntry
 */
f.pitch.SoundPoolEntry = "field_148655_c"
/** 
 * 
 * 
 * Parent Class: S24PacketBlockAction
 */
f.pitch.S24PacketBlockAction = "field_148873_e"
/** 
 * 
 * 
 * Parent Class: S08PacketPlayerPosLook
 */
f.pitch.S08PacketPlayerPosLook = "field_148937_e"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
f.pitch.S0CPacketSpawnPlayer = "field_148952_g"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
f.pitch.S0EPacketSpawnObject = "field_149021_h"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.pitch.S0FPacketSpawnMob = "field_149045_j"
/** 
 * 
 * 
 * Parent Class: S14PacketEntity
 */
f.pitch.S14PacketEntity = "field_149068_f"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
f.pitch.S18PacketEntityTeleport = "field_149453_f"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
f.pitch.C03PacketPlayer = "field_149473_f"
/** 
 * Tempting player's pitch
 * 
 * Parent Class: EntityAITempt
 */
f.pitch.EntityAITempt = "field_75278_f"

/** 
 * 
 * 
 * Parent Class: PositionedSound
 */
f.positionedSoundLocation = "field_147664_a"
/** 
 * The number of ticks between repeating the sound
 * 
 * Parent Class: PositionedSound
 */
f.repeatDelay = "field_147665_h"
/** 
 * 
 * 
 * Parent Class: PositionedSound
 */
f.attenuationType = "field_147666_i"
/** 
 * 
 * 
 * Parent Class: MovingSound
 */
f.donePlaying = "field_147668_j"
/** 
 * 
 * 
 * Parent Class: MovingSoundMinecart
 */
f.distance = "field_147669_l"
f.minecart = {}
/** 
 * 
 * 
 * Parent Class: MovingSoundMinecart
 */
f.minecart.MovingSoundMinecart = "field_147670_k"
/** 
 * 
 * 
 * Parent Class: MovingSoundMinecartRiding
 */
f.minecart.MovingSoundMinecartRiding = "field_147671_l"
/** 
 * 
 * 
 * Parent Class: Items
 */
f.minecart.Items = "field_151143_au"

/** 
 * 
 * 
 * Parent Class: MusicTicker
 */
f.timeUntilNextMusic = "field_147676_d"
/** 
 * 
 * 
 * Parent Class: MusicTicker
 */
f.currentMusic = "field_147678_c"
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
f.sndManager = "field_147694_f"
f.TYPE = {}
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
f.TYPE.SoundHandler = "field_147696_d"
/** 
 * 
 * 
 * Parent Class: PlayerProfileCache
 */
f.TYPE.PlayerProfileCache = "field_152666_h"
/** 
 * 
 * 
 * Parent Class: BlockSandStone
 */
f.TYPE.BlockSandStone = "field_176297_a"
/** 
 * 
 * 
 * Parent Class: BlockPistonExtension
 */
f.TYPE.BlockPistonExtension = "field_176325_b"
/** 
 * 
 * 
 * Parent Class: BlockRedSandstone
 */
f.TYPE.BlockRedSandstone = "field_176336_a"
/** 
 * 
 * 
 * Parent Class: BlockPistonMoving
 */
f.TYPE.BlockPistonMoving = "field_176425_b"
/** 
 * 
 * 
 * Parent Class: BlockSapling
 */
f.TYPE.BlockSapling = "field_176480_a"
/** 
 * 
 * 
 * Parent Class: BlockTallGrass
 */
f.TYPE.BlockTallGrass = "field_176497_a"

/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
f.sndRegistry = "field_147697_e"
f.GSON = {}
/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
f.GSON.SoundHandler = "field_147699_c"
/** 
 * 
 * 
 * Parent Class: S00PacketServerInfo
 */
f.GSON.S00PacketServerInfo = "field_149297_a"
/** 
 * 
 * 
 * Parent Class: IChatComponent$Serializer
 */
f.GSON.IChatComponent$Serializer = "field_150700_a"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition
 */
f.GSON.ModelBlockDefinition = "field_178333_a"

/** 
 * 
 * 
 * Parent Class: SoundHandler
 */
f.missing_sound = "field_147700_a"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.theShaderGroup = "field_147707_d"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.shaderCount = "field_147708_e"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.theMapItemRenderer = "field_147709_v"
f.resourceManager = {}
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.resourceManager.EntityRenderer = "field_147711_ac"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
f.resourceManager.ShaderGroup = "field_148033_b"
/** 
 * 
 * 
 * Parent Class: ModelBakery
 */
f.resourceManager.ModelBakery = "field_177598_f"

/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.shaderResourceLocations = "field_147712_ad"
/** 
 * 
 * 
 * Parent Class: EntityRenderer
 */
f.shaderIndex = "field_147713_ae"
/** 
 * 
 * 
 * Parent Class: TileEntityItemStackRenderer
 */
f.enderChest = "field_147716_d"
/** 
 * 
 * 
 * Parent Class: TextureUtil
 */
f.mipmapBuffer = "field_147957_g"
/** 
 * 
 * 
 * Parent Class: Stitcher$Holder
 */
f.mipmapLevelHolder = "field_147968_d"
/** 
 * 
 * 
 * Parent Class: Stitcher
 */
f.mipmapLevelStitcher = "field_147971_a"
/** 
 * maps sampler names to their texture
 * 
 * Parent Class: ShaderManager
 */
f.shaderSamplers = "field_147997_f"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.samplerNames = "field_147998_g"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.currentProgram = "field_147999_d"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.defaultShaderUniform = "field_148001_b"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.staticShaderManager = "field_148002_c"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.useFaceCulling = "field_148004_n"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.isDirty = "field_148005_o"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.program = "field_148006_l"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.programFilename = "field_148007_m"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.shaderUniformLocations = "field_148008_j"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.mappedShaderUniforms = "field_148009_k"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.shaderSamplerLocations = "field_148010_h"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.shaderUniforms = "field_148011_i"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.fragmentShaderLoader = "field_148012_t"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.vertexShaderLoader = "field_148013_s"
/** 
 * 
 * 
 * Parent Class: ShaderManager
 */
f.attribLocations = "field_148015_q"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
f.listFramebuffers = "field_148029_f"
f.projectionMatrix = {}
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
f.projectionMatrix.ShaderGroup = "field_148030_g"
/** 
 * 
 * 
 * Parent Class: Shader
 */
f.projectionMatrix.Shader = "field_148053_h"
/** 
 * 
 * 
 * Parent Class: ClippingHelper
 */
f.projectionMatrix.ClippingHelper = "field_178625_b"

/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
f.listShaders = "field_148031_d"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
f.mapFramebuffers = "field_148032_e"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
f.shaderGroupName = "field_148034_c"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
f.mainFramebuffer = "field_148035_a"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
f.mainFramebufferWidth = "field_148038_h"
/** 
 * 
 * 
 * Parent Class: ShaderGroup
 */
f.mainFramebufferHeight = "field_148039_i"
/** 
 * 
 * 
 * Parent Class: Shader
 */
f.listAuxWidths = "field_148046_f"
/** 
 * 
 * 
 * Parent Class: Shader
 */
f.listAuxHeights = "field_148047_g"
/** 
 * 
 * 
 * Parent Class: Shader
 */
f.listAuxFramebuffers = "field_148048_d"
/** 
 * 
 * 
 * Parent Class: Shader
 */
f.listAuxNames = "field_148049_e"
/** 
 * 
 * 
 * Parent Class: Shader
 */
f.framebufferOut = "field_148050_b"
/** 
 * 
 * 
 * Parent Class: Shader
 */
f.manager = "field_148051_c"
/** 
 * 
 * 
 * Parent Class: Shader
 */
f.framebufferIn = "field_148052_a"
/** 
 * 
 * 
 * Parent Class: ShaderLoader
 */
f.shaderAttachCount = "field_148058_d"
/** 
 * 
 * 
 * Parent Class: ShaderLoader
 */
f.shaderFilename = "field_148059_b"
/** 
 * 
 * 
 * Parent Class: ShaderLoader
 */
f.shader = "field_148060_c"
/** 
 * 
 * 
 * Parent Class: ShaderLoader
 */
f.shaderType = "field_148061_a"
/** 
 * 
 * 
 * Parent Class: ShaderLoader$ShaderType
 */
f.loadedShaders = "field_148067_f"
/** 
 * 
 * 
 * Parent Class: ShaderLoader$ShaderType
 */
f.shaderExtension = "field_148069_d"
/** 
 * 
 * 
 * Parent Class: ShaderLoader$ShaderType
 */
f.shaderMode = "field_148070_e"
f.shaderName = {}
/** 
 * 
 * 
 * Parent Class: ShaderLoader$ShaderType
 */
f.shaderName.ShaderLoader$ShaderType = "field_148072_c"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
f.shaderName.ShaderUniform = "field_148099_g"

/** 
 * 
 * 
 * Parent Class: ShaderLinkHelper
 */
f.staticShaderLinkHelper = "field_148079_b"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
f.uniformFloatBuffer = "field_148098_f"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
f.uniformType = "field_148100_d"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
f.uniformIntBuffer = "field_148101_e"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
f.uniformLocation = "field_148102_b"
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
f.uniformCount = "field_148103_c"
f.dirty = {}
/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
f.dirty.ShaderUniform = "field_148105_h"
/** 
 * Whether this MapDataBase needs saving to disk.
 * 
 * Parent Class: WorldSavedData
 */
f.dirty.WorldSavedData = "field_76189_a"

/** 
 * 
 * 
 * Parent Class: ShaderUniform
 */
f.shaderManager = "field_148106_i"
/** 
 * The height of a slot.
 * 
 * Parent Class: GuiSlot
 */
f.slotHeight = "field_148149_f"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
f.mouseX = "field_148150_g"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
f.right = "field_148151_d"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
f.left = "field_148152_e"
/** 
 * The top of the slot container. Affects the overlays and scrolling.
 * 
 * Parent Class: GuiSlot
 */
f.top = "field_148153_b"
/** 
 * The bottom of the slot container. Affects the overlays and scrolling.
 * 
 * Parent Class: GuiSlot
 */
f.bottom = "field_148154_c"
/** 
 * The buttonID of the button used to scroll down
 * 
 * Parent Class: GuiSlot
 */
f.scrollDownButtonID = "field_148156_n"
/** 
 * Where the mouse was in the window when you first clicked to scroll
 * 
 * Parent Class: GuiSlot
 */
f.initialClickY = "field_148157_o"
/** 
 * The buttonID of the button used to scroll up
 * 
 * Parent Class: GuiSlot
 */
f.scrollUpButtonID = "field_148159_m"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
f.headerPadding = "field_148160_j"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
f.mouseY = "field_148162_h"
/** 
 * 
 * 
 * Parent Class: GuiSlot
 */
f.hasListHeader = "field_148165_u"
/** 
 * Set to true if a selected element in this gui will show an outline box
 * 
 * Parent Class: GuiSlot
 */
f.showSelectionBox = "field_148166_t"
/** 
 * The time when this button was last clicked.
 * 
 * Parent Class: GuiSlot
 */
f.lastClicked = "field_148167_s"
/** 
 * The element in the list that was selected
 * 
 * Parent Class: GuiSlot
 */
f.selectedElement = "field_148168_r"
/** 
 * How far down this slot has been scrolled
 * 
 * Parent Class: GuiSlot
 */
f.amountScrolled = "field_148169_q"
/** 
 * What to multiply the amount you moved your mouse by (used for slowing down scrolling when over the items and not on the scroll bar)
 * 
 * Parent Class: GuiSlot
 */
f.scrollMultiplier = "field_148170_p"
/** 
 * A list containing the many different locale language codes.
 * 
 * Parent Class: GuiLanguage$List
 */
f.langCodeList = "field_148176_l"
/** 
 * 
 * 
 * Parent Class: GuiKeyBindingList
 */
f.maxListLabelWidth = "field_148188_n"
/** 
 * 
 * 
 * Parent Class: GuiKeyBindingList
 */
f.listEntries = "field_148190_m"
/** 
 * 
 * 
 * Parent Class: ServerSelectionList
 */
f.lanScanEntry = "field_148196_n"
/** 
 * 
 * 
 * Parent Class: ServerSelectionList
 */
f.selectedSlotIndex = "field_148197_o"
/** 
 * 
 * 
 * Parent Class: ServerSelectionList
 */
f.serverListInternet = "field_148198_l"
/** 
 * 
 * 
 * Parent Class: ServerSelectionList
 */
f.serverListLan = "field_148199_m"
/** 
 * 
 * 
 * Parent Class: GuiStats$Stats
 */
f.statSorter = "field_148216_n"
/** 
 * 
 * 
 * Parent Class: GuiStats$Stats
 */
f.statsHolder = "field_148219_m"
f.location = {}
/** 
 * 
 * 
 * Parent Class: MapItemRenderer$Instance
 */
f.location.MapItemRenderer$Instance = "field_148240_d"
/** 
 * 
 * 
 * Parent Class: SoundPoolEntry
 */
f.location.SoundPoolEntry = "field_148656_a"

/** 
 * 
 * 
 * Parent Class: MapItemRenderer$Instance
 */
f.mapTextureData = "field_148241_e"
/** 
 * 
 * 
 * Parent Class: MapItemRenderer$Instance
 */
f.mapData = "field_148242_b"
/** 
 * 
 * 
 * Parent Class: MapItemRenderer$Instance
 */
f.mapTexture = "field_148243_c"
f.textureManager = {}
/** 
 * 
 * 
 * Parent Class: MapItemRenderer
 */
f.textureManager.MapItemRenderer = "field_148251_b"
/** 
 * 
 * 
 * Parent Class: SkinManager
 */
f.textureManager.SkinManager = "field_152795_c"
/** 
 * 
 * 
 * Parent Class: RenderItem
 */
f.textureManager.RenderItem = "field_175057_n"

/** 
 * 
 * 
 * Parent Class: MapItemRenderer
 */
f.loadedMaps = "field_148252_c"
/** 
 * 
 * 
 * Parent Class: MapItemRenderer
 */
f.mapIcons = "field_148253_a"
f.playerID = {}
/** 
 * 
 * 
 * Parent Class: Session
 */
f.playerID.Session = "field_148257_b"
/** 
 * 
 * 
 * Parent Class: S0APacketUseBed
 */
f.playerID.S0APacketUseBed = "field_149097_a"

/** 
 * 
 * 
 * Parent Class: Session
 */
f.token = "field_148258_c"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
f.valueStep = "field_148270_M"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
f.valueMin = "field_148271_N"
/** 
 * 
 * 
 * Parent Class: GameSettings$Options
 */
f.valueMax = "field_148272_O"
/** 
 * 
 * 
 * Parent Class: GuiKeyBindingList$KeyEntry
 */
f.btnChangeKeyBinding = "field_148280_d"
/** 
 * 
 * 
 * Parent Class: GuiKeyBindingList$KeyEntry
 */
f.btnReset = "field_148281_e"
/** 
 * The keybinding specified for this KeyEntry
 * 
 * Parent Class: GuiKeyBindingList$KeyEntry
 */
f.keybinding = "field_148282_b"
/** 
 * The localized key description for this KeyEntry
 * 
 * Parent Class: GuiKeyBindingList$KeyEntry
 */
f.keyDesc = "field_148283_c"
/** 
 * 
 * 
 * Parent Class: GuiKeyBindingList$CategoryEntry
 */
f.labelText = "field_148285_b"
/** 
 * 
 * 
 * Parent Class: GuiKeyBindingList$CategoryEntry
 */
f.labelWidth = "field_148286_c"
/** 
 * 
 * 
 * Parent Class: ResourcePackListEntry
 */
f.resourcePacksGUI = "field_148315_b"
/** 
 * 
 * 
 * Parent Class: ResourcePackListEntry
 */
f.RESOURCE_PACKS_TEXTURE = "field_148316_c"
/** 
 * 
 * 
 * Parent Class: ResourcePackListEntryDefault
 */
f.resourcePackIcon = "field_148321_e"
/** 
 * the list of items in this container
 * 
 * Parent Class: GuiContainerCreative$ContainerCreative
 */
f.itemList = "field_148330_a"
f.slot = {}
/** 
 * 
 * 
 * Parent Class: GuiContainerCreative$CreativeSlot
 */
f.slot.GuiContainerCreative$CreativeSlot = "field_148332_b"
/** 
 * 
 * 
 * Parent Class: S2FPacketSetSlot
 */
f.slot.S2FPacketSetSlot = "field_149177_b"

/** 
 * 
 * 
 * Parent Class: EnchantmentNameParts
 */
f.namePartsArray = "field_148337_c"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
f.resourcePackInstance = "field_148532_f"
/** 
 * 
 * 
 * Parent Class: ResourcePackRepository
 */
f.dirServerResourcepacks = "field_148534_e"
/** 
 * 
 * 
 * Parent Class: TextureMetadataSection
 */
f.listMipmaps = "field_148536_c"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
f.playerStatFiles = "field_148547_k"
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
f.streaming = "field_148564_f"
f.weight = {}
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
f.weight.SoundList$SoundEntry = "field_148565_d"
/** 
 * 
 * 
 * Parent Class: SoundEventAccessor
 */
f.weight.SoundEventAccessor = "field_148738_b"
/** 
 * 
 * 
 * Parent Class: ModelBlockDefinition$Variant
 */
f.weight.ModelBlockDefinition$Variant = "field_178434_d"
/** 
 * 
 * 
 * Parent Class: Enchantment
 */
f.weight.Enchantment = "field_77333_a"

f.type = {}
/** 
 * 
 * 
 * Parent Class: SoundList$SoundEntry
 */
f.type.SoundList$SoundEntry = "field_148566_e"
/** 
 * 
 * 
 * Parent Class: ISound$AttenuationType
 */
f.type.ISound$AttenuationType = "field_148589_c"
/** 
 * 
 * 
 * Parent Class: S0BPacketAnimation
 */
f.type.S0BPacketAnimation = "field_148980_b"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
f.type.S0EPacketSpawnObject = "field_149019_j"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.type.S0FPacketSpawnMob = "field_149040_b"
/** 
 * 
 * 
 * Parent Class: S2CPacketSpawnGlobalEntity
 */
f.type.S2CPacketSpawnGlobalEntity = "field_149056_e"
/** 
 * 
 * 
 * Parent Class: BlockFlower
 */
f.type.BlockFlower = "field_176496_a"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement
 */
f.type.VertexFormatElement = "field_177379_b"
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
f.type.ChunkCompileTaskGenerator = "field_178549_d"
/** 
 * 
 * 
 * Parent Class: S45PacketTitle
 */
f.type.S45PacketTitle = "field_179812_a"
/** 
 * 
 * 
 * Parent Class: S3BPacketScoreboardObjective
 */
f.type.S3BPacketScoreboardObjective = "field_179818_c"
/** 
 * 
 * 
 * Parent Class: S02PacketChat
 */
f.type.S02PacketChat = "field_179842_b"
/** 
 * 
 * 
 * Parent Class: GameRules$Value
 */
f.type.GameRules$Value = "field_180256_e"
/** 
 * 
 * 
 * Parent Class: StatBase
 */
f.type.StatBase = "field_75976_b"
/** 
 * The EnumEnchantmentType given to this Enchantment.
 * 
 * Parent Class: Enchantment
 */
f.type.Enchantment = "field_77351_y"

/** 
 * if true it will override all the sounds from the resourcepacks loaded before
 * 
 * Parent Class: SoundList
 */
f.replaceExisting = "field_148575_b"
f.category = {}
/** 
 * 
 * 
 * Parent Class: SoundList
 */
f.category.SoundList = "field_148576_c"
/** 
 * 
 * 
 * Parent Class: SoundEventAccessorComposite
 */
f.category.SoundEventAccessorComposite = "field_148732_d"

/** 
 * 
 * 
 * Parent Class: SoundList
 */
f.soundList = "field_148577_a"
/** 
 * Set to true when the SoundManager has been initialised.
 * 
 * Parent Class: SoundManager
 */
f.loaded = "field_148617_f"
f.playTime = {}
/** 
 * A counter for how long the sound manager has been running
 * 
 * Parent Class: SoundManager
 */
f.playTime.SoundManager = "field_148618_g"
/** 
 * 
 * 
 * Parent Class: EntityAIPlay
 */
f.playTime.EntityAIPlay = "field_75259_d"

/** 
 * A reference to the sound system.
 * 
 * Parent Class: SoundManager
 */
f.sndSystem = "field_148620_e"
/** 
 * A reference to the sound handler.
 * 
 * Parent Class: SoundManager
 */
f.sndHandler = "field_148622_c"
/** 
 * The marker used for logging
 * 
 * Parent Class: SoundManager
 */
f.LOG_MARKER = "field_148623_a"
/** 
 * "The future time in which to stop this sound.  Type: HashMap<String
 * 
 * Parent Class: SoundManager
 */
f.playingSoundsStopTime = "field_148624_n"
/** 
 * "A subset of playingSounds
 * 
 * Parent Class: SoundManager
 */
f.tickableSounds = "field_148625_l"
/** 
 * "Contains sounds to play in n ticks.  Type: HashMap<ISound
 * 
 * Parent Class: SoundManager
 */
f.delayedSounds = "field_148626_m"
/** 
 * "A HashMap<String
 * 
 * Parent Class: SoundManager
 */
f.playingSoundPoolEntries = "field_148627_j"
/** 
 * "Contains sounds mapped by category. Type: Multimap<SoundCategory
 * 
 * Parent Class: SoundManager
 */
f.categorySounds = "field_148628_k"
/** 
 * "Identifiers of all currently playing sounds. Type: HashBiMap<String
 * 
 * Parent Class: SoundManager
 */
f.playingSounds = "field_148629_h"
/** 
 * "Inverse map of currently playing sounds
 * 
 * Parent Class: SoundManager
 */
f.invPlayingSounds = "field_148630_i"
/** 
 * 
 * 
 * Parent Class: MusicTicker$MusicType
 */
f.maxDelay = "field_148643_j"
/** 
 * 
 * 
 * Parent Class: MusicTicker$MusicType
 */
f.musicLocation = "field_148645_h"
/** 
 * 
 * 
 * Parent Class: MusicTicker$MusicType
 */
f.minDelay = "field_148646_i"
/** 
 * 
 * 
 * Parent Class: SoundPoolEntry
 */
f.streamingSound = "field_148654_b"
/** 
 * 
 * 
 * Parent Class: SoundEventAccessorComposite
 */
f.eventVolume = "field_148731_f"
/** 
 * 
 * 
 * Parent Class: SoundEventAccessorComposite
 */
f.eventPitch = "field_148733_e"
f.rnd = {}
/** 
 * 
 * 
 * Parent Class: SoundEventAccessorComposite
 */
f.rnd.SoundEventAccessorComposite = "field_148734_b"
/** 
 * 
 * 
 * Parent Class: RenderEnderman
 */
f.rnd.RenderEnderman = "field_77077_b"

/** 
 * 
 * 
 * Parent Class: SoundEventAccessorComposite
 */
f.soundLocation = "field_148735_c"
/** 
 * A composite (List) of ISoundEventAccessors
 * 
 * Parent Class: SoundEventAccessorComposite
 */
f.soundPool = "field_148736_a"
/** 
 * 
 * 
 * Parent Class: SoundEventAccessor
 */
f.entry = "field_148739_a"
/** 
 * 
 * 
 * Parent Class: ObjectIntIdentityMap
 */
f.objectList = "field_148748_b"
/** 
 * 
 * 
 * Parent Class: ObjectIntIdentityMap
 */
f.identityMap = "field_148749_a"
/** 
 * A BiMap of objects (key) to their names (value).
 * 
 * Parent Class: RegistryNamespaced
 */
f.inverseObjectRegistry = "field_148758_b"
/** 
 * The backing store that maps Integers to objects.
 * 
 * Parent Class: RegistryNamespaced
 */
f.underlyingIntegerMap = "field_148759_a"
/** 
 * The key of the default value.
 * 
 * Parent Class: RegistryNamespacedDefaultedByKey
 */
f.defaultValueKey = "field_148760_d"
/** 
 * Contains all registered sound
 * 
 * Parent Class: SoundRegistry
 */
f.soundRegistry = "field_148764_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
f.framebufferSupported = "field_148823_f"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
f.shadersSupported = "field_148824_g"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
f.GL_STATIC_DRAW = "field_148826_e"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
f.openGL21 = "field_148827_a"
/** 
 * 
 * 
 * Parent Class: OpenGlHelper
 */
f.openGL14 = "field_148828_i"
/** 
 * 
 * 
 * Parent Class: S25PacketBlockBreakAnim
 */
f.breakerId = "field_148852_a"
f.metadata = {}
/** 
 * Used only for vanilla tile entities
 * 
 * Parent Class: S35PacketUpdateTileEntity
 */
f.metadata.S35PacketUpdateTileEntity = "field_148859_d"
/** 
 * 
 * 
 * Parent Class: BlockSandStone$EnumType
 */
f.metadata.BlockSandStone$EnumType = "field_176680_e"
/** 
 * 
 * 
 * Parent Class: BlockDirt$DirtType
 */
f.metadata.BlockDirt$DirtType = "field_176931_e"

/** 
 * 
 * 
 * Parent Class: S35PacketUpdateTileEntity
 */
f.nbt = "field_148860_e"
f.block = {}
/** 
 * 
 * 
 * Parent Class: S24PacketBlockAction
 */
f.block.S24PacketBlockAction = "field_148871_f"
/** 
 * 
 * 
 * Parent Class: WorldGenSand
 */
f.block.WorldGenSand = "field_150517_a"
/** 
 * 
 * 
 * Parent Class: WorldGenLiquids
 */
f.block.WorldGenLiquids = "field_150521_a"
/** 
 * 
 * 
 * Parent Class: WorldGenIcePath
 */
f.block.WorldGenIcePath = "field_150555_a"
/** 
 * 
 * 
 * Parent Class: WorldGenLakes
 */
f.block.WorldGenLakes = "field_150556_a"
/** 
 * 
 * 
 * Parent Class: ItemReed
 */
f.block.ItemReed = "field_150935_a"
/** 
 * 
 * 
 * Parent Class: ItemBlock
 */
f.block.ItemBlock = "field_150939_a"
/** 
 * 
 * 
 * Parent Class: NextTickListEntry
 */
f.block.NextTickListEntry = "field_151352_g"
/** 
 * 
 * 
 * Parent Class: BlockState$StateImplementation
 */
f.block.BlockState$StateImplementation = "field_177239_a"
/** 
 * 
 * 
 * Parent Class: BlockState
 */
f.block.BlockState = "field_177627_c"
/** 
 * 
 * 
 * Parent Class: BlockHelper
 */
f.block.BlockHelper = "field_177644_a"
/** 
 * 
 * 
 * Parent Class: ItemDoor
 */
f.block.ItemDoor = "field_179236_a"
/** 
 * 
 * 
 * Parent Class: BlockRailBase$Rail
 */
f.block.BlockRailBase$Rail = "field_180365_d"

/** 
 * 
 * 
 * Parent Class: S24PacketBlockAction
 */
f.instrument = "field_148872_d"
f.blockState = {}
/** 
 * 
 * 
 * Parent Class: S23PacketBlockChange
 */
f.blockState.S23PacketBlockChange = "field_148883_d"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.blockState.Block = "field_176227_L"
/** 
 * 
 * 
 * Parent Class: CommandClone$StaticCloneData
 */
f.blockState.CommandClone$StaticCloneData = "field_179535_b"
/** 
 * 
 * 
 * Parent Class: S22PacketMultiBlockChange$BlockUpdateData
 */
f.blockState.S22PacketMultiBlockChange$BlockUpdateData = "field_180092_c"

f.actionNumber = {}
/** 
 * 
 * 
 * Parent Class: S32PacketConfirmTransaction
 */
f.actionNumber.S32PacketConfirmTransaction = "field_148892_b"
/** 
 * "A unique number for the action
 * 
 * Parent Class: C0EPacketClickWindow
 */
f.actionNumber.C0EPacketClickWindow = "field_149550_d"

f.windowId = {}
/** 
 * 
 * 
 * Parent Class: S32PacketConfirmTransaction
 */
f.windowId.S32PacketConfirmTransaction = "field_148894_a"
/** 
 * 
 * 
 * Parent Class: S2EPacketCloseWindow
 */
f.windowId.S2EPacketCloseWindow = "field_148896_a"
/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
f.windowId.S2DPacketOpenWindow = "field_148909_a"
/** 
 * 
 * 
 * Parent Class: S30PacketWindowItems
 */
f.windowId.S30PacketWindowItems = "field_148914_a"
/** 
 * 
 * 
 * Parent Class: S2FPacketSetSlot
 */
f.windowId.S2FPacketSetSlot = "field_149179_a"
/** 
 * 
 * 
 * Parent Class: S31PacketWindowProperty
 */
f.windowId.S31PacketWindowProperty = "field_149186_a"
/** 
 * 
 * 
 * Parent Class: C0FPacketConfirmTransaction
 */
f.windowId.C0FPacketConfirmTransaction = "field_149536_a"
/** 
 * 
 * 
 * Parent Class: C11PacketEnchantItem
 */
f.windowId.C11PacketEnchantItem = "field_149541_a"
/** 
 * The id of the window which was clicked. 0 for player inventory.
 * 
 * Parent Class: C0EPacketClickWindow
 */
f.windowId.C0EPacketClickWindow = "field_149554_a"
/** 
 * 
 * 
 * Parent Class: C0DPacketCloseWindow
 */
f.windowId.C0DPacketCloseWindow = "field_149556_a"
/** 
 * 
 * 
 * Parent Class: Container
 */
f.windowId.Container = "field_75152_c"

/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
f.slotCount = "field_148905_d"
/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
f.inventoryType = "field_148907_b"
/** 
 * 
 * 
 * Parent Class: S2DPacketOpenWindow
 */
f.windowTitle = "field_148908_c"
/** 
 * 
 * 
 * Parent Class: S30PacketWindowItems
 */
f.itemStacks = "field_148913_b"
/** 
 * 
 * 
 * Parent Class: S22PacketMultiBlockChange
 */
f.chunkPosCoord = "field_148925_b"
f.yaw = {}
/** 
 * 
 * 
 * Parent Class: S08PacketPlayerPosLook
 */
f.yaw.S08PacketPlayerPosLook = "field_148936_d"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
f.yaw.S0CPacketSpawnPlayer = "field_148951_f"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
f.yaw.S0EPacketSpawnObject = "field_149022_i"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.yaw.S0FPacketSpawnMob = "field_149048_i"
/** 
 * 
 * 
 * Parent Class: S14PacketEntity
 */
f.yaw.S14PacketEntity = "field_149071_e"
/** 
 * 
 * 
 * Parent Class: S19PacketEntityHeadLook
 */
f.yaw.S19PacketEntityHeadLook = "field_149383_b"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
f.yaw.S18PacketEntityTeleport = "field_149455_e"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
f.yaw.C03PacketPlayer = "field_149476_e"
/** 
 * Tempting player's yaw
 * 
 * Parent Class: EntityAITempt
 */
f.yaw.EntityAITempt = "field_75279_g"

f.y = {}
/** 
 * 
 * 
 * Parent Class: S08PacketPlayerPosLook
 */
f.y.S08PacketPlayerPosLook = "field_148938_b"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
f.y.S0CPacketSpawnPlayer = "field_148953_d"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
f.y.S0EPacketSpawnObject = "field_149017_c"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.y.S0FPacketSpawnMob = "field_149038_d"
/** 
 * 
 * 
 * Parent Class: S2CPacketSpawnGlobalEntity
 */
f.y.S2CPacketSpawnGlobalEntity = "field_149058_c"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
f.y.C03PacketPlayer = "field_149477_b"
/** 
 * Y coordinate
 * 
 * Parent Class: Vec3i
 */
f.y.Vec3i = "field_177960_b"
/** 
 * Mutable Y Coordinate
 * 
 * Parent Class: BlockPos$MutableBlockPos
 */
f.y.BlockPos$MutableBlockPos = "field_177998_c"
/** 
 * Rotation on the Y axis
 * 
 * Parent Class: Rotations
 */
f.y.Rotations = "field_179417_b"
/** 
 * The Y coordinate
 * 
 * Parent Class: Vector3d
 */
f.y.Vector3d = "field_181060_b"
/** 
 * 
 * 
 * Parent Class: PositionImpl
 */
f.y.PositionImpl = "field_82628_b"

f.z = {}
/** 
 * 
 * 
 * Parent Class: S08PacketPlayerPosLook
 */
f.z.S08PacketPlayerPosLook = "field_148939_c"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
f.z.S0CPacketSpawnPlayer = "field_148954_e"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
f.z.S0EPacketSpawnObject = "field_149014_d"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.z.S0FPacketSpawnMob = "field_149039_e"
/** 
 * 
 * 
 * Parent Class: S2CPacketSpawnGlobalEntity
 */
f.z.S2CPacketSpawnGlobalEntity = "field_149055_d"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
f.z.C03PacketPlayer = "field_149478_c"
/** 
 * Z coordinate
 * 
 * Parent Class: Vec3i
 */
f.z.Vec3i = "field_177961_c"
/** 
 * Mutable Z Coordinate
 * 
 * Parent Class: BlockPos$MutableBlockPos
 */
f.z.BlockPos$MutableBlockPos = "field_177996_d"
/** 
 * Rotation on the Z axis
 * 
 * Parent Class: Rotations
 */
f.z.Rotations = "field_179418_c"
/** 
 * The Z coordinate
 * 
 * Parent Class: Vector3d
 */
f.z.Vector3d = "field_181061_c"
/** 
 * 
 * 
 * Parent Class: ChunkLoader$AnvilConverterData
 */
f.z.ChunkLoader$AnvilConverterData = "field_76699_l"
/** 
 * 
 * 
 * Parent Class: PositionImpl
 */
f.z.PositionImpl = "field_82629_c"

f.x = {}
/** 
 * 
 * 
 * Parent Class: S08PacketPlayerPosLook
 */
f.x.S08PacketPlayerPosLook = "field_148940_a"
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
f.x.S0CPacketSpawnPlayer = "field_148956_c"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
f.x.S0EPacketSpawnObject = "field_149016_b"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.x.S0FPacketSpawnMob = "field_149041_c"
/** 
 * 
 * 
 * Parent Class: S2CPacketSpawnGlobalEntity
 */
f.x.S2CPacketSpawnGlobalEntity = "field_149057_b"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
f.x.C03PacketPlayer = "field_149479_a"
/** 
 * X coordinate
 * 
 * Parent Class: Vec3i
 */
f.x.Vec3i = "field_177962_a"
/** 
 * Mutable X Coordinate
 * 
 * Parent Class: BlockPos$MutableBlockPos
 */
f.x.BlockPos$MutableBlockPos = "field_177997_b"
/** 
 * Rotation on the X axis
 * 
 * Parent Class: Rotations
 */
f.x.Rotations = "field_179419_a"
/** 
 * The X coordinate
 * 
 * Parent Class: Vector3d
 */
f.x.Vector3d = "field_181059_a"
/** 
 * 
 * 
 * Parent Class: ChunkLoader$AnvilConverterData
 */
f.x.ChunkLoader$AnvilConverterData = "field_76701_k"
/** 
 * 
 * 
 * Parent Class: PositionImpl
 */
f.x.PositionImpl = "field_82630_a"

f.currentItem = {}
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
f.currentItem.S0CPacketSpawnPlayer = "field_148959_h"
/** 
 * The index of the currently held item (0-8).
 * 
 * Parent Class: InventoryPlayer
 */
f.currentItem.InventoryPlayer = "field_70461_c"

f.watcher = {}
/** 
 * 
 * 
 * Parent Class: S0CPacketSpawnPlayer
 */
f.watcher.S0CPacketSpawnPlayer = "field_148960_i"
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.watcher.S0FPacketSpawnMob = "field_149044_m"

f.title = {}
/** 
 * 
 * 
 * Parent Class: S10PacketSpawnPainting
 */
f.title.S10PacketSpawnPainting = "field_148968_f"
/** 
 * The title of the GUI.
 * 
 * Parent Class: GuiCustomizeSkin
 */
f.title.GuiCustomizeSkin = "field_175360_f"
/** 
 * Painting Title.
 * 
 * Parent Class: EntityPainting$EnumArt
 */
f.title.EntityPainting$EnumArt = "field_75702_A"

f.entityID = {}
/** 
 * 
 * 
 * Parent Class: S10PacketSpawnPainting
 */
f.entityID.S10PacketSpawnPainting = "field_148973_a"
/** 
 * 
 * 
 * Parent Class: S11PacketSpawnExperienceOrb
 */
f.entityID.S11PacketSpawnExperienceOrb = "field_148992_a"
/** 
 * 
 * 
 * Parent Class: S04PacketEntityEquipment
 */
f.entityID.S04PacketEntityEquipment = "field_149394_a"
/** 
 * 
 * 
 * Parent Class: S12PacketEntityVelocity
 */
f.entityID.S12PacketEntityVelocity = "field_149417_a"
/** 
 * 
 * 
 * Parent Class: C0BPacketEntityAction
 */
f.entityID.C0BPacketEntityAction = "field_149517_a"

f.posZ = {}
/** 
 * 
 * 
 * Parent Class: S11PacketSpawnExperienceOrb
 */
f.posZ.S11PacketSpawnExperienceOrb = "field_148988_d"
/** 
 * 
 * 
 * Parent Class: S14PacketEntity
 */
f.posZ.S14PacketEntity = "field_149070_d"
/** 
 * 
 * 
 * Parent Class: S27PacketExplosion
 */
f.posZ.S27PacketExplosion = "field_149157_c"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
f.posZ.S29PacketSoundEffect = "field_149215_d"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
f.posZ.S18PacketEntityTeleport = "field_149454_d"
/** 
 * Entity position Z
 * 
 * Parent Class: Entity
 */
f.posZ.Entity = "field_70161_v"
/** 
 * 
 * 
 * Parent Class: EntityMoveHelper
 */
f.posZ.EntityMoveHelper = "field_75644_d"
/** 
 * 
 * 
 * Parent Class: EntityLookHelper
 */
f.posZ.EntityLookHelper = "field_75654_g"

f.xpValue = {}
/** 
 * 
 * 
 * Parent Class: S11PacketSpawnExperienceOrb
 */
f.xpValue.S11PacketSpawnExperienceOrb = "field_148989_e"
/** 
 * This is how much XP this orb has.
 * 
 * Parent Class: EntityXPOrb
 */
f.xpValue.EntityXPOrb = "field_70530_e"

f.posX = {}
/** 
 * 
 * 
 * Parent Class: S11PacketSpawnExperienceOrb
 */
f.posX.S11PacketSpawnExperienceOrb = "field_148990_b"
/** 
 * 
 * 
 * Parent Class: S14PacketEntity
 */
f.posX.S14PacketEntity = "field_149072_b"
/** 
 * 
 * 
 * Parent Class: S27PacketExplosion
 */
f.posX.S27PacketExplosion = "field_149158_a"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
f.posX.S29PacketSoundEffect = "field_149217_b"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
f.posX.S18PacketEntityTeleport = "field_149456_b"
/** 
 * Entity position X
 * 
 * Parent Class: Entity
 */
f.posX.Entity = "field_70165_t"
/** 
 * 
 * 
 * Parent Class: EntityMoveHelper
 */
f.posX.EntityMoveHelper = "field_75646_b"
/** 
 * 
 * 
 * Parent Class: EntityLookHelper
 */
f.posX.EntityLookHelper = "field_75656_e"
/** 
 * Current X coordinate at which to draw the next character.
 * 
 * Parent Class: FontRenderer
 */
f.posX.FontRenderer = "field_78295_j"

f.posY = {}
/** 
 * 
 * 
 * Parent Class: S11PacketSpawnExperienceOrb
 */
f.posY.S11PacketSpawnExperienceOrb = "field_148991_c"
/** 
 * 
 * 
 * Parent Class: S14PacketEntity
 */
f.posY.S14PacketEntity = "field_149073_c"
/** 
 * 
 * 
 * Parent Class: S27PacketExplosion
 */
f.posY.S27PacketExplosion = "field_149156_b"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
f.posY.S29PacketSoundEffect = "field_149218_c"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
f.posY.S18PacketEntityTeleport = "field_149457_c"
/** 
 * Entity position Y
 * 
 * Parent Class: Entity
 */
f.posY.Entity = "field_70163_u"
/** 
 * 
 * 
 * Parent Class: EntityMoveHelper
 */
f.posY.EntityMoveHelper = "field_75647_c"
/** 
 * 
 * 
 * Parent Class: EntityLookHelper
 */
f.posY.EntityLookHelper = "field_75653_f"
/** 
 * Current Y coordinate at which to draw the next character.
 * 
 * Parent Class: FontRenderer
 */
f.posY.FontRenderer = "field_78296_k"

/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
f.speedY = "field_149012_f"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
f.speedZ = "field_149013_g"
/** 
 * 
 * 
 * Parent Class: S0EPacketSpawnObject
 */
f.speedX = "field_149015_e"
f.velocityX = {}
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.velocityX.S0FPacketSpawnMob = "field_149036_f"
/** 
 * 
 * 
 * Parent Class: EntityBoat
 */
f.velocityX.EntityBoat = "field_70282_i"
/** 
 * 
 * 
 * Parent Class: EntityMinecart
 */
f.velocityX.EntityMinecart = "field_70508_aq"

f.velocityY = {}
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.velocityY.S0FPacketSpawnMob = "field_149037_g"
/** 
 * 
 * 
 * Parent Class: EntityBoat
 */
f.velocityY.EntityBoat = "field_70280_j"
/** 
 * 
 * 
 * Parent Class: EntityMinecart
 */
f.velocityY.EntityMinecart = "field_70507_ar"

/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.headPitch = "field_149046_k"
f.velocityZ = {}
/** 
 * 
 * 
 * Parent Class: S0FPacketSpawnMob
 */
f.velocityZ.S0FPacketSpawnMob = "field_149047_h"
/** 
 * 
 * 
 * Parent Class: EntityBoat
 */
f.velocityZ.EntityBoat = "field_70278_an"
/** 
 * 
 * 
 * Parent Class: EntityMinecart
 */
f.velocityZ.EntityMinecart = "field_70506_as"

f.effectId = {}
/** 
 * 
 * 
 * Parent Class: S1EPacketRemoveEntityEffect
 */
f.effectId.S1EPacketRemoveEntityEffect = "field_149078_b"
/** 
 * 
 * 
 * Parent Class: S1DPacketEntityEffect
 */
f.effectId.S1DPacketEntityEffect = "field_149432_b"
/** 
 * 
 * 
 * Parent Class: Enchantment
 */
f.effectId.Enchantment = "field_77352_x"

f.worldType = {}
/** 
 * 
 * 
 * Parent Class: S07PacketRespawn
 */
f.worldType.S07PacketRespawn = "field_149085_d"
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
f.worldType.S01PacketJoinGame = "field_149201_g"
/** 
 * 
 * 
 * Parent Class: WorldType
 */
f.worldType.WorldType = "field_77133_f"

f.difficulty = {}
/** 
 * 
 * 
 * Parent Class: S07PacketRespawn
 */
f.difficulty.S07PacketRespawn = "field_149086_b"
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
f.difficulty.S01PacketJoinGame = "field_149203_e"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
f.difficulty.WorldInfo = "field_176158_z"
/** 
 * 
 * 
 * Parent Class: S41PacketServerDifficulty
 */
f.difficulty.S41PacketServerDifficulty = "field_179833_a"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
f.difficulty.GameSettings = "field_74318_M"

f.gameType = {}
/** 
 * 
 * 
 * Parent Class: S07PacketRespawn
 */
f.gameType.S07PacketRespawn = "field_149087_c"
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
f.gameType.S01PacketJoinGame = "field_149205_c"
/** 
 * 
 * 
 * Parent Class: NetworkPlayerInfo
 */
f.gameType.NetworkPlayerInfo = "field_178866_b"
/** 
 * 
 * 
 * Parent Class: DedicatedServer
 */
f.gameType.DedicatedServer = "field_71337_q"
/** 
 * 
 * 
 * Parent Class: ServerConfigurationManager
 */
f.gameType.ServerConfigurationManager = "field_72410_m"
/** 
 * 
 * 
 * Parent Class: ItemInWorldManager
 */
f.gameType.ItemInWorldManager = "field_73091_c"

/** 
 * 
 * 
 * Parent Class: S07PacketRespawn
 */
f.dimensionID = "field_149088_a"
/** 
 * 
 * 
 * Parent Class: S13PacketDestroyEntities
 */
f.entityIDs = "field_149100_a"
f.walkSpeed = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
f.walkSpeed.S39PacketPlayerAbilities = "field_149114_f"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
f.walkSpeed.C13PacketPlayerAbilities = "field_149495_f"
/** 
 * 
 * 
 * Parent Class: PlayerCapabilities
 */
f.walkSpeed.PlayerCapabilities = "field_75097_g"

f.creativeMode = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
f.creativeMode.S39PacketPlayerAbilities = "field_149115_d"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
f.creativeMode.C13PacketPlayerAbilities = "field_149496_d"

f.flySpeed = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
f.flySpeed.S39PacketPlayerAbilities = "field_149116_e"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
f.flySpeed.C13PacketPlayerAbilities = "field_149497_e"
/** 
 * 
 * 
 * Parent Class: PlayerCapabilities
 */
f.flySpeed.PlayerCapabilities = "field_75096_f"

f.flying = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
f.flying.S39PacketPlayerAbilities = "field_149117_b"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
f.flying.C13PacketPlayerAbilities = "field_149498_b"

f.allowFlying = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
f.allowFlying.S39PacketPlayerAbilities = "field_149118_c"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
f.allowFlying.C13PacketPlayerAbilities = "field_149499_c"
/** 
 * whether or not to allow the player to fly when they double jump.
 * 
 * Parent Class: PlayerCapabilities
 */
f.allowFlying.PlayerCapabilities = "field_75101_c"

f.invulnerable = {}
/** 
 * 
 * 
 * Parent Class: S39PacketPlayerAbilities
 */
f.invulnerable.S39PacketPlayerAbilities = "field_149119_a"
/** 
 * 
 * 
 * Parent Class: C13PacketPlayerAbilities
 */
f.invulnerable.C13PacketPlayerAbilities = "field_149500_a"
/** 
 * 
 * 
 * Parent Class: Entity
 */
f.invulnerable.Entity = "field_83001_bt"

f.state = {}
/** 
 * 
 * 
 * Parent Class: S2BPacketChangeGameState
 */
f.state.S2BPacketChangeGameState = "field_149140_b"
/** 
 * 
 * 
 * Parent Class: BlockWorldState
 */
f.state.BlockWorldState = "field_177514_c"
/** 
 * 
 * 
 * Parent Class: CompiledChunk
 */
f.state.CompiledChunk = "field_178497_g"
/** 
 * 
 * 
 * Parent Class: BlockRailBase$Rail
 */
f.state.BlockRailBase$Rail = "field_180366_e"

/** 
 * 
 * 
 * Parent Class: S2BPacketChangeGameState
 */
f.MESSAGE_NAMES = "field_149142_a"
/** 
 * 
 * 
 * Parent Class: S27PacketExplosion
 */
f.strength = "field_149154_d"
f.affectedBlockPositions = {}
/** 
 * 
 * 
 * Parent Class: S27PacketExplosion
 */
f.affectedBlockPositions.S27PacketExplosion = "field_149155_e"
/** 
 * A list of ChunkPositions of blocks affected by this explosion
 * 
 * Parent Class: Explosion
 */
f.affectedBlockPositions.Explosion = "field_77281_g"

/** 
 * 
 * 
 * Parent Class: S19PacketEntityStatus
 */
f.logicOpcode = "field_149163_b"
f.data = {}
/** 
 * 
 * 
 * Parent Class: S3FPacketCustomPayload
 */
f.data.S3FPacketCustomPayload = "field_149171_b"
/** 
 * 
 * 
 * Parent Class: C17PacketCustomPayload
 */
f.data.C17PacketCustomPayload = "field_149561_c"
/** 
 * 
 * 
 * Parent Class: S21PacketChunkData$Extracted
 */
f.data.S21PacketChunkData$Extracted = "field_150282_a"
/** 
 * 
 * 
 * Parent Class: ExtendedBlockStorage
 */
f.data.ExtendedBlockStorage = "field_177488_d"
/** 
 * 
 * 
 * Parent Class: ChunkPrimer
 */
f.data.ChunkPrimer = "field_177860_a"
/** 
 * The integer value for the tag.
 * 
 * Parent Class: NBTTagInt
 */
f.data.NBTTagInt = "field_74748_a"
/** 
 * The float value for the tag.
 * 
 * Parent Class: NBTTagFloat
 */
f.data.NBTTagFloat = "field_74750_a"
/** 
 * The string value for the tag (cannot be empty).
 * 
 * Parent Class: NBTTagString
 */
f.data.NBTTagString = "field_74751_a"
/** 
 * The short value for the tag.
 * 
 * Parent Class: NBTTagShort
 */
f.data.NBTTagShort = "field_74752_a"
/** 
 * The long value for the tag.
 * 
 * Parent Class: NBTTagLong
 */
f.data.NBTTagLong = "field_74753_a"
/** 
 * The byte array stored in the tag.
 * 
 * Parent Class: NBTTagByteArray
 */
f.data.NBTTagByteArray = "field_74754_a"
/** 
 * The double value for the tag.
 * 
 * Parent Class: NBTTagDouble
 */
f.data.NBTTagDouble = "field_74755_a"
/** 
 * The byte value for the tag.
 * 
 * Parent Class: NBTTagByte
 */
f.data.NBTTagByte = "field_74756_a"
/** 
 * Byte array of data stored in this holder. Possibly a light map or some chunk data. Data is accessed in 4-bit pieces.
 * 
 * Parent Class: NibbleArray
 */
f.data.NibbleArray = "field_76585_a"
/** 
 * 
 * 
 * Parent Class: NibbleArrayReader
 */
f.data.NibbleArrayReader = "field_76689_a"
/** 
 * 
 * 
 * Parent Class: ChunkLoader$AnvilConverterData
 */
f.data.ChunkLoader$AnvilConverterData = "field_76692_f"

f.channel = {}
/** 
 * 
 * 
 * Parent Class: S3FPacketCustomPayload
 */
f.channel.S3FPacketCustomPayload = "field_149172_a"
/** 
 * 
 * 
 * Parent Class: C17PacketCustomPayload
 */
f.channel.C17PacketCustomPayload = "field_149562_a"
/** 
 * The active channel
 * 
 * Parent Class: NetworkManager
 */
f.channel.NetworkManager = "field_150746_k"

f.item = {}
/** 
 * 
 * 
 * Parent Class: S2FPacketSetSlot
 */
f.item.S2FPacketSetSlot = "field_149178_c"
/** 
 * 
 * 
 * Parent Class: ItemStack
 */
f.item.ItemStack = "field_151002_e"

/** 
 * 
 * 
 * Parent Class: S31PacketWindowProperty
 */
f.varIndex = "field_149184_b"
/** 
 * 
 * 
 * Parent Class: S31PacketWindowProperty
 */
f.varValue = "field_149185_c"
/** 
 * 
 * 
 * Parent Class: S34PacketMaps
 */
f.mapId = "field_149191_a"
f.maxPlayers = {}
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
f.maxPlayers.S01PacketJoinGame = "field_149200_f"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse$PlayerCountData
 */
f.maxPlayers.ServerStatusResponse$PlayerCountData = "field_151336_a"
/** 
 * The maximum number of players that can be connected at a time.
 * 
 * Parent Class: ServerConfigurationManager
 */
f.maxPlayers.ServerConfigurationManager = "field_72405_c"
/** 
 * The maximum number of players allowed on the server
 * 
 * Parent Class: RConThreadQuery
 */
f.maxPlayers.RConThreadQuery = "field_72634_j"

f.dimension = {}
/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
f.dimension.S01PacketJoinGame = "field_149202_d"
/** 
 * "Which dimension the player is in (-1 = the Nether
 * 
 * Parent Class: Entity
 */
f.dimension.Entity = "field_71093_bK"
/** 
 * 
 * 
 * Parent Class: WorldInfo
 */
f.dimension.WorldInfo = "field_76105_j"
/** 
 * 
 * 
 * Parent Class: MapData
 */
f.dimension.MapData = "field_76200_c"

/** 
 * 
 * 
 * Parent Class: S01PacketJoinGame
 */
f.hardcoreMode = "field_149204_b"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
f.soundPitch = "field_149214_f"
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
f.soundVolume = "field_149216_e"
f.soundName = {}
/** 
 * 
 * 
 * Parent Class: S29PacketSoundEffect
 */
f.soundName.S29PacketSoundEffect = "field_149219_a"
/** 
 * 
 * 
 * Parent Class: Block$SoundType
 */
f.soundName.Block$SoundType = "field_150501_a"

f.yOffset = {}
/** 
 * 
 * 
 * Parent Class: S2APacketParticles
 */
f.yOffset.S2APacketParticles = "field_149230_f"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
f.yOffset.WorldRenderer = "field_179005_m"

f.zOffset = {}
/** 
 * 
 * 
 * Parent Class: S2APacketParticles
 */
f.zOffset.S2APacketParticles = "field_149231_g"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
f.zOffset.WorldRenderer = "field_179002_n"

f.zCoord = {}
/** 
 * 
 * 
 * Parent Class: S2APacketParticles
 */
f.zCoord.S2APacketParticles = "field_149232_d"
/** 
 * Z coordinate of Vec3D
 * 
 * Parent Class: Vec3
 */
f.zCoord.Vec3 = "field_72449_c"
/** 
 * The z coordinate of this point
 * 
 * Parent Class: PathPoint
 */
f.zCoord.PathPoint = "field_75838_c"
/** 
 * 
 * 
 * Parent Class: NoiseGeneratorImproved
 */
f.zCoord.NoiseGeneratorImproved = "field_76314_c"

f.xOffset = {}
/** 
 * 
 * 
 * Parent Class: S2APacketParticles
 */
f.xOffset.S2APacketParticles = "field_149233_e"
/** 
 * 
 * 
 * Parent Class: WorldRenderer
 */
f.xOffset.WorldRenderer = "field_179004_l"

f.xCoord = {}
/** 
 * 
 * 
 * Parent Class: S2APacketParticles
 */
f.xCoord.S2APacketParticles = "field_149234_b"
/** 
 * X coordinate of Vec3D
 * 
 * Parent Class: Vec3
 */
f.xCoord.Vec3 = "field_72450_a"
/** 
 * The x coordinate of this point
 * 
 * Parent Class: PathPoint
 */
f.xCoord.PathPoint = "field_75839_a"
/** 
 * 
 * 
 * Parent Class: NoiseGeneratorImproved
 */
f.xCoord.NoiseGeneratorImproved = "field_76315_a"

f.yCoord = {}
/** 
 * 
 * 
 * Parent Class: S2APacketParticles
 */
f.yCoord.S2APacketParticles = "field_149235_c"
/** 
 * Y coordinate of Vec3D
 * 
 * Parent Class: Vec3
 */
f.yCoord.Vec3 = "field_72448_b"
/** 
 * The y coordinate of this point
 * 
 * Parent Class: PathPoint
 */
f.yCoord.PathPoint = "field_75837_b"
/** 
 * 
 * 
 * Parent Class: NoiseGeneratorImproved
 */
f.yCoord.NoiseGeneratorImproved = "field_76313_b"

/** 
 * 
 * 
 * Parent Class: S2APacketParticles
 */
f.particleSpeed = "field_149237_h"
/** 
 * 
 * 
 * Parent Class: S2APacketParticles
 */
f.particleCount = "field_149238_i"
/** 
 * If true the sound is played across the server
 * 
 * Parent Class: S28PacketEffect
 */
f.serverWide = "field_149246_f"
/** 
 * can be a block/item id or other depending on the soundtype
 * 
 * Parent Class: S28PacketEffect
 */
f.soundData = "field_149249_b"
/** 
 * 
 * 
 * Parent Class: S28PacketEffect
 */
f.soundType = "field_149251_a"
/** 
 * 
 * 
 * Parent Class: S26PacketMapChunkBulk
 */
f.zPositions = "field_149264_b"
/** 
 * 
 * 
 * Parent Class: S26PacketMapChunkBulk
 */
f.xPositions = "field_149266_a"
/** 
 * 
 * 
 * Parent Class: S26PacketMapChunkBulk
 */
f.isOverworld = "field_149267_h"
f.chunkZ = {}
/** 
 * 
 * 
 * Parent Class: S21PacketChunkData
 */
f.chunkZ.S21PacketChunkData = "field_149282_b"
/** 
 * 
 * 
 * Parent Class: ChunkCache
 */
f.chunkZ.ChunkCache = "field_72816_b"
/** 
 * 
 * 
 * Parent Class: RegionFile$ChunkBuffer
 */
f.chunkZ.RegionFile$ChunkBuffer = "field_76723_c"

f.chunkX = {}
/** 
 * 
 * 
 * Parent Class: S21PacketChunkData
 */
f.chunkX.S21PacketChunkData = "field_149284_a"
/** 
 * 
 * 
 * Parent Class: ChunkCache
 */
f.chunkX.ChunkCache = "field_72818_a"
/** 
 * 
 * 
 * Parent Class: RegionFile$ChunkBuffer
 */
f.chunkX.RegionFile$ChunkBuffer = "field_76722_b"

f.clientTime = {}
/** 
 * 
 * 
 * Parent Class: C01PacketPing
 */
f.clientTime.C01PacketPing = "field_149290_a"
/** 
 * 
 * 
 * Parent Class: S01PacketPong
 */
f.clientTime.S01PacketPong = "field_149293_a"

/** 
 * 
 * 
 * Parent Class: S00PacketServerInfo
 */
f.response = "field_149296_b"
/** 
 * 
 * 
 * Parent Class: C01PacketEncryptionResponse
 */
f.verifyTokenEncrypted = "field_149301_b"
/** 
 * 
 * 
 * Parent Class: C01PacketEncryptionResponse
 */
f.secretKeyEncrypted = "field_149302_a"
f.profile = {}
/** 
 * 
 * 
 * Parent Class: C00PacketLoginStart
 */
f.profile.C00PacketLoginStart = "field_149305_a"
/** 
 * 
 * 
 * Parent Class: S02PacketLoginSuccess
 */
f.profile.S02PacketLoginSuccess = "field_149602_a"
/** 
 * 
 * 
 * Parent Class: NetHandlerPlayClient
 */
f.profile.NetHandlerPlayClient = "field_175107_d"
/** 
 * 
 * 
 * Parent Class: PlayerMenuObject
 */
f.profile.PlayerMenuObject = "field_178668_a"
/** 
 * 
 * 
 * Parent Class: S38PacketPlayerListItem$AddPlayerData
 */
f.profile.S38PacketPlayerListItem$AddPlayerData = "field_179964_d"

f.action = {}
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
f.action.S3EPacketTeams = "field_149314_f"
/** 
 * 
 * 
 * Parent Class: S3CPacketUpdateScore
 */
f.action.S3CPacketUpdateScore = "field_149326_d"
/** 
 * 
 * 
 * Parent Class: C0BPacketEntityAction
 */
f.action.C0BPacketEntityAction = "field_149515_b"
/** 
 * 
 * 
 * Parent Class: C02PacketUseEntity
 */
f.action.C02PacketUseEntity = "field_149566_b"
/** 
 * 
 * 
 * Parent Class: ClickEvent
 */
f.action.ClickEvent = "field_150671_a"
/** 
 * 
 * 
 * Parent Class: HoverEvent
 */
f.action.HoverEvent = "field_150704_a"
/** 
 * 
 * 
 * Parent Class: S38PacketPlayerListItem
 */
f.action.S38PacketPlayerListItem = "field_179770_a"
/** 
 * 
 * 
 * Parent Class: S44PacketWorldBorder
 */
f.action.S44PacketWorldBorder = "field_179795_a"
/** 
 * The EntityAIBase object.
 * 
 * Parent Class: EntityAITasks$EntityAITaskEntry
 */
f.action.EntityAITasks$EntityAITaskEntry = "field_75733_a"

/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
f.friendlyFlags = "field_149315_g"
f.suffix = {}
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
f.suffix.S3EPacketTeams = "field_149316_d"
/** 
 * 
 * 
 * Parent Class: StateMap
 */
f.suffix.StateMap = "field_178141_c"
/** 
 * 
 * 
 * Parent Class: StateMap$Builder
 */
f.suffix.StateMap$Builder = "field_178443_b"

f.players = {}
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
f.players.S3EPacketTeams = "field_149317_e"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse$PlayerCountData
 */
f.players.ServerStatusResponse$PlayerCountData = "field_151335_c"
/** 
 * 
 * 
 * Parent Class: S38PacketPlayerListItem
 */
f.players.S38PacketPlayerListItem = "field_179769_b"
/** 
 * players in the current instance
 * 
 * Parent Class: PlayerManager
 */
f.players.PlayerManager = "field_72699_b"

f.displayName = {}
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
f.displayName.S3EPacketTeams = "field_149318_b"
/** 
 * 
 * 
 * Parent Class: LocalBlockIntercommunication
 */
f.displayName.LocalBlockIntercommunication = "field_175125_b"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement$EnumUsage
 */
f.displayName.VertexFormatElement$EnumUsage = "field_177392_h"
/** 
 * 
 * 
 * Parent Class: VertexFormatElement$EnumType
 */
f.displayName.VertexFormatElement$EnumType = "field_177408_i"
/** 
 * "When this is non-null
 * 
 * Parent Class: NetworkPlayerInfo
 */
f.displayName.NetworkPlayerInfo = "field_178872_h"
/** 
 * 
 * 
 * Parent Class: S38PacketPlayerListItem$AddPlayerData
 */
f.displayName.S38PacketPlayerListItem$AddPlayerData = "field_179965_e"
/** 
 * the displayed name of this save file
 * 
 * Parent Class: SaveFormatComparator
 */
f.displayName.SaveFormatComparator = "field_75795_b"
/** 
 * 
 * 
 * Parent Class: ScoreObjective
 */
f.displayName.ScoreObjective = "field_96683_d"

/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
f.prefix = "field_149319_c"
f.objective = {}
/** 
 * 
 * 
 * Parent Class: S3CPacketUpdateScore
 */
f.objective.S3CPacketUpdateScore = "field_149327_b"
/** 
 * 
 * 
 * Parent Class: ChatComponentScore
 */
f.objective.ChatComponentScore = "field_180000_c"

f.value = {}
/** 
 * 
 * 
 * Parent Class: S3CPacketUpdateScore
 */
f.value.S3CPacketUpdateScore = "field_149328_c"
/** 
 * 
 * 
 * Parent Class: ClickEvent
 */
f.value.ClickEvent = "field_150670_b"
/** 
 * 
 * 
 * Parent Class: HoverEvent
 */
f.value.HoverEvent = "field_150703_b"
/** 
 * 
 * 
 * Parent Class: UserListEntry
 */
f.value.UserListEntry = "field_152642_a"
/** 
 * 
 * 
 * Parent Class: LazyLoadBase
 */
f.value.LazyLoadBase = "field_179283_a"
/** 
 * The value displayed instead of the real score (may be null)
 * 
 * Parent Class: ChatComponentScore
 */
f.value.ChatComponentScore = "field_179998_d"
/** 
 * the value held by the hash at the specified key
 * 
 * Parent Class: LongHashMap$Entry
 */
f.value.LongHashMap$Entry = "field_76148_b"
/** 
 * 
 * 
 * Parent Class: CrashReportCategory$Entry
 */
f.value.CrashReportCategory$Entry = "field_85091_b"

f.foodLevel = {}
/** 
 * 
 * 
 * Parent Class: S06PacketUpdateHealth
 */
f.foodLevel.S06PacketUpdateHealth = "field_149334_b"
/** 
 * The player's food level.
 * 
 * Parent Class: FoodStats
 */
f.foodLevel.FoodStats = "field_75127_a"

/** 
 * 
 * 
 * Parent Class: S06PacketUpdateHealth
 */
f.saturationLevel = "field_149335_c"
f.health = {}
/** 
 * 
 * 
 * Parent Class: S06PacketUpdateHealth
 */
f.health.S06PacketUpdateHealth = "field_149336_a"
/** 
 * 
 * 
 * Parent Class: EntityEnderCrystal
 */
f.health.EntityEnderCrystal = "field_70260_b"
/** 
 * "The health of this EntityItem. (For example
 * 
 * Parent Class: EntityItem
 */
f.health.EntityItem = "field_70291_e"
/** 
 * 
 * 
 * Parent Class: CombatEntry
 */
f.health.CombatEntry = "field_94565_d"
/** 
 * 
 * 
 * Parent Class: IScoreObjectiveCriteria
 */
f.health.IScoreObjectiveCriteria = "field_96638_f"

/** 
 * 
 * 
 * Parent Class: S3BPacketScoreboardObjective
 */
f.objectiveValue = "field_149341_b"
/** 
 * 
 * 
 * Parent Class: S3BPacketScoreboardObjective
 */
f.objectiveName = "field_149343_a"
f.lines = {}
/** 
 * 
 * 
 * Parent Class: S33PacketUpdateSign
 */
f.lines.S33PacketUpdateSign = "field_149349_d"
/** 
 * 
 * 
 * Parent Class: C12PacketUpdateSign
 */
f.lines.C12PacketUpdateSign = "field_149590_d"

/** 
 * 
 * 
 * Parent Class: S0DPacketCollectItem
 */
f.collectedItemEntityId = "field_149357_a"
f.worldTime = {}
/** 
 * 
 * 
 * Parent Class: S03PacketTimeUpdate
 */
f.worldTime.S03PacketTimeUpdate = "field_149368_b"
/** 
 * "The current world time in ticks
 * 
 * Parent Class: WorldInfo
 */
f.worldTime.WorldInfo = "field_76094_f"

/** 
 * 
 * 
 * Parent Class: S03PacketTimeUpdate
 */
f.totalWorldTime = "field_149369_a"
/** 
 * 
 * 
 * Parent Class: S3DPacketDisplayScoreboard
 */
f.scoreName = "field_149373_b"
f.position = {}
/** 
 * 
 * 
 * Parent Class: S3DPacketDisplayScoreboard
 */
f.position.S3DPacketDisplayScoreboard = "field_149374_a"
/** 
 * 
 * 
 * Parent Class: BlockWorkbench$InterfaceCraftingTable
 */
f.position.BlockWorkbench$InterfaceCraftingTable = "field_175127_b"
/** 
 * 
 * 
 * Parent Class: BlockAnvil$Anvil
 */
f.position.BlockAnvil$Anvil = "field_175129_b"
/** 
 * 
 * 
 * Parent Class: RegionRenderCache
 */
f.position.RegionRenderCache = "field_175633_g"
/** 
 * 
 * 
 * Parent Class: ContainerEnchantment
 */
f.position.ContainerEnchantment = "field_178150_j"
/** 
 * 
 * 
 * Parent Class: RenderChunk
 */
f.position.RenderChunk = "field_178586_f"
/** 
 * 
 * 
 * Parent Class: ActiveRenderInfo
 */
f.position.ActiveRenderInfo = "field_178811_e"
/** 
 * 
 * 
 * Parent Class: C07PacketPlayerDigging
 */
f.position.C07PacketPlayerDigging = "field_179717_a"
/** 
 * 
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
f.position.C08PacketPlayerBlockPlacement = "field_179725_b"
/** 
 * 
 * 
 * Parent Class: S25PacketBlockBreakAnim
 */
f.position.S25PacketBlockBreakAnim = "field_179822_b"
/** 
 * 
 * 
 * Parent Class: S10PacketSpawnPainting
 */
f.position.S10PacketSpawnPainting = "field_179838_b"
/** 
 * 
 * 
 * Parent Class: DestroyBlockProgress
 */
f.position.DestroyBlockProgress = "field_180247_b"
/** 
 * 
 * 
 * Parent Class: NextTickListEntry
 */
f.position.NextTickListEntry = "field_180282_a"
/** 
 * 
 * 
 * Parent Class: BlockEventData
 */
f.position.BlockEventData = "field_180329_a"

/** 
 * 
 * 
 * Parent Class: S09PacketHeldItemChange
 */
f.heldItemHotbarIndex = "field_149387_a"
/** 
 * 
 * 
 * Parent Class: S04PacketEntityEquipment
 */
f.equipmentSlot = "field_149392_b"
f.itemStack = {}
/** 
 * 
 * 
 * Parent Class: S04PacketEntityEquipment
 */
f.itemStack.S04PacketEntityEquipment = "field_149393_c"
/** 
 * 
 * 
 * Parent Class: InventoryPlayer
 */
f.itemStack.InventoryPlayer = "field_70457_g"

/** 
 * 
 * 
 * Parent Class: S1FPacketSetExperience
 */
f.totalExperience = "field_149399_b"
/** 
 * 
 * 
 * Parent Class: S1FPacketSetExperience
 */
f.level = "field_149400_c"
/** 
 * 
 * 
 * Parent Class: S1BPacketEntityAttach
 */
f.vehicleEntityId = "field_149407_c"
/** 
 * 
 * 
 * Parent Class: S1BPacketEntityAttach
 */
f.leash = "field_149408_a"
f.motionZ = {}
/** 
 * 
 * 
 * Parent Class: S12PacketEntityVelocity
 */
f.motionZ.S12PacketEntityVelocity = "field_149414_d"
/** 
 * Entity motion Z
 * 
 * Parent Class: Entity
 */
f.motionZ.Entity = "field_70179_y"
/** 
 * 
 * 
 * Parent Class: EntityTrackerEntry
 */
f.motionZ.EntityTrackerEntry = "field_73135_l"

f.motionX = {}
/** 
 * 
 * 
 * Parent Class: S12PacketEntityVelocity
 */
f.motionX.S12PacketEntityVelocity = "field_149415_b"
/** 
 * Entity motion X
 * 
 * Parent Class: Entity
 */
f.motionX.Entity = "field_70159_w"

f.motionY = {}
/** 
 * 
 * 
 * Parent Class: S12PacketEntityVelocity
 */
f.motionY.S12PacketEntityVelocity = "field_149416_c"
/** 
 * Entity motion Y
 * 
 * Parent Class: Entity
 */
f.motionY.Entity = "field_70181_x"

f.duration = {}
/** 
 * 
 * 
 * Parent Class: S1DPacketEntityEffect
 */
f.duration.S1DPacketEntityEffect = "field_149431_d"
/** 
 * 
 * 
 * Parent Class: EntityRabbit$EnumMoveType
 */
f.duration.EntityRabbit$EnumMoveType = "field_180084_h"
/** 
 * The duration of the potion effect
 * 
 * Parent Class: PotionEffect
 */
f.duration.PotionEffect = "field_76460_b"

f.amplifier = {}
/** 
 * 
 * 
 * Parent Class: S1DPacketEntityEffect
 */
f.amplifier.S1DPacketEntityEffect = "field_149433_c"
/** 
 * The amplifier of the potion effect
 * 
 * Parent Class: PotionEffect
 */
f.amplifier.PotionEffect = "field_76461_c"

f.status = {}
/** 
 * 
 * 
 * Parent Class: C16PacketClientStatus
 */
f.status.C16PacketClientStatus = "field_149437_a"
/** 
 * "Status of the digging (started
 * 
 * Parent Class: C07PacketPlayerDigging
 */
f.status.C07PacketPlayerDigging = "field_149508_e"
/** 
 * 
 * 
 * Parent Class: ChunkCompileTaskGenerator
 */
f.status.ChunkCompileTaskGenerator = "field_178548_g"
/** 
 * 
 * 
 * Parent Class: C19PacketResourcePackStatus
 */
f.status.C19PacketResourcePackStatus = "field_179719_b"

f.key = {}
/** 
 * 
 * 
 * Parent Class: C00PacketKeepAlive
 */
f.key.C00PacketKeepAlive = "field_149461_a"
/** 
 * 
 * 
 * Parent Class: ChatComponentTranslation
 */
f.key.ChatComponentTranslation = "field_150276_d"
/** 
 * the key as a long (for playerInstances it is the x in the most significant 32 bits and then y)
 * 
 * Parent Class: LongHashMap$Entry
 */
f.key.LongHashMap$Entry = "field_76150_a"
/** 
 * 
 * 
 * Parent Class: CrashReportCategory$Entry
 */
f.key.CrashReportCategory$Entry = "field_85092_a"

f.onGround = {}
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
f.onGround.C03PacketPlayer = "field_149474_g"
/** 
 * 
 * 
 * Parent Class: S18PacketEntityTeleport
 */
f.onGround.S18PacketEntityTeleport = "field_179698_g"
/** 
 * 
 * 
 * Parent Class: S14PacketEntity
 */
f.onGround.S14PacketEntity = "field_179743_g"
/** 
 * 
 * 
 * Parent Class: EntityTrackerEntry
 */
f.onGround.EntityTrackerEntry = "field_180234_y"
/** 
 * 
 * 
 * Parent Class: Entity
 */
f.onGround.Entity = "field_70122_E"

/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
f.moving = "field_149480_h"
/** 
 * 
 * 
 * Parent Class: C03PacketPlayer
 */
f.rotating = "field_149481_i"
/** 
 * 
 * 
 * Parent Class: C0BPacketEntityAction
 */
f.auxData = "field_149516_c"
/** 
 * 
 * 
 * Parent Class: C15PacketClientSettings
 */
f.enableColors = "field_149526_d"
/** 
 * 
 * 
 * Parent Class: C15PacketClientSettings
 */
f.view = "field_149528_b"
f.chatVisibility = {}
/** 
 * 
 * 
 * Parent Class: C15PacketClientSettings
 */
f.chatVisibility.C15PacketClientSettings = "field_149529_c"
/** 
 * 
 * 
 * Parent Class: EntityPlayer$EnumChatVisibility
 */
f.chatVisibility.EntityPlayer$EnumChatVisibility = "field_151433_e"
/** 
 * 
 * 
 * Parent Class: EntityPlayerMP
 */
f.chatVisibility.EntityPlayerMP = "field_71143_cn"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
f.chatVisibility.GameSettings = "field_74343_n"

/** 
 * 
 * 
 * Parent Class: C15PacketClientSettings
 */
f.lang = "field_149530_a"
/** 
 * 
 * 
 * Parent Class: C0FPacketConfirmTransaction
 */
f.uid = "field_149534_b"
/** 
 * 
 * 
 * Parent Class: C0FPacketConfirmTransaction
 */
f.accepted = "field_149535_c"
/** 
 * 
 * 
 * Parent Class: C11PacketEnchantItem
 */
f.button = "field_149540_b"
f.mode = {}
/** 
 * Inventory operation mode
 * 
 * Parent Class: C0EPacketClickWindow
 */
f.mode.C0EPacketClickWindow = "field_149549_f"
/** 
 * 
 * 
 * Parent Class: GlStateManager$FogState
 */
f.mode.GlStateManager$FogState = "field_179047_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager$CullState
 */
f.mode.GlStateManager$CullState = "field_179053_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager$ColorMaterialState
 */
f.mode.GlStateManager$ColorMaterialState = "field_179190_c"

/** 
 * The item stack present in the slot
 * 
 * Parent Class: C0EPacketClickWindow
 */
f.clickedItem = "field_149551_e"
f.slotId = {}
/** 
 * Id of the clicked slot
 * 
 * Parent Class: C0EPacketClickWindow
 */
f.slotId.C0EPacketClickWindow = "field_149552_b"
/** 
 * 
 * 
 * Parent Class: C09PacketHeldItemChange
 */
f.slotId.C09PacketHeldItemChange = "field_149615_a"
/** 
 * 
 * 
 * Parent Class: C10PacketCreativeInventoryAction
 */
f.slotId.C10PacketCreativeInventoryAction = "field_149629_a"

/** 
 * Button used
 * 
 * Parent Class: C0EPacketClickWindow
 */
f.usedButton = "field_149553_c"
/** 
 * 
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
f.facingX = "field_149577_f"
/** 
 * 
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
f.facingY = "field_149578_g"
/** 
 * 
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
f.placedBlockDirection = "field_149579_d"
f.stack = {}
/** 
 * 
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
f.stack.C08PacketPlayerBlockPlacement = "field_149580_e"
/** 
 * 
 * 
 * Parent Class: C10PacketCreativeInventoryAction
 */
f.stack.C10PacketCreativeInventoryAction = "field_149628_b"

/** 
 * 
 * 
 * Parent Class: C08PacketPlayerBlockPlacement
 */
f.facingZ = "field_149584_h"
/** 
 * 
 * 
 * Parent Class: C00Handshake
 */
f.requestedState = "field_149597_d"
/** 
 * 
 * 
 * Parent Class: C00Handshake
 */
f.ip = "field_149598_b"
/** 
 * 
 * 
 * Parent Class: C00Handshake
 */
f.port = "field_149599_c"
f.protocolVersion = {}
/** 
 * 
 * 
 * Parent Class: C00Handshake
 */
f.protocolVersion.C00Handshake = "field_149600_a"
/** 
 * 
 * 
 * Parent Class: ServerStatusResponse
 */
f.protocolVersion.ServerStatusResponse = "field_151325_c"

/** 
 * 
 * 
 * Parent Class: S01PacketEncryptionRequest
 */
f.publicKey = "field_149610_b"
/** 
 * 
 * 
 * Parent Class: S01PacketEncryptionRequest
 */
f.hashedServerId = "field_149612_a"
/** 
 * 
 * 
 * Parent Class: C0CPacketInput
 */
f.sneaking = "field_149621_d"
/** 
 * "Positive for forward
 * 
 * Parent Class: C0CPacketInput
 */
f.forwardSpeed = "field_149622_b"
/** 
 * 
 * 
 * Parent Class: C0CPacketInput
 */
f.jumping = "field_149623_c"
/** 
 * "Positive for left strafe
 * 
 * Parent Class: C0CPacketInput
 */
f.strafeSpeed = "field_149624_a"
/** 
 * 
 * 
 * Parent Class: S3APacketTabComplete
 */
f.matches = "field_149632_a"
f.minZ = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
f.minZ.Block = "field_149754_D"
/** 
 * 
 * 
 * Parent Class: AxisAlignedBB
 */
f.minZ.AxisAlignedBB = "field_72339_c"
/** 
 * The first z coordinate of a bounding box.
 * 
 * Parent Class: StructureBoundingBox
 */
f.minZ.StructureBoundingBox = "field_78896_c"

f.maxX = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
f.maxX.Block = "field_149755_E"
/** 
 * 
 * 
 * Parent Class: MapData$MapInfo
 */
f.maxX.MapData$MapInfo = "field_176104_g"
/** 
 * 
 * 
 * Parent Class: AxisAlignedBB
 */
f.maxX.AxisAlignedBB = "field_72336_d"
/** 
 * The second x coordinate of a bounding box.
 * 
 * Parent Class: StructureBoundingBox
 */
f.maxX.StructureBoundingBox = "field_78893_d"

f.maxY = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
f.maxY.Block = "field_149756_F"
/** 
 * 
 * 
 * Parent Class: MapData$MapInfo
 */
f.maxY.MapData$MapInfo = "field_176108_h"
/** 
 * 
 * 
 * Parent Class: AxisAlignedBB
 */
f.maxY.AxisAlignedBB = "field_72337_e"
/** 
 * The second y coordinate of a bounding box.
 * 
 * Parent Class: StructureBoundingBox
 */
f.maxY.StructureBoundingBox = "field_78894_e"

f.maxZ = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
f.maxZ.Block = "field_149757_G"
/** 
 * 
 * 
 * Parent Class: AxisAlignedBB
 */
f.maxZ.AxisAlignedBB = "field_72334_f"
/** 
 * The second z coordinate of a bounding box.
 * 
 * Parent Class: StructureBoundingBox
 */
f.maxZ.StructureBoundingBox = "field_78892_f"

/** 
 * true if the Block contains a Tile Entity
 * 
 * Parent Class: Block
 */
f.isBlockContainer = "field_149758_A"
f.minX = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
f.minX.Block = "field_149759_B"
/** 
 * 
 * 
 * Parent Class: MapData$MapInfo
 */
f.minX.MapData$MapInfo = "field_176106_e"
/** 
 * 
 * 
 * Parent Class: AxisAlignedBB
 */
f.minX.AxisAlignedBB = "field_72340_a"
/** 
 * The first x coordinate of a bounding box.
 * 
 * Parent Class: StructureBoundingBox
 */
f.minX.StructureBoundingBox = "field_78897_a"

f.minY = {}
/** 
 * 
 * 
 * Parent Class: Block
 */
f.minY.Block = "field_149760_C"
/** 
 * 
 * 
 * Parent Class: MapData$MapInfo
 */
f.minY.MapData$MapInfo = "field_176103_f"
/** 
 * 
 * 
 * Parent Class: AxisAlignedBB
 */
f.minY.AxisAlignedBB = "field_72338_b"
/** 
 * The first y coordinate of a bounding box.
 * 
 * Parent Class: StructureBoundingBox
 */
f.minY.StructureBoundingBox = "field_78895_b"

/** 
 * Sound of stepping on the block
 * 
 * Parent Class: Block
 */
f.stepSound = "field_149762_H"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.blockParticleGravity = "field_149763_I"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.blockMaterial = "field_149764_J"
/** 
 * Determines how much velocity is maintained while moving on top of this block
 * 
 * Parent Class: Block
 */
f.slipperiness = "field_149765_K"
/** 
 * the wood sound type
 * 
 * Parent Class: Block
 */
f.soundTypeWood = "field_149766_f"
/** 
 * the gravel sound type
 * 
 * Parent Class: Block
 */
f.soundTypeGravel = "field_149767_g"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.soundTypeStone = "field_149769_e"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.blockRegistry = "field_149771_c"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.displayOnCreativeTab = "field_149772_a"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.soundTypeSnow = "field_149773_n"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.soundTypeLadder = "field_149774_o"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.soundTypeCloth = "field_149775_l"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.soundTypeSand = "field_149776_m"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.soundTypeMetal = "field_149777_j"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.soundTypeGlass = "field_149778_k"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.soundTypeGrass = "field_149779_h"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.soundTypePiston = "field_149780_i"
/** 
 * Indicates how much this block can resist explosions
 * 
 * Parent Class: Block
 */
f.blockResistance = "field_149781_w"
/** 
 * Indicates how many hits it takes to break a block.
 * 
 * Parent Class: Block
 */
f.blockHardness = "field_149782_v"
/** 
 * Flag if block should use the brightest neighbor light value as its own
 * 
 * Parent Class: Block
 */
f.useNeighborBrightness = "field_149783_u"
/** 
 * Amount of light emitted
 * 
 * Parent Class: Block
 */
f.lightValue = "field_149784_t"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.translucent = "field_149785_s"
/** 
 * How much light is subtracted for going through this block
 * 
 * Parent Class: Block
 */
f.lightOpacity = "field_149786_r"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.fullBlock = "field_149787_q"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.soundTypeAnvil = "field_149788_p"
/** 
 * Flags whether or not this block is of a type that needs random ticking. Ref-counted by ExtendedBlockStorage in order to broadly cull a chunk from the random chunk update list for efficiency's sake.
 * 
 * Parent Class: Block
 */
f.needsRandomTick = "field_149789_z"
/** 
 * 
 * 
 * Parent Class: Block
 */
f.enableStats = "field_149790_y"
/** 
 * 
 * 
 * Parent Class: BlockDynamicLiquid
 */
f.adjacentSourceBlocks = "field_149815_a"
/** 
 * 
 * 
 * Parent Class: BlockFalling
 */
f.fallInstantly = "field_149832_M"
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
f.flammabilities = "field_149848_b"
/** 
 * 
 * 
 * Parent Class: BlockFire
 */
f.encouragements = "field_149849_a"
/** 
 * 
 * 
 * Parent Class: BlockStem
 */
f.crop = "field_149877_a"
/** 
 * Tells whether the repeater is powered or not
 * 
 * Parent Class: BlockRedstoneDiode
 */
f.isRepeaterPowered = "field_149914_a"
/** 
 * 
 * 
 * Parent Class: BlockFurnace
 */
f.isBurning = "field_149932_b"
/** 
 * 
 * 
 * Parent Class: BlockFurnace
 */
f.keepInventory = "field_149934_M"
/** 
 * Registry for all dispense behaviors.
 * 
 * Parent Class: BlockDispenser
 */
f.dispenseBehaviorRegistry = "field_149943_a"
/** 
 * 
 * 
 * Parent Class: BlockDropper
 */
f.dropBehavior = "field_149947_P"
/** 
 * "0 : Normal chest
 * 
 * Parent Class: BlockChest
 */
f.chestType = "field_149956_a"
/** 
 * 
 * 
 * Parent Class: BlockBreakable
 */
f.ignoreSimilarity = "field_149996_a"
/** 
 * 
 * 
 * Parent Class: BlockButton
 */
f.wooden = "field_150047_a"
f.isPowered = {}
/** 
 * 
 * 
 * Parent Class: BlockRailBase
 */
f.isPowered.BlockRailBase = "field_150053_a"
/** 
 * 
 * 
 * Parent Class: BlockRailBase$Rail
 */
f.isPowered.BlockRailBase$Rail = "field_150656_f"

/** 
 * 
 * 
 * Parent Class: BlockPressurePlate
 */
f.sensitivity = "field_150069_a"
/** 
 * This piston is the sticky one?
 * 
 * Parent Class: BlockPistonBase
 */
f.isSticky = "field_150082_a"
/** 
 * 
 * 
 * Parent Class: BlockPane
 */
f.canDrop = "field_150099_b"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneTorch
 */
f.toggles = "field_150112_b"
f.isOn = {}
/** 
 * 
 * 
 * Parent Class: BlockRedstoneTorch
 */
f.isOn.BlockRedstoneTorch = "field_150113_a"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneLight
 */
f.isOn.BlockRedstoneLight = "field_150171_a"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneOre
 */
f.isOn.BlockRedstoneOre = "field_150187_a"

f.fancyGraphics = {}
/** 
 * 
 * 
 * Parent Class: BlockLeavesBase
 */
f.fancyGraphics.BlockLeavesBase = "field_150121_P"
/** 
 * 
 * 
 * Parent Class: GameSettings
 */
f.fancyGraphics.GameSettings = "field_74347_j"

/** 
 * 
 * 
 * Parent Class: BlockLeaves
 */
f.iconIndex = "field_150127_b"
/** 
 * 
 * 
 * Parent Class: BlockLeaves
 */
f.surroundings = "field_150128_a"
/** 
 * 
 * 
 * Parent Class: BlockStairs
 */
f.modelBlock = "field_150149_b"
/** 
 * 
 * 
 * Parent Class: BlockStairs
 */
f.modelState = "field_150151_M"
/** 
 * 
 * 
 * Parent Class: BlockStairs
 */
f.hasRaytraced = "field_150152_N"
/** 
 * 
 * 
 * Parent Class: BlockStairs
 */
f.rayTracePass = "field_150153_O"
/** 
 * List of blocks to update with redstone.
 * 
 * Parent Class: BlockRedstoneWire
 */
f.blocksNeedingUpdate = "field_150179_b"
/** 
 * 
 * 
 * Parent Class: BlockRedstoneWire
 */
f.canProvidePower = "field_150181_a"
/** 
 * 
 * 
 * Parent Class: ChatStyle
 */
f.strikethrough = "field_150243_f"
/** 
 * 
 * 
 * Parent Class: ChatStyle
 */
f.obfuscated = "field_150244_g"
/** 
 * 
 * 
 * Parent Class: ChatStyle
 */
f.italic = "field_150245_d"
/** 
 * 
 * 
 * Parent Class: ChatStyle
 */
f.underlined = "field_150246_e"
f.color = {}
/** 
 * 
 * 
 * Parent Class: ChatStyle
 */
f.color.ChatStyle = "field_150247_b"
/** 
 * 
 * 
 * Parent Class: GlStateManager$ClearState
 */
f.color.GlStateManager$ClearState = "field_179203_b"
/** 
 * 
 * 
 * Parent Class: S3EPacketTeams
 */
f.color.S3EPacketTeams = "field_179815_f"
/** 
 * 
 * 
 * Parent Class: BiomeGenBase
 */
f.color.BiomeGenBase = "field_76790_z"

/** 
 * 
 * 
 * Parent Class: ChatStyle
 */
f.bold = "field_150248_c"
/** 
 * The parent of this ChatStyle.  Used for looking up values that this instance does not override.
 * 
 * Parent Class: ChatStyle
 */
f.parentStyle = "field_150249_a"
/** 
 * The base of the ChatStyle hierarchy.  All ChatStyle instances are implicitly children of this.
 * 
 * Parent Class: ChatStyle
 */
f.rootStyle = "field_150250_j"
/** 
 * 
 * 
 * Parent Class: ChatStyle
 */
f.chatClickEvent = "field_150251_h"
/** 
 * 
 * 
 * Parent Class: ChatStyle
 */
f.chatHoverEvent = "field_150252_i"
/** 
 * 
 * 
 * Parent Class: ChatComponentStyle
 */
f.style = "field_150263_b"
/** 
 * "The later siblings of this component.  If this component turns the text bold
 * 
 * Parent Class: ChatComponentStyle
 */
f.siblings = "field_150264_a"
f.syncLock = {}
/** 
 * 
 * 
 * Parent Class: ChatComponentTranslation
 */
f.syncLock.ChatComponentTranslation = "field_150274_f"
/** 
 * 
 * 
 * Parent Class: PlayerUsageSnooper
 */
f.syncLock.PlayerUsageSnooper = "field_76476_f"

/** 
 * 
 * 
 * Parent Class: ChatComponentTranslation
 */
f.lastTranslationUpdateTimeInMilliseconds = "field_150275_g"
/** 
 * 
 * 
 * Parent Class: ChatComponentTranslation
 */
f.formatArgs = "field_150277_e"
f.children = {}
/** 
 * "The discrete elements that make up this component.  For example
 * 
 * Parent Class: ChatComponentTranslation
 */
f.children.ChatComponentTranslation = "field_150278_b"
/** 
 * 
 * 
 * Parent Class: CrashReportCategory
 */
f.children.CrashReportCategory = "field_85077_c"

/** 
 * 
 * 
 * Parent Class: ChatComponentTranslation
 */
f.stringVariablePattern = "field_150279_c"
/** 
 * 
 * 
 * Parent Class: S21PacketChunkData$Extracted
 */
f.dataSize = "field_150280_b"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.golden_rail = "field_150318_D"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.detector_rail = "field_150319_E"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.sticky_piston = "field_150320_F"
f.web = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.web.Blocks = "field_150321_G"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.web.Material = "field_151569_G"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.sandstone = "field_150322_A"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.noteblock = "field_150323_B"
f.bed = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.bed.Blocks = "field_150324_C"
/** 
 * 
 * 
 * Parent Class: Items
 */
f.bed.Items = "field_151104_aV"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.wool = "field_150325_L"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.yellow_flower = "field_150327_N"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.red_flower = "field_150328_O"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.tallgrass = "field_150329_H"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.deadbush = "field_150330_I"
f.piston = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.piston.Blocks = "field_150331_J"
/** 
 * Pistons' material.
 * 
 * Parent Class: Material
 */
f.piston.Material = "field_76233_E"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.piston_head = "field_150332_K"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.stone_slab = "field_150333_U"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.double_stone_slab = "field_150334_T"
f.tnt = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.tnt.Blocks = "field_150335_W"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.tnt.Material = "field_151590_u"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.brick_block = "field_150336_V"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.red_mushroom = "field_150337_Q"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.brown_mushroom = "field_150338_P"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.iron_block = "field_150339_S"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.gold_block = "field_150340_R"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.mossy_cobblestone = "field_150341_Y"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.bookshelf = "field_150342_X"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.obsidian = "field_150343_Z"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.planks = "field_150344_f"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.sapling = "field_150345_g"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.dirt = "field_150346_d"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.cobblestone = "field_150347_e"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.stone = "field_150348_b"
f.grass = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.grass.Blocks = "field_150349_c"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.grass.Material = "field_151577_b"

f.air = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.air.Blocks = "field_150350_a"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.air.Material = "field_151579_a"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.gravel = "field_150351_n"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.gold_ore = "field_150352_o"
f.lava = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.lava.Blocks = "field_150353_l"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.lava.Material = "field_151587_i"
/** 
 * 
 * 
 * Parent Class: DamageSource
 */
f.lava.DamageSource = "field_76371_c"

f.sand = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.sand.Blocks = "field_150354_m"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.sand.Material = "field_151595_p"

f.water = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.water.Blocks = "field_150355_j"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.water.Material = "field_151586_h"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.flowing_lava = "field_150356_k"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.bedrock = "field_150357_h"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.flowing_water = "field_150358_i"
f.glass = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.glass.Blocks = "field_150359_w"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.glass.Material = "field_151592_s"
/** 
 * The glass model for the Ender Crystal.
 * 
 * Parent Class: ModelEnderCrystal
 */
f.glass.ModelEnderCrystal = "field_78228_b"

f.sponge = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.sponge.Blocks = "field_150360_v"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.sponge.Material = "field_151583_m"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.leaves2 = "field_150361_u"
f.leaves = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.leaves.Blocks = "field_150362_t"
/** 
 * 
 * 
 * Parent Class: ItemLeaves
 */
f.leaves.ItemLeaves = "field_150940_b"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.leaves.Material = "field_151584_j"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.log2 = "field_150363_s"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.log = "field_150364_r"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.coal_ore = "field_150365_q"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.iron_ore = "field_150366_p"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.dispenser = "field_150367_z"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.lapis_block = "field_150368_y"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.lapis_ore = "field_150369_x"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.quartz_stairs = "field_150370_cb"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.quartz_block = "field_150371_ca"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.sandstone_stairs = "field_150372_bz"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.double_wooden_slab = "field_150373_bw"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.lit_redstone_lamp = "field_150374_bv"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.cocoa = "field_150375_by"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.wooden_slab = "field_150376_bx"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.end_stone = "field_150377_bs"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.end_portal_frame = "field_150378_br"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.redstone_lamp = "field_150379_bu"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.dragon_egg = "field_150380_bt"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.enchanting_table = "field_150381_bn"
f.brewing_stand = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.brewing_stand.Blocks = "field_150382_bo"
/** 
 * 
 * 
 * Parent Class: Items
 */
f.brewing_stand.Items = "field_151067_bt"

f.cauldron = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.cauldron.Blocks = "field_150383_bp"
/** 
 * 
 * 
 * Parent Class: Items
 */
f.cauldron.Items = "field_151066_bu"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.end_portal = "field_150384_bq"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.nether_brick = "field_150385_bj"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.nether_brick_fence = "field_150386_bk"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.nether_brick_stairs = "field_150387_bl"
f.nether_wart = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.nether_wart.Blocks = "field_150388_bm"
/** 
 * 
 * 
 * Parent Class: Items
 */
f.nether_wart.Items = "field_151075_bm"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.brick_stairs = "field_150389_bf"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.stone_brick_stairs = "field_150390_bg"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.mycelium = "field_150391_bh"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.waterlily = "field_150392_bi"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.pumpkin_stem = "field_150393_bb"
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.melon_stem = "field_150394_bc"
f.vine = {}
/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.vine.Blocks = "field_150395_bd"
/** 
 * 
 * 
 * Parent Class: Material
 */
f.vine.Material = "field_151582_l"

/** 
 * 
 * 
 * Parent Class: Blocks
 */
f.stained_glass_pane = "field_150397_co"
/** 
