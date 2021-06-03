<template>
  <div>
    <Layout>
      <div class="tags">
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div class="new">
          <button>新增标签</button>
        </div>
      </div>
      <div class="notes">
        <label>
          <span class="name">备注</span>
          <input type="text" placeholder="备注信息">
        </label>
      </div>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Money',
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags{
  font-size: 14px;
  padding: 16px;
  background: #e4e9ef;
  > .current{
    display: flex;
    >li{
      background: #d9d9d9;
      height: 24px;
      border-radius: (24px/2);
      padding: 0 16px;
      margin-right: 12px;
    }
  }
  > .new{
    padding-top: 16px;
    button{
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
    }
  }
}

.notes{
  font-size: 14px;
  background: #bea39c;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name{
    padding-right: 16px;
  }

  input{
    height: 64px;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}

.types{
  background: #bdd067;
  display: flex;
  text-align: center;

  > li{
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after{
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
      background-color: #333;
    }
  }
}

.numberPad{
  background: $numberPad-color;
  box-shadow: inset 0 -6px 6px -5px rgba(0,0,0,0.25),
  inset 0 6px 6px -5px rgba(0,0,0,0.25);

  .output{
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    background: #fb9a7f;
  }

  .buttons{
    @extend %clearFix;

    >button{
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      font-size: 16px;
      font-weight: 600;
      border: 1px solid #fff;

      &.ok {
        height: 64*2px;
        float: right;
      }

      // 颜色函数，使某个颜色变暗 百分比
      // darken('#fff',4%);
      &.zero{
        width: 25*2%;
      }
    }
  }
}
</style>
