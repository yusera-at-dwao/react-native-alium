
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAliumSpec.h"

@interface Alium : NSObject <NativeAliumSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Alium : NSObject <RCTBridgeModule>
#endif

@end
