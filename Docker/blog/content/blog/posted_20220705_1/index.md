---
title: メンテナンスしやすいAnsiblePlaybookの書き方
date: "2022-07-06T11:29"
description: "メンテナンスしやすいAnsiblePlaybookの書き方"
---

このページでは、保守的な Playbook の書き方、冪等性などをしっかりと考慮した Playbook や tips を紹介しています。シンプルでクリーンな Playbook を作成しましょう。

# 保守的な Playbook

Ansible は Red Hat 社により開発されているサーバプロビジョニング・ツールです。Linux を始めとして、Windows、Cisco 機器などに対しても設定変更を行うことができ、汎用性が高いことがメリットです。

一方、設計段階で Playbook(=Ansible 実行コード)の設計方針をしっかりと決めなければ、Playbook と処理の対応関係が次第に分かりづらくなり、保守に時間がかかるコードを量産してしまうことに繋がります。

業務で実際に「汚い」Playbook を見てきました。見ただけでは実際に何をする処理なのか分かりづらく、ミスの温床になります。

そういった Playbook を作らないためにどうしたら良いか。以下に記載しました。

## 概要

### トップダウン設計

### 冪等性

### 変数の設計

## Playbook

### Playbook の総本山 site.yml

### 役割単位で Playbook を設計する

### role に実際の処理を書く

### role はタグ付けし、局所的運用を可能にする

## Inventory の設計

### YAML 形式での Inventory 構成

### host_vars, group_vars

## role の書き方

### 車輪の再発明を防ぐ!Ansible-Galaxy

## リファクタリング

# 内部リンク

# 参考
