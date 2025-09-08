// 多语言支持
let currentLanguage = 'zh-CN';
let translations = {};

// 游戏数据配置 - 20个高质量游戏
const gamesData = {
    slither: {
        title: 'Slither.io',
        description: 'Slither.io是一款风靡全球的多人在线贪吃蛇游戏。控制你的蛇吃食物来成长，但要小心不要撞到其他蛇！游戏支持全球玩家同时在线，考验你的反应速度和策略思维。',
        controls: [
            '使用鼠标移动控制蛇的方向',
            '点击鼠标加速移动',
            '避免撞到其他蛇或墙壁',
            '吃掉食物和光点来增长身体'
        ],
        tips: [
            '开始时保持小体型，寻找落单的玩家',
            '利用大蛇的惯性，在它们转弯时进行攻击',
            '不要贪心，安全第一',
            '观察地图边缘，利用边界保护自己'
        ],
        iframe: 'https://slither.io/',
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
        category: 'action',
        tags: ['多人', '休闲', '贪吃蛇', '在线游戏'],
        stats: {
            playCount: 3200000,
            likes: 220000,
            rating: 4.5
        }
    },
    agar: {
        title: 'Agar.io',
        description: 'Agar.io是一款经典的吞噬类多人在线游戏。控制你的细胞吞噬其他小细胞来成长，但要小心被更大的细胞吞噬。游戏支持全球玩家同时在线对战。',
        controls: [
            '使用鼠标移动控制细胞方向',
            '点击鼠标分裂细胞（需要足够大小）',
            '按空格键喷射质量',
            '避免被更大的细胞吞噬'
        ],
        tips: [
            '开始时多吃小点，快速成长',
            '分裂时要确保安全，避免被其他玩家攻击',
            '利用喷射功能帮助队友或逃脱危险',
            '观察地图，寻找合适的攻击目标'
        ],
        iframe: 'https://agar.io/',
        stats: {
            playCount: 2800000,
            likes: 190000,
            rating: 4.4
        }
    },
    '2048': {
        title: '2048',
        description: '2048是一款经典的数字益智游戏。通过滑动方块来合并相同数字，目标是创造出2048这个数字。游戏简单易上手，但需要策略思维。',
        controls: [
            '使用方向键或WASD控制方块移动',
            '相同数字的方块会合并',
            '每次移动后会生成新的方块',
            '目标是创造出2048方块'
        ],
        tips: [
            '保持最大的数字在角落',
            '不要随意移动，要有策略',
            '优先合并较小的数字',
            '保持棋盘整洁，避免混乱'
        ],
        iframe: 'https://play2048.co/',
        stats: {
            playCount: 1500000,
            likes: 95000,
            rating: 4.3
        }
    },
    tetris: {
        title: '俄罗斯方块',
        description: '俄罗斯方块是经典的方块消除游戏。控制下落的方块，填满整行来消除并获得分数。游戏考验你的反应速度和空间思维能力。',
        controls: [
            '使用方向键控制方块移动和旋转',
            '下键加速方块下落',
            '空格键瞬间下落',
            '填满整行即可消除'
        ],
        tips: [
            '保持游戏区域整洁',
            '优先消除底部的行',
            '学会使用旋转功能',
            '预判方块的最佳位置'
        ],
        iframe: 'https://tetris.com/play-tetris',
        stats: {
            playCount: 2000000,
            likes: 140000,
            rating: 4.7
        }
    },
    pacman: {
        title: '吃豆人',
        description: '吃豆人是经典的街机游戏。控制吃豆人在迷宫中收集豆子，同时躲避幽灵。收集能量豆后可以反击幽灵。',
        controls: [
            '使用方向键控制吃豆人移动',
            '收集迷宫中的豆子',
            '躲避红色幽灵',
            '收集能量豆后可以吃幽灵'
        ],
        tips: [
            '记住幽灵的移动模式',
            '合理利用能量豆的时间',
            '优先收集角落的豆子',
            '观察幽灵的颜色变化'
        ],
        iframe: 'https://www.google.com/logos/2010/pacman10-i.html',
        stats: {
            playCount: 1800000,
            likes: 120000,
            rating: 4.6
        }
    },
    snake: {
        title: '贪吃蛇',
        description: '贪吃蛇是经典的手机游戏。控制蛇吃食物来成长，但要小心不要撞到自己的身体或墙壁。游戏简单但充满挑战。',
        controls: [
            '使用方向键控制蛇的移动方向',
            '吃到食物后蛇会变长',
            '避免撞到自己的身体',
            '避免撞到墙壁'
        ],
        tips: [
            '保持蛇的移动节奏',
            '不要贪心，安全第一',
            '利用墙壁来转弯',
            '预判蛇头的位置'
        ],
        iframe: 'https://snake.io/',
        stats: {
            playCount: 1100000,
            likes: 78000,
            rating: 4.1
        }
    },
    minesweeper: {
        title: '扫雷',
        description: '扫雷是经典的逻辑推理游戏。通过数字提示找出所有地雷的位置，考验你的逻辑思维和推理能力。',
        controls: [
            '左键点击翻开格子',
            '右键标记地雷',
            '双击快速翻开周围格子',
            '找出所有地雷即可获胜'
        ],
        tips: [
            '从数字1开始分析',
            '利用数字的相互关系',
            '不要盲目猜测',
            '保持冷静和耐心'
        ],
        iframe: 'https://minesweeper.online/',
        stats: {
            playCount: 850000,
            likes: 62000,
            rating: 4.0
        }
    },
    sudoku: {
        title: '数独',
        description: '数独是经典的数字逻辑游戏。在9x9的格子中填入数字1-9，使每行、每列和每个3x3宫格都包含1-9的数字。',
        controls: [
            '点击格子选择位置',
            '输入数字1-9',
            '使用提示功能',
            '完成所有格子即可获胜'
        ],
        tips: [
            '从已知数字最多的行或列开始',
            '利用排除法',
            '注意每个宫格的限制',
            '保持耐心，逐步推理'
        ],
        iframe: 'https://sudoku.com/',
        stats: {
            playCount: 1200000,
            likes: 85000,
            rating: 4.2
        }
    },
    wordle: {
        title: 'Wordle',
        description: 'Wordle是风靡全球的单词猜谜游戏。在6次机会内猜出5个字母的单词，通过颜色提示来推理正确答案。',
        controls: [
            '输入5个字母的单词',
            '按回车键提交',
            '根据颜色提示调整',
            '在6次内猜出正确答案'
        ],
        tips: [
            '选择包含常见字母的单词开始',
            '注意绿色、黄色、灰色的含义',
            '利用已确定的字母位置',
            '避免重复使用已排除的字母'
        ],
        iframe: 'https://www.nytimes.com/games/wordle/index.html',
        stats: {
            playCount: 1600000,
            likes: 110000,
            rating: 4.4
        }
    },
    flappy: {
        title: 'Flappy Bird',
        description: 'Flappy Bird是经典的飞行躲避游戏。控制小鸟飞行，避开管道障碍，挑战你的反应速度和手眼协调能力。',
        controls: [
            '点击屏幕或按空格键让小鸟飞行',
            '避开绿色管道',
            '尽可能飞得更远',
            '挑战最高分数'
        ],
        tips: [
            '保持稳定的点击节奏',
            '不要过度点击',
            '观察管道的间距',
            '保持冷静，不要急躁'
        ],
        iframe: 'https://flappybird.io/',
        stats: {
            playCount: 1250000,
            likes: 89000,
            rating: 4.2
        }
    },
    amongus: {
        title: 'Among Us',
        description: 'Among Us是一款风靡全球的多人社交推理游戏。玩家需要合作完成任务，但其中隐藏着试图破坏任务的冒牌货。考验你的推理能力和演技。',
        controls: [
            '使用WASD键移动角色',
            '点击与物品互动',
            '使用紧急按钮召集会议',
            '投票淘汰可疑的冒牌货'
        ],
        tips: [
            '仔细观察其他玩家的行为模式',
            '建立可信的不在场证明',
            '善用监控摄像头收集证据',
            '在会议中有效表达自己的观点'
        ],
        iframe: 'https://amongus.io/',
        stats: {
            playCount: 2500000,
            likes: 180000,
            rating: 4.6
        }
    },
    fallguys: {
        title: 'Fall Guys',
        description: 'Fall Guys是一款充满欢乐的多人竞技游戏。60名玩家在色彩缤纷的迷你游戏中展开激烈竞争，最后幸存者将获得胜利王冠。',
        controls: [
            '使用WASD键控制角色移动',
            '长按Shift键加速奔跑',
            '鼠标控制视角方向',
            '抓取和拖拽各种道具'
        ],
        tips: [
            '尽量保持在平台中央位置',
            '避开人群密集的区域',
            '巧妙利用障碍物阻挡对手',
            '保持耐心，等待最佳时机'
        ],
        iframe: 'https://fallguys.io/',
        stats: {
            playCount: 1800000,
            likes: 120000,
            rating: 4.4
        }
    },
    skribbl: {
        title: 'Skribbl.io',
        description: 'Skribbl.io是一款创意十足的在线猜词绘画游戏。玩家轮流绘画，其他人根据画作猜测词语。考验你的绘画技巧和词汇量。',
        controls: [
            '鼠标绘画，选择不同颜色',
            '输入猜测的词语',
            '使用聊天功能交流',
            '投票选择最佳画作'
        ],
        tips: [
            '绘画要简洁明了',
            '善用颜色和形状表达',
            '观察其他玩家的绘画风格',
            '保持创意和幽默感'
        ],
        iframe: 'https://skribbl.io/',
        stats: {
            playCount: 950000,
            likes: 67000,
            rating: 4.1
        }
    },
    krunker: {
        title: 'Krunker.io',
        description: 'Krunker.io是一款快节奏的在线第一人称射击游戏。在像素风格的战场上与其他玩家展开激烈对战，体验流畅的射击快感。',
        controls: [
            'WASD键移动，鼠标瞄准射击',
            '空格键跳跃，Shift键奔跑',
            '数字键切换武器',
            'R键重新装弹'
        ],
        tips: [
            '掌握移动和射击的节奏',
            '善用地形优势',
            '注意弹药管理',
            '团队配合获得胜利'
        ],
        iframe: 'https://krunker.io/',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=center',
        category: 'action',
        tags: ['射击', '动作', '多人', 'FPS'],
        stats: {
            playCount: 2100000,
            likes: 150000,
            rating: 4.3
        }
    },
    // 新增最新热门游戏
    wordle: {
        title: 'Wordle',
        description: 'Wordle是风靡全球的单词猜谜游戏。在6次机会内猜出5个字母的单词，通过颜色提示来推理正确答案。每天都有新的挑战等待你！',
        controls: [
            '输入5个字母的单词',
            '按回车键提交',
            '根据颜色提示调整',
            '在6次内猜出正确答案'
        ],
        tips: [
            '选择包含常见字母的单词开始',
            '注意绿色、黄色、灰色的含义',
            '利用已确定的字母位置',
            '避免重复使用已排除的字母'
        ],
        iframe: 'https://www.nytimes.com/games/wordle/index.html',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
        category: 'puzzle',
        tags: ['单词', '推理', '益智', '每日挑战'],
        stats: {
            playCount: 1600000,
            likes: 110000,
            rating: 4.4
        }
    },
    '2048': {
        title: '2048',
        description: '2048是一款经典的数字益智游戏。通过滑动方块来合并相同数字，目标是创造出2048这个数字。游戏简单易上手，但需要策略思维。',
        controls: [
            '使用方向键或WASD控制方块移动',
            '相同数字的方块会合并',
            '每次移动后会生成新的方块',
            '目标是创造出2048方块'
        ],
        tips: [
            '保持最大的数字在角落',
            '不要随意移动，要有策略',
            '优先合并较小的数字',
            '保持棋盘整洁，避免混乱'
        ],
        iframe: 'https://play2048.co/',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'puzzle',
        tags: ['益智', '数字', '策略', '经典'],
        stats: {
            playCount: 1500000,
            likes: 95000,
            rating: 4.3
        }
    },
    tetris: {
        title: '俄罗斯方块',
        description: '俄罗斯方块是经典的方块消除游戏。控制下落的方块，填满整行来消除并获得分数。游戏考验你的反应速度和空间思维能力。',
        controls: [
            '使用方向键控制方块移动和旋转',
            '下键加速方块下落',
            '空格键瞬间下落',
            '填满整行即可消除'
        ],
        tips: [
            '保持游戏区域整洁',
            '优先消除底部的行',
            '学会使用旋转功能',
            '预判方块的最佳位置'
        ],
        iframe: 'https://tetris.com/play-tetris',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'puzzle',
        tags: ['经典', '益智', '方块', '消除'],
        stats: {
            playCount: 2000000,
            likes: 140000,
            rating: 4.7
        }
    },
    snake: {
        title: '贪吃蛇',
        description: '贪吃蛇是经典的手机游戏。控制蛇吃食物来成长，但要小心不要撞到自己的身体或墙壁。游戏简单但充满挑战。',
        controls: [
            '使用方向键控制蛇的移动方向',
            '吃到食物后蛇会变长',
            '避免撞到自己的身体',
            '避免撞到墙壁'
        ],
        tips: [
            '保持蛇的移动节奏',
            '不要贪心，安全第一',
            '利用墙壁来转弯',
            '预判蛇头的位置'
        ],
        iframe: 'https://snake.io/',
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
        category: 'casual',
        tags: ['经典', '休闲', '贪吃蛇', '简单'],
        stats: {
            playCount: 1100000,
            likes: 78000,
            rating: 4.1
        }
    },
    pacman: {
        title: '吃豆人',
        description: '吃豆人是经典的街机游戏。控制吃豆人在迷宫中收集豆子，同时躲避幽灵。收集能量豆后可以反击幽灵。',
        controls: [
            '使用方向键控制吃豆人移动',
            '收集迷宫中的豆子',
            '躲避红色幽灵',
            '收集能量豆后可以吃幽灵'
        ],
        tips: [
            '记住幽灵的移动模式',
            '合理利用能量豆的时间',
            '优先收集角落的豆子',
            '观察幽灵的颜色变化'
        ],
        iframe: 'https://www.google.com/logos/2010/pacman10-i.html',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
        category: 'action',
        tags: ['经典', '街机', '迷宫', '怀旧'],
        stats: {
            playCount: 1800000,
            likes: 120000,
            rating: 4.6
        }
    },
    minesweeper: {
        title: '扫雷',
        description: '扫雷是经典的逻辑推理游戏。通过数字提示找出所有地雷的位置，考验你的逻辑思维和推理能力。',
        controls: [
            '左键点击翻开格子',
            '右键标记地雷',
            '双击快速翻开周围格子',
            '找出所有地雷即可获胜'
        ],
        tips: [
            '从数字1开始分析',
            '利用数字的相互关系',
            '不要盲目猜测',
            '保持冷静和耐心'
        ],
        iframe: 'https://minesweeper.online/',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'puzzle',
        tags: ['逻辑', '推理', '经典', '策略'],
        stats: {
            playCount: 850000,
            likes: 62000,
            rating: 4.0
        }
    },
    sudoku: {
        title: '数独',
        description: '数独是经典的数字逻辑游戏。在9x9的格子中填入数字1-9，使每行、每列和每个3x3宫格都包含1-9的数字。',
        controls: [
            '点击格子选择位置',
            '输入数字1-9',
            '使用提示功能',
            '完成所有格子即可获胜'
        ],
        tips: [
            '从已知数字最多的行或列开始',
            '利用排除法',
            '注意每个宫格的限制',
            '保持耐心，逐步推理'
        ],
        iframe: 'https://sudoku.com/',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'puzzle',
        tags: ['逻辑', '数字', '推理', '益智'],
        stats: {
            playCount: 1200000,
            likes: 85000,
            rating: 4.2
        }
    },
    flappy: {
        title: 'Flappy Bird',
        description: 'Flappy Bird是经典的飞行躲避游戏。控制小鸟飞行，避开管道障碍，挑战你的反应速度和手眼协调能力。',
        controls: [
            '点击屏幕或按空格键让小鸟飞行',
            '避开绿色管道',
            '尽可能飞得更远',
            '挑战最高分数'
        ],
        tips: [
            '保持稳定的点击节奏',
            '不要过度点击',
            '观察管道的间距',
            '保持冷静，不要急躁'
        ],
        iframe: 'https://flappybird.io/',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
        category: 'action',
        tags: ['动作', '反应', '飞行', '挑战'],
        stats: {
            playCount: 1250000,
            likes: 89000,
            rating: 4.2
        }
    },
    // 最新热门游戏
    skribbl: {
        title: 'Skribbl.io',
        description: 'Skribbl.io是一款创意十足的在线猜词绘画游戏。玩家轮流绘画，其他人根据画作猜测词语。考验你的绘画技巧和词汇量。',
        controls: [
            '鼠标绘画，选择不同颜色',
            '输入猜测的词语',
            '使用聊天功能交流',
            '投票选择最佳画作'
        ],
        tips: [
            '绘画要简洁明了',
            '善用颜色和形状表达',
            '观察其他玩家的绘画风格',
            '保持创意和幽默感'
        ],
        iframe: 'https://skribbl.io/',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
        category: 'social',
        tags: ['创意', '社交', '绘画', '猜词'],
        stats: {
            playCount: 950000,
            likes: 67000,
            rating: 4.1
        }
    },
    amongus: {
        title: 'Among Us',
        description: 'Among Us是一款风靡全球的多人社交推理游戏。玩家需要合作完成任务，但其中隐藏着试图破坏任务的冒牌货。考验你的推理能力和演技。',
        controls: [
            '使用WASD键移动角色',
            '点击与物品互动',
            '使用紧急按钮召集会议',
            '投票淘汰可疑的冒牌货'
        ],
        tips: [
            '仔细观察其他玩家的行为模式',
            '建立可信的不在场证明',
            '善用监控摄像头收集证据',
            '在会议中有效表达自己的观点'
        ],
        iframe: 'https://amongus.io/',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=center',
        category: 'social',
        tags: ['多人', '社交', '推理', '策略'],
        stats: {
            playCount: 2500000,
            likes: 180000,
            rating: 4.6
        }
    },
    fallguys: {
        title: 'Fall Guys',
        description: 'Fall Guys是一款充满欢乐的多人竞技游戏。60名玩家在色彩缤纷的迷你游戏中展开激烈竞争，最后幸存者将获得胜利王冠。',
        controls: [
            '使用WASD键控制角色移动',
            '长按Shift键加速奔跑',
            '鼠标控制视角方向',
            '抓取和拖拽各种道具'
        ],
        tips: [
            '尽量保持在平台中央位置',
            '避开人群密集的区域',
            '巧妙利用障碍物阻挡对手',
            '保持耐心，等待最佳时机'
        ],
        iframe: 'https://fallguys.io/',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
        category: 'action',
        tags: ['多人', '竞技', '休闲', '欢乐'],
        stats: {
            playCount: 1800000,
            likes: 120000,
            rating: 4.4
        }
    },
    // 新增游戏
    chess: {
        title: '国际象棋',
        description: '国际象棋是经典的策略棋类游戏。在8x8的棋盘上，使用不同的棋子与对手展开智力对决。考验你的策略思维和预判能力。',
        controls: [
            '点击棋子选择，再点击目标位置移动',
            '每种棋子有不同的移动规则',
            '将死对方国王即可获胜',
            '使用特殊规则如王车易位'
        ],
        tips: [
            '控制棋盘中心位置',
            '保护你的国王',
            '发展所有棋子',
            '观察对手的威胁'
        ],
        iframe: 'https://www.chess.com/play/computer',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'strategy',
        tags: ['策略', '棋类', '智力', '经典'],
        stats: {
            playCount: 800000,
            likes: 65000,
            rating: 4.8
        }
    },
    checkers: {
        title: '跳棋',
        description: '跳棋是经典的策略棋类游戏。在棋盘上移动棋子，通过跳跃来吃掉对手的棋子。简单易学但充满策略深度。',
        controls: [
            '点击棋子选择，再点击目标位置移动',
            '只能向前移动，不能后退',
            '跳跃吃掉对手棋子',
            '到达对方底线可升级为王'
        ],
        tips: [
            '控制棋盘中心',
            '保护重要棋子',
            '寻找跳跃机会',
            '避免被对手包围'
        ],
        iframe: 'https://www.247checkers.com/',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'strategy',
        tags: ['策略', '棋类', '简单', '经典'],
        stats: {
            playCount: 600000,
            likes: 45000,
            rating: 4.3
        }
    },
    connect4: {
        title: '四子棋',
        description: '四子棋是经典的策略游戏。在垂直的棋盘上放置棋子，率先连成四个相同颜色棋子的玩家获胜。简单规则，无限策略。',
        controls: [
            '点击列顶部的箭头放置棋子',
            '棋子会落到该列的最底部',
            '轮流放置不同颜色的棋子',
            '连成四个相同颜色棋子获胜'
        ],
        tips: [
            '阻止对手连成四个',
            '同时创造多个获胜机会',
            '控制棋盘中心',
            '观察对手的威胁'
        ],
        iframe: 'https://www.mathsisfun.com/games/connect4.html',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'strategy',
        tags: ['策略', '棋类', '简单', '益智'],
        stats: {
            playCount: 500000,
            likes: 38000,
            rating: 4.2
        }
    },
    tictactoe: {
        title: '井字棋',
        description: '井字棋是最经典的策略游戏之一。在3x3的棋盘上，率先连成三个相同符号的玩家获胜。简单规则，快速游戏。',
        controls: [
            '点击空格放置你的符号',
            '轮流放置X和O',
            '连成三个相同符号获胜',
            '棋盘填满且无人获胜则为平局'
        ],
        tips: [
            '优先占据中心位置',
            '阻止对手获胜',
            '创造多个获胜机会',
            '观察对手的下一步'
        ],
        iframe: 'https://playtictactoe.org/',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'strategy',
        tags: ['策略', '简单', '经典', '快速'],
        stats: {
            playCount: 400000,
            likes: 30000,
            rating: 4.1
        }
    },
    memory: {
        title: '记忆翻牌',
        description: '记忆翻牌是经典的记忆训练游戏。翻开卡片找到相同的图案，训练你的记忆力和注意力。简单有趣，适合所有年龄。',
        controls: [
            '点击卡片翻开',
            '记住卡片的位置和图案',
            '找到两张相同的卡片',
            '清空所有卡片即可获胜'
        ],
        tips: [
            '从角落开始记忆',
            '记住图案的位置',
            '不要急于翻牌',
            '保持专注和耐心'
        ],
        iframe: 'https://www.memozor.com/memory-games/for-kids/memory-game',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'puzzle',
        tags: ['记忆', '益智', '训练', '简单'],
        stats: {
            playCount: 350000,
            likes: 28000,
            rating: 4.0
        }
    },
    solitaire: {
        title: '纸牌接龙',
        description: '纸牌接龙是经典的纸牌游戏。按照规则移动纸牌，将所有纸牌按花色和数字顺序排列。考验你的策略思维和耐心。',
        controls: [
            '拖拽纸牌到合适位置',
            '按红黑交替和数字递减排列',
            '将A到K按花色排列到右上角',
            '使用左上角的牌堆'
        ],
        tips: [
            '优先移动A和2',
            '保持牌堆的灵活性',
            '不要急于使用牌堆',
            '观察所有可能的移动'
        ],
        iframe: 'https://www.solitaire.com/',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'puzzle',
        tags: ['纸牌', '策略', '经典', '单人'],
        stats: {
            playCount: 900000,
            likes: 72000,
            rating: 4.5
        }
    },
    mahjong: {
        title: '麻将连连看',
        description: '麻将连连看是经典的消除游戏。找到相同的麻将牌并消除，清空所有牌面即可获胜。考验你的观察力和策略思维。',
        controls: [
            '点击相同的麻将牌',
            '确保两张牌之间有通路',
            '消除所有牌面获胜',
            '使用提示功能'
        ],
        tips: [
            '从边缘开始消除',
            '优先消除阻挡其他牌的牌',
            '观察牌面的整体布局',
            '合理使用提示功能'
        ],
        iframe: 'https://www.mahjonggtime.com/',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
        category: 'puzzle',
        tags: ['消除', '麻将', '策略', '经典'],
        stats: {
            playCount: 750000,
            likes: 58000,
            rating: 4.4
        }
    },
    breakout: {
        title: '打砖块',
        description: '打砖块是经典的街机游戏。控制挡板反弹小球，击碎所有砖块。简单操作，充满挑战，考验你的反应速度和技巧。',
        controls: [
            '使用鼠标或方向键控制挡板',
            '挡板反弹小球击碎砖块',
            '不要让小球掉落',
            '击碎所有砖块获胜'
        ],
        tips: [
            '控制小球的反弹角度',
            '优先击碎特殊砖块',
            '保持挡板的稳定移动',
            '利用墙壁反弹'
        ],
        iframe: 'https://www.breakout-game.com/',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
        category: 'action',
        tags: ['街机', '动作', '经典', '反应'],
        stats: {
            playCount: 650000,
            likes: 48000,
            rating: 4.3
        }
    }
};

// DOM元素
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const gameModal = document.getElementById('gameModal');
const modalTitle = document.getElementById('modalTitle');
const gameIframe = document.getElementById('gameIframe');
const gameDescription = document.getElementById('gameDescription');
const gameControls = document.getElementById('gameControls');
const gameTips = document.getElementById('gameTips');
const closeModal = document.querySelector('.close');

// 移动端导航切换
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// 点击导航链接时关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// 游戏卡片点击事件
document.querySelectorAll('.game-card').forEach(card => {
    const gameId = card.getAttribute('data-game');
    if (gameId) {
        const playBtn = card.querySelector('.play-btn');
        if (playBtn) {
            playBtn.onclick = function(e) {
                e.stopPropagation();
                openGameDetail(gameId);
            };
        }
    }
});

// 分类卡片点击事件
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        filterGamesByCategory(category);
    });
});

// 打开游戏模态框
function openGameModal(gameId) {
    const game = gamesData[gameId];
    if (!game) return;

    modalTitle.textContent = game.title;
    gameDescription.textContent = game.description;
    gameIframe.src = game.iframe;

    // 更新操作方法
    gameControls.innerHTML = '';
    game.controls.forEach(control => {
        const li = document.createElement('li');
        li.textContent = control;
        gameControls.appendChild(li);
    });

    // 更新游戏攻略
    gameTips.innerHTML = '';
    game.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        gameTips.appendChild(li);
    });

    gameModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeGameModal() {
    gameModal.style.display = 'none';
    gameIframe.src = '';
    document.body.style.overflow = 'auto';
}

// 点击关闭按钮
closeModal.addEventListener('click', closeGameModal);

// 点击模态框外部关闭
gameModal.addEventListener('click', (e) => {
    if (e.target === gameModal) {
        closeGameModal();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && gameModal.style.display === 'block') {
        closeGameModal();
    }
});

// 按分类筛选游戏
function filterGamesByCategory(category) {
    // 这里可以实现按分类筛选游戏的逻辑
    console.log(`筛选分类: ${category}`);
    
    // 滚动到游戏区域
    document.getElementById('featured').scrollIntoView({
        behavior: 'smooth'
    });
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 游戏卡片悬停效果增强
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// 分类卡片悬停效果
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// 新闻卡片点击事件
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', () => {
        // 这里可以添加新闻详情页面的逻辑
        console.log('点击新闻卡片');
    });
});

// 懒加载图片
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// 多语言功能
async function loadTranslations(language) {
    try {
        const response = await fetch(`lang/${language}.json`, { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        translations[language] = await response.json();
    } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
    }
}

function translatePage(language) {
    if (!translations[language]) {
        console.error(`Translations not loaded for ${language}`);
        return;
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[language], key);
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else if (element.hasAttribute('content')) {
                element.setAttribute('content', translation);
            } else {
                element.textContent = translation;
            }
        }
    });

    // 更新HTML lang属性
    document.documentElement.lang = language;
    
    // 更新页面标题
    const titleKey = document.querySelector('title').getAttribute('data-i18n');
    if (titleKey) {
        const titleTranslation = getNestedTranslation(translations[language], titleKey);
        if (titleTranslation) {
            document.title = titleTranslation;
        }
    }
}

function getNestedTranslation(obj, key) {
    return key.split('.').reduce((current, keyPart) => {
        return current && current[keyPart];
    }, obj);
}

function changeLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('preferredLanguage', language);
    translatePage(language);
    
    // 更新游戏数据为当前语言
    updateGamesDataForLanguage(language);
}

function updateGamesDataForLanguage(language) {
    if (!translations[language] || !translations[language].games) return;
    
    const langGames = translations[language].games;
    Object.keys(gamesData).forEach(gameId => {
        if (langGames[gameId]) {
            gamesData[gameId].title = langGames[gameId].title;
            gamesData[gameId].description = langGames[gameId].fullDescription;
            gamesData[gameId].controls = langGames[gameId].controls;
            gamesData[gameId].tips = langGames[gameId].tips;
        }
    });
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', async () => {
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    // 加载多语言支持
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'zh-CN';
    // 仅加载当前语言，避免404导致的报错噪音
    await loadTranslations(savedLanguage);
    
    // 设置初始语言
    changeLanguage(savedLanguage);
    // 尝试加载后台上传的游戏数据
    loadGamesFromAdmin();

    // 同步首页卡片图片为对应游戏图片/占位
    syncCardImagesWithGames();
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 初始化工具提示
    initTooltips();
    
    // 初始化搜索功能
    initSearch();

    // 为首页图片添加加载失败占位图
    initImageFallbacks();
});

// 工具提示功能
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.dataset.tooltip;
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// 搜索功能
function initSearch() {
    // 这里可以添加搜索功能的实现
    console.log('搜索功能已初始化');
}

// 图片加载失败时的占位处理
function initImageFallbacks() {
    const fallbackSmall = 'images/fallback-400x300.png';
    const fallbackHero = 'images/fallback-600x400.png';

    // 游戏卡片与新闻卡片图片
    document.querySelectorAll('.game-image img, .news-image img').forEach(img => {
        img.addEventListener('error', () => {
            if (img.dataset.fallbackApplied) return;
            img.src = fallbackSmall;
            img.dataset.fallbackApplied = '1';
        }, { once: true });
    });

    // 英雄区域预览图
    document.querySelectorAll('.thumb-grid img').forEach(img => {
        img.addEventListener('error', () => {
            if (img.dataset.fallbackApplied) return;
            const perImgFallback = img.dataset.srcFallback || fallbackHero;
            img.src = perImgFallback;
            img.dataset.fallbackApplied = '1';
        }, { once: true });
    });
}

// 根据 gamesData 同步首页卡片图片，确保与上传游戏相关
function syncCardImagesWithGames() {
    const cards = document.querySelectorAll('.games-grid .game-card');
    cards.forEach(card => {
        const gameId = card.getAttribute('data-game');
        const img = card.querySelector('.game-image img');
        const titleEl = card.querySelector('.game-info h3');
        if (!img) return;

        const game = gamesData[gameId];
        const title = (titleEl && titleEl.textContent) || (game && game.title) || gameId || 'Game';
        const placeholder = generateTitlePlaceholder(title);

        // 判断是否为通用占位或与游戏不相关的通用图库
        const currentSrc = (img.getAttribute('src') || '').toLowerCase();
        const looksGeneric = currentSrc.includes('images.unsplash.com') || currentSrc.includes('via.placeholder.com');

        // 优先级：游戏自带 thumbnail > 游戏自带 image > 动态截图(首帧) > 标题占位
        let desiredSrc = '';
        if (game && game.thumbnail) {
            desiredSrc = game.thumbnail;
        } else if (game && game.image) {
            desiredSrc = game.image;
        } else if (game && game.iframe) {
            desiredSrc = buildLiveScreenshotUrl(game.iframe, 400, 300);
        }

        if (desiredSrc) {
            img.src = desiredSrc;
        } else if (looksGeneric || !currentSrc) {
            img.src = placeholder;
        }

        // 设置加载失败时的回退为带标题的占位
        img.addEventListener('error', () => {
            img.src = placeholder;
        }, { once: true });
    });
}

function generateTitlePlaceholder(title) {
    const text = encodeURIComponent(title);
    return `https://via.placeholder.com/400x300/1e293b/ffffff?text=${text}`;
}

// 基于截图服务生成目标 URL 的首帧缩略图（静态站点可用，无需后端）
function buildLiveScreenshotUrl(targetUrl, width = 400, height = 300) {
    // 选择可匿名访问的截图服务（若受限可替换为自有代理）
    // 这里使用 thum.io 简易模式；如需稳定性可改为 screenshotmachine 或自建。
    const encoded = encodeURIComponent(targetUrl);
    return `https://image.thum.io/get/width/${width}/crop/${height}/${encoded}`;
}

// 游戏统计功能
function trackGamePlay(gameId) {
    // 这里可以添加游戏统计逻辑
    console.log(`游戏 ${gameId} 被点击`);
    
    // 发送统计数据到服务器
    if (typeof gtag !== 'undefined') {
        gtag('event', 'game_play', {
            'game_id': gameId,
            'game_name': gamesData[gameId]?.title || 'Unknown'
        });
    }
}

// 更新游戏卡片点击事件以包含统计
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        const gameId = card.getAttribute('data-game');
        trackGamePlay(gameId);
    });
});

// 错误处理
window.addEventListener('error', (e) => {
    console.error('页面错误:', e.error);
});

// 网络状态检测
window.addEventListener('online', () => {
    console.log('网络已连接');
    // 可以显示网络恢复提示
});

window.addEventListener('offline', () => {
    console.log('网络已断开');
    // 可以显示网络断开提示
});

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('页面加载时间:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// 打开游戏详情页
function openGameDetail(gameId) {
    window.location.href = `game-detail.html?game=${gameId}`;
}

// 从后台管理系统加载游戏数据
function loadGamesFromAdmin() {
    const adminData = localStorage.getItem('adminGamesData');
    if (adminData) {
        try {
            const adminGames = JSON.parse(adminData);
            // 合并后台管理的数据到现有游戏数据
            Object.keys(adminGames).forEach(gameId => {
                if (adminGames[gameId]) {
                    gamesData[gameId] = adminGames[gameId];
                }
            });
            console.log('已从后台管理系统加载游戏数据');
        } catch (error) {
            console.error('加载后台游戏数据失败:', error);
        }
    }
}

// 同步游戏数据到后台管理系统
function syncGamesToAdmin() {
    localStorage.setItem('adminGamesData', JSON.stringify(gamesData));
    console.log('游戏数据已同步到后台管理系统');
}

// 导出函数供其他脚本使用
window.Game8Live = {
    openGameModal,
    closeGameModal,
    filterGamesByCategory,
    trackGamePlay,
    gamesData,
    changeLanguage,
    loadTranslations,
    translatePage,
    currentLanguage: () => currentLanguage,
    openGameDetail,
    loadGamesFromAdmin,
    syncGamesToAdmin
};
